// Site-wide constants
export const SITE_NAME = "Expert Legal";
export const SITE_TAGLINE = "India";
export const SITE_FULL_NAME = `${SITE_NAME} ${SITE_TAGLINE}`;
export const SITE_SINCE = 2009;
export const SITE_RATING = "4.9/5";
export const SITE_REVIEWS = "50,000+ reviews";
export const SITE_MISSION = "To democratize legal services by making them simple, affordable, and accessible to every business and individual across India, while maintaining the highest standards of quality and compliance.";
export const SITE_COMMITMENT = "Committed to Excellence";
export const SITE_ADDRESS = "123 Business District, Delhi, India";
export const SITE_CITY = "Delhi";
export const SITE_PHONE = "08069029400";
export const SITE_EMAIL = "info@expertlegalindia.com";
export const SITE_WHATSAPP = "+91 8069029400";

// Constants for Expert Legal India

export const CONTACT_INFO = {
  phone: SITE_PHONE,
  email: SITE_EMAIL,
  whatsapp: SITE_WHATSAPP,
  address: SITE_ADDRESS,
  city: SITE_CITY
}


export const BUSINESS_REGISTRATION = [
  { name: "Company Registration", href: "/services/company-registration" },
  { name: "Private Limited Company", href: "/services/private-limited-company" },
  { name: "Limited Liability Partnership", href: "/services/llp-registration" },
  { name: "One Person Company", href: "/services/one-person-company" },
  { name: "Public Limited Company", href: "/services/public-limited-company" },
  { name: "Section 8 Company", href: "/services/section-8-company" }
]

export const TRADEMARK_SERVICES = [
  { name: "Trademark Registration", href: "/services/trademark-registration" },
  { name: "Trademark Renewal", href: "/services/trademark-renewal" },
  { name: "Trademark Objection Reply", href: "/services/trademark-objection-reply" },
  { name: "Trademark Opposition", href: "/services/trademark-opposition" },
  { name: "Trademark Assignment", href: "/services/trademark-assignment" },
  { name: "Logo Design", href: "/services/logo-design" },
  { name: "Copyright Registration", href: "/services/online-copyright-registration" }
]

export const LICENSES = [
  { name: "FSSAI Registration", href: "/services/fssai-registration" },
  { name: "FSSAI Renewal", href: "/services/fssai-renewal" },
  { name: "Import Export Code", href: "/services/iec-registration" },
  { name: "IEC Modification", href: "/services/iec-modification" },
  { name: "ISO Certification", href: "/services/iso-certification" }
]

export const GST_SERVICES = [
  { name: "GST Registration", href: "/services/gst-registration" },
  { name: "GST Filing", href: "/services/gst-filing" },
  { name: "GST Modification", href: "/services/gst-modification" },
  { name: "GST Cancellation", href: "/services/gst-cancellation" },
  { name: "GSTR-9 Annual Filing", href: "/services/gstr-9-filing" }
]

export const TAX_COMPLIANCE = [
  { name: "PF-ESIC Registration", href: "/services/pf-esic-registration" },
  { name: "PF-ESIC Return Filing", href: "/services/pf-esic-filing" },
  { name: "Income Tax Return", href: "/services/itr-filing" },
  { name: "Annual Compliance", href: "/services/annual-compliance" },
  { name: "Online Bookkeeping", href: "/services/bookkeeping" }
]

export const MAIN_NAVIGATION = [
  {
    title: "Company Registration",
    items: BUSINESS_REGISTRATION
  },
  {
    title: "Trademark",
    items: TRADEMARK_SERVICES
  },
  {
    title: "Licenses",
    items: LICENSES
  },
  {
    title: "GST Services",
    items: GST_SERVICES
  },
  {
    title: "Tax & Compliance",
    items: TAX_COMPLIANCE
  }
]

export const QUICK_LINKS = [
  { name: "About Us", href: "/about" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
  { name: "Careers", href: "/careers" }
]

export const SOCIAL_LINKS = [
  { name: "Facebook", href: "#", icon: "facebook" },
  { name: "Twitter", href: "#", icon: "twitter" },
  { name: "LinkedIn", href: "#", icon: "linkedin" },
  { name: "Instagram", href: "#", icon: "instagram" },
  { name: "YouTube", href: "#", icon: "youtube" }
]

// Footer Links
export const FOOTER_SERVICES = {
  "Popular Services": [
    "Private Limited Company Registration",
    "Trademark Registration", 
    "GST Registration",
    "FSSAI License",
    "IEC Registration"
  ],
  "Business Setup": [
    "LLP Registration",
    "One Person Company",
    "Partnership Registration",
    "Sole Proprietorship",
    "Section 8 Company"
  ],  "Compliance": [
    "Annual Filing",
    "Income Tax Return",
    "PF Registration",
    "Professional Tax",
    "TDS Return Filing"
  ]
}

export const FOOTER_CTA = {
  title: "Need Immediate Legal Assistance?",
  description: "Our expert legal team is available 24/7 to help you with urgent legal matters.",
  primaryButton: "Call Now",
  secondaryButton: "WhatsApp Chat"
}

// About Page Data
export const ABOUT_STATS = [
  {
    icon: "Users",
    label: "Happy Clients",
    value: "1,00,000+",
    description: "Satisfied customers across India",
  },
  {
    icon: "Award",
    label: "Years Experience",
    value: "15+",
    description: "Proven track record in legal services",
  },
  {
    icon: "Shield",
    label: "Success Rate",
    value: "99.8%",
    description: "Client satisfaction guaranteed",
  },
  {
    icon: "Globe",
    label: "Cities Served",
    value: "28+",
    description: "Pan-India service coverage",
  },
]

export const ABOUT_VALUES = [
  {
    icon: "Target",
    title: "Excellence",
    description: "We deliver exceptional legal services with precision and expertise",
  },
  {
    icon: "Shield",
    title: "Trust",
    description: "Building lasting relationships through transparency and reliability",
  },
  {
    icon: "Heart",
    title: "Client-First",
    description: "Your success is our priority, every step of the way",
  },
  {
    icon: "TrendingUp",
    title: "Innovation",
    description: "Leveraging technology to streamline legal processes",
  },
]

export const ABOUT_CONTENT = {
  badge: `About ${SITE_FULL_NAME}`,
  headline: "India's Most Trusted Legal Services Platform",
  description: `For over 15 years, we've been empowering businesses and individuals with expert legal solutions, making complex legal processes simple, transparent, and accessible to everyone.`,
  story: {
    title: "Our Story",
    paragraphs: [
      `Founded in ${SITE_SINCE} with a simple yet powerful vision: to make legal services accessible, transparent, and efficient for everyone. What started as a small team of legal experts has grown into India's leading legal services platform.`,
      "We recognized that traditional legal processes were often complex, time-consuming, and intimidating. Our mission was to bridge this gap by combining legal expertise with technology to create seamless experiences for our clients.",
      `Today, we've successfully served over 1 lakh clients across 28+ cities, maintaining a 99.8% success rate while continuously innovating to serve you better.`
    ],
    rating: {
      score: SITE_RATING,
      subtitle: `From ${SITE_REVIEWS}`
    }
  },
  mission: {
    title: "Our Mission",
    description: SITE_MISSION,
    commitment: SITE_COMMITMENT
  },
  values: {
    title: "Our Core Values",
    subtitle: "The principles that guide everything we do and shape our commitment to your success"
  },
  cta: {
    title: "Ready to Experience the Difference?",
    description: "Join over 1 lakh satisfied clients who trust us with their legal needs. Get started with a free consultation today.",
    primaryButton: "Get Free Consultation",
    secondaryButton: "Explore Services"
  }
}

// Services Page Data
export const SERVICES_CONTENT = {
  header: {
    badge: "Our Services",
    headline: "Complete Legal Solutions for Your Business",
    description: "From business registration to ongoing compliance, we provide end-to-end legal services to help your business thrive in today's competitive landscape."
  },
  featured: {
    title: "Company Registration Services",
    description: "Start your entrepreneurial journey with our comprehensive business registration services. We handle all the paperwork so you can focus on building your dream company.",
    badge: "Most Popular",
    button: "Start Registration"
  },
  categories: [
    {
      title: "Trademark",
      description: "Protect your brand identity and intellectual property",
      image: "/images/services/trademark.png"
    },
    {
      title: "Licenses", 
      description: "Get all required licenses for seamless business operations",
      image: "/images/services/licenses.png"
    },
    {
      title: "GST Services",
      description: "Complete GST registration and compliance solutions", 
      image: "/images/services/gst-services.png"
    },
    {
      title: "Tax & Compliance",
      description: "Stay compliant with all tax and regulatory requirements",
      image: "/images/services/tax-compliance.png"
    }
  ],
  popularServices: {
    title: "Quick Access to Popular Services",
    description: "Our most requested services - get started instantly"
  },
  cta: {
    badge: "Expert Support",
    title: "Need Help Choosing the Right Service?",
    description: "Our legal experts are here to guide you through the best services for your specific business needs.",
    primaryButton: "Get Free Consultation",
    secondaryButton: "View All Services"
  }
}

// Homepage Hero Section Constants
export const HERO_SECTION = {
  badge: {
    text: "Trusted Legal Services",
    icon: "Award"
  },
  title: "Your Trusted Partner for All Legal Services",
  subtitle: "Expert Legal Solutions Made Simple",
  description: "From company registration to trademark protection, we provide comprehensive legal services with expert guidance and affordable pricing. Get your business legally compliant in just a few steps.",
  rating: {
    score: SITE_RATING,
    reviews: SITE_REVIEWS
  },
  features: [
    "100% Online Process",
    "Expert Legal Guidance",
    "Affordable Pricing",
    "Quick Processing",
    "Government Approved",
    "24/7 Support"
  ],
  stats: [
    {
      icon: "Users",
      label: "Happy Clients",
      value: "1,00,000+",
      color: "text-blue-600"
    },
    {
      icon: "Award", 
      label: "Years Experience",
      value: "15+",
      color: "text-green-600"
    },
    {
      icon: "Shield",
      label: "Success Rate", 
      value: "99.8%",
      color: "text-purple-600"
    },
    {
      icon: "Clock",
      label: "Avg. Processing",
      value: "7 Days",
      color: "text-orange-600"
    }
  ],
  cta: {
    primary: {
      text: "Get Started Now",
      icon: "ArrowRight"
    },
    secondary: {
      text: "Call Expert Now",
      icon: "Phone"
    },
    whatsapp: {
      text: "WhatsApp Chat", 
      icon: "MessageCircle"
    }
  },
  trust: {
    title: "Why Choose Expert Legal India?",
    points: [
      {
        icon: "Shield",
        title: "100% Secure & Confidential", 
        description: "Your data is protected with bank-grade security"
      },
      {
        icon: "Users",
        title: "Expert Team",
        description: "Qualified lawyers and chartered accountants"
      },
      {
        icon: "Clock", 
        title: "Quick Processing",
        description: "Fast and efficient service delivery"
      },
      {
        icon: "Award",
        title: "Government Approved",
        description: "All services are government compliant"
      }
    ]
  }
};

// Homepage Services Section Constants  
export const HOMEPAGE_SERVICES = {
  title: "Our Popular Legal Services",
  subtitle: "Comprehensive legal solutions for individuals and businesses",
  description: "We offer a wide range of legal services to help you start, run, and grow your business with confidence.",
  services: [
    {
      id: "company-registration",
      title: "Company Registration", 
      description: "Register your company online with expert guidance",
      icon: "Building2",
      price: "From ₹1,999",
      features: ["Quick Registration", "Expert Support", "Document Assistance"],
      link: "/services/company-registration",
      popular: true
    },
    {
      id: "trademark-registration",
      title: "Trademark Registration",
      description: "Protect your brand with trademark registration", 
      icon: "Shield",
      price: "From ₹2,999",
      features: ["Brand Protection", "Legal Rights", "Expert Filing"],
      link: "/services/trademark-registration",
      popular: true
    },
    {
      id: "gst-registration", 
      title: "GST Registration",
      description: "Get your GST registration done quickly",
      icon: "FileText",
      price: "From ₹999", 
      features: ["Fast Processing", "Expert Guidance", "Compliance Support"],
      link: "/services/gst-registration",
      popular: false
    },
    {
      id: "trademark-renewal",
      title: "Trademark Renewal",
      description: "Renew your trademark before expiration",
      icon: "RefreshCw", 
      price: "From ₹1,999",
      features: ["Renewal Support", "Expert Filing", "Document Assistance"],
      link: "/services/trademark-renewal",
      popular: false
    }
  ],
  cta: {
    title: "Looking for Other Services?",
    description: "We offer 50+ legal and compliance services",
    button: "View All Services"
  }
};

// Homepage About Section Constants
export const HOMEPAGE_ABOUT = {
  badge: "About Expert Legal India",
  title: "Leading Legal Service Provider Since 2009",
  subtitle: "Your trusted partner for all legal and compliance needs",
  description: "With over 15 years of experience, we have helped more than 1,00,000 businesses and individuals with their legal requirements. Our team of expert lawyers and chartered accountants ensure that your legal matters are handled with utmost care and professionalism.",
  features: [
    {
      icon: "Users",
      title: "Expert Team",
      description: "Qualified lawyers, chartered accountants and legal experts"
    },
    {
      icon: "Shield", 
      title: "Trusted & Secure",
      description: "Government approved services with complete data security"
    },
    {
      icon: "Clock",
      title: "Quick Processing", 
      description: "Fast and efficient service delivery with real-time tracking"
    },
    {
      icon: "Award",
      title: "Quality Assured",
      description: "99.8% success rate with guaranteed quality and compliance"
    }
  ],
  achievements: [
    {
      number: "1,00,000+",
      label: "Happy Clients"
    },
    {
      number: "50+", 
      label: "Legal Services"
    },
    {
      number: "15+",
      label: "Years Experience"
    },
    {
      number: "99.8%",
      label: "Success Rate"
    }
  ],
  mission: SITE_MISSION,
  cta: {
    title: "Ready to Get Started?",
    description: "Join thousands of satisfied customers who trust us with their legal needs",
    button: "Start Your Journey"
  }
};
