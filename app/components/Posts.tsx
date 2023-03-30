import { getSortedPostsData } from "@/lib/posts"
import getFormattedDate from "@/lib/getFormattedDate"

export default function Posts() {
    const posts: BlogPost[] = getSortedPostsData()
    return (
        <section>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <a href={`/blog/${post.id}`}>{post.title}</a>
                        <p>{getFormattedDate(post.date)}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
