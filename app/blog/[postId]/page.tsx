import { getSortedPostsData, getPostData } from '@/lib/posts'
import getFormattedDate from '@/lib/getFormattedDate'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export function generateStaticParams() {
    const posts: BlogPost[] = getSortedPostsData()

    return posts.map((post) => ({
        postId: post.id
    }))
}

export function generateMetadata({params}: {params: {postId: string}}) {
    const { postId } = params
    const posts: BlogPost[] = getSortedPostsData()

    const post = posts.find( post => post.id === postId)

    if(!post) return {
        title: 'Post Not Found',
    }

    return {
        title: post.title,
        description: post.title,
    }
}

export default async function Post({params}: { params: {postId: string}}) {
    const { postId } = params
    const posts: BlogPost[] = getSortedPostsData()

    if(!posts.find( post => post.id === postId)) {
        return notFound()
    }

    const { title, date, contentHtml } = await getPostData(postId)

    const publishDate = getFormattedDate(date)

    return (
        <>
            <h1>{title}</h1>
            <p>{publishDate}</p>
            <article>
                <section dangerouslySetInnerHTML={{__html: contentHtml}}/>
            </article>
            <p>
                <Link href={'/blog'}>Back to Blog</Link>
            </p>
        </>
    )
}
