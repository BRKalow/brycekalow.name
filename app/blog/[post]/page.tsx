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
import { cn } from "lib/cn";

const MDX_COMPONENTS = {
  Console: dynamic(() => import("../../../components/console")),
};

const mdxRemoteOptions: MDXRemoteProps["options"] = {
  mdxOptions: {
    rehypePlugins: [
      [
        // @ts-ignore
        rehypePrettyCode,
        {
          theme: { dark: "vitesse-black", light: "vitesse-light" },
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

  const { content, frontmatter } = await compileMDX<{
    title?: string;
    published?: string;
  }>({
    source: rawMDX,
    options: mdxRemoteOptions,
    components: MDX_COMPONENTS,
  });

  return (
    <>
      <Link
        href="/blog"
        className={cn(
          s["back-link"],
          "font-bold text-sm mb-6 inline-block",
          "text-black/50",
          "dark:text-white/50"
        )}
      >
        Back to posts
      </Link>
      <h1
        className={cn(
          "text-2xl mb-2 font-semibold tracking-tight text-black/90 dark:text-white/90"
        )}
      >
        {frontmatter?.title}
      </h1>
      <p className={cn("text-sm mb-4", "text-black/40", "dark:text-white/40")}>
        <FormattedDate date={frontmatter?.published} />
      </p>
      <section data-post>{content}</section>
      <Reactions post={params.post} />
      <section className={"mt-6"}>
        <Link
          href="/blog"
          className={cn(
            s["back-link"],
            "text-white/50 font-bold text-sm inline-block"
          )}
        >
          Back to posts
        </Link>
      </section>
    </>
  );
}
