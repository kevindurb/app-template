import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { PingResolver } from './resolvers/PingResolver'

export async function main() {
  const schema = await buildSchema({
    resolvers: [
      PingResolver
    ]
  })

  const server = new ApolloServer({
    schema,
  })

  const { url } = await server.listen(3000);

  console.log(url)
}

main();
