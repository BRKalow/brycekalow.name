import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

interface PostWithMetadata {
  slug: string;
  title: string;
  published: string;
  description: string;
}

export async function getPosts(): Promise<fs.Dirent[]> {
  return (
    await fs.promises.readdir(path.join(process.cwd(), "content"), {
      withFileTypes: true,
    })
  ).filter((ent) => ent.isFile() && ent.name.endsWith(".mdx"));
}

export async function getPostList(): Promise<PostWithMetadata[]> {
  const posts = await getPosts();

  return await Promise.all(
    posts.map(async (post) => {
      const contents = await fs.promises.readFile(
        path.join(process.cwd(), "content", post.name),
        "utf-8"
      );
      return {
        slug: post.name.split(".")[0],
        ...grayMatter(contents).data,
      } as PostWithMetadata;
    })
  );
}
