import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm Nadine, a mathematician with a passion for data science and machine learning. I love exploring the intersection of mathematics and technology, and I'm excited to share my journey with you.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
