export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  includes: string[];
  imageUrl: string;
  isPopular?: boolean;
}

export interface OpeningHourDay {
  day: string;
  hours: string;
  isConfirmed: boolean;
  notes?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Exterior' | 'Foam & Wash' | 'Wheels' | 'Interior' | 'Finish';
  imageUrl: string;
  alt: string;
  caption: string;
}

export interface ReviewTheme {
  title: string;
  highlight: string;
  description: string;
  tag: string;
}

export const BUSINESS_CONFIG = {
  name: 'CHINGFORD CAR WASH LTD',
  shortName: 'Chingford Car Wash',
  legalName: 'CHINGFORD CAR WASH LTD',
  category: 'Professional Hand Car Wash',
  rating: {
    score: '5.0',
    stars: 5,
    count: 76,
    source: 'Google Business Listing',
    verificationNote: 'Supplied listing information — 76 verified Google reviews with 5.0-star average.',
  },
  contact: {
    phone: '+44 7438 936000',
    phoneFormatted: '+44 7438 936000',
    phoneLocal: '07438 936000',
    phoneTel: 'tel:+447438936000',
    whatsappAvailable: false, // Set to true if owner confirms official WhatsApp business number
  },
  location: {
    street: '1E Alpha Road',
    town: 'Chingford',
    city: 'London',
    postcode: 'E4 6TD',
    country: 'United Kingdom',
    fullAddress: '1E Alpha Road, London E4 6TD, United Kingdom',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=CHINGFORD+CAR+WASH+LTD+1E+Alpha+Road+London+E4+6TD',
    embedMapQuery: '1E+Alpha+Road+London+E4+6TD',
    areaServed: 'Chingford, Highams Park, Walthamstow, Woodford & surrounding East London areas',
  },
  openingHours: {
    generalNote: 'Owner listing indicates 7:00 PM closing. Daily opening schedule flagged for final owner verification before launch.',
    schedule: [
      { day: 'Monday', hours: '08:30 – 19:00', isConfirmed: false, notes: 'Subject to weather & daylight' },
      { day: 'Tuesday', hours: '08:30 – 19:00', isConfirmed: false, notes: 'Subject to weather & daylight' },
      { day: 'Wednesday', hours: '08:30 – 19:00', isConfirmed: false, notes: 'Subject to weather & daylight' },
      { day: 'Thursday', hours: '08:30 – 19:00', isConfirmed: false, notes: 'Subject to weather & daylight' },
      { day: 'Friday', hours: '08:30 – 19:00', isConfirmed: false, notes: 'Subject to weather & daylight' },
      { day: 'Saturday', hours: '08:30 – 19:00', isConfirmed: false, notes: 'Peak weekend service' },
      { day: 'Sunday', hours: '09:00 – 18:00', isConfirmed: false, notes: 'Subject to confirmation' },
    ] as OpeningHourDay[],
  },
  servicesNote: 'Proposed service menu for customer guidance. Vehicle sizes and exact package pricing to be confirmed directly by the owner upon enquiry.',
  services: [
    {
      id: 'exterior-hand-wash',
      title: 'Exterior Hand Wash',
      tagline: 'Precision foam, contact wash & streak-free dry',
      description: 'Careful pre-rinse, rich snow foam application, two-bucket contact hand wash, wheel face rinse, and hand dry with premium microfibre towels.',
      includes: ['High-pressure citrus pre-wash', 'pH-neutral active foam bath', 'Soft mitt two-bucket hand wash', 'Clean water rinse & microfibre towel dry', 'Exterior glass wipe'],
      imageUrl: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=900&auto=format&fit=crop',
      isPopular: false,
    },
    {
      id: 'interior-cleaning',
      title: 'Interior Cleaning',
      tagline: 'Deep dust extraction & surface rejuvenation',
      description: 'Detailed interior care focusing on cabin surfaces, dashboard dusting, door cards, console sanitisation, and smear-free interior glass polishing.',
      includes: ['Dashboard & instrument cluster dusting', 'Centre console & cup holder clean', 'Door shut cleaning', 'Interior windscreen & glass polish', 'Air vent brush out'],
      imageUrl: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=900&auto=format&fit=crop',
      isPopular: false,
    },
    {
      id: 'full-inside-out',
      title: 'Full Inside & Out Clean',
      tagline: 'The complete comprehensive refresh',
      description: 'Our most sought-after combination clean. Combines a thorough exterior hand wash and wheel clean with complete interior vacuuming and cabin surface wiping.',
      includes: ['Complete exterior hand wash & hand dry', 'Full interior vacuum (seats, carpets, boot)', 'Wheels and tyres cleaned & dressed', 'Dashboard and console wiped down', 'Interior & exterior windows polished'],
      imageUrl: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=900&auto=format&fit=crop',
      isPopular: true,
    },
    {
      id: 'wheel-tyre-care',
      title: 'Wheel & Tyre Cleaning',
      tagline: 'Brake dust removal & satin tyre dressing',
      description: 'Targeted decontamination of alloy wheels, barrel rinse, brake dust removal, and long-lasting deep satin tyre dressing for a fresh showroom finish.',
      includes: ['Acid-free alloy wheel cleaner', 'Agitation of wheel spokes & face', 'Tyre wall scrub & degrease', 'High-pressure arch rinse', 'Durable satin tyre protection'],
      imageUrl: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?q=80&w=900&auto=format&fit=crop',
      isPopular: false,
    },
    {
      id: 'interior-vacuuming',
      title: 'Interior Vacuuming',
      tagline: 'Thorough footwell, seat & boot vacuum',
      description: 'High-power suction vacuuming covering every crevice, under-seat area, upholstery, floor mats, and boot space to lift loose dirt, crumbs, and debris.',
      includes: ['Driver & passenger footwells', 'Rear seating area & crevices', 'Carpet floor mats removed & cleaned', 'Boot compartment vacuum', 'Seat seams & cushion crevices'],
      imageUrl: 'https://images.unsplash.com/photo-1583267746897-2cf415887172?q=80&w=900&auto=format&fit=crop',
      isPopular: false,
    },
    {
      id: 'deep-clean-valet',
      title: 'Deep Clean / Valet',
      tagline: 'Intensive inside-and-out vehicle rejuvenation',
      description: 'An extensive deep clean for vehicles requiring comprehensive care. Detailed attention to upholstery, exterior paint decontamination, shuts, and trim nourishment.',
      includes: ['Extended multi-stage hand wash', 'Intensive upholstery & mat treatment', 'Engine bay edge & door shut detailing', 'Deep alloy and arch scrub', 'Protective gloss finish & tyre dressing'],
      imageUrl: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=900&auto=format&fit=crop',
      isPopular: false,
    },
  ] as ServiceItem[],
  whyChooseUs: [
    {
      id: 'thorough',
      title: 'Thorough Cleaning',
      description: 'Customer feedback consistently highlights our team’s careful, inside-and-out attention to every corner of your vehicle, from wheel arches to boot lines.',
      tag: 'Verified Feedback',
    },
    {
      id: 'attention',
      title: 'Attention to Detail',
      description: 'Reviews celebrate our staff taking their time with every car, avoiding rushed work to ensure streak-free glass, clean rims, and properly wiped door shuts.',
      tag: 'Meticulous Standards',
    },
    {
      id: 'friendly',
      title: 'Friendly Service',
      description: 'Customers frequently praise our welcoming, respectful attitude. We believe great customer care is just as essential as a spotless finish.',
      tag: '5-Star Hospitality',
    },
    {
      id: 'convenience',
      title: 'Local Convenience',
      description: 'Conveniently situated at 1E Alpha Road in Chingford, East London (E4 6TD). An easy-to-reach local facility for motorists across the Chingford area.',
      tag: 'Chingford E4',
    },
  ],
  reviewThemes: [
    {
      title: 'Friendly & Welcoming Staff',
      highlight: 'Warm hospitality praised across multiple reviews',
      description: 'Customers frequently note the polite, accommodating demeanour of the on-site team, creating an easy and positive visit every time.',
      tag: 'Customer Care',
    },
    {
      id: 'thorough-cleaning',
      title: 'Thorough Interior & Exterior Cleaning',
      highlight: 'Inside-and-out cleanliness noted by drivers',
      description: 'Drivers express satisfaction with the complete finish — from deep footwell vacuuming to spotless bodywork and streak-free glass.',
      tag: 'Comprehensive Clean',
    },
    {
      id: 'care-and-time',
      title: 'Careful Attention to Detail',
      highlight: 'Staff take genuine pride in taking time with each car',
      description: 'Multiple reviews highlight that the wash team does not rush vehicles through, dedicating proper time to alloys, door jambs, and tricky corners.',
      tag: 'Quality Focused',
    },
    {
      id: 'overall-experience',
      title: 'Consistently Positive Quality',
      highlight: '5.0-star rating maintained across 76 real reviews',
      description: 'The overall customer sentiment reflects dependable results and strong local word-of-mouth throughout Chingford and East London.',
      tag: '5.0 Google Score',
    },
  ],
  gallery: [
    {
      id: 'gal-1',
      title: 'Active Foam Bath',
      category: 'Foam & Wash',
      imageUrl: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1200&auto=format&fit=crop',
      alt: 'Snow foam pre-wash covering a car body at Chingford Car Wash',
      caption: 'Active snow foam breaks down road traffic film before contact washing begins.',
    },
    {
      id: 'gal-2',
      title: 'Hand Wash Technique',
      category: 'Exterior',
      imageUrl: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1200&auto=format&fit=crop',
      alt: 'Professional hand car wash technician carefully washing a dark luxury vehicle',
      caption: 'Gentle microfibre mitt wash ensuring high-gloss, swirl-safe exterior cleaning.',
    },
    {
      id: 'gal-3',
      title: 'Alloy & Tyre Detailing',
      category: 'Wheels',
      imageUrl: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?q=80&w=1200&auto=format&fit=crop',
      alt: 'Clean alloy wheel and deep satin dressed tyre on a luxury car',
      caption: 'Thorough brake dust removal and rich tyre dressing for sharp contrast.',
    },
    {
      id: 'gal-4',
      title: 'Interior Vacuum & Dash Care',
      category: 'Interior',
      imageUrl: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1200&auto=format&fit=crop',
      alt: 'Clean automobile dashboard, leather seats, and polished interior surfaces',
      caption: 'Detailed dust extraction, console wipe down, and upholstery freshening.',
    },
    {
      id: 'gal-5',
      title: 'High-Pressure Water Rinse',
      category: 'Foam & Wash',
      imageUrl: 'https://images.unsplash.com/photo-1552930294-6b595f4c2974?q=80&w=1200&auto=format&fit=crop',
      alt: 'High pressure water rinsing suds off vehicle bodywork',
      caption: 'Precision pressure rinsing leaves zero residue in body seams and badges.',
    },
    {
      id: 'gal-6',
      title: 'Streak-Free Finish & Gloss',
      category: 'Finish',
      imageUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop',
      alt: 'Spotless reflection on a dark saloon vehicle after a hand wash',
      caption: 'Hand dried with plush microfibres to reveal deep natural paint gloss.',
    },
  ] as GalleryPhoto[],
};
