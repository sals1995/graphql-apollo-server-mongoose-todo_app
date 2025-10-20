import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { connectToDatabase } from './db.connection.js';
import resolvers from './resolvers/index.js';
import typeDefs from './schema.js';
import { checkAuth } from './auth.js';

await connectToDatabase()
console.log("connected to DB");
//

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError:(err)=>{
    return err.message
  }
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context:({req})=>{
    // console.log('req: ', req);
     let user= checkAuth(req)
    return {user}
    
  }
});
console.log(`🚀  Server ready at: ${url}`);