import Link from "next/link"

export default function NotFound() {
  return (
    <>
      <h1>The post is not found.</h1>
      <p>
        <Link href={'/blog'}>Back to Blog</Link>
      </p>
    </>
  )
}