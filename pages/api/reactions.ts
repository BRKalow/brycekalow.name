import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../lib/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const postId = req.query.postId;

  switch (req.method) {
    case "POST": {
      const type = req.query.type as string;

      const doc = await db
        .selectFrom("reactions")
        .where("slug", "=", postId)
        .selectAll()
        .executeTakeFirst();

      await db
        .insertInto("reactions")
        .values(doc)
        .onDuplicateKeyUpdate({ [type]: Number.parseInt(doc[type]) + 1 })
        .execute();

      res.json({ ...doc, [type]: Number.parseInt(doc[type], 10) + 1 });

      break;
    }
    case "GET":
    default: {
      try {
        const record = await db
          .selectFrom("reactions")
          .where("slug", "=", postId)
          .selectAll()
          .executeTakeFirst();

        if (record) {
          res.json(record);
          return;
        }

        res.status(404).end();
      } catch (error) {
        res.status(404).end();
      }
    }
  }
};
