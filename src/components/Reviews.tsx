import { Star, ExternalLink, MessageSquare, CheckCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-obsidian-deep relative border-t border-graphite-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite border border-graphite-border text-xs font-semibold uppercase tracking-wider text-lime-accent mb-4">
            <Star className="w-3.5 h-3.5 fill-lime-accent" />
            Social Proof & Feedback
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Five-Star Service. Real Customer Feedback.
          </h2>
          <p className="text-lg text-silver-muted leading-relaxed">
            Discover why drivers across Chingford and East London rate CHINGFORD CAR WASH LTD with an unblemished 5.0 rating on Google.
          </p>
        </div>

        {/* Hero Rating Banner */}
        <div className="mb-14 p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-graphite-dark via-graphite to-graphite-dark border border-graphite-border/80 shadow-premium">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Score & Stars */}
            <div className="md:col-span-4 text-center md:text-left md:border-r border-graphite-border/60 md:pr-8">
              <div className="text-5xl sm:text-7xl font-black text-white tracking-tighter mb-2">
                {BUSINESS_CONFIG.rating.score}
                <span className="text-2xl sm:text-3xl font-medium text-silver-muted">/5.0</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-1 text-lime-accent mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-lime-accent text-lime-accent" />
                ))}
              </div>
              <div className="text-sm font-semibold text-silver-soft tracking-wide">
                Based on <span className="text-white font-bold">{BUSINESS_CONFIG.rating.count} Google Reviews</span>
              </div>
              <p className="text-[11px] text-silver-muted mt-1">
                Data provided from the owner-facing Google listing
              </p>
            </div>

            {/* Verification Context */}
            <div className="md:col-span-8 flex flex-col justify-between">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest text-lime-accent font-bold block mb-1">
                  Google Maps Business Listing
                </span>
                <p className="text-sm sm:text-base text-silver-soft leading-relaxed">
                  Customer satisfaction is reflected in real, unedited Google ratings. Rather than fabricating quotes, we invite visitors to inspect all reviews directly on Google Maps.
                </p>
              </div>

              {/* Prominent Google Reviews CTA */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={BUSINESS_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-lime-accent hover:bg-lime-hover text-obsidian px-7 py-3.5 rounded-md font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-lime-glow"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>READ GOOGLE REVIEWS</span>
                </a>

                <span className="text-xs text-silver-muted text-center sm:text-left">
                  Opens Google Maps listing in a new tab
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Real Customer Review Themes (Honest analysis of verified feedback) */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="w-4 h-4 text-lime-accent" />
            <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
              Key Themes Mentioned by Customers
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BUSINESS_CONFIG.reviewThemes.map((theme) => (
              <div
                key={theme.title}
                className="p-6 rounded-xl bg-graphite-dark/60 border border-graphite-border hover:border-silver-dim/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-lime-accent px-2 py-0.5 rounded bg-graphite">
                      {theme.tag}
                    </span>
                    <CheckCircle className="w-4 h-4 text-lime-accent" />
                  </div>

                  <h4 className="text-base font-bold text-white mb-2">
                    {theme.title}
                  </h4>

                  <p className="text-xs font-medium text-lime-accent/90 mb-3">
                    "{theme.highlight}"
                  </p>

                  <p className="text-xs text-silver-soft/80 leading-relaxed">
                    {theme.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-graphite-border/60 flex items-center gap-1.5 text-[11px] text-silver-muted">
                  <Star className="w-3 h-3 fill-lime-accent text-lime-accent" />
                  <span>Verified customer theme</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ethical Transparency Note */}
        <div className="mt-10 p-4 rounded-lg bg-obsidian border border-graphite-border/50 text-center">
          <p className="text-xs text-silver-muted">
            <strong className="text-silver-soft">Transparency Commitment:</strong> We do not publish fabricated quotes or invent fictitious customer names. All feedback figures correspond to the live Google listing for CHINGFORD CAR WASH LTD.
          </p>
        </div>
      </div>
    </section>
  );
};
