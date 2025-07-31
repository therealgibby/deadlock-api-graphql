import { Item } from "../typedefs.js";

export function itemResolvers() {
	return {
		__resolveType(item: Item) {
			if (item.type === "ability") {
				return "AbilityItem";
			}
			if (item.type === "weapon") {
				return "WeaponItem";
			}
			if (item.type === "upgrade") {
				return "UpgradeItem";
			}
			return null;
		},
		// hero() {},
		// heroes() {},
	};
}
