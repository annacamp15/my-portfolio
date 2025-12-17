'use client';

import ThemeToggle from './ThemeToggle';

export default function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-foreground">
          Portfolio
          <div className="text-sm italic font-extralight"> still in works </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </button>
        </div>

        <ThemeToggle />
      </nav>
    </header>
  );
}
