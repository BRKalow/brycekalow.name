import { Kysely } from "kysely";
import { PlanetScaleDialect } from "kysely-planetscale";

interface ReactionsTable {
  slug: string;
  hearts: number;
  stars: number;
}

interface Database {
  reactions: ReactionsTable;
}

export const db = new Kysely<Database>({
  dialect: new PlanetScaleDialect({ url: process.env.DATABASE_URL }),
});
