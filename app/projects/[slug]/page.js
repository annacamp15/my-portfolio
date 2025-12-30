import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { allProjects, getProjectBySlug } from '@/app/data/projects';
import ScreenshotGallery from '@/app/components/ScreenshotGallery';

// Generate static params for all projects
export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project page
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Anna Lea Dagos`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto max-w-6xl px-6 py-4">
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Project Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                project.category === 'major' 
                  ? 'bg-primary/20 text-primary' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                {project.category === 'major' ? 'Featured Project' : 'Light Project'}
              </span>
              <span className="text-sm text-muted-foreground">{project.date}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {project.title}
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-card border border-border text-foreground text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
            {project.githubUrl && project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Code
              </a>
            )}
          </div>

          {/* Project Image - Zoom on Hover */}
          <div className="relative w-full h-80 md:h-[500px] rounded-2xl overflow-hidden bg-card border border-border mb-12 group">
            {project.image && !project.image.includes('placeholder') ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-150"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <svg className="w-24 h-24 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" strokeWidth="1.5"/>
                  <circle cx="9" cy="9" r="2" strokeWidth="1.5"/>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" strokeWidth="1.5"/>
                </svg>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-6">About This Project</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground whitespace-pre-line">
                {project.fullDescription}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Project Info Card */}
              <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-foreground mb-6">Project Info</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Role</p>
                    <p className="text-foreground font-medium">{project.role}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Year</p>
                    <p className="text-foreground font-medium">{project.date}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Category</p>
                    <p className="text-foreground font-medium capitalize">{project.category} Project</p>
                  </div>

                  {project.features && project.features.length > 0 && (
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Key Features</p>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-foreground">
                            <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot Gallery */}
      <ScreenshotGallery screenshots={project.screenshots} projectTitle={project.title} />

      {/* Back to Projects CTA */}
      <section className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <Link 
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            View All Projects
          </Link>
        </div>
      </section>
    </main>
  );
}
