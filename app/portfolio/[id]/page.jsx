// app/portfolio/[id]/page.js

// 1️⃣ Generate list of pages for static export
export async function generateStaticParams() {
  // Example portfolio item IDs
  const projects = [
    { id: 'web-design' },
    { id: 'branding' },
    { id: 'app-development' }
  ];

  return projects.map((project) => ({
    id: project.id,
  }));
}

// 2️⃣ Page component
export default function PortfolioPage({ params }) {
  const { id } = params;

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Portfolio Project: {id}</h1>
      <p>Details about the {id} project will go here.</p>
    </main>
  );
}
