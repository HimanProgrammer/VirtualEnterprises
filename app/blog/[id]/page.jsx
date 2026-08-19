// app/blog/[id]/page.js
import blogData from '@/components/data/blog-data';
import BlogDetailsPage from '@/components/pages/blogs/blog-details/blog-details';

export async function generateStaticParams() {
  return blogData.map((post) => ({
    id: post.id,
  }));
}

export const metadata = {
  title: 'Blog Details - Virtual Enterprises',
  description: 'Read our latest blog post about technology and industrial solutions',
};

export default function BlogPost({ params }) {
  const { id } = params;
  const post = blogData.find(p => p.id === id);

  if (!post) {
    return (
      <div className="container py-5" style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <h1>404 - Blog Post Not Found</h1>
        <p>Sorry, the blog post you are looking for does not exist.</p>
      </div>
    );
  }

  return <BlogDetailsPage singleData={post} />;
}
