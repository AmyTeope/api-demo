import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import http from "http";
import config from "../../config";
import { getGraphQLContext } from "./context";
import { schema } from "./schema";

export async function startGraphQLServer(
  app: express.Application,
  httpServer: http.Server
): Promise<void> {

  const server = new ApolloServer({
    schema,
    context: getGraphQLContext,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground(),
      ApolloServerPluginDrainHttpServer({ httpServer }),
    ],
    csrfPrevention: config.graphql.csrfPrevention,
    introspection: config.graphql.introspectionEnabled,
  });

  await server.start();

  server.applyMiddleware({ app });
}
