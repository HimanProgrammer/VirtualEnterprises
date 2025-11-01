// app/blog/[id]/page.js

export async function generateStaticParams() {
  const posts = [
    { id: '1' },
    { id: '2' },
    { id: '3' }
  ];

  return posts.map((post) => ({
    id: post.id,
  }));
}

export default function BlogPost({ params }) {
  const { id } = params;

  return (
    <div>
      <h1>Blog Post #{id}</h1>
      <p>This is the content for blog post {id}.</p>
    </div>
  );
}
