import fs from "fs";
import path from "path";
import dynamic from "next/dynamic";
import { compileMDX, MDXRemoteProps } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { getPosts, readPostFromFile } from "../../../utilities/posts";
import s from "./post.module.css";
import Link from "next/link";
import { FormattedDate } from "../../../components/formatted-date";
import { Metadata } from "next";
import { Reactions } from "./reactions";

const MDX_COMPONENTS = {
  Console: dynamic(() => import("../../../components/console")),
};

const mdxRemoteOptions: MDXRemoteProps["options"] = {
  mdxOptions: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: { dark: "github-dark", light: "github-light" },
          keepBackground: false,
          // Callback hooks to add custom logic to nodes when visiting them.
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and
            // allow empty lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
        },
      ],
    ],
  },
  parseFrontmatter: true,
};

export async function generateStaticParams() {
  return (await getPosts()).map((ent) => ({
    post: ent.name.split(".")[0],
  }));
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await readPostFromFile(`${params.post}.mdx`);

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function Post({ params }) {
  // content
  const rawMDX = await fs.promises.readFile(
    path.join(process.cwd(), "content", `${params.post}.mdx`),
    "utf-8"
  );

  // @ts-expect-error -- the type is wrong here for compileMDX
  const { content, frontmatter } = await compileMDX({
    source: rawMDX,
    options: mdxRemoteOptions,
    components: MDX_COMPONENTS,
  });

  return (
    <>
      <h1>{frontmatter?.title}</h1>
      <p>
        <FormattedDate date={frontmatter?.published} />
      </p>
      {content}
      <Reactions post={params.post} />
      <section className={s["article-footer"]}>
        <Link href="/blog" className={s["back-link"]}>
          Back to posts
        </Link>
      </section>
    </>
  );
}
