import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../lib/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const postId = req.query.post;

  switch (req.method) {
    case "POST": {
      const type = req.query.type as string;

      const doc = await db
        .selectFrom("reactions")
        .where("slug", "=", postId as string)
        .selectAll()
        .executeTakeFirst();

      await db
        .insertInto("reactions")
        .values(doc!)
        .onDuplicateKeyUpdate({ [type]: Number.parseInt(doc?.[type]) + 1 })
        .execute();

      res.json({ ...doc, [type]: Number.parseInt(doc?.[type], 10) + 1 });

      break;
    }
    case "GET":
    default: {
      try {
        const record = await db
          .selectFrom("reactions")
          .where("slug", "=", postId as string)
          .selectAll()
          .executeTakeFirst();

        if (record) {
          res.json(record);
          return;
        }

        const newRecord = { slug: postId, hearts: 0, stars: 0 };

        return res.json(newRecord);
      } catch (error) {
        console.log(error);
        res.status(404).end();
      }
    }
  }
};
