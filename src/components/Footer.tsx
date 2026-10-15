import { useState } from 'react';
import { Phone, MapPin, Star, ArrowUpRight, Shield, Clock, Info, X } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showOwnerModal, setShowOwnerModal] = useState(false);

  return (
    <footer className="bg-obsidian-deep border-t border-graphite-border text-silver-muted text-xs">
      {/* Upper Footer: Main Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Mission (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-graphite flex items-center justify-center border border-graphite-border">
                <svg
                  className="w-5 h-5 text-lime-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2.5C12 2.5 5 11 5 15.5C5 19.0899 8.13401 22 12 22C15.866 22 19 19.0899 19 15.5C19 11 12 2.5 12 2.5Z" />
                  <path d="M12 8C12 8 8 13 8 15.5C8 17.5 9.8 19 12 19" strokeOpacity="0.5" strokeWidth="1.5" />
                  <circle cx="14" cy="14" r="1.5" fill="#C6F36A" stroke="none" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-base font-extrabold tracking-tight text-white">
                  CHINGFORD
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-silver-muted uppercase">
                  CAR WASH LTD
                </span>
              </div>
            </div>

            <p className="text-sm text-silver-soft leading-relaxed max-w-sm">
              CHINGFORD CAR WASH LTD is an unblemished 5.0-star rated hand car wash in Chingford, East London, dedicated to attentive exterior cleaning and thorough interior vehicle rejuvenation.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <div className="flex items-center text-lime-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-lime-accent text-lime-accent" />
                ))}
              </div>
              <span className="text-xs font-semibold text-white">5.0 / 5.0</span>
              <span className="text-silver-dim">·</span>
              <span className="text-xs text-silver-muted">76 Google Reviews</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-lime-accent transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-lime-accent transition-colors">Services & Packages</a>
              </li>
              <li>
                <a href="#our-difference" className="hover:text-lime-accent transition-colors">Our Difference</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-lime-accent transition-colors">Customer Reviews</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-lime-accent transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#location" className="hover:text-lime-accent transition-colors">Find Us in Chingford</a>
              </li>
            </ul>
          </div>

          {/* Proposed Services Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Cleaning Services
            </h4>
            <ul className="space-y-2">
              {BUSINESS_CONFIG.services.map((srv) => (
                <li key={srv.id}>
                  <a href="#services" className="hover:text-lime-accent transition-colors line-clamp-1">
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Location & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-silver-soft">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-lime-accent flex-shrink-0 mt-0.5" />
                <span>
                  1E Alpha Road,<br />
                  London E4 6TD,<br />
                  United Kingdom
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-lime-accent flex-shrink-0" />
                <a href={BUSINESS_CONFIG.contact.phoneTel} className="hover:text-lime-accent font-semibold transition-colors">
                  {BUSINESS_CONFIG.contact.phoneFormatted}
                </a>
              </p>
              <div className="pt-2">
                <a
                  href={BUSINESS_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-lime-accent hover:underline"
                >
                  <span>Google Maps Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Owner Launch Notice Pill Bar */}
      <div className="border-t border-graphite-border/60 bg-graphite-dark/60 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
          <div className="flex items-center gap-2 text-silver-soft">
            <Clock className="w-3.5 h-3.5 text-lime-accent" />
            <span>
              <strong className="text-white">Pre-Launch Status:</strong> Built for CHINGFORD CAR WASH LTD. Closing time recorded as 7:00 PM.
            </span>
          </div>
          <button
            type="button"
            onClick={() => setShowOwnerModal(true)}
            className="text-lime-accent font-semibold hover:underline flex items-center gap-1"
          >
            <Info className="w-3.5 h-3.5" />
            <span>View Owner Pre-Launch Checklist</span>
          </button>
        </div>
      </div>

      {/* Lower Footer: Copyright & Legal */}
      <div className="border-t border-graphite-border/40 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-silver-muted text-[11px]">
          <div>
            © {CURRENT_YEAR} {BUSINESS_CONFIG.name}. All rights reserved. Hand car wash services in Chingford, East London.
          </div>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-white transition-colors"
            >
              Privacy & Data Notice
            </button>
            <a
              href={BUSINESS_CONFIG.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Google Maps Listing
            </a>
          </div>
        </div>
      </div>

      {/* Privacy Notice Modal */}
      {showPrivacyModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 text-silver-soft"
          onClick={() => setShowPrivacyModal(false)}
        >
          <div
            className="relative max-w-lg w-full bg-graphite-dark border border-graphite-border rounded-xl p-6 shadow-2xl text-xs space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-graphite-border">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Shield className="w-4 h-4 text-lime-accent" />
                Privacy & Data Notice
              </h3>
              <button
                type="button"
                onClick={() => setShowPrivacyModal(false)}
                className="text-silver-muted hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="leading-relaxed">
              CHINGFORD CAR WASH LTD respects customer privacy. This website is an informational business showcase and direct telephone contact portal for our car wash facility at 1E Alpha Road, London E4 6TD.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-silver-muted">
              <li>No payment card or financial details are ever requested or collected on this website.</li>
              <li>No personal information is sold, shared or transferred to third-party marketing companies.</li>
              <li>Customer enquiries through phone or client-side forms are used exclusively to provide direct vehicle cleaning quotes.</li>
            </ul>
            <div className="pt-2 text-right">
              <button
                type="button"
                onClick={() => setShowPrivacyModal(false)}
                className="px-4 py-2 bg-graphite hover:bg-graphite-light text-white rounded-md text-xs font-semibold"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Owner Pre-Launch Verification Modal */}
      {showOwnerModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 text-silver-soft"
          onClick={() => setShowOwnerModal(false)}
        >
          <div
            className="relative max-w-xl w-full bg-graphite-dark border border-lime-accent/40 rounded-xl p-6 shadow-2xl text-xs space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-graphite-border">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Info className="w-4 h-4 text-lime-accent" />
                Owner Pre-Launch Verification Checklist
              </h3>
              <button
                type="button"
                onClick={() => setShowOwnerModal(false)}
                className="text-silver-muted hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="leading-relaxed text-silver-soft">
              This website was architected according to strict verified business guidelines. The following items are clearly flagged in the code (<code className="text-lime-accent">src/config/business.ts</code>) for quick owner confirmation prior to final deployment:
            </p>

            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-obsidian border border-graphite-border">
                <div className="font-bold text-white mb-0.5">1. Daily Opening Hours</div>
                <p className="text-silver-muted">
                  The Google listing states a 7:00 PM closing time. Verify exact daily opening and closing hours for weekdays vs weekends.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-obsidian border border-graphite-border">
                <div className="font-bold text-white mb-0.5">2. Service Packages & Official Pricing</div>
                <p className="text-silver-muted">
                  The current services are proposed categories. If the owner has an established printed price list by car size (Hatchback / Saloon / SUV), it can be slotted in with exact GBP (£) amounts.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-obsidian border border-graphite-border">
                <div className="font-bold text-white mb-0.5">3. Facility Photography</div>
                <p className="text-silver-muted">
                  High-grade automotive demo photography is used for layout integrity. The gallery can be updated with genuine photographs of 1E Alpha Road when provided.
                </p>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setShowOwnerModal(false)}
                className="px-4 py-2 bg-lime-accent hover:bg-lime-hover text-obsidian rounded-md font-bold text-xs uppercase tracking-wider"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
