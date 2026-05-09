import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { connectToDatabase } from "./db.connection.js";
import typeDefs from "./graphql/schema.js";
import resolvers from "./graphql/resolvers/rootResolvers.js";
import { checkAuth } from "./auth.js";


let server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (err) => {
    return err.message;
  },
});

let { url } = await startStandaloneServer(server, {
  listen: { port: 3300 },
  context: async ({ req }) => {
   return await checkAuth(req)
  },
});

await connectToDatabase();
console.log("Connected to DB");

console.log(`🚀  Server ready at: ${url}`);
