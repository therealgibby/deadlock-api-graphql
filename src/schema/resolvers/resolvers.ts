import { heroResolvers } from "./hero.js";
import {
	abilityItemResolvers,
	itemResolvers,
	upgradeItemResolvers,
	weaponItemResolvers,
} from "./item.js";
import { queries } from "./queries.js";

export function resolversBuilder() {
	return {
		Query: queries(),
		Hero: heroResolvers(),
		Item: itemResolvers(),
		WeaponItem: weaponItemResolvers(),
		AbilityItem: abilityItemResolvers(),
		UpgradeItem: upgradeItemResolvers(),
	};
}
