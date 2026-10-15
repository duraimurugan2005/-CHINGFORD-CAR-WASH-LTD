import { Phone, MapPin, Star, ArrowUpRight, ShieldCheck, Sparkles, Clock } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-obsidian">
      {/* Background Cinematic Authentic Hand Car Wash Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2000&auto=format&fit=crop"
          alt="Clean dark luxury car being carefully hand washed with water droplets and foam reflections"
          className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.08] scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Editorial Gradients & Restrained Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/60 to-transparent" />
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-graphite/80 border border-graphite-border/70 backdrop-blur-md mb-6 text-xs uppercase tracking-widest text-silver-soft">
            <span className="w-2 h-2 rounded-full bg-lime-accent animate-ping" />
            <span className="font-semibold text-lime-accent">Chingford, London</span>
            <span className="text-silver-dim">·</span>
            <span>Hand Car Wash</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            A Cleaner Car. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-silver-soft to-lime-accent">
              A Better Drive.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-silver-soft/90 font-normal leading-relaxed mb-8 max-w-2xl">
            Give your car the care it deserves. Visit <strong className="text-white font-semibold">CHINGFORD CAR WASH LTD</strong> in Chingford for a thorough clean, friendly service and attention to detail.
          </p>

          {/* Trust Indicator */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 p-3 rounded-lg bg-graphite/60 border border-graphite-border/50 backdrop-blur-sm max-w-fit">
            <div className="flex items-center text-lime-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-lime-accent text-lime-accent" />
              ))}
            </div>
            <a
              href="#reviews"
              className="text-xs sm:text-sm font-semibold tracking-wide text-white hover:text-lime-accent transition-colors flex items-center gap-1.5"
            >
              <span>5.0 GOOGLE RATING</span>
              <span className="text-silver-dim">·</span>
              <span className="text-silver-muted font-normal">76 REVIEWS</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-lime-accent" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
            <a
              href={BUSINESS_CONFIG.contact.phoneTel}
              className="inline-flex items-center justify-center gap-3 bg-lime-accent hover:bg-lime-hover text-obsidian px-8 py-4 rounded-md font-bold text-sm tracking-wider uppercase shadow-lime-glow transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-4 h-4 fill-obsidian" />
              <span>CALL NOW</span>
            </a>

            <a
              href={BUSINESS_CONFIG.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-graphite hover:bg-graphite-light text-white px-7 py-4 rounded-md font-semibold text-sm tracking-wide border border-graphite-border hover:border-silver-dim/60 transition-all duration-200"
            >
              <MapPin className="w-4 h-4 text-lime-accent" />
              <span>GET DIRECTIONS</span>
            </a>
          </div>

          {/* Address Display below buttons */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-silver-muted">
            <MapPin className="w-3.5 h-3.5 text-lime-accent flex-shrink-0" />
            <span>1E Alpha Road, London E4 6TD</span>
            <span className="text-silver-dim">·</span>
            <span className="text-silver-muted">East London</span>
          </div>
        </div>

        {/* Floating Feature Badges for Quick Conversion Proof */}
        <div className="mt-12 pt-8 border-t border-graphite-border/40 grid grid-cols-2 md:grid-cols-4 gap-4 text-silver-soft">
          <div className="flex items-center gap-3 p-3 rounded-md bg-graphite-dark/60 border border-graphite-border/30">
            <Sparkles className="w-5 h-5 text-lime-accent flex-shrink-0" />
            <div className="text-xs">
              <span className="block font-semibold text-white">Hand Wash Only</span>
              <span className="text-silver-muted">Two-bucket gentle care</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-md bg-graphite-dark/60 border border-graphite-border/30">
            <ShieldCheck className="w-5 h-5 text-lime-accent flex-shrink-0" />
            <div className="text-xs">
              <span className="block font-semibold text-white">Attentive Staff</span>
              <span className="text-silver-muted">Takes time with each car</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-md bg-graphite-dark/60 border border-graphite-border/30">
            <Clock className="w-5 h-5 text-lime-accent flex-shrink-0" />
            <div className="text-xs">
              <span className="block font-semibold text-white">Open to 7:00 PM</span>
              <span className="text-silver-muted">Hours to be confirmed</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-md bg-graphite-dark/60 border border-graphite-border/30">
            <MapPin className="w-5 h-5 text-lime-accent flex-shrink-0" />
            <div className="text-xs">
              <span className="block font-semibold text-white">Chingford E4</span>
              <span className="text-silver-muted">Drive in or call ahead</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
