import { Car, Make, Model, PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  let global: { prisma?: PrismaClient } = {};

  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }

  prisma = global.prisma;
}

export default prisma;

export type CarWithDeps = Car & { model: Model & { make: Make } };

export type MakeWithModels = Make & { models: Model[] };
