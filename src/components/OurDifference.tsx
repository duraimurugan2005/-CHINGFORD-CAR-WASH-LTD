import { Check, Star, ShieldCheck, HeartHandshake, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const OurDifference = () => {
  const iconMap = [
    <Sparkles className="w-5 h-5 text-lime-accent" key="sparkles" />,
    <ShieldCheck className="w-5 h-5 text-lime-accent" key="shield" />,
    <HeartHandshake className="w-5 h-5 text-lime-accent" key="handshake" />,
    <MapPin className="w-5 h-5 text-lime-accent" key="map" />,
  ];

  return (
    <section id="our-difference" className="py-24 bg-obsidian relative border-t border-graphite-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Photographic Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-graphite-dark border border-graphite-border shadow-premium">
              <img
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1200&auto=format&fit=crop"
                alt="Active foam hand wash on car bodywork showing thorough cleaning process"
                className="w-full h-[480px] sm:h-[540px] object-cover filter brightness-[0.9] contrast-[1.05]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-black/20" />

              {/* Floating Review Badge on Photo */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-obsidian/95 border border-graphite-border backdrop-blur-md shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1 text-lime-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-lime-accent text-lime-accent" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-lime-accent tracking-wider uppercase">
                    5.0 Google Score
                  </span>
                </div>
                <p className="text-xs text-silver-soft italic leading-snug">
                  "Friendly staff, thorough interior and exterior cleaning, and genuine care taken with every car."
                </p>
                <div className="mt-2 text-[10px] text-silver-muted flex items-center justify-between">
                  <span>Customer feedback summary</span>
                  <span>76 Google Reviews</span>
                </div>
              </div>
            </div>

            {/* Subtle decorative geometric border */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-28 h-28 border-t-2 border-l-2 border-lime-accent/40 rounded-tl-2xl pointer-events-none" />
          </div>

          {/* Right Column: Editorial Text & 4 Concise Verified Strengths */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite border border-graphite-border text-xs font-semibold uppercase tracking-wider text-lime-accent mb-4">
              <span>Why Customers Choose Us</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
              Every Detail Matters.
            </h2>

            <p className="text-base sm:text-lg text-silver-muted leading-relaxed mb-10 max-w-2xl">
              We focus on honest, dependable hand washing standards. No rushed shortcuts or assembly lines — just thorough cleaning and respectful service for every customer who visits our Chingford centre.
            </p>

            {/* The 4 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {BUSINESS_CONFIG.whyChooseUs.map((item, index) => (
                <div
                  key={item.id}
                  className="p-5 rounded-xl bg-graphite-dark/60 border border-graphite-border hover:border-lime-accent/50 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-graphite flex items-center justify-center border border-graphite-border group-hover:border-lime-accent/50 transition-colors">
                      {iconMap[index]}
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-lime-accent px-2 py-0.5 rounded bg-graphite">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-lime-accent transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-silver-soft/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Local Context Notice */}
            <div className="mt-8 p-4 rounded-lg bg-obsidian-card border border-graphite-border/70 flex items-center gap-3">
              <Check className="w-4 h-4 text-lime-accent flex-shrink-0" />
              <p className="text-xs text-silver-muted">
                Located conveniently at <strong className="text-white">1E Alpha Road, London E4 6TD</strong>. Easily accessible for motorists across Chingford and East London.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
