import { queryCache } from "../../utils/dataFetch.js";
import { Hero, Item } from "../typedefs.js";

export function heroResolvers() {
	return {
		recommended_upgrades() {},
		async items(parent: Hero) {
			const itemClassNamesObj = parent.items;
			return {
				ability_climb_rope: await getCachedItemByClassName(
					itemClassNamesObj.ability_climb_rope
				),
				ability_innate1: await getCachedItemByClassName(itemClassNamesObj.ability_innate1),
				ability_innate2: await getCachedItemByClassName(itemClassNamesObj.ability_innate2),
				ability_innate3: await getCachedItemByClassName(itemClassNamesObj.ability_innate3),
				ability_jump: await getCachedItemByClassName(itemClassNamesObj.ability_jump),
				ability_mantle: await getCachedItemByClassName(itemClassNamesObj.ability_mantle),
				ability_slide: await getCachedItemByClassName(itemClassNamesObj.ability_slide),
				ability_zip_line: await getCachedItemByClassName(
					itemClassNamesObj.ability_zip_line
				),
				ability_zip_line_boost: await getCachedItemByClassName(
					itemClassNamesObj.ability_zip_line_boost
				),
				signature1: await getCachedItemByClassName(itemClassNamesObj.signature1),
				signature2: await getCachedItemByClassName(itemClassNamesObj.signature2),
				signature3: await getCachedItemByClassName(itemClassNamesObj.signature3),
				signature4: await getCachedItemByClassName(itemClassNamesObj.signature4),
				weapon_melee: await getCachedItemByClassName(itemClassNamesObj.weapon_melee),
				weapon_primary: await getCachedItemByClassName(itemClassNamesObj.weapon_primary),
				weapon_secondary: await getCachedItemByClassName(
					itemClassNamesObj.weapon_secondary
				),
			};
		},
	};
}

async function getCachedItemByClassName(className: string): Promise<Item | null> {
	return await queryCache("Item", "get", "className", className);
}
