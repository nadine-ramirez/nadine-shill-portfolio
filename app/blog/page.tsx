import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'The Journey of a Mathemtician (ML/Data Science).',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">The Blog</h1>
      <BlogPosts />
    </section>
  )
}
