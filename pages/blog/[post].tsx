import path from 'path'
import fs from 'fs'
import { GetStaticProps } from 'next'
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import renderToString from 'next-mdx-remote/render-to-string';
import useSWR from 'swr';
import { getPosts } from '../../utilities/posts';
import { FormattedDate } from '../../components/formatted-date';
import { HeartsButton } from '../../components/hearts-button';
import { StarsButton } from '../../components/stars-button';
import hydrate from 'next-mdx-remote/hydrate'
import matter from 'gray-matter'
import mdxPrism from 'mdx-prism';

const fetcher = (url: RequestInfo, options: RequestInit) => fetch(url, options).then(res => res.json());

export default function Post({ markup, meta }) {
    const router = useRouter();
    const { data } = useSWR(`/api/reactions?postId=${router.query.post}`, fetcher);

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    const content = hydrate(markup, {});

    return (
        <div>
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

              .back-link {
                  text-decoration: none;
                  font-weight: bold;
              }

              .back-link:visited {
                  color: inherit;
              }

              .back-link:hover {
                background-color: #ed6f4d;
                background-size: 400% 100%;
                background-image: linear-gradient(90deg,#12c2e9,#c471ed,#f64f59);
                animation: gradient 3s ease infinite;
                -webkit-background-clip: text;
                color: transparent;
                text-decoration: underline;
              }

              .back-link::before {
                  content: "← ";
                  margin-right: .25rem;
              }

              .article-footer {
                  margin-top: 3rem;
              }
            `}</style>
            <Head>
                <title>{meta.title} - Bryce Kalow</title>
            </Head>
            <h1>{meta.title}</h1>
            <p><FormattedDate date={meta.published} /></p>
            {content}
            {data && <HeartsButton count={data?.hearts} />}
            {data && <StarsButton count={data?.stars} />}
            <section className="article-footer">
                <Link href="/blog"><a className="back-link">Back to posts</a></Link>
            </section>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const postId = ctx.params.post as string;

    const mdxSource = await fs.promises.readFile(path.join(process.cwd(), 'content', `${postId}.mdx`), 'utf-8');

    const { content, data } = matter(mdxSource);

    const markup = await renderToString(content, { scope: data, mdxOptions: { rehypePlugins: [mdxPrism] } });

    return {
        props: {
            markup,
            meta: data
        }
    }
}

export async function getStaticPaths() {
    const paths = (await getPosts())
        .map(ent => ({ params: { post: ent.name.split('.')[0] } }))

    return {
        paths,
        fallback: true
    }
}