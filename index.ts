import 'reflect-metadata';
import express from 'express';
import morgan from 'morgan';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

import HelloWorldResolver from './resolvers/HelloWorldResolver';
import UserResolver from './resolvers/UserResolver';
import CampaignResolver from "./resolvers/CampaignResolver"

(async () => {
<<<<<<< HEAD
	const app = express();
	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [HelloWorldResolver, UserResolver, CampaignResolver],
			validate: true,
		}),
		context: ({ req, res }) => ({ req, res }),
		playground: true,
		introspection: true,
	});
=======
  const app = express();
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloWorldResolver, UserResolver],
      validate: true,
    }),
    context: ({ req, res }) => ({ req, res }),
    playground: true,
    introspection: true,
  });
>>>>>>> 659b2b1e564d0d7f19b4d08e2a3d206cae328538

  app.use(morgan('short'));

  apolloServer.applyMiddleware({ app, cors: false });
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Listening on port ${port}/graphql`);
  });
})();
