'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "Google Project Management",
      issuer: "Google (Coursera)",
      date: "2025",
      image: "/assets/certificates/google_pm.jpg",
      credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/O3EUTYX5HL92",
      description: "Foundational understanding of practical, job-ready skills for planning, leading, and delivering projects effectively using real-world tools and agile practices."
    },
    {
      title: " The Complete Full-Stack Web Development Bootcamp ",
      issuer: "London App Brewery (Udemy)",
      date: "2024",
      image: "/assets/certificates/web_dev.png",
      credentialUrl: "https://www.udemy.com/certificate/UC-2397fa7d-7c1d-4e50-a8de-dd2ee5aabe01/",
      description: "Professional certificate covering HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps."
    },
    {
      title: "Computer Systems Servicing NC II",
      issuer: "AMA Computer Learning Center of Calapan, Oriental Mindoro Inc. (TESDA Accredited)",
      date: "2024",
      image: "/assets/certificates/css.png",
      credentialUrl: "https://t2mis.tesda.gov.ph/Learners/S/710064007700450052005A005400660051005200720071006E0050005600360062004A003800330077002F0032002B004F006C007200710076006D002F0055006A00300039007700720033004F0070007100380051003D00",
      description: "Technical skills in assembling, configuring, diagnosing, and maintaining computer systems, including LAN cable termination and OS deployment."
    },
    {
      title: "Core Employability Skills",
      issuer: "Wadhwani Foundation",
      date: "2024",
      image: "/assets/certificates/core_emp.png",
      credentialUrl: "#",
      description: "Essential workplace competencies such as professionalism, responsibility, interpersonal skills, and continuous learning."
    },
    
  ];

  return (
    <section id="certificates" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">
          Certifications
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Professional certifications and courses I&apos;ve completed to enhance my skills.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              {/* Certificate Image */}
              <div className="relative h-40 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                {cert.image ? (
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-primary/30"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">View Details</span>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground mb-1 line-clamp-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-primary mb-2">{cert.issuer}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{cert.date}</span>
                  {cert.credentialUrl && cert.credentialUrl !== "#" && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Credential →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Certificate Details */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-card rounded-2xl max-w-lg w-full overflow-hidden border border-border shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-48 bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
              {selectedCert.image ? (
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <svg
                  className="w-24 h-24 text-primary/50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              )}
              {/* Close button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-background/80 rounded-full flex items-center justify-center hover:bg-background transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {selectedCert.title}
              </h3>
              <p className="text-primary font-medium mb-1">{selectedCert.issuer}</p>
              <p className="text-sm text-muted-foreground mb-4">Issued: {selectedCert.date}</p>
              
              <p className="text-muted-foreground mb-6">
                {selectedCert.description}
              </p>

              <div className="flex gap-3">
                {selectedCert.credentialUrl && selectedCert.credentialUrl !== "#" && (
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary text-primary-foreground py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors text-center"
                  >
                    View Credential
                  </a>
                )}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="flex-1 border border-border text-foreground py-2.5 rounded-lg font-medium hover:bg-accent transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
