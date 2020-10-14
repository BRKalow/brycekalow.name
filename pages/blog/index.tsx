import Link from 'next/link';
import { FormattedDate } from '../../components/formatted-date';
import { getPostList } from '../../utilities/posts';

export default function BlogIndex({ posts }) {
    return (
        <>
        <h1>Posts</h1>
        {posts.map(post => (
            <div key={post.title} className="post">
                <div className="published"><FormattedDate date={post.published} /></div>
                <Link href={`/blog/${post.slug}`}><a>{post.title}</a></Link>
            </div>
        ))}
        <style jsx>{`
            @keyframes gradient {
                0% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
                100% {
                    background-position: 0% 50%;
                }
            }

            .post {
                display: block;
                margin-bottom: 1em;
            }

            .published {

            }

            a {
                color: #31313f;
                font-weight: bold;
                font-size: 1.25em;
                text-decoration: none;
            }

            a:hover {
                background-color: #ed6f4d;
                background-size: 400% 100%;
                background-image: linear-gradient(90deg,#12c2e9,#c471ed,#f64f59);
                animation: gradient 3s ease infinite;
                -webkit-background-clip: text;
                color: transparent;
            }
        `}</style>
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