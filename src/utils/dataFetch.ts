import { cacheRegistry, heroCache, itemCache, KeyType } from "../lib/cache.js";
import { Hero, Item } from "../schema/typedefs.js";

type DataTypeMap = {
	Hero: Hero;
	Item: Item;
};
type QueryType = "getAll" | "get";
type AllowedDataTypes = Hero | Hero[] | Item | Item[];

const HERO_URL = process.env.HERO_URL;
const ITEM_URL = process.env.ITEM_URL;

export async function fetchData<T extends AllowedDataTypes>(url: string): Promise<T | null> {
	const data = await fetch(url)
		.then((res) => {
			if (!res.ok) {
				return null;
			}
			return res.json();
		})
		.catch((err) => {
			console.error("Fetch error:", err);
			return null;
		});
	if (!data) {
		return null;
	}
	return data;
}

export async function queryCache<T extends keyof DataTypeMap>(
	dataType: T,
	queryType: "getAll"
): Promise<DataTypeMap[T][] | null>;

export async function queryCache<T extends keyof DataTypeMap>(
	dataType: T,
	queryType: "get",
	keyType: KeyType,
	key: string
): Promise<DataTypeMap[T] | null>;

export async function queryCache<T extends keyof DataTypeMap>(
	dataType: T,
	queryType: QueryType,
	keyType?: KeyType,
	key?: string
) {
	const cache = cacheRegistry[dataType];
	if (!cache) return null;
	if (cache.length() < 1) await refreshCache(dataType);
	if (queryType === "getAll") return cache.getAll();
	if (!keyType || !key) return null;
	let data = cache.get(keyType, key);
	return data;
}

// refactor to remove conditionals
async function refreshCache(dataType: keyof DataTypeMap): Promise<void> {
	if (!HERO_URL || !ITEM_URL) {
		console.error("No URLs detected. Cache did not refresh.");
		return;
	}
	if (dataType === "Hero") {
		const heroData = await fetchData<Hero[]>(HERO_URL);
		if (!heroData) {
			console.error(`Failed to fetch Heroes data with URL ${HERO_URL}`);
			return;
		}
		for (const hero of heroData) {
			heroCache.set(hero, "id", `${hero.id}`);
			if (hero.class_name) heroCache.set(hero, "className", hero.class_name);
		}
	}
	if (dataType === "Item") {
		const itemData = await fetchData<Item[]>(ITEM_URL);
		if (!itemData) {
			console.error(`Failed to fetch Heroes data with URL ${ITEM_URL}`);
			return;
		}
		for (const item of itemData) {
			itemCache.set(item, "id", `${item.id}`);
			if (item.class_name) itemCache.set(item, "className", item.class_name);
		}
	}
}
