import Link from "next/link";
import { FormattedDate } from "../../components/formatted-date";
import { getPostList } from "../../utilities/posts";
import s from "./blog.module.css";

export default async function BlogIndex() {
  const posts = (await getPostList()).sort(
    (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime()
  );

  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.title} className={s.post}>
          <div className={s.published}>
            <FormattedDate date={post.published} />
          </div>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </div>
      ))}
    </>
  );
}

export const metadata = {
  title: "Posts",
};
