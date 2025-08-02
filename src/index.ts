import "dotenv/config";
import { createSchema, createYoga } from "graphql-yoga";
import { createServer } from "http";
import typeDefs from "./schema/typedefs.js";
import { resolversBuilder } from "./schema/resolvers/resolvers.js";

const PORT = process.env.PORT || 4000;

const schema = createSchema({ typeDefs: typeDefs, resolvers: resolversBuilder() });
const yoga = createYoga({ schema });
const server = createServer(yoga);
server.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
