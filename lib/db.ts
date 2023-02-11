import { Kysely } from "kysely";
import { PlanetScaleDialect } from "kysely-planetscale";

export interface Reactions {
  slug: string;
  hearts: number;
  stars: number;
}

interface Database {
  reactions: Reactions;
}

export const db = new Kysely<Database>({
  dialect: new PlanetScaleDialect({ url: process.env.DATABASE_URL }),
});
