import { getSortedPostsData } from '@/lib/posts'
import { notFound } from 'next/navigation'

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

export default function Post({params}: { params: {postId: string}}) {
    const { postId } = params
    const posts: BlogPost[] = getSortedPostsData()

    if(!posts.find( post => post.id === postId)) {
        return notFound()
    }
    return (
        <div>{postId}</div>
    )
}
