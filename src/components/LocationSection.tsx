import { MapPin, Phone, Clock, AlertTriangle, ExternalLink, Navigation } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const LocationSection = () => {
  return (
    <section id="location" className="py-24 bg-obsidian-deep relative border-t border-graphite-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite border border-graphite-border text-xs font-semibold uppercase tracking-wider text-lime-accent mb-4">
            <MapPin className="w-3.5 h-3.5" />
            East London Location
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Visit Us in Chingford.
          </h2>
          <p className="text-lg text-silver-muted leading-relaxed">
            Conveniently situated at 1E Alpha Road in Chingford. Drive in directly or call our team ahead of your visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Business Details & Editable Opening Hours */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address & Contact Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-graphite-dark border border-graphite-border">
              <span className="text-[11px] font-bold uppercase tracking-widest text-lime-accent block mb-2">
                Hand Car Wash Centre
              </span>
              <h3 className="text-2xl font-black text-white mb-4">
                {BUSINESS_CONFIG.name}
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-graphite flex items-center justify-center border border-graphite-border flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-lime-accent" />
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-white">{BUSINESS_CONFIG.location.street}</div>
                    <div className="text-silver-soft">{BUSINESS_CONFIG.location.town}, {BUSINESS_CONFIG.location.city}</div>
                    <div className="text-lime-accent font-bold mt-0.5">{BUSINESS_CONFIG.location.postcode}</div>
                    <div className="text-silver-muted text-xs">{BUSINESS_CONFIG.location.country}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-graphite flex items-center justify-center border border-graphite-border flex-shrink-0">
                    <Phone className="w-4 h-4 text-lime-accent" />
                  </div>
                  <div className="text-sm">
                    <div className="text-xs text-silver-muted">Telephone Enquiries</div>
                    <a
                      href={BUSINESS_CONFIG.contact.phoneTel}
                      className="text-base font-bold text-white hover:text-lime-accent transition-colors"
                    >
                      {BUSINESS_CONFIG.contact.phoneFormatted}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={BUSINESS_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-lime-accent hover:bg-lime-hover text-obsidian px-5 py-3 rounded-md font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>GET DIRECTIONS</span>
                </a>

                <a
                  href={BUSINESS_CONFIG.contact.phoneTel}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-graphite hover:bg-graphite-light text-white px-5 py-3 rounded-md font-semibold text-xs uppercase tracking-wider border border-graphite-border transition-all duration-200"
                >
                  <Phone className="w-3.5 h-3.5 text-lime-accent" />
                  <span>CALL THE TEAM</span>
                </a>
              </div>
            </div>

            {/* Opening Hours Table with Owner Confirmation Flags */}
            <div className="p-6 sm:p-8 rounded-2xl bg-graphite-dark border border-graphite-border">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-lime-accent" />
                  <h4 className="text-lg font-bold text-white">Opening Hours</h4>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  Confirmation Pending
                </span>
              </div>

              {/* Owner Notice Warning */}
              <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-500/30 mb-5 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-[11px] text-amber-200/90 leading-tight">
                  <strong className="text-white">To be confirmed before launch:</strong> Listing states closing at 7:00 PM. Schedule values below are editable and should be confirmed by the owner.
                </p>
              </div>

              {/* Hours Schedule */}
              <div className="space-y-2.5 text-sm">
                {BUSINESS_CONFIG.openingHours.schedule.map((slot) => (
                  <div
                    key={slot.day}
                    className="flex items-center justify-between py-1.5 border-b border-graphite-border/50 text-xs sm:text-sm"
                  >
                    <span className="font-medium text-silver-soft">{slot.day}</span>
                    <div className="text-right">
                      <span className="font-mono text-white font-semibold">{slot.hours}</span>
                      <span className="block text-[10px] text-silver-dim">{slot.notes}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 text-[11px] text-silver-muted text-center">
                Operating hours may vary during heavy rainfall or adverse winter conditions.
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Map with Fallback link */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden bg-graphite-dark border border-graphite-border shadow-premium flex-1 min-h-[420px] lg:min-h-full flex flex-col">
              {/* Map Header Bar */}
              <div className="p-4 bg-graphite border-b border-graphite-border flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-silver-soft">
                  <span className="w-2.5 h-2.5 rounded-full bg-lime-accent inline-block" />
                  <span className="font-semibold text-white">1E Alpha Road, London E4 6TD</span>
                </div>
                <a
                  href={BUSINESS_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-lime-accent hover:underline flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Responsive Embedded Google Map */}
              <div className="relative flex-1 w-full min-h-[360px] bg-obsidian">
                <iframe
                  title="Chingford Car Wash Ltd Location Map"
                  src="https://maps.google.com/maps?q=1E%20Alpha%20Road,%20London%20E4%206TD,%20UK&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 w-full h-full border-0 filter contrast-[1.05] grayscale-[0.2]"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Map Footer Bar with Fallback CTA */}
              <div className="p-4 bg-graphite-dark border-t border-graphite-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <span className="text-silver-muted">
                  Cannot load map? Use our verified direct Google Maps search link.
                </span>
                <a
                  href={BUSINESS_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-lime-accent hover:text-white transition-colors"
                >
                  <span>LAUNCH GOOGLE MAPS NAVIGATION</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
