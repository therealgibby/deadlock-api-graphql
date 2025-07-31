import { itemCache } from "../../lib/cache.js";
import { queryCache, refreshCache } from "../../utils/dataFetch.js";
import { Hero, Item } from "../typedefs.js";

export function heroResolvers() {
	return {
		recommended_upgrades() {},
		async items(parent: Hero) {
			if (itemCache.length() < 1) await refreshCache("Item");
			const itemClassNamesObj = parent.items;
			return {
				ability_climb_rope: getCachedItemByClassName(itemClassNamesObj.ability_climb_rope),
				ability_innate1: getCachedItemByClassName(itemClassNamesObj.ability_innate1),
				ability_innate2: getCachedItemByClassName(itemClassNamesObj.ability_innate2),
				ability_innate3: getCachedItemByClassName(itemClassNamesObj.ability_innate3),
				ability_jump: getCachedItemByClassName(itemClassNamesObj.ability_jump),
				ability_mantle: getCachedItemByClassName(itemClassNamesObj.ability_mantle),
				ability_slide: getCachedItemByClassName(itemClassNamesObj.ability_slide),
				ability_zip_line: getCachedItemByClassName(itemClassNamesObj.ability_zip_line),
				ability_zip_line_boost: getCachedItemByClassName(
					itemClassNamesObj.ability_zip_line_boost
				),
				signature1: getCachedItemByClassName(itemClassNamesObj.signature1),
				signature2: getCachedItemByClassName(itemClassNamesObj.signature2),
				signature3: getCachedItemByClassName(itemClassNamesObj.signature3),
				signature4: getCachedItemByClassName(itemClassNamesObj.signature4),
				weapon_melee: getCachedItemByClassName(itemClassNamesObj.weapon_melee),
				weapon_primary: getCachedItemByClassName(itemClassNamesObj.weapon_primary),
				weapon_secondary: getCachedItemByClassName(itemClassNamesObj.weapon_secondary),
			};
		},
	};
}

function getCachedItemByClassName(className: string): Item | null {
	return queryCache("Item", "get", "className", className);
}
