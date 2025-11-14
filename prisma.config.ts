import { defineConfig, env } from "prisma/config";
import dotenv from "dotenv";

// Load the .env file explicitly
dotenv.config();

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"), // This will pull from the environment variable
  },
});
