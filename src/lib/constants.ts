// Site-wide constants
export const SITE_NAME = "Expert India";
export const SITE_TAGLINE = "Consultancy";
export const SITE_FULL_NAME = `The ${SITE_NAME} ${SITE_TAGLINE}`;
export const SITE_SINCE = 2009;
export const SITE_RATING = "4.9/5";
export const SITE_REVIEWS = "Trusted Reviews";
export const SITE_MISSION = "To democratize legal services by making them simple, affordable, and accessible to every business and individual across India, while maintaining the highest standards of quality and compliance.";
export const SITE_COMMITMENT = "Committed to Excellence";
export const SITE_ADDRESS = "123 Business District, Delhi, India";
export const SITE_CITY = "Delhi";
export const SITE_PHONE = "7023314773";
export const SITE_EMAIL = "info@theexpertindia.com";
export const SITE_WHATSAPP = "+91 7023314773";

// Constants for The Expert India Consultancy

export const CONTACT_INFO = {
  phone: SITE_PHONE,
  email: SITE_EMAIL,
  whatsapp: SITE_WHATSAPP,
  address: SITE_ADDRESS,
  city: SITE_CITY
}


// Company Registration Services
export const COMPANY_REGISTRATION = [
  { name: "Private Limited Company", href: "/services/private-company-registration" },
  { name: "Limited Liability Partnership", href: "/services/llp-partnership" },
  { name: "One Person Company", href: "/services/one-person-company-registration" },
  { name: "Public Limited Company", href: "/services/public-limited-company" },
  { name: "Section 8 Company", href: "/services/section-8-company-registration" }
]

// Trademark Services
export const TRADEMARK_SERVICES = [
  { name: "Trademark Registration", href: "/services/trademark-registration" },
  { name: "Trademark Renewal", href: "/services/trademark-renewal" },
  { name: "Trademark Objection Reply", href: "/services/trademark-objection-reply" },
  { name: "Trademark Opposition", href: "/services/trademark-opposition" },
  { name: "Trademark Assignment", href: "/services/trademark-assignment" },
  { name: "Copyright Registration", href: "/services/online-copyright-registration" }
]

// Income Tax & Compliance Services
export const INCOME_TAX_COMPLIANCE = [
  { name: "Income Tax Return Filing", href: "/services/income-tax-return-filing" },
  { name: "PAN Card Application", href: "/services/pan-application" },
  { name: "Annual Return Filing", href: "/services/annual-return-filing" },
  { name: "Tax Planning & Consultation", href: "/services/tax-planning-consulting" },
  { name: "Statutory Audit", href: "/services/statutory-audit" },
  { name: "Internal Audit", href: "/services/internal-audit" },
  { name: "80G & 12A Registration", href: "/services/80g-12a-registration" },
  { name: "CSR Compliance", href: "/services/csr-compliance" },
  { name: "Financial Compliance", href: "/services/financial-compliance" }
]

// GST Services
export const GST_SERVICES = [
  { name: "GST Registration", href: "/services/gst-registration" },
  { name: "GST Return Filing", href: "/services/gst-return-filing" },
  { name: "GST Annual Return", href: "/services/gst-annual-return" },
  { name: "GST Cancellation", href: "/services/gst-cancellation" },
  { name: "GST Amendment", href: "/services/gst-amendment" },
  { name: "E-Way Bill Services", href: "/services/e-way-bill" },
  { name: "GST Compliance", href: "/services/gst-compliance" },
  { name: "Input Tax Credit", href: "/services/input-tax-credit" }
]

// Food License Services
export const FOOD_LICENSE = [
  { name: "FSSAI Basic Registration", href: "/services/fssai-basic-registration" },
  { name: "FSSAI State License", href: "/services/fssai-state-license" },
  { name: "FSSAI Central License", href: "/services/fssai-central-license" },
  { name: "FSSAI License Renewal", href: "/services/fssai-renewal" },
  { name: "FSSAI Amendment", href: "/services/fssai-amendment" },
  { name: "Food Safety Compliance", href: "/services/food-safety-compliance" },
  { name: "FSSAI Annual Return", href: "/services/fssai-annual-return" }
]

// Business Registration Services
export const BUSINESS_REGISTRATION = [
  { name: "Sole Proprietorship", href: "/services/sole-proprietorship" },
  { name: "Partnership Firm", href: "/services/partnership-firm" },
  { name: "MSME Udyam Registration", href: "/services/msme-udyam-registration" },
  { name: "Import Export Code (IEC)", href: "/services/import-export-code" },
  { name: "Trade License", href: "/services/trade-license" },
  { name: "Shop & Establishment License", href: "/services/shop-establishment-license" },
  { name: "PF & ESI Registration", href: "/services/pf-esi-registration" },
  { name: "Labour License", href: "/services/labour-license" },
  { name: "Professional Tax Registration", href: "/services/professional-tax" },
  { name: "Digital Signature Certificate", href: "/services/digital-signature" },
  { name: "ISO Certification", href: "/services/iso-certification" },
  { name: "BIS Registration", href: "/services/bis-registration" }
]

// Loan Services
export const LOAN_SERVICES = [
  { name: "Personal Loan", href: "/services/personal-loan" },
  { name: "Home Loan", href: "/services/home-loan" },
  { name: "Business Loan", href: "/services/business-loan" },
  { name: "MSME Business Loan", href: "/services/msme-loan" },
  { name: "Working Capital Loan", href: "/services/working-capital-loan" },
  { name: "Equipment Finance", href: "/services/equipment-finance" },
  { name: "Project Financing", href: "/services/project-financing" },
  { name: "CMA Data Preparation", href: "/services/cma-report" }
]

// Insurance Services
export const INSURANCE_SERVICES = [
  { name: "Life Insurance", href: "/services/life-insurance" },
  { name: "Health Insurance", href: "/services/health-insurance" },
  { name: "Motor Insurance", href: "/services/motor-insurance" },
  { name: "Business Insurance", href: "/services/business-insurance" },
  { name: "Property Insurance", href: "/services/property-insurance" },
  { name: "Professional Indemnity", href: "/services/professional-indemnity" }
]

export const MAIN_NAVIGATION = [
  {
    title: "Company Registration",
    items: COMPANY_REGISTRATION
  },
  {
    title: "Trademark",
    items: TRADEMARK_SERVICES
  },
  {
    title: "Income Tax & Compliance",
    items: INCOME_TAX_COMPLIANCE
  },
  {
    title: "GST",
    items: GST_SERVICES
  },
  {
    title: "Food License",
    items: FOOD_LICENSE
  },
  {
    title: "Business Registration",
    items: BUSINESS_REGISTRATION
  },
  {
    title: "Loan",
    items: LOAN_SERVICES
  },
  {
    title: "Insurance",
    items: INSURANCE_SERVICES
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
    "Import Export Code (IEC)"
  ],
  "Business Services": [
    "LLP Registration",
    "One Person Company",
    "MSME Udyam Registration",
    "Partnership Firm",
    "ISO Certification"
  ],
  "Tax & Compliance": [
    "Income Tax Return Filing",
    "Annual Return Filing",
    "PAN Card Application",
    "GST Return Filing",
    "Statutory Audit"
  ],
  "Financial Services": [
    "Business Loan",
    "Working Capital Loan",
    "Health Insurance",
    "Professional Indemnity",
    "CMA Data Preparation"
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
    value: "50,000+",
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
  description: `For over 15 years, we've been empowering businesses and individuals with expert legal solutions, making complex legal processes simple, transparent, and accessible to everyone.`,  story: {
    title: "Our Story",
    paragraphs: [
      `Founded in ${SITE_SINCE} with a simple yet powerful vision: to make legal services accessible, transparent, and efficient for everyone. What started as a small team of legal experts has grown into India's leading legal services platform.`,
      "We recognized that traditional legal processes were often complex, time-consuming, and intimidating. Our mission was to bridge this gap by combining legal expertise with technology to create seamless experiences for our clients.",
      `Today, we've successfully served thousands of clients across 28+ cities, maintaining a 99.8% success rate while continuously innovating to serve you better.`
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
  },  cta: {
    title: "Ready to Experience the Difference?",
    description: "Join thousands of satisfied clients who trust us with their legal needs. Get started with a free consultation today.",
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
  },  categories: [
    {
      title: "Trademark",
      description: "Protect your brand identity and intellectual property",
      image: "/images/services/trademark.png"
    },
    {
      title: "Income Tax & Compliance", 
      description: "Complete tax planning and compliance solutions",
      image: "/images/services/tax-compliance.png"
    },
    {
      title: "GST",
      description: "Complete GST registration and compliance solutions", 
      image: "/images/services/gst-services.png"
    },
    {
      title: "Food License",
      description: "FSSAI registration and food safety licenses",
      image: "/images/services/licenses.png"
    },
    {
      title: "Business Registration",
      description: "MSME, import-export, and business setup services",
      image: "/images/services/company-registration.png"
    },
    {
      title: "Loan",
      description: "Personal, business, and specialized loan services",
      image: "/images/services/gst-services.png"
    },
    {
      title: "Insurance",
      description: "Life, health, vehicle, and business insurance",
      image: "/images/services/licenses.png"
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
  subtitle: "The Expert India - Leading Solutions Made Simple",
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
  ],  stats: [
    {
      icon: "Users",
      label: "Happy Clients",
      value: "50,000+",
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
    title: `Why Choose ${SITE_FULL_NAME}?`,
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
  badge: `About ${SITE_FULL_NAME}`,
  title: "Leading Legal Service Provider Since 2009",
  subtitle: "Your trusted partner for all legal and compliance needs",
  description: "With over 15 years of experience, we have helped thousands of businesses and individuals with their legal requirements. Our team of expert lawyers and chartered accountants ensure that your legal matters are handled with utmost care and professionalism.",
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
  ],  achievements: [
    {
      number: "50,000+",
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
  mission: SITE_MISSION,  cta: {
    title: "Ready to Get Started?",
    description: "Join thousands of satisfied customers who trust us with their legal needs",
    button: "Start Your Journey"
  }
};
