export default function Projects() {
  // Major Projects 
  const major_project = [
    {
      title: "NU Queuest",
      description: "A queueing system designed to streamline and enhance administrative transactions within NU Laguna.",
      image: "/api/placeholder/400/250",
      tags: ["PHP", "CSS", "JavaScript", "HTML"],
      details: "#",
      githubUrl: false
    },
    {
      title: "KayaGov",
      description: "Collaborative task management application with real-time updates and team features.",
      image: "/api/placeholder/400/250",
      tags: ["Laravel", "Firebase", "Tailwind CSS", "Socket.io"],
      details: "#",
      githubUrl: "#"
    },
    {
      title: "Retail Management System",
      description: "A comprehensive solution for managing retail operations, including inventory, sales, and customer management.",
      image: "/api/placeholder/400/250",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      details: "#",
      githubUrl: "#"
    },
    {
      title: "Facial Image Verification Model",
      description: "A deep learning model for verifying if the image is Real, AI-generated, or Manipulated.",
      image: "/api/placeholder/400/250",
      tags: ["Python", "GoogleColab", "OpenCV"],
      details: "#",
      githubUrl: "#"
    }
  ];

  //Small Projects Section
  const small_projects = [
    {
      title: "Piano Chord Catalog",
      description: "...",
      image: "/api/placeholder/400/250",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      details: "#",
      githubUrl: "#"
    },
    {
      title: "Book Collection Web App",
      description: "A web application for managing and showcasing a personal book collection.",
      image: "/api/placeholder/400/250",
      tags: ["Laravel", "HTML/CSS"],
      details: "#",
      githubUrl: "#"
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 flex flex-col">
      {/* Major Projects Section */}
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">
          Featured Projects
        </h2>
      {/* <p className="text-lg text-center text-foreground mb-8 italic">
        Here are some of my projects that showcase my skills and expertise.
      </p> */}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {major_project.map((major_project, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative h-48 bg-muted overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-4xl opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image-icon lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {/* {See Details} */}
                  <div className="flex space-x-4" >
                    <a
                      href={major_project.details}
                      className="p-2 bg-white rounded-full text-black hover:bg-gray-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="See Details"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                    {major_project.githubUrl && (
                      <a
                        href={major_project.githubUrl}
                        className="p-2 bg-white rounded-full text-black hover:bg-gray-200 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {major_project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {major_project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {major_project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-muted-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Small Projects Section */}
      <div className="container mx-auto max-w-7xl mt-20">
        <h2 className="text-3xl font-bold text-center text-foreground mb-16">
          Light Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {small_projects.map((small_project, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative h-48 bg-muted overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-4xl opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image-icon lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {/* {See Details} */}
                  <div className="flex space-x-4" >
                    <a
                      href={small_project.details}
                      className="p-2 bg-white rounded-full text-black hover:bg-gray-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="See Details"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                    {small_project.githubUrl && (
                      <a
                        href={small_project.githubUrl}
                        className="p-2 bg-white rounded-full text-black hover:bg-gray-200 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {small_project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {small_project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {small_project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-muted-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    
  );
}
  


