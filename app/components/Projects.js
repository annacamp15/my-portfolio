import Link from 'next/link';
import Image from 'next/image';
import { majorProjects, smallProjects } from '@/app/data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 flex flex-col">
      {/* Major Projects Section */}
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A collection of projects that showcase my skills and experience in building real-world applications.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {majorProjects.map((project, index) => (
            <Link
              key={index}
              href={`/projects/${project.slug}`}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300 group block"
            >
              <div className="relative h-48 bg-muted overflow-hidden">
                {project.image && !project.image.includes('placeholder') ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <svg 
                      className="w-12 h-12 text-primary/30" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" strokeWidth="1.5"/>
                      <circle cx="9" cy="9" r="2" strokeWidth="1.5"/>
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" strokeWidth="1.5"/>
                    </svg>
                  </div>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium flex items-center gap-2">
                    View Project
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-muted-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Small Projects Section */}
      <div className="container mx-auto max-w-7xl mt-20">
        <h2 className="text-3xl font-bold text-center text-foreground mb-4">
          Light Projects
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Smaller projects and experiments that helped me learn new technologies.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {smallProjects.map((project, index) => (
            <Link
              key={index}
              href={`/projects/${project.slug}`}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300 group block"
            >
              <div className="relative h-48 bg-muted overflow-hidden">
                {project.image && !project.image.includes('placeholder') ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <svg 
                      className="w-12 h-12 text-primary/30" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" strokeWidth="1.5"/>
                      <circle cx="9" cy="9" r="2" strokeWidth="1.5"/>
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" strokeWidth="1.5"/>
                    </svg>
                  </div>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium flex items-center gap-2">
                    View Project
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-muted-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


