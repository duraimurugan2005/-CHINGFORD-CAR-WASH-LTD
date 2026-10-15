import { Phone, Navigation } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const MobileQuickBar = () => {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-obsidian-deep/95 backdrop-blur-md border-t border-graphite-border px-3 py-2 shadow-2xl"
    >
      <div className="flex items-center gap-2">
        {/* Call Now Button */}
        <a
          href={BUSINESS_CONFIG.contact.phoneTel}
          className="flex-1 flex items-center justify-center gap-2 bg-lime-accent active:bg-lime-hover text-obsidian py-3 px-3 rounded-lg font-bold text-xs uppercase tracking-wider shadow-sm"
          aria-label="Call Chingford Car Wash now"
        >
          <Phone className="w-4 h-4 fill-obsidian flex-shrink-0" />
          <span>CALL NOW</span>
        </a>

        {/* Directions Button */}
        <a
          href={BUSINESS_CONFIG.location.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-graphite active:bg-graphite-light text-white py-3 px-3 rounded-lg font-semibold text-xs uppercase tracking-wider border border-graphite-border"
          aria-label="Get directions to 1E Alpha Road on Google Maps"
        >
          <Navigation className="w-3.5 h-3.5 text-lime-accent flex-shrink-0" />
          <span>DIRECTIONS</span>
        </a>
      </div>
    </aside>
  );
};
