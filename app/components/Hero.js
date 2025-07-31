'use client';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Hi, I&apos;m Anna Lea Dagos
          </h1>
          
          <p className="text-xl md:text-xl text-muted-foreground mb-8 leading-relaxed">
           Computer Science Undergraduate | Full Stack Web Developer | AI and Data Science Trainee
          </p>
          
          <p className=" text-muted-foreground mb-12 max-w-2xl mx-auto">
            Currently expanding my skills in data analysis, machine learning, and backend architecture to build smarter, more impactful solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-accent transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
