import "dotenv/config";
import { createYoga } from "graphql-yoga";
import { createServer } from "http";
import { schema } from "./schema/schema.js";

const PORT = process.env.PORT || 4000;

const yoga = createYoga({ schema });
const server = createServer(yoga);
server.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
