// app/services/[id]/page.js

// Tell Next.js which service pages to pre-render
export async function generateStaticParams() {
  const services = [
    { id: 'web-development' },
    { id: 'app-development' },
    { id: 'ui-ux-design' },
    { id: 'digital-marketing' },
  ];

  return services.map((service) => ({
    id: service.id,
  }));
}

// Actual page component
export default function ServicePage({ params }) {
  const { id } = params;

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Service: {id.replace('-', ' ')}</h1>
      <p>
        This page contains details about our {id.replace('-', ' ')} service.
      </p>
    </main>
  );
}
