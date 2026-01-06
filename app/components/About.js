'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
              <div className="w-64 h-64 bg-secondary rounded-full flex items-baseline justify-center overflow-hidden relative">
                {!imageError ? (
                  <Image
                    src="/assets/profile_image.jpg"
                    alt="Profile"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover rounded-full"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center">
                    <span className="text-6xl"></span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed" >
             I&apos;m a developer with a passion for building things that matter — 
             <span className='font-semibold italic'> clean interfaces and smart systems.</span>
            Projects that can improve efficiency and public services
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
             In my free time, I either switch between designing smooth UI flows, building full stack prototypes, and training AI models that (sometimes) work. I thrive on projects that let me bring together code, data, and imagination.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">Experience</h3>
                <p className="text-muted-foreground">3+ Years</p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">Projects</h3>
                <p className="text-muted-foreground">6 Ongoing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
