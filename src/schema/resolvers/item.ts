import { queryCache } from "../../utils/dataFetch.js";
import { Hero } from "../types/hero.js";
import { Item } from "../types/item.js";

export function itemResolvers() {
	return {
		__resolveType(parent: Item) {
			if (parent.type === "ability") {
				return "AbilityItem";
			}
			if (parent.type === "weapon") {
				return "WeaponItem";
			}
			if (parent.type === "upgrade") {
				return "UpgradeItem";
			}
			return null;
		},
	};
}

const sharedItemResolvers = {
	async hero(parent: Item) {
		if (!parent.hero) return null;
		const heroId = `${parent.hero}`;
		let hero = await queryCache("Hero", "get", "id", heroId);
		return hero;
	},
	async heroes(parent: Item) {
		if (!parent.heroes || parent.heroes.length < 1) return [];
		const heroes: Hero[] = [];
		for (const heroId of parent.heroes) {
			const cachedHero = await queryCache("Hero", "get", "id", `${heroId}`);
			if (cachedHero) heroes.push(cachedHero);
		}
		return heroes;
	},
};

export function abilityItemResolvers() {
	return {
		...sharedItemResolvers,
	};
}

export function weaponItemResolvers() {
	return {
		...sharedItemResolvers,
	};
}

export function upgradeItemResolvers() {
	return {
		...sharedItemResolvers,
	};
}
