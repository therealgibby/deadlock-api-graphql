import { createSchema } from "graphql-yoga";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { resolversBuilder } from "./resolvers/resolvers.js";
import { queryTypeDefs } from "./types/queries.js";
import { itemTypeDefs } from "./types/item.js";
import { weaponTypeDefs } from "./types/weapon.js";
import { abilityTypeDefs } from "./types/ability.js";
import { upgradeTypeDefs } from "./types/upgrade.js";
import { heroTypeDefs } from "./types/hero.js";

const types = [
	queryTypeDefs,
	itemTypeDefs,
	weaponTypeDefs,
	abilityTypeDefs,
	upgradeTypeDefs,
	heroTypeDefs,
];
export const schema = createSchema({
	typeDefs: mergeTypeDefs(types),
	resolvers: resolversBuilder(),
});
