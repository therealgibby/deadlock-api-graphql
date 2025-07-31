import { GraphQLError } from "graphql";
import { heroCache, itemCache, KeyType } from "../../lib/cache.js";
import { queryCache, refreshCache } from "../../utils/dataFetch.js";

export function queries() {
	return {
		async heroes(_, { limit, offset }) {
			let heroes = queryCache("Hero", "getAll");
			if (!heroes || heroes.length < 1) {
				await refreshCache("Hero");
				heroes = queryCache("Hero", "getAll");
				if (!heroes) return [];
			}
			if (typeof limit === "number" && typeof offset === "number") {
				return heroes.slice(offset, offset + limit);
			} else if (typeof offset === "undefined") {
				return heroes.slice(0, limit);
			} else if (typeof limit === "undefined") {
				return heroes.slice(offset);
			}
			return heroes;
		},
		async hero(_, { id, name, class_name }) {
			let key: string | null = null;
			let keyType: KeyType | null = null;
			if (typeof id === "number" || typeof id === "string") {
				key = `${id}`;
				keyType = "id";
			}
			if (typeof name === "string") {
				key = `${name}`;
				keyType = "name";
			}
			if (typeof class_name === "string") {
				key = `${class_name}`;
				keyType = "className";
			}
			if (!key || !keyType) {
				throw new GraphQLError("You must specify the id, name, or class_name arguments.");
			}
			let hero = queryCache("Hero", "get", keyType, key);
			if (!hero && heroCache.length() < 1) {
				await refreshCache("Hero");
				hero = queryCache("Hero", "get", keyType, key);
			}
			return hero;
		},
		async items(_, { itemType, limit, offset }) {
			let items = queryCache("Item", "getAll");
			if (!items || items.length < 1) {
				await refreshCache("Item");
				items = queryCache("Item", "getAll");
				if (!items) return [];
			}
			if (typeof limit === "number" || typeof offset === "number") {
				items = items.slice(
					offset,
					offset !== undefined && limit !== undefined ? offset + limit : limit
				);
			}
			return items.filter((item) => item.type === itemType);
		},
		async item(_, { id, name, class_name }) {
			let key: string | null = null;
			let keyType: KeyType | null = null;
			if (typeof id === "number" || typeof id === "string") {
				keyType = "id";
				key = `${id}`;
			}
			if (typeof name === "string") {
				keyType = "name";
				key = `${name}`;
			}
			if (typeof class_name === "string") {
				keyType = "className";
				key = `${class_name}`;
			}
			if (!key || !keyType) {
				throw new GraphQLError("You must specify the id, name, or class_name arguments.");
			}
			let item = queryCache("Item", "get", keyType, key);
			if (!item && itemCache.length() < 1) {
				await refreshCache("Item");
				item = queryCache("Item", "get", keyType, key);
			}
			return item;
		},
	};
}
