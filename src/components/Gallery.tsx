import { useState } from 'react';
import { Camera, Eye, X, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { BUSINESS_CONFIG, type GalleryPhoto } from '../config/business';

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const categories = ['All', 'Foam & Wash', 'Exterior', 'Wheels', 'Interior', 'Finish'];

  const filteredPhotos = activeCategory === 'All'
    ? BUSINESS_CONFIG.gallery
    : BUSINESS_CONFIG.gallery.filter((p) => p.category === activeCategory);

  const openLightbox = (photo: GalleryPhoto) => {
    setActivePhoto(photo);
  };

  const closeLightbox = () => {
    setActivePhoto(null);
  };

  const handleNext = () => {
    if (!activePhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[nextIndex]);
  };

  const handlePrev = () => {
    if (!activePhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[prevIndex]);
  };

  return (
    <section id="gallery" className="py-24 bg-obsidian relative border-t border-graphite-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite border border-graphite-border text-xs font-semibold uppercase tracking-wider text-lime-accent mb-4">
            <Camera className="w-3.5 h-3.5" />
            Visual Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            The Craft of Hand Cleaning.
          </h2>
          <p className="text-lg text-silver-muted leading-relaxed">
            Take a visual tour through every phase of a professional car clean — from rich snow foam lubrication to precision wheel care and hand-buffed finishes.
          </p>
        </div>

        {/* Demo Photos Disclosure for Owner Clarity */}
        <div className="mb-8 p-4 rounded-lg bg-graphite/40 border border-graphite-border/60 flex items-start gap-3">
          <Info className="w-4 h-4 text-lime-accent flex-shrink-0 mt-0.5" />
          <div className="text-xs text-silver-muted">
            <strong className="text-silver-soft">Note for Business Owner: </strong>
            These high-resolution illustrative images demonstrate the layout and visual standard. Once high-res photographs of your 1E Alpha Road facility are supplied, they can be placed seamlessly into this gallery.
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeCategory === cat
                  ? 'bg-lime-accent text-obsidian shadow-sm'
                  : 'bg-graphite text-silver-muted hover:text-white hover:bg-graphite-light border border-graphite-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(photo)}
              className="group relative cursor-pointer rounded-xl overflow-hidden bg-graphite-dark border border-graphite-border hover:border-lime-accent/50 transition-all duration-300 shadow-sm hover:shadow-premium"
            >
              <div className="h-64 sm:h-72 overflow-hidden relative">
                <img
                  src={photo.imageUrl}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-[0.88] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Hover overlay button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-12 h-12 rounded-full bg-lime-accent text-obsidian flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Category Pill */}
                <div className="absolute top-3 left-3 bg-obsidian/90 backdrop-blur-sm border border-graphite-border text-[10px] uppercase font-bold text-lime-accent px-2.5 py-1 rounded-md">
                  {photo.category}
                </div>

                {/* Caption text */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h4 className="text-sm font-bold text-white mb-1 group-hover:text-lime-accent transition-colors">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-silver-muted line-clamp-2">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full bg-graphite-dark border border-graphite-border rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-obsidian/80 text-white hover:text-lime-accent hover:bg-obsidian border border-graphite-border transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo preview */}
            <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.alt}
                className="max-h-[70vh] w-auto object-contain"
              />

              {/* Navigation controls */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-4 p-2 rounded-full bg-obsidian/70 text-white hover:text-lime-accent hover:bg-obsidian border border-graphite-border transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-4 p-2 rounded-full bg-obsidian/70 text-white hover:text-lime-accent hover:bg-obsidian border border-graphite-border transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal caption */}
            <div className="p-6 bg-graphite-dark flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-bold text-lime-accent mb-1 block">
                  {activePhoto.category}
                </span>
                <h3 className="text-lg font-bold text-white mb-1">
                  {activePhoto.title}
                </h3>
                <p className="text-xs text-silver-soft">
                  {activePhoto.caption}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] text-silver-dim">
                  Chingford Car Wash Ltd Showcase
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
