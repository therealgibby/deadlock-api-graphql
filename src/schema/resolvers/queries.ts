import { GraphQLError } from "graphql";
import { KeyType } from "../../lib/cache.js";
import { queryCache } from "../../utils/dataFetch.js";

export function queries() {
	return {
		async heroes(_, { limit, offset }) {
			let heroes = await queryCache("Hero", "getAll");
			if (!heroes) return [];
			if (typeof limit === "number" || typeof offset === "number") {
				heroes = heroes.slice(
					offset,
					offset !== undefined && limit !== undefined ? offset + limit : limit
				);
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
			let hero = await queryCache("Hero", "get", keyType, key);
			return hero;
		},
		async items(_, { itemType, limit, offset }) {
			let items = await queryCache("Item", "getAll");
			if (!items) return [];
			if (typeof itemType === "string") {
				items = items.filter((item) => item.type === itemType);
			}
			if (typeof limit === "number" || typeof offset === "number") {
				items = items.slice(
					offset,
					offset !== undefined && limit !== undefined ? offset + limit : limit
				);
			}
			return items;
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
			let item = await queryCache("Item", "get", keyType, key);
			return item;
		},
	};
}
