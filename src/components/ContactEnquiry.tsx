import { useState, type FormEvent } from 'react';
import { Phone, Send, CheckCircle2, AlertCircle, Copy, Check, MessageSquare, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface ContactEnquiryProps {
  initialService?: string;
}

export const ContactEnquiry = ({ initialService = 'Exterior Hand Wash' }: ContactEnquiryProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    vehicleType: 'Saloon / Estate',
    requestedService: initialService,
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const vehicleOptions = [
    'Small / Hatchback (e.g. Fiesta, Polo)',
    'Saloon / Estate (e.g. 3 Series, C-Class, A4)',
    'SUV / Crossover / 4x4 (e.g. Qashqai, X3)',
    'Large 4x4 / Range Rover / MPV',
    'Commercial Van / Fleet Vehicle',
  ];

  const serviceOptions = [
    'Exterior Hand Wash',
    'Interior Cleaning',
    'Full Inside & Out Clean',
    'Wheel & Tyre Cleaning',
    'Interior Vacuuming',
    'Deep Clean / Valet',
    'Other / Custom Request',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your UK telephone number.';
    } else if (!/^((\+44)|(0)) ?\d{4} ?\d{6}$|^((\+44)|(0)) ?\d{3} ?\d{3} ?\d{4}$|^\d{10,12}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Please provide a valid contact number (e.g. 07438 936000).';
    }
    return errs;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitted(true);
  };

  const enquirySummaryText = `CHINGFORD CAR WASH LTD Enquiry:
Name: ${formData.fullName}
Phone: ${formData.phone}
Vehicle: ${formData.vehicleType}
Service: ${formData.requestedService}
Notes: ${formData.message || 'None'}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(enquirySummaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      vehicleType: 'Saloon / Estate',
      requestedService: 'Exterior Hand Wash',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-24 bg-obsidian relative border-t border-graphite-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite border border-graphite-border text-xs font-semibold uppercase tracking-wider text-lime-accent mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            Direct Contact & Enquiries
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Ready for a Fresh Clean?
          </h2>
          <p className="text-lg text-silver-muted leading-relaxed">
            Get in touch with our team to ask about available cleaning services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Call-First CTA Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-graphite-dark to-graphite border border-graphite-border shadow-premium">
              <span className="text-[11px] font-bold uppercase tracking-widest text-lime-accent block mb-2">
                Fastest Response
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">
                Call Our On-Site Team
              </h3>
              <p className="text-sm text-silver-soft leading-relaxed mb-6">
                For the fastest answer on queue times, pricing for your specific car model, or to let us know you are on your way, calling directly is the most reliable method.
              </p>

              {/* Big Phone Action Box */}
              <div className="p-4 rounded-xl bg-obsidian border border-graphite-border mb-6">
                <span className="text-xs text-silver-muted block mb-1">Direct Telephone Line</span>
                <a
                  href={BUSINESS_CONFIG.contact.phoneTel}
                  className="text-2xl sm:text-3xl font-black text-lime-accent hover:text-white transition-colors block"
                >
                  {BUSINESS_CONFIG.contact.phoneFormatted}
                </a>
                <span className="text-[11px] text-silver-dim mt-1 block">
                  Local rate / standard UK mobile network rates apply
                </span>
              </div>

              <a
                href={BUSINESS_CONFIG.contact.phoneTel}
                className="w-full inline-flex items-center justify-center gap-3 bg-lime-accent hover:bg-lime-hover text-obsidian py-4 rounded-md font-bold text-sm tracking-wider uppercase transition-all shadow-sm hover:shadow-lime-glow"
              >
                <Phone className="w-4 h-4 fill-obsidian" />
                <span>CALL NOW: {BUSINESS_CONFIG.contact.phoneLocal}</span>
              </a>

              {/* Physical Visit Note */}
              <div className="mt-6 pt-6 border-t border-graphite-border/70 flex items-start gap-3">
                <MapPin className="w-4 h-4 text-lime-accent flex-shrink-0 mt-0.5" />
                <div className="text-xs text-silver-muted">
                  <span className="text-white font-semibold block">Walk-ins Always Welcome</span>
                  1E Alpha Road, London E4 6TD. Drive in directly during operating hours.
                </div>
              </div>
            </div>

            {/* Privacy & Payment Policy Notice */}
            <div className="p-4 rounded-xl bg-graphite-dark/50 border border-graphite-border text-xs text-silver-muted space-y-1.5">
              <div className="flex items-center gap-2 text-silver-soft font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-lime-accent" />
                <span>Zero Card / Payment Collection Online</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                We never ask for card details or payments over the web. All transactions are settled safely in person on site upon completion of your vehicle wash.
              </p>
            </div>
          </div>

          {/* Right Column: Transparent Functional Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-graphite-dark border border-graphite-border shadow-premium">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-graphite-border/60">
                    <div>
                      <h3 className="text-lg font-bold text-white">Online Service Enquiry</h3>
                      <p className="text-xs text-silver-muted">
                        Submit your details to generate a formatted service request.
                      </p>
                    </div>
                    <span className="text-[10px] text-lime-accent uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-graphite">
                      Direct Method
                    </span>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold text-silver-soft mb-1.5">
                      Full Name <span className="text-lime-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. John Smith"
                      className={`w-full px-4 py-3 rounded-lg bg-obsidian border text-sm text-white placeholder-silver-dim focus:outline-none transition-colors ${
                        errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-graphite-border focus:border-lime-accent'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Telephone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-silver-soft mb-1.5">
                      UK Telephone Number <span className="text-lime-accent">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 07438 936000"
                      className={`w-full px-4 py-3 rounded-lg bg-obsidian border text-sm text-white placeholder-silver-dim focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-graphite-border focus:border-lime-accent'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Vehicle Type Selection */}
                  <div>
                    <label htmlFor="vehicleType" className="block text-xs font-semibold text-silver-soft mb-1.5">
                      Vehicle Type
                    </label>
                    <select
                      id="vehicleType"
                      value={formData.vehicleType}
                      onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-obsidian border border-graphite-border text-sm text-white focus:outline-none focus:border-lime-accent transition-colors"
                    >
                      {vehicleOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-obsidian text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Requested Service */}
                  <div>
                    <label htmlFor="requestedService" className="block text-xs font-semibold text-silver-soft mb-1.5">
                      Requested Service
                    </label>
                    <select
                      id="requestedService"
                      value={formData.requestedService}
                      onChange={(e) => setFormData({ ...formData, requestedService: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-obsidian border border-graphite-border text-sm text-white focus:outline-none focus:border-lime-accent transition-colors"
                    >
                      {serviceOptions.map((srv) => (
                        <option key={srv} value={srv} className="bg-obsidian text-white">
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message / Additional Information */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-silver-soft mb-1.5">
                      Message / Vehicle Condition <span className="text-silver-dim text-[11px]">(Optional)</span>
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Pet hair removal needed / prefer morning visit / alloy brake dust cleaning..."
                      className="w-full px-4 py-3 rounded-lg bg-obsidian border border-graphite-border text-sm text-white placeholder-silver-dim focus:outline-none focus:border-lime-accent transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-lime-accent hover:bg-lime-hover text-obsidian py-3.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>PREPARE SERVICE ENQUIRY</span>
                  </button>

                  <p className="text-[11px] text-silver-muted text-center">
                    Submitting prepares your request and provides one-click options to call or send directly to the wash team.
                  </p>
                </form>
              ) : (
                /* Honest Enquiry Confirmation State */
                <div className="py-4 space-y-6 animate-fadeIn">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-lime-accent/10 border border-lime-accent/30 text-lime-accent">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Enquiry Prepared Successfully</h4>
                      <p className="text-xs text-silver-soft">
                        Your request details have been formatted for CHINGFORD CAR WASH LTD.
                      </p>
                    </div>
                  </div>

                  {/* Formatted Summary Box */}
                  <div className="p-4 rounded-xl bg-obsidian border border-graphite-border text-xs font-mono text-silver-soft space-y-1.5 whitespace-pre-line">
                    {enquirySummaryText}
                  </div>

                  {/* Action Choices for Direct Interaction */}
                  <div className="space-y-3">
                    <a
                      href={BUSINESS_CONFIG.contact.phoneTel}
                      className="w-full inline-flex items-center justify-center gap-2 bg-lime-accent hover:bg-lime-hover text-obsidian py-3.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                    >
                      <Phone className="w-4 h-4 fill-obsidian" />
                      <span>CALL NOW TO CONFIRM ({BUSINESS_CONFIG.contact.phoneLocal})</span>
                    </a>

                    <button
                      type="button"
                      onClick={copyToClipboard}
                      className="w-full inline-flex items-center justify-center gap-2 bg-graphite hover:bg-graphite-light text-silver-soft hover:text-white py-3 rounded-lg font-semibold text-xs tracking-wide border border-graphite-border transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-lime-accent" />
                          <span className="text-lime-accent">Summary Copied to Clipboard</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy Details to Clipboard</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full text-center text-xs text-silver-muted hover:text-white transition-colors pt-2"
                    >
                      ← Submit another enquiry
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
