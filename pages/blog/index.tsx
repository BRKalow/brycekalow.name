import Link from 'next/link';
import Head from 'next/head';
import { FormattedDate } from '../../components/formatted-date';
import { PageWithHeading } from '../../components/page-with-heading';
import { getPostList } from '../../utilities/posts';

export default function BlogIndex({ posts }) {
    return (
        <>
        <Head>
            <title>Posts - Bryce Kalow</title>
        </Head>
        <PageWithHeading title="Blog" subtitle="Infrequent posts about software and how I approach development.">
            {posts.map(post => (
                <div key={post.title} className="post">
                    <Link href={`/blog/${post.slug}`}><a>{post.title}</a></Link>
                    <div className="spacer" aria-hidden></div>
                    <div className="published"><FormattedDate date={post.published} /></div>
                </div>
            ))}
        </PageWithHeading>
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
                display: grid;
                align-items: center;
                grid-template-columns: auto 1fr auto;
                grid-column-gap: 1rem;
                margin-bottom: 2rem;
            }
            
            .spacer {
                height: 2px;
                background-color: var(--font-color);
                opacity: 0.05;
                width: 100%;
                margin-top: 0.25rem;
            }

            .published {
                color: var(--secondary-font-color);
                text-align: right;
            }

            a {
                color: var(--font-color);
                font-weight: bold;
                font-size: 1.5em;
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

            @media (max-width: 1024px) {
                .post {
                    grid-template-columns: none;
                    grid-template-rows: 1fr auto;
                }

                .published {
                    text-align: left;
                }

                .spacer {
                    display: none;
                }
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
