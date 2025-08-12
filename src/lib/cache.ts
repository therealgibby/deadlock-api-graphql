import NodeCache from "node-cache";
import { Hero, Item } from "../schema/typedefs.js";

class SearchableCache<T> {
	private cacheById: NodeCache;
	private cacheByClassName: NodeCache;

	constructor(ttlSeconds: number = 1800) {
		this.cacheById = new NodeCache({ stdTTL: ttlSeconds, checkperiod: ttlSeconds / 2 });
		this.cacheByClassName = new NodeCache({ stdTTL: ttlSeconds, checkperiod: ttlSeconds / 2 });
	}

	public set(data: T, keyType: KeyType, key: string): void {
		if (keyType === "id") {
			this.cacheById.set(key, data);
		}
		if (keyType === "className") {
			this.cacheByClassName.set(key, data);
		}
	}

	public get(keyType: KeyType, key: string): T | undefined {
		if (keyType === "id") {
			return this.cacheById.get(key);
		}
		if (keyType === "className") {
			return this.cacheByClassName.get(key);
		}
		return undefined;
	}

	public getAll(): T[] {
		const keys = this.cacheById.keys();
		const all: T[] = [];
		for (const key of keys) {
			const value = this.get("id", key);
			if (value) {
				all.push(value);
			}
		}
		return all;
	}

	public length(): number {
		const stats = this.cacheById.getStats();
		return stats.keys;
	}
}

export type KeyType = "id" | "className";

export const heroCache = new SearchableCache<Hero>();
export const itemCache = new SearchableCache<Item>();
export const cacheRegistry = {
	Hero: heroCache,
	Item: itemCache,
};
