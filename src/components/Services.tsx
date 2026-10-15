import { useState } from 'react';
import { Phone, CheckCircle2, ArrowRight, Info, Car, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG, type ServiceItem } from '../config/business';

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedVehicleType, setSelectedVehicleType] = useState<string>('saloon');

  const vehicleTypes = [
    { id: 'hatchback', name: 'Hatchback / City Car', example: 'e.g. Fiesta, Polo, Golf, A-Class' },
    { id: 'saloon', name: 'Saloon & Estate', example: 'e.g. 3 Series, C-Class, A4, Passat' },
    { id: 'suv', name: 'SUV & 4x4', example: 'e.g. Qashqai, X3, Evoque, Sportage' },
    { id: 'large', name: 'Large 4x4 & Commercial', example: 'e.g. Range Rover, X5, Transporter' },
  ];

  const handleEnquire = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    } else {
      window.open(BUSINESS_CONFIG.contact.phoneTel, '_self');
    }
  };

  return (
    <section id="services" className="py-24 bg-obsidian-deep relative border-t border-graphite-border/60">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-lime-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-graphite-light/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite border border-graphite-border text-xs font-semibold uppercase tracking-wider text-lime-accent mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Proposed Service Categories
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Find Your Perfect Clean.
          </h2>
          <p className="text-lg text-silver-muted leading-relaxed">
            Whether your car needs a quick refresh or a more thorough clean, speak to our team about the right service.
          </p>
        </div>

        {/* Owner Editable Notice & Price Policy Transparency */}
        <div className="mb-12 p-4 sm:p-5 rounded-lg bg-graphite/50 border border-graphite-border/70 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-lime-accent flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-silver-soft">
              <strong className="text-white block sm:inline font-semibold">Service Menu Notice: </strong>
              The services below represent proposed categories for customer guidance. Vehicle sizes and bespoke pricing are confirmed in person or over the telephone with our team.
            </div>
          </div>
          <a
            href={BUSINESS_CONFIG.contact.phoneTel}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-accent hover:text-white transition-colors flex-shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            Confirm Today's Availability
          </a>
        </div>

        {/* Vehicle Size Guidance Selector */}
        <div className="mb-12 p-5 rounded-xl bg-graphite-dark border border-graphite-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Car className="w-5 h-5 text-lime-accent" />
              <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                Vehicle Size Classification
              </h3>
            </div>
            <span className="text-xs text-silver-muted">
              Select your vehicle category to preview applicable cleaning scope:
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
            {vehicleTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setSelectedVehicleType(type.id)}
                className={`p-3 rounded-lg text-left transition-all border ${
                  selectedVehicleType === type.id
                    ? 'bg-graphite border-lime-accent text-white shadow-sm'
                    : 'bg-obsidian/60 border-graphite-border/60 text-silver-muted hover:border-silver-dim/40 hover:text-silver-soft'
                }`}
              >
                <div className="text-xs sm:text-sm font-semibold mb-0.5">{type.name}</div>
                <div className="text-[11px] text-silver-muted/80">{type.example}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BUSINESS_CONFIG.services.map((service: ServiceItem) => (
            <div
              key={service.id}
              className={`group relative rounded-xl bg-graphite-dark border transition-all duration-300 flex flex-col overflow-hidden ${
                service.isPopular
                  ? 'border-lime-accent/60 shadow-lime-glow/20'
                  : 'border-graphite-border hover:border-silver-dim/50 hover:shadow-premium'
              }`}
            >
              {/* Card Image */}
              <div className="relative h-56 sm:h-60 overflow-hidden bg-obsidian">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-[0.85] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite-dark via-transparent to-black/20" />

                {/* Popular Pill */}
                {service.isPopular && (
                  <div className="absolute top-4 right-4 bg-lime-accent text-obsidian text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md tracking-wider">
                    Most Popular Clean
                  </div>
                )}

                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-lime-accent block">
                    {service.tagline}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-lime-accent transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-silver-soft/80 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 mb-6">
                    {service.includes.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-silver-soft">
                        <CheckCircle2 className="w-3.5 h-3.5 text-lime-accent flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-4 border-t border-graphite-border flex items-center justify-between">
                  <span className="text-xs text-silver-muted">
                    Bespoke quote on arrival
                  </span>
                  <button
                    type="button"
                    onClick={() => handleEnquire(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-lime-accent group-hover:text-white transition-colors"
                  >
                    <span>ENQUIRE NOW</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-graphite to-graphite-dark border border-graphite-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
              Have a bespoke requirement or commercial vehicle?
            </h4>
            <p className="text-sm text-silver-muted">
              Speak directly with our team at 1E Alpha Road for commercial vans, multi-vehicle washes or specialized valeting.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href={BUSINESS_CONFIG.contact.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-lime-accent hover:bg-lime-hover text-obsidian px-6 py-3 rounded-md font-bold text-xs uppercase tracking-wider transition-all"
            >
              <Phone className="w-3.5 h-3.5 fill-obsidian" />
              <span>Call: {BUSINESS_CONFIG.contact.phoneLocal}</span>
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-graphite-light hover:bg-graphite text-white px-5 py-3 rounded-md font-medium text-xs tracking-wider border border-graphite-border transition-all"
            >
              Send Online Enquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
