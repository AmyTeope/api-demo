import { PrismaClient } from "@prisma/client";
import express from "express";
import { Authenticable } from "./auth";

export type GraphQLContext<T extends Authenticable> = {
  req: express.Request;
  res: express.Response;
  prisma: PrismaClient;
  user?: T | null;
};
