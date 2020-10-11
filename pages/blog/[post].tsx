import path from 'path'
import fs from 'fs'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router';
import renderToString from 'next-mdx-remote/render-to-string'
import { getPosts } from '../../utilities/posts';
import hydrate from 'next-mdx-remote/hydrate'
import matter from 'gray-matter'
import mdxPrism from 'mdx-prism';

export default function Post({ markup, meta }) {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    const content = hydrate(markup, {});

    return (
        <div>
            <h1>{meta.title}</h1>
            <span>{meta.published}</span>
            {content}
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const postId = ctx.params.post as string;

    const mdxSource = await fs.promises.readFile(path.join(process.cwd(), 'content', `${postId}.mdx`), 'utf-8');

    const { content, data } = matter(mdxSource);

    const markup = await renderToString(content, { scope: data, mdxOptions: { rehypePlugins: [mdxPrism]} });

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