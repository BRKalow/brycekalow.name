import Link from 'next/link';
import { getPostList } from '../../utilities/posts';

export default function BlogIndex({ posts }) {
    return (
        <>
        <h1>Posts</h1>
        {posts.map(post => (
            <div key={post.title}>
                <Link href={`/blog/${post.slug}`}><a>{post.title}</a></Link> ({post.published})
            </div>
        ))}
        </>
    )
}

export async function getStaticProps() {
    const posts = (await getPostList()).sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime());

    return {
        props: {
            posts
        }
    }
}