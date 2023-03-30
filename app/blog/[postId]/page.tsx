import { notFound } from 'next/navigation'

export default function Post({params}: { params: {postId: string}}) {
    const { postId } = params
    return (
        <div>{postId}</div>
    )
}
