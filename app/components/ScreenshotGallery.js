'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ScreenshotGallery({ screenshots, projectTitle }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  // Helper to get image src (supports both string and object format)
  const getImageSrc = (item) => typeof item === 'string' ? item : item.src;
  const getImageCaption = (item) => typeof item === 'string' ? null : item.caption;

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(screenshots[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    const newIndex = currentIndex === 0 ? screenshots.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(screenshots[newIndex]);
  };

  const goToNext = (e) => {
    e.stopPropagation();
    const newIndex = currentIndex === screenshots.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(screenshots[newIndex]);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious(e);
    if (e.key === 'ArrowRight') goToNext(e);
  };

  return (
    <>
      {/* Gallery Section */}
      <section className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground mb-8">Screenshots</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="flex flex-col">
                <button
                  onClick={() => openLightbox(index)}
                  className="relative aspect-video rounded-lg overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                >
                  <Image
                    src={getImageSrc(screenshot)}
                    alt={getImageCaption(screenshot) || `${projectTitle} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <svg 
                      className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </button>
                {/* Caption below thumbnail */}
                {getImageCaption(screenshot) && (
                  <p className="mt-2 text-sm text-muted-foreground text-center">
                    {getImageCaption(screenshot)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-4 text-white/70 text-sm">
            {currentIndex + 1} / {screenshots.length}
          </div>

          {/* Previous button */}
          {screenshots.length > 1 && (
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Main image container with caption */}
          <div 
            className="flex flex-col items-center max-w-5xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh]">
              <Image
                src={getImageSrc(selectedImage)}
                alt={getImageCaption(selectedImage) || `${projectTitle} screenshot ${currentIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Caption in lightbox */}
            {getImageCaption(selectedImage) && (
              <p className="mt-4 text-white text-center text-lg">
                {getImageCaption(selectedImage)}
              </p>
            )}
          </div>

          {/* Next button */}
          {screenshots.length > 1 && (
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Thumbnail strip */}
          {screenshots.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-black/50 rounded-lg">
              {screenshots.map((thumb, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    openLightbox(index);
                  }}
                  className={`relative w-16 h-10 rounded overflow-hidden border-2 transition-all ${
                    index === currentIndex 
                      ? 'border-white' 
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={getImageSrc(thumb)}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
