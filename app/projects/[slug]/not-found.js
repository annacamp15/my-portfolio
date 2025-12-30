import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">Project Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          The project you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link 
          href="/#projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </Link>
      </div>
    </main>
  );
}
