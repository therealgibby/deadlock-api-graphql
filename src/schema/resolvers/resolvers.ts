import { heroResolvers } from "./hero.js";
import { itemResolvers } from "./item.js";
import { queries } from "./queries.js";

export function resolversBuilder() {
	return {
		Query: queries(),
		Hero: heroResolvers(),
		Item: itemResolvers(),
	};
}
