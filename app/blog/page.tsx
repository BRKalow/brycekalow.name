import Link from "next/link";
import { FormattedDate } from "../../components/formatted-date";
import { getPostList } from "../../utilities/posts";
import { cn } from "lib/cn";

export default async function BlogIndex() {
  const posts = (await getPostList()).sort(
    (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime()
  );

  return (
    <>
      <h1
        className={cn(
          "text-2xl mb-6 font-semibold flex gap-4 flex-row tracking-tight"
        )}
      >
        <span className="text-2xl text-black/40 dark:text-white/40 font-normal">
          //
        </span>
        Posts{" "}
      </h1>
      {posts.map((post) => (
        <div key={post.title} className={cn("block mb-4")}>
          <div className={cn("text-sm", "text-black/40", "dark:text-white/40")}>
            <FormattedDate date={post.published} />
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className={cn(
              "text-xl font-semibold bg-clip-text tracking-tight hover:text-transparent hover:bg-text-gradient hover:animate-gradient bg-[size:400%_100%]"
            )}
          >
            {post.title}
          </Link>
        </div>
      ))}
    </>
  );
}

export const metadata = {
  title: "Posts",
};
