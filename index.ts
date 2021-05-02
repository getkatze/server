import 'reflect-metadata';
import express from 'express';
import morgan from 'morgan';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

import HelloWorldResolver from './resolvers/HelloWorldResolver';
import UserResolver from './resolvers/UserResolver';
import CampaignResolver from './resolvers/CampaignResolver';
import AnalysisResolver from './resolvers/AnalysisResolver';
import CryptoResolver from "./resolvers/CryptoResolver";

(async () => {
  const app = express();
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [CryptoResolver, CampaignResolver, HelloWorldResolver, UserResolver, AnalysisResolver],
      validate: true,
    }),
    context: ({ req, res }) => ({ req, res }),
    playground: true,
    introspection: true,
  });

  app.use(morgan('short'));
  app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  apolloServer.applyMiddleware({ app, cors: true });
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Listening on port ${port}/graphql`);
  });
})();
