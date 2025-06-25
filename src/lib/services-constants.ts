// Service-specific constants for company registration and other services
import { SITE_FULL_NAME } from './constants';

export const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh", 
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Puducherry"
];

export const COMPANY_REGISTRATION_HERO = {
  badge: "Company Registration Services",
  title: "Start Your Business Journey",
  subtitle: "Professional Company Registration",
  description: "Choose from multiple business structures and get registered with complete legal compliance. Our expert team ensures seamless registration process.",
  rating: {
    score: "4.9/5",
    reviews: "1,00,000+ reviews"
  },
  features: [
    "Multiple Business Structures",
    "Expert Legal Guidance", 
    "Complete Documentation Support",
    "Fast Processing",
    "End-to-End Service"
  ],
  pricing: {
    consultation: "₹999",
    consultationLabel: "Starting Price",
    consultationDescription: "Professional consultation included"
  },
  trustIndicators: [
    {
      title: "Fast Processing",
      subtitle: "Quick Turnaround"
    },
    {
      title: "100% Legal",
      subtitle: "Government Approved"
    }
  ],
  form: {
    title: "Get Callback for Registration",
    subtitle: "Choose your business type and get expert guidance",
    fields: {
      name: "Full Name",
      mobile: "Mobile Number", 
      email: "Email Address",
      state: "Select Your State",
      companyType: "Select Company Type"
    },
    placeholders: {
      name: "Enter your full name",
      mobile: "+91 XXXXX XXXXX",
      email: "your@email.com",
      companyType: "Choose company type",
      state: "Choose your state"
    },
    button: "Get Callback Now",
    note: "Our experts will call you within 30 minutes",
    terms: {
      termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
      commsLabel: "I agree to receive calls and SMS for registration updates"
    }
  }
};

export const COMPANY_TYPES = [
  "Private Limited Company",
  "One Person Company (OPC)",
  "Limited Liability Partnership (LLP)", 
  "Section 8 (NGO Registration)",
  "Public Limited Company"
];

export const COMPANY_REGISTRATION_BENEFITS = [
  {
    title: "Limited Liability Protection",
    description: "Protect your personal assets from business liabilities"
  },
  {
    title: "Tax Benefits",
    description: "Enjoy various tax deductions and benefits"
  },
  {
    title: "Credibility & Trust", 
    description: "Build trust with customers, vendors, and investors"
  },
  {
    title: "Easy Funding",
    description: "Access to loans, investments, and government schemes"
  }
];

export const COMPANY_REGISTRATION_OVERVIEW = {
  title: "Complete Guide to Company Registration in India",
  subtitle: "Everything you need to know about starting your business",
  content: {
    introduction: {
      title: "Overview of Online Company Registration in India",
      description: "Company registration is an essential process for entrepreneurs to establish a legitimate business entity. There are various types of companies in India, and business owners must select the appropriate structure for their specific needs. All companies in India are regulated under the Ministry of Corporate Affairs, making the registration process standardized and secure.",
      features: [
        "100% online registration process",
        "Multiple company structure options",
        "Government-regulated and secure",
        "Professional expert guidance included"
      ]
    },
    incorporation: {
      title: "What is Company Incorporation?",
      description: "Company incorporation is the legal process of establishing a company as a separate legal entity. This process creates a distinction between the company's assets and liabilities from those of its owners and investors, providing crucial legal protection.",
      benefits: [
        "Legal entity status",
        "Asset protection",
        "Tax advantages",
        "Enhanced credibility"
      ]
    },    whyChooseUs: {
      title: `Why Choose ${SITE_FULL_NAME}?`,
      reasons: [
        "Government of India recognized company",
        "ISO certified services",
        "Super-fast processing",
        "Most affordable rates in the market",
        "24/7 quick response team",
        "On-time service delivery",
        "Professional and trained experts",
        "Over 1 lakh satisfied customers",
        "Secure data protection and privacy"
      ]
    }
  }
};

export const REQUIRED_DOCUMENTS = [
  {
    title: "Passport Size Photograph",
    description: "3 copies of recent passport size photographs of all directors",
    icon: "User"
  },
  {
    title: "PAN Card",
    description: "Valid PAN card of all directors and shareholders",
    icon: "CreditCard"
  },
  {
    title: "Address Proof",
    description: "Current address proof matching with PAN card details",
    icon: "MapPin"
  },
  {
    title: "Aadhaar Card",
    description: "Government-issued identity proof with photograph",
    icon: "FileText"
  },
  {
    title: "Electricity Bill",
    description: "Recent utility bill not older than 3 months",
    icon: "Zap"
  },
  {
    title: "NOC Certificate",
    description: "No Objection Certificate from local authorities (if required)",
    icon: "Shield"
  }
];

export const COMPANY_TYPES_DETAILED = [
  {
    id: "private-limited",
    title: "Private Limited Company",
    subtitle: "Most Popular Choice",
    description: "Ideal for startups and growing businesses with limited liability protection",
    features: ["2-200 members", "Limited liability", "Easy funding", "Tax benefits"],
    icon: "Building2",
    route: "/services/private-limited-company"
  },
  {
    id: "opc",
    title: "One Person Company (OPC)",
    subtitle: "Solo Entrepreneurs",
    description: "Perfect for single entrepreneurs who want corporate benefits",
    features: ["Single owner", "Limited liability", "Easy compliance", "Corporate status"],
    icon: "User",
    route: "/services/one-person-company"
  },
  {
    id: "llp",
    title: "Limited Liability Partnership",
    subtitle: "Professional Services",
    description: "Ideal for professional services and partnerships",
    features: ["2+ partners", "Limited liability", "Flexible structure", "Tax efficient"],
    icon: "Users",
    route: "/services/llp-registration"
  },
  {
    id: "section8",
    title: "Section 8 Company",
    subtitle: "Non-Profit Organizations",
    description: "For NGOs and non-profit organizations",
    features: ["Non-profit", "Tax exemptions", "Social impact", "Government support"],
    icon: "Heart",
    route: "/services/section-8-company"
  },
  {
    id: "public-limited",
    title: "Public Limited Company",
    subtitle: "Large Enterprises",
    description: "For large businesses planning to go public",
    features: ["7+ members", "Public funding", "Share trading", "High credibility"],
    icon: "TrendingUp",
    route: "/services/public-limited-company"
  },
  {
    id: "business-license",
    title: "Business License",
    subtitle: "Trade License",
    description: "Basic business license for small trading activities",
    features: ["Quick setup", "Low cost", "Simple compliance", "Local operations"],
    icon: "FileCheck",
    route: "/services/business-license"
  }
];

export const COMPANY_COMPARISON_TABLE = {
  title: "Compare Different Business Structures",
  subtitle: "Choose the right structure for your business needs",
  headers: [
    "Features",
    "Private Limited",
    "One Person Company",
    "LLP",
    "Partnership",
    "Proprietorship"
  ],
  rows: [
    {
      feature: "Governing Act",
      values: [
        "Companies Act, 2013",
        "Companies Act, 2013", 
        "LLP Act, 2008",
        "Partnership Act, 1932",
        "No specific Act"
      ]
    },
    {
      feature: "Registration",
      values: ["Mandatory", "Mandatory", "Mandatory", "Optional", "Not Required"]
    },
    {
      feature: "Members",
      values: ["2-200", "1", "2-Unlimited", "2-50", "1"]
    },
    {
      feature: "Directors/Partners",
      values: ["2-15", "1", "2-Unlimited", "2-Unlimited", "1"]
    },
    {
      feature: "Legal Entity",
      values: ["Yes", "Yes", "Yes", "No", "No"]
    },
    {
      feature: "Liability",
      values: ["Limited", "Limited", "Limited", "Unlimited", "Unlimited"]
    },
    {
      feature: "Audit Required",
      values: ["Yes", "Yes", "Conditional", "No", "No"]
    },
    {
      feature: "Ownership Transfer",
      values: ["Yes", "No", "Yes", "No", "No"]
    },
    {
      feature: "Foreign Investment",
      values: ["Allowed", "Not Allowed", "Allowed", "Not Allowed", "Not Allowed"]
    },
    {
      feature: "Tax Rate",
      values: ["Moderate", "Moderate", "High", "High", "Low"]
    }
  ]
};

export const REGISTRATION_PROCESS = {
  title: "How We Help You Register Your Company",
  subtitle: "Simple 4-step process to get your business registered",
  steps: [
    {
      step: "01",
      title: "Digital Signature Certificate",
      description: "Obtain DSC for all directors to digitally sign documents",
      icon: "FileSignature"
    },
    {
      step: "02", 
      title: "Director Identification Number",
      description: "Get unique DIN for each director from MCA portal",
      icon: "UserCheck"
    },
    {
      step: "03",
      title: "Reserve Company Name",
      description: "Check and reserve your preferred company name",
      icon: "Search"
    },
    {
      step: "04",
      title: "File Incorporation Documents",
      description: "Submit all required documents and get certificate",
      icon: "FileCheck"
    }
  ],
  timeline: "Complete registration in 15 working days",
  support: "Expert guidance at every step"
};

export const COMPANY_REGISTRATION_FAQ = [
  {
    question: "How many types of company registrations are available in India?",
    answer: "There are 6 main types: Private Limited Company, One Person Company (OPC), Limited Liability Partnership (LLP), Partnership Registration, Public Limited Company, and Section 8 (Non-Profit) Company."
  },
  {
    question: "Is the company registration process completely online?",
    answer: "Yes, the entire process is 100% online. Most registrations are completed within 1-5 days through our streamlined digital process."
  },
  {
    question: "Can I register a company at my residential address?",
    answer: "Yes, you can register your company at your residential address. There are no restrictions on using residential properties as registered office addresses."
  },
  {
    question: "What is DSC (Digital Signature Certificate)?",
    answer: "DSC is a Digital Signature Certificate used to digitally sign documents during the online registration process. It's mandatory for all directors."
  },
  {
    question: "What is DIN (Director Identification Number)?",
    answer: "DIN is a unique Director Identification Number assigned to each director by the Ministry of Corporate Affairs. It's required for all company directors."
  },
  {
    question: "What are Articles of Association (AOA)?",
    answer: "AOA provides the framework for company management by directors. It outlines directors' powers, board meeting procedures, share allotment rules, and shareholder rights."
  },
  {
    question: "What is a Certificate of Incorporation?",
    answer: "This is an official certificate issued by the Registrar of Companies documenting the company's legal incorporation, including company name, number, and incorporation date."
  },
  {
    question: "What is SPICe+ Form?",
    answer: "SPICe+ (Simplified Proforma for Incorporating Company Electronically) is an advanced form connecting 3 central ministries, providing 10 essential services for company registration in a single application."
  },
  {
    question: "How much time does company registration take?",
    answer: "Standard company registration takes around 15 working days. However, with our fast-track service, it can be completed in 7-10 working days."
  },
  {
    question: "What is the minimum capital required for company registration?",
    answer: "There is no minimum capital requirement for private limited companies under the Companies Act 2013. You can start with any amount as authorized capital."
  }
];

export const TRADEMARK_REGISTRATION_HERO = {
  badge: "Trademark Registration Services",
  title: "Protect Your Brand Identity",
  subtitle: "Professional Trademark Registration",
  description: "Register your trademark online seamlessly with government approval. Get exclusive rights to protect your logo, symbol, and brand identity.",
  rating: {
    score: "4.9/5",
    reviews: "1,00,000+ reviews"
  },
  features: [
    "Exclusive Brand Protection",
    "Expert Legal Guidance", 
    "Complete Documentation Support",
    "Fast Processing",
    "Government Approved"
  ],
  pricing: {
    consultation: "₹1,999",
    consultationLabel: "Starting Price",
    consultationDescription: "Professional consultation included"
  },
  trustIndicators: [
    {
      title: "50% Discount",
      subtitle: "For MSME/SSI Certificate Holders"
    },
    {
      title: "100% Legal",
      subtitle: "Government Approved"
    }
  ],
  form: {
    title: "Need Consultation on Trademark Registration?",
    subtitle: "Fill up the form to get expert consultation",
    fields: {
      name: "Your Name",
      mobile: "Your Phone Number (Without 0 or +91)", 
      email: "Your Email Address",
      state: "Select Your State",
      trademarkType: "Select Trademark Type"
    },
    placeholders: {
      name: "Enter your full name",
      mobile: "XXXXX XXXXX",
      email: "your@email.com",
      trademarkType: "Choose trademark type",
      state: "Choose your state"
    },
    button: "Get Consultation Now",
    note: "Our experts will call you within 30 minutes",
    terms: {
      termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
      commsLabel: "I agree to receive calls and SMS for registration updates"
    }
  }
};

export const TRADEMARK_TYPES = [
  "TM - Trademark",
  "SM - Service Mark", 
  "R - Register Mark",
  "C - Copyright"
];

export const TRADEMARK_OVERVIEW = {
  title: "Complete Guide to Trademark Registration in India",
  subtitle: "Everything you need to know about protecting your brand",
  content: {
    introduction: {
      title: "Overview of Online Trademark Registration in India",
      description: "A trademark is any mark, logo, name, symbol, letter, figure, or word used by any individual or firm to uniquely identify its goods or services from those made or sold by others. Trademark registration gives you exclusive rights to protect your brand identity.",
      features: [
        "100% online registration process",
        "Exclusive brand protection rights",
        "Government-regulated and secure",
        "Professional expert guidance included"
      ]
    },
    eligibility: {
      title: "Eligibility Criteria for Trademark Registration",
      description: "In India, anybody who claims to be the trademark owner, whether an individual, proprietor, corporation or other legal organisation, can apply for a trademark. The trademark application process takes 6-18 months depending on objections.",
      benefits: [
        "Any individual or business entity",
        "Current or intended future use",
        "Unique and distinctive mark",
        "Valid for 10 years (renewable)"
      ]
    },    whyChooseUs: {
      title: `Why Choose ${SITE_FULL_NAME} for Trademark Registration?`,
      reasons: [
        "Government of India recognized company",
        "ISO certified services", 
        "Super-fast processing",
        "Most affordable rates in the market",
        "24/7 quick response team",
        "On-time service delivery",
        "Professional and trained experts",
        "Over 1 lakh satisfied customers",
        "Secure data protection and privacy"
      ]
    }
  }
};

export const TRADEMARK_BENEFITS = [
  {
    title: "Exclusive Rights",
    description: "Get complete control over your trademark with exclusive usage rights",
    icon: "Shield"
  },
  {
    title: "Legal Protection", 
    description: "Sue for unauthorized violation and prevent trademark infringement",
    icon: "Scale"
  },
  {
    title: "Brand Recognition",
    description: "Build trust and loyalty with customers through registered trademark",
    icon: "Award"
  },
  {
    title: "Asset Creation",
    description: "Create valuable intellectual property that can be sold or licensed",
    icon: "TrendingUp"
  },
  {
    title: "Global Protection",
    description: "Use Indian registration as foundation for international trademark",
    icon: "Globe"
  },
  {
    title: "Use ® Symbol",
    description: "Display registered trademark symbol to show legal protection",
    icon: "CheckCircle"
  }
];

export const TRADEMARK_APPLICANT_TYPES = [
  {
    id: "individual",
    title: "Any Individual Person",
    subtitle: "Personal Trademark",
    description: "Individual persons not currently in business can apply for future use",
    features: ["Future use allowed", "Personal ownership", "Simple process", "Quick registration"],
    icon: "User"
  },
  {
    id: "partnership", 
    title: "Partnership Firm",
    subtitle: "Business Partnership",
    description: "Partnership business with maximum 10 members can apply jointly",
    features: ["Joint ownership", "All partners listed", "Shared rights", "Business entity"],
    icon: "Users"
  },
  {
    id: "company",
    title: "Indian Corporation", 
    subtitle: "Corporate Entity",
    description: "Any Indian company must file trademark application in company name",
    features: ["Corporate ownership", "Legal entity", "Business protection", "Professional identity"],
    icon: "Building2"
  },
  {
    id: "llp",
    title: "LLP (Limited Liability Partnership)",
    subtitle: "LLP Entity",
    description: "Limited Liability Partnership with separate legal identity",
    features: ["LLP ownership", "Legal entity", "Partner protection", "Professional services"],
    icon: "Briefcase"
  },
  {
    id: "trust",
    title: "Society or Trust",
    subtitle: "Non-Profit Entity", 
    description: "Trust or society through managing trustee or secretary",
    features: ["Non-profit", "Social impact", "Trust ownership", "Community service"],
    icon: "Heart"
  },
  {
    id: "foreign",
    title: "Foreign Corporation",
    subtitle: "International Entity",
    description: "Foreign companies can register trademark with Indian address",
    features: ["Global presence", "Indian operations", "Foreign investment", "International trade"],
    icon: "Globe"
  }
];

export const TRADEMARK_PROCESS = {
  title: "Step-by-Step Trademark Registration Process",
  subtitle: "Complete trademark registration in 6-18 months",
  steps: [
    {
      step: "01",
      title: "Trademark Search", 
      description: "Comprehensive search to ensure your mark is unique and available",
      icon: "Search"
    },
    {
      step: "02",
      title: "Application Filing",
      description: "File trademark application with required documents and fees",
      icon: "FileText"
    },
    {
      step: "03", 
      title: "Examination Process",
      description: "Government examination for compliance and uniqueness verification",
      icon: "FileSearch"
    },
    {
      step: "04",
      title: "Publication & Registration",
      description: "Publication in trademark journal and final registration certificate",
      icon: "Award"
    }
  ],
  timeline: "Complete registration in 6-18 months",
  support: "Expert guidance throughout the process"
};

export const TRADEMARK_CLASSES_INFO = {
  title: "Trademark Classes in India",
  subtitle: "Choose the right class for your goods and services",
  description: "There are 45 trademark classes in India. Classes 1-34 are for goods, and classes 35-45 are for services.",
  popularClasses: [
    {
      class: "Class 9",
      title: "Electronics & Software",
      description: "Mobile software (Apps), electronics, computers, digital products"
    },
    {
      class: "Class 25", 
      title: "Clothing & Apparel",
      description: "Readymade clothing, footwear, fashion accessories"
    },
    {
      class: "Class 35",
      title: "Business & Advertising", 
      description: "Business management, advertising, online retail, e-commerce"
    },
    {
      class: "Class 41",
      title: "Education & Entertainment",
      description: "Educational services, entertainment, training, publishing"
    }
  ]
};

export const TRADEMARK_PRICING = [
  {
    id: "basic",
    title: "Basic",
    price: "₹1,999",
    recommended: false,
    features: [
      "Trademark Application Filing",
      "Free Class Search", 
      "Free TM Consultation By Expert",
      "Drafting & Filing by TM Expert",
      "Use TM next to your brand",
      "EMI Facility",
      "Call, Chat, Email Support",
      "No hidden charges"
    ],
    excludes: []
  },
  {
    id: "standard",
    title: "Standard", 
    price: "₹4,999",
    recommended: false,
    features: [
      "Trademark Application Filing",
      "Creative Logo Design (3 choices)",
      "Expertise TM Search Report",
      "Free Class Search",
      "Free Consultation till you get TM Mark",
      "Drafting & Filing by TM Expert", 
      "Use TM next to your brand",
      "EMI Facility",
      "Call, Chat, Email Support",
      "No hidden charges"
    ],
    excludes: []
  },
  {
    id: "premium",
    title: "Premium",
    price: "₹11,999", 
    recommended: true,
    features: [
      "Trademark Application Filing",
      "Expertise TM Search Report",
      "Free Class Search",
      "Free Consultation till you get TM Mark",
      "Drafting & Filing by TM Expert",
      "Use TM next to your brand", 
      "Trademark Objection Reply",
      "Trademark Hearing",
      "EMI Facility",
      "Call, Chat, Email Support",
      "No hidden charges"
    ],
    excludes: []
  },
  {
    id: "allinone",
    title: "All In One",
    price: "₹14,999",
    recommended: false,
    features: [
      "Trademark Application Filing",
      "Creative Logo Design (3 choices)",
      "Expertise TM Search Report", 
      "Free Class Search",
      "Free Consultation till you get TM Mark",
      "Drafting & Filing by TM Expert",
      "Use TM next to your brand",
      "Trademark Objection Reply",
      "Trademark Hearing",
      "EMI Facility", 
      "Call, Chat, Email Support",
      "No hidden charges"
    ],
    excludes: []
  }
];

export const TRADEMARK_FAQ = [
  {
    question: "What is a Trademark?",
    answer: "Trademark is an intellectual property consisting of recognizable sign or design in order to identify products or services from a specific source, although trademarks that are used to identify services are called service marks."
  },
  {
    question: "What can be registered as a Trademark?",
    answer: "A trademark is basically any word, name, symbol etc. which is used to identify and distinguish products or services of one specific seller or service provider from those of other competitors in the market. It also indicates the source of the products or services."
  },
  {
    question: "What is Trademark class?",
    answer: "A Trademark classification is a procedure by which examiners and the trademark attorneys arrange the required documents including trademark and service mark application, according to the description of goods to which the marks are applicable."
  },
  {
    question: "How long Does it take to file a Trademark application?",
    answer: "Filing a Trademark application usually takes around 6-18 months. If there are no objections, it can be completed in 6-8 months. In case of objections, it might take up to 18 months."
  },
  {
    question: "When Can I Use ™ Symbol?",
    answer: "Once the trademark application is successful, you receive an acknowledgement providing you the right to use the TM symbol. After the registration of it, you can use the ® symbol."
  },
  {
    question: "What if someone has a similar word trademarked?",
    answer: "Though you can't get the word but still all is not lost. You can design a unique logo instead for your business and include the name in it. A prefix could also be permissible. This is known as a logo composite mark."
  },
  {
    question: "How long is a registered trademark valid for?",
    answer: "Registered Trademarks are valid for 10 years from the date of filing the application. The trademark owner can file for renewal of the trademark to keep it protected for more time prior to the end of the validity."
  },
  {
    question: "What are the different kinds of trademarks I can have?",
    answer: "You can register: A name (personal or surname), newly coined words, alphanumeric combinations, images/symbols/monograms, 3D shapes, sound marks in audio format, and other distinctive marks."
  },
  {
    question: "Do you guarantee approval of my trademark?", 
    answer: "The approval of the trademark completely depends on the judgment of the Government. However, if the trademark is unique and properly filed, there is a good chance that it will be granted."
  },
  {
    question: "What is the difference between trademark, copyright and patent?",
    answer: "Copyright protects original works (literary, artistic etc.), Trademark protects words, names, symbols that distinguish products/services, and Patent grants exclusive rights to inventors for inventions for a limited time."
  }
];

export const TRADEMARK_REQUIRED_DOCUMENTS = [
  {
    title: "Business Registration Evidence",
    description: "Company incorporation certificate, partnership deed, or proprietorship proof",
    icon: "Building2"
  },
  {
    title: "Identity Proof of Signatory",
    description: "PAN card, Aadhaar card, or passport of the person signing the application",
    icon: "User"
  },
  {
    title: "Address Proof",
    description: "Current address proof of applicant matching with identity documents", 
    icon: "MapPin"
  },
  {
    title: "Power of Attorney (Form-48)",
    description: "Signed authorization form allowing us to file on your behalf",
    icon: "FileText"
  },
  {
    title: "Trademark Logo/Design",
    description: "Clear image of logo or design (9x5 cm) if applying for logo trademark",
    icon: "Image"
  },
  {
    title: "MSME Certificate (Optional)",
    description: "MSME/SSI/Udyog Aadhar certificate for 50% government fee discount",
    icon: "Award"
  }
];

// Trademark Renewal Page Constants
export const TRADEMARK_RENEWAL_HERO = {
  badge: "Trademark Renewal Services",
  title: "Renew Your Trademark Online",
  subtitle: "Secured and Fast Renewal",
  description: "Trusted by over 100,000+ customers across India | Call or Click, as we do it quick! Renew your Trademark certificate for your brand before expiration.",
  rating: {
    score: "4.9/5",
    reviews: "50,000+ reviews"
  },
  features: [
    "100% Online Process",
    "Expert Guidance",
    "Quick Processing",
    "Affordable Rates"
  ],
  pricing: {
    consultation: "FREE",
    consultationLabel: "Expert Consultation",
    consultationDescription: "Get professional advice"
  },
  trustIndicators: [
    {
      title: "1 Lac+",
      subtitle: "Happy Clients"
    },
    {
      title: "4,500+",
      subtitle: "Google Reviews"
    }
  ],
  form: {
    title: "Need Help with Trademark Renewal?",
    subtitle: "Fill Up the below Mentioned Form",
    fields: {
      name: "Your Name",
      mobile: "Your Phone Number (Without 0 or +91)",
      email: "Your Email Address",
      state: "State",
      city: "City",
      hearAbout: "How did you hear about us?",
      package: "Package"
    },
    placeholders: {
      name: "Enter your full name",
      mobile: "Enter your phone number",
      email: "Enter your email address",
      state: "Select your state",
      city: "Enter your city",
      hearAbout: "Select source",
      package: "Select package"
    },
    button: "Apply Now",
    note: "100% Safe & Secure | Your data is protected",
    terms: {
      termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
      commsLabel: "I agree to receive communications via SMS, email and WhatsApp"
    }
  }
};

export const HEAR_ABOUT_OPTIONS = [
  "Google Search",
  "Social Media",
  "Friends/Family",
  "Advertisement",
  "Website",
  "Referral",
  "Other"
];

export const PACKAGE_OPTIONS = [
  "Basic Package",
  "Standard Package", 
  "Premium Package",
  "Custom Package"
];

export const TRADEMARK_RENEWAL_OVERVIEW = {
  title: "Trademark Renewal Process",
  description: "The validity of the Trademark exists for 10 years. Hence, one should renew their Trademark certificate within the mentioned period to avoid any objection & interruption. This application has to be filed on or before 6 months from the date of expiration of the registration.",
  renewalTypes: [
    {
      title: "Renewal with Change",
      description: "You can apply renewal to change any sign or words which is already existing trademark."
    },
    {
      title: "Renewal without Change", 
      description: "You can apply renewal without a change."
    }  ],
  note: `We can help you file Trademark Renewal and various other services from ${SITE_FULL_NAME} and make this entire process seamless.`
};

export const TRADEMARK_RENEWAL_ELIGIBILITY = {
  title: "Who Can Obtain a Trademark Renewal",
  eligibleEntities: [
    "Individual",
    "Joint Owner", 
    "Limited Liability Partnership",
    "Trust or Society",
    "Proprietorship Firm",
    "Partnership Firm"
  ]
};

export const TRADEMARK_RENEWAL_PRICING = {
  title: "Professional Fees",
  subtitle: "Trademark Renewal",
  plans: [
    {
      id: "renewal",
      title: "One Time Charges",
      price: "1,999",
      recommended: true,
      features: [
        "Drafting and filing of trademark renewal application",
        "For individuals, proprietorships, registered SMEs and registered Startups",
        "*Excluding Govt. Fees"
      ],
      excludes: []
    }
  ],
  note: "Excluding Government Fees"
};

export const TRADEMARK_RENEWAL_DOCUMENTS = [
  {
    title: "Applicant Details",
    subtitle: "Details of the Applicant", 
    description: "Name, Address, Nationality of the applicant. Corporate body/other entity need to provide with a registration certificate",
    icon: "User"
  },
  {
    title: "Power of Attorney",
    subtitle: "Power of Attorney",
    description: "A candidate must sign the power of attorney rightfully if they are registering for Trademark Renewal through any advocate or legal firm.",
    icon: "FileText"
  },
  {
    title: "TM Certificate", 
    subtitle: "TM Certificate",
    description: "Trademark Registration Certificate issued by the Ministry.",
    icon: "Award"
  },
  {
    title: "TM-A",
    subtitle: "Copy of TM-A", 
    description: "The application filed with the TM Registry for its registration is to be provided.",
    icon: "Copy"
  }
];

export const TRADEMARK_RENEWAL_BENEFITS = [
  {
    title: "Brand Names",
    subtitle: "Secure your brand names",
    description: "It gives incessant and continuous protection to the brand from getting dissolved.",
    icon: "Shield"
  },
  {
    title: "Legal Rights",
    subtitle: "Eliminates any legal rights", 
    description: "Not renewal would lead to disapproval of legal rights not only to the owner but also to every people associated with it.",
    icon: "Scale"
  },
  {
    title: "Brand Value",
    subtitle: "Increases Brand value",
    description: "Which means with a renewal of every term after 10 years of being in the business a brand value raises and any charges against it could lead to compensation. Also, the owner can issue a licence in return for monetary exchanges.",
    icon: "TrendingUp"
  },
  {
    title: "Diminishes Duplicity",
    subtitle: "Diminishes Duplicity", 
    description: "It also diminishes the chances of duplicity after renewal at the end of every term.",
    icon: "CheckCircle"
  }
];

export const TRADEMARK_RENEWAL_KEY_FACTORS = [
  "The application for the Trademark Renewal is the form TM-R.",
  "The Trademark Renewal Application does not need to be filed by the registered owner of the trademark, it can be done by an authorised representative or an agent."
];

export const TRADEMARK_RENEWAL_FAQ = [
  {
    question: "What is Trademark ?",
    answer: "A trademark is a kind of intellectual property which consists of a recognizable sign, design, or expression which identifies products or services of a particular source from those of others, although trademarks used to identify services are usually called service marks."
  },
  {
    question: "What if the trademark expires ?",
    answer: "You can apply for the restoration of an expired trademark within 6 months from its expiry date to keep using it. But the delay of 6 months can be risky and shall attract additional fees and documentation."
  },
  {
    question: "What is the difference between a trademark registration and a trademark renewal ?",
    answer: "Trademark Registration is a long process that takes a number of documents and requires more time than the renewal. A renewal is basically for continuing your ownership and use of the trademark, while registration is the initial process to get its exclusive ownership. After completion of every 10 years, the trademark needs to be renewed."
  },
  {
    question: "What are the consequences of failure to renew the trademark ?",
    answer: "In the case of non-renewal, the consequences are severe. Because the trademark would be removed from the register and any other person can claim it and get it registered to their name."
  },
  {
    question: "When to file a renewal of trademark ?",
    answer: "The Trademark renewal can be done anytime within 6 months of expiration of 10 years of trademark registration. Any further delay above 6 months will attract extra fee. If the renewal process is not completed within 12 months of expiration of trademark, the trademark will be removed from the trademark register."
  },
  {
    question: "What is meant by trademark 'opposed' ?",
    answer: "In case the trademark resembles or infringes any existing trademark or any other reason it might cause damages, in such cases the aggrieved party may file an objection to the examiner and the examiner may solve the issue based upon the parties statements and evidences. When the objection arose the examiner will inform to the applicant and he need to reply within sixty days on failing to do so the applicant will deem to be abandoned."
  },
  {
    question: "Do I need to physically present for the process ?",
    answer: "No, you don't need to be physically present for the process, OnlineLegalIndia is an online catering platform all you need is an internet connection in your phone/computer and the required documents with you and we can get the job done no matters even if you are present at the remotest location of India"
  }
];

// Trademark Objection Reply Constants
export const TRADEMARK_OBJECTION_HERO = {
  badge: "Trademark Objection Reply",
  title: "Reply To Your Objected Trademark",
  subtitle: "Professional Trademark Objection Reply Services",
  description: "OnlineLegalIndia.com can help you file a professional reply to a trademark objection in 5 to 10 working days, subject to government and client processing time.",
  rating: {
    score: "4.9/5",
    reviews: "1,00,000+ reviews"
  },
  features: [
    "Expert TM professionals",
    "5-10 working days", 
    "Professional reply drafting",
    "Complete documentation support"
  ],
  pricing: {
    consultation: "FREE",
    consultationLabel: "Expert Consultation",
    consultationDescription: "Get professional advice on your trademark objection"
  },
  trustIndicators: [
    {
      title: "10,000+",
      subtitle: "Cases Handled"
    },
    {
      title: "95%",
      subtitle: "Success Rate"
    },
    {
      title: "5-10",
      subtitle: "Working Days"
    },
    {
      title: "24/7",
      subtitle: "Expert Support"
    }
  ],
  form: {
    title: "Need Help with Trademark Objection Reply?",
    subtitle: "Fill Up the below Mentioned Form",
    fields: {
      name: "name",
      mobile: "mobile",
      email: "email",
      state: "state",
      hearAbout: "hearAbout"
    },
    placeholders: {
      name: "Your Name",
      mobile: "Your Phone Number (Without 0 or +91)",
      email: "Your Email Address",
      state: "Select your state",
      hearAbout: "Where did you hear about us?"
    },
    button: "Get Expert Help",
    note: "Our trademark experts will contact you within 30 minutes",
    terms: {
      termsLabel: "I agree to the Terms & Conditions",
      commsLabel: "I agree to receive updates via WhatsApp, SMS & Email"
    }
  }
};

export const TRADEMARK_OBJECTION_REASONS = {
  title: "Reasons for Trademark Objection",
  items: [
    "Incorrect Name of the Trademark Applicant",
    "Incorrect Address on the Trademark Application", 
    "Failure in filing Trademark Form TM-48",
    "Filing of Incorrect Trademark Form",
    "Trademark filing under the Wrong Trademark Class",
    "The proposed Trademark already exists",
    "Trademark lacks distinctive character",
    "Vague specifications of Goods and Services",
    "Deceptive Trademark",
    "User affidavit not attached"
  ]
};

export const TRADEMARK_OBJECTION_DOCUMENTS = {
  title: "Required Documents for Trademark Objection",
  items: [
    {
      name: "Brand Logo",
      description: "Clear copy of your brand logo or trademark"
    },
    {
      name: "Examination Report", 
      description: "Official examination report from trademark office"
    },
    {
      name: "Supporting Proof of Logo ownership",
      description: "Documents proving ownership and usage of the trademark"
    }
  ]
};

export const TRADEMARK_OBJECTION_PRICING = {
  title: "Packages",
  subtitle: "Choose the perfect plan for your trademark objection reply",
  plans: [
    {
      id: "standard",
      title: "Standard Plan",
      price: "4,599",
      recommended: false,
      features: [
        "Free Consultation with TM expert",
        "Drafting and filing of TM objection",
        "For trademark applications filed by third-parties",
        "Fresh Form-48",
        "Chat, Call & Email Support"
      ],
      excludes: []
    },
    {
      id: "premium", 
      title: "Premium Plan",
      price: "10,999",
      recommended: true,
      features: [
        "Free Consultation with TM expert",
        "Drafting and filing of TM objection",
        "Trademark Hearing",
        "Chat, Call & Email Support"
      ],
      excludes: []
    }
  ],
  note: "All plans include professional trademark objection reply services with expert consultation."
};

export const TRADEMARK_OBJECTION_FAQ = [
  {
    question: "What is Trademark ?",
    answer: "A trademark is a kind of intellectual property which consists of a recognizable sign, design, or expression which identifies products or services of a particular source from those of others, although trademarks used to identify services are usually called service marks."
  },
  {
    question: "What is meant by trademark 'objected' ?",
    answer: "During the process of registration the examiner should satisfy with the trademark which means the mark should be compelled with all criteria and rules for registration, in case the examiner feels unsatisfied with the trademark he may object the it. He will intimate to the applicant and the applicant need to respond within thirty days and such reply need to satisfy the examiner, on failing to reply the application will be abandoned and failing to satisfy the examiner may reject the application. Hence, reply should be crafted by an expert of trademark and Legal."
  },
  {
    question: "Where to get the examination report of trademark objection?",
    answer: "You can get the examination report of the trademark objection on the website of IPI India."
  },
  {
    question: "How much times does it take for trademark objection reply ?",
    answer: "TM expert drafts and files a reply within the 3 working days of objection received subject to the availability of the documents"
  },
  {
    question: "What if I missed my Trademark examination reply deadline ?",
    answer: "As far as the status is showing objected you can be able to file the reply for your trademark objection mentioned in the examination report"
  },
  {
    question: "What is meant by trademark 'opposed' ?",
    answer: "In case the trademark resembles or infringes any existing trademark or any other reason it might cause damages, in such cases the aggrieved party may file an objection to the examiner and the examiner may solve the issue based upon the parties statements and evidences. When the objection arose the examiner will inform to the applicant and he need to reply within sixty days on failing to do so the applicant will deem to be abandoned."
  },
  {
    question: "What is difference between trademarks objected and trademark opposed ?",
    answer: "The Trademark objected will be done by the examiner by questioning on the essential criteria for the registration and the opposed will be done by the third party on the credibility of the trademark."
  },
  {
    question: "When a trademark gets objected ?",
    answer: "The reason for the objection can be many either regarding the documents filed or regarding the fulfillment of criteria mandated by the statue and rules."
  },
  {
    question: "What are the grounds available for objection ?",
    answer: "The objection can be made with respect to the trademark statue and rules, which expressly restrains the registration of the trademark on basis of two ground absolute and relative grounds."
  },
  {
    question: "What will happen if the response fails to satisfy the trademark office ?",
    answer: "The response should satisfy the officer on failing to do so, the application will be rejected."
  },
  {
    question: "What can be done further if the application is rejected ?",
    answer: "On rejection can approach the Intellectual property appellate board."
  },
  {
    question: "Is there any Government fee to file the examination reply ?",
    answer: "No there isn't any government fee to file the examination reply."
  },
  {
    question: "Do I need to physically present for the process ?",
    answer: "No, you don't need to be physically present for the process, OnlineLegalIndia is an online catering platform all you need is an internet connection in your phone/computer and the required documents with you and we can get the job done no matters even if you are present at the remotest location of India"
  },
  {
    question: "Can I use the TM sign for my Trademark or Logo even if the Trademark Objection Examination Report is issued ?",
    answer: "Yes, you can. The Trademark Registry does not intend to bar the usage of the TM sign if it issues a trademark Objection or Examination Report. It only requires a suitable legal reply w.r.t objection raised."
  },
  {
    question: "What is the Trademark examination reply deadline ?",
    answer: "The reply to the Trademark exam report should be submitted within 30 days from the date of examination report raised. If you didn't file the reply within time, your trademark use rights shall be revoked."
  },
  {
    question: "How may I know that the reply has been received by the Registry ?",
    answer: "After the filing reply to the Trademark Objection with the Registry, it will automatically be displayed on the application status in IPR website. Besides, the alert 'Pending for Reply' will be removed from the status."
  },
  {
    question: "What will happen if I fail to submit reply to the Trademark Objection Online ?",
    answer: "You can submit the reply to the trademark objection until the alert 'Awaiting Reply to Examination Report' is displayed. If you fail to submit reply much after the deadline, your trademark objection status will be marked as 'Abandoned'."
  },
  {
    question: "What we have to do after the application is published in the journal ?",
    answer: "The application is published in the trademark journal for next 3 months, where it can be objected by a third party. If no opposition has been made by the third party, trademark Registration Certificate will be issued by the Trademark Registry."
  }
];

// Trademark Opposition Constants
export const TRADEMARK_OPPOSITION_HERO = {
  badge: "Trademark Opposition",  title: `File trademark opposition with ${SITE_FULL_NAME}`,
  subtitle: "Trusted by over 100,000+ customers across India",
  description: "Your branding is getting affected we can help you out by filing Trademark Opposition.",
  rating: {
    score: "4.9/5",
    reviews: "1,00,000+ reviews"
  },
  features: [
    "Expert TM professionals",
    "Complete legal support",
    "Professional opposition filing",
    "Comprehensive documentation"
  ],
  pricing: {
    consultation: "FREE",
    consultationLabel: "Expert Consultation",
    consultationDescription: "Get professional advice on trademark opposition"
  },
  trustIndicators: [
    {
      title: "100,000+",
      subtitle: "Customers Served"
    },
    {
      title: "Expert",
      subtitle: "Legal Team"
    },
    {
      title: "24/7",
      subtitle: "Support"
    },
    {
      title: "Affordable",
      subtitle: "Pricing"
    }
  ],
  form: {
    title: "Need Help with Trademark Opposition?",
    subtitle: "Fill Up the below Mentioned Form",
    fields: {
      name: "name",
      mobile: "mobile",
      email: "email",
      state: "state"
    },
    placeholders: {
      name: "Your Name",
      mobile: "Your Phone Number (Without 0 or +91)",
      email: "Your Email Address",
      state: "Select your state"
    },
    button: "Get Expert Help",
    note: "Our trademark experts will contact you within 30 minutes",
    terms: {
      termsLabel: "I agree to the Terms & Conditions",
      commsLabel: "I agree to receive updates via WhatsApp, SMS & Email"
    }
  }
};

export const TRADEMARK_OPPOSITION_ELIGIBILITY = {
  title: "Who can file trademark opposition",
  subtitle: "As far as Trademark Opposition in India is concerned, Section 21 of the Trademarks Act, 1999 says that 'any person' who wants to oppose a trademark application can do so by filing a Trademark Opposition.",
  criteria: [
    "An applicant must have trademark registered for filing opposition",
    "Any entity/consumer/buyer/purchaser/ likely to use goods",
    "If the mark is contrary to the law or prohibited under the Emblem and Names Act, 1950",
    "If the mark contains matters related to hurting any religious sentiments of any class or section of people"
  ]
};

export const TRADEMARK_OPPOSITION_PRICING = {
  title: "Package",
  subtitle: "Choose the perfect plan for your trademark opposition needs",
  plans: [
    {
      id: "reply-notice",
      title: "Reply to Opposition Notice",
      price: "2,499",
      recommended: false,
      features: [
        "Filing a reply on behalf of my client who already received the opposition notice from the other party",
        "On call support",
        "Email support",
        "Drafting Opposition Notice reply & Filing",
        "Free advice"
      ],
      excludes: []
    },
    {
      id: "opposition-notice",
      title: "Opposition Notice",
      price: "2,499",
      recommended: false,
      features: [
        "Serving a notice of opposition on behalf of the client who wants to oppose/ object on another Trade Mark",
        "On call support",
        "Email support",
        "Drafting Opposition Notice & Filing",
        "Free advice"
      ],
      excludes: []
    },
    {
      id: "notice-reply",
      title: "Opposition Notice & reply",
      price: "4,499",
      recommended: true,
      features: [
        "All in One services regarding Opposition",
        "On Call Support",
        "Email Support",
        "Drafting TM Opposition Notice, Reply & Filing",
        "Power of Attorney Change",
        "Extension of time form",
        "Free Advice"
      ],
      excludes: []
    },
    {
      id: "reply-hearing",
      title: "Opposition Reply & Hearing",
      price: "19,549",
      recommended: false,
      features: [
        "Filing a reply on behalf of my client who already received the opposition notice from the other party",
        "On Call Support",
        "Email Support",
        "Drafting TM Opposition Reply & Filing",
        "Free Advice"
      ],
      excludes: []
    },
    {
      id: "hearing-only",
      title: "Trademark Opposition Hearing",
      price: "14,350",
      recommended: false,
      features: [
        "We arrange trademark hearing process following rules",
        "On Call Support",
        "Email Support",
        "Free Advice"
      ],
      excludes: []
    }
  ]
};

export const TRADEMARK_OPPOSITION_DOCUMENTS = {
  title: "Documents required",
  categories: [
    {
      title: "Applicant Details",
      subtitle: "Details of the Applicant",
      items: [
        "Name, Address, Nationality of the applicant",
        "Corporate body/other entity need to provide with a registration certificate"
      ]
    },
    {
      title: "Power of Attorney",
      subtitle: "Power of Attorney",
      items: [
        "A candidate must sign the power of attorney rightfully if they are registering for Trademark Opposition through any advocate or legal firm."
      ]
    },
    {
      title: "Affidavit",
      subtitle: "Affidavit",
      items: [
        "Affidavit with the basic information about the trademark and its user data and proof of use."
      ]
    },
    {
      title: "Opposition Details",
      subtitle: "Details about Opposition",
      items: [
        "Name",
        "Basic grounds( for filing the opposition)"
      ]
    }
  ]
};

export const TRADEMARK_OPPOSITION_BENEFITS = [
  {
    title: "Brand Limit",
    subtitle: "Limit one from the creation of the brand",
    description: "It is very crucial to limit one from the creation of a brand and also acquire the approval of Registration of Trademark because a brand value, popularity plays a key role.",
    icon: "Shield"
  },
  {
    title: "Identical Trademark",
    subtitle: "Identical Trademark is banned",
    description: "It remains very beneficial for the Trademark Owner to stop/ban any similar/identical trademark user which can hinder/dilute a reputation of a brand in future.",
    icon: "Ban"
  },
  {
    title: "Clear Confusion",
    subtitle: "Clear Confusion",
    description: "It is also beneficial towards the consumers because in a way it clears the confusion surrounding a brand.",
    icon: "CheckCircle"
  }
];

export const TRADEMARK_OPPOSITION_KEY_FACTORS = [
  "Rule 44 of the Trademark Rules, 2017 states that an applicant can further file a counter statement in Form TM-O within 2 months.",
  "On failure of filing the counter-statement by the applicant, the Registrar will take down the form and won't approve it for the registers."
];

// Trademark Assignment Constants
export const TRADEMARK_ASSIGNMENT_HERO = {
  badge: "Trademark Assignment",
  title: "Take a step forward to secure your brand!",
  subtitle: "Professional Trademark Assignment Services",
  description: "Transfer your trademark ownership seamlessly with our expert legal assistance and complete documentation support.",
  rating: {
    score: "4.9/5",
    reviews: "1,00,000+ reviews"
  },
  features: [
    "Expert legal guidance",
    "Complete documentation",
    "Secure transfer process",
    "Professional assistance"
  ],
  pricing: {
    consultation: "FREE",
    consultationLabel: "Expert Consultation",
    consultationDescription: "Get professional advice on trademark assignment"
  },
  trustIndicators: [
    {
      title: "Secure",
      subtitle: "Transfer Process"
    },
    {
      title: "Expert",
      subtitle: "Legal Team"
    },
    {
      title: "Quick",
      subtitle: "Processing"
    },
    {
      title: "Affordable",
      subtitle: "Pricing"
    }
  ],
  form: {
    title: "Get Expert Consultation",
    subtitle: "Fill up the form for trademark assignment assistance",
    fields: {
      name: "name",
      mobile: "mobile",
      email: "email",
      state: "state"
    },
    placeholders: {
      name: "Name",
      mobile: "Mobile",
      email: "E-Mail",
      state: "Select state"
    },
    button: "Get Consultation",
    note: "Our experts will contact you within 30 minutes",
    terms: {
      termsLabel: "I agree to the Terms & Conditions",
      commsLabel: "I agree to receive updates via WhatsApp, SMS & Email"
    }
  }
};

export const TRADEMARK_ASSIGNMENT_OVERVIEW = {
  title: "What is Trademark Assignment?",
  description: "A trademark assignment occurs when one party, the assignor, transfers ownership of a registered trademark to another person, the assignee. It is a procedure that allows a trademark's rights and obligations to be transferred from its first owner to a new one.",
  details: [
    "A trademark is a unique sign, symbol, logo, word, phrase, or design used to recognise and differentiate the goods/ services of one seller from those of others. It is an essential intellectual property asset that represents a brand's identity and reputation in the marketplace.",
    "When a company or individual decides to sell, transfer, or change ownership of their trademark, they do so through a trademark assignment. The assignment is usually documented agreement that outlines the transfer details, including the specific rights being transferred, the effective date of the assignment, and any terms and conditions agreed upon by both parties."
  ]
};

export const TRADEMARK_ASSIGNMENT_BENEFITS = [
  {    title: "Safeguard",
    subtitle: "Safeguard Your Brand's Identity",
    description: `At ${SITE_FULL_NAME}, we understand the significance of your brand's identity. Our experts ensure a smooth and efficient trademark assignment process, protecting your brand from potential infringements and unauthorised use. You can confidently build a strong foundation for your business's future success with us.`,
    icon: "Shield"
  },
  {
    title: "Unlocking",
    subtitle: "Unlocking New Opportunities for Growth",
    description: "Take your brand to new heights with a trademark assignment. Transferring your trademark rights opens doors to exciting partnerships, collaborations, and expansion opportunities. Embrace growth and watch your business soar beyond its boundaries.",
    icon: "TrendingUp"
  },
  {
    title: "Global Reach",
    subtitle: "Global Reach, Global Trust",
    description: "A trademark assignment not only secures your brand locally but also on an international scale. Our team helps you gain exclusive rights to your brand worldwide, enhancing your global presence and customer trust.",
    icon: "Globe"
  },
  {
    title: "Inspire Innovation",
    subtitle: "Inspire innovation and Creativity",
    description: "With your brand protected, let your creativity flow! The reassurance of trademark assignment creates an environment that fosters innovation and empowers your team to think outside the box.",
    icon: "Lightbulb"
  },
  {
    title: "Confidentiality Security",
    subtitle: "Confidentiality and Security Guaranteed",
    description: "Your brand's uniqueness and sensitive information are our utmost priorities. We value confidentiality and maintain the highest level of security throughout the trademark assignment process.",
    icon: "Lock"
  },
  {
    title: "Your Competitors",
    subtitle: "Stand Out from Your Competitors",
    description: "A trademark assignment sets you apart from your competitors. Show your customers that your brand symbolises trust, quality, and innovation. Differentiate yourself in the market and leave a lasting impression.",
    icon: "Award"
  }
];

export const TRADEMARK_ASSIGNMENT_PRICING = {
  title: "Trademark Assignment Pricing",
  subtitle: "Affordable and transparent pricing for trademark assignment services",
  plans: [
    {
      id: "trademark-assignment",
      title: "Trademark Assignment Package",
      price: "Rs. 10,619*",
      recommended: true,
      features: [
        "Complete Assignment Documentation",
        "Government Filing Included", 
        "Legal Expert Support",
        "Document Verification",
        "Status Updates",
        "Post-Assignment Support"
      ],
      excludes: []
    }
  ],
  note: "*Government Fee (Rs.9,000/-) Extra. Professional Fees: Rs.8,999 + GST Rs.1,620 = Rs.10,619"
};

// Copyright Registration Constants
export const COPYRIGHT_REGISTRATION_HERO = {
  badge: "Copyright Registration",
  title: "e-Filing of Copyright Registration in India",  
  subtitle: `${SITE_FULL_NAME}™`,
  description: `With the help of copyright expert from ${SITE_FULL_NAME}™ protect your creative work today before its too late. 100% online process. Start processing now!`,
  rating: {
    score: "4.9/5",
    reviews: "1,00,000+ reviews"
  },
  features: [
    "100% online process",
    "Expert guidance",
    "Quick processing",
    "Complete protection"
  ],
  pricing: {
    consultation: "FREE",
    consultationLabel: "Expert Consultation",
    consultationDescription: "Get professional advice on copyright registration"
  },
  trustIndicators: [
    {
      title: "100%",
      subtitle: "Online Process"
    },
    {
      title: "Expert",
      subtitle: "Copyright Team"
    },
    {
      title: "Quick",
      subtitle: "Processing"
    },
    {
      title: "Complete",
      subtitle: "Protection"
    }
  ],
  form: {
    title: "Need Help with Copyright application?",
    subtitle: "Fill Up the below Mentioned Form",
    fields: {
      name: "name",
      mobile: "mobile",
      email: "email",
      city: "city",
      state: "state"
    },
    placeholders: {
      name: "Name",
      mobile: "Your Phone Number (Without 0 or +91)",
      email: "Email",
      city: "City",
      state: "State"
    },
    button: "Apply Now",
    note: "Our copyright experts will contact you within 30 minutes",
    terms: {
      termsLabel: "I agree to the Terms & Conditions",
      commsLabel: "I agree to receive updates via WhatsApp, SMS & Email"
    }
  }
};

export const COPYRIGHT_OVERVIEW = {
  title: "Copyright Registration",
  description: "Copyright is the legal process of safeguarding any form of intellectual or artistic creations from illegal imitation or usage. Grounded on the Copyright Act, 1957, the creators/producers of any original works like literature, music, cinematography, sound records, can look after their intellectual properties. Following the latest amendment, computer-related programming, content, a database can also be protected by obtaining a copyright license."
};

export const COPYRIGHT_REGISTER_CATEGORIES = {
  title: "The Register of Copyrights is divided into six categories",
  categories: [
    "Part A. Literary works other than computer Programs.",
    "Part B. Musical Works.",
    "Part C. Artistic Works.",
    "Part D. Cinematography Films.",
    "Part E. Sound Recording.",
    "Part F. Computer Programs, tables & Compilations."
  ]
};

export const COPYRIGHT_BENEFITS = {
  title: "Benefits of Copyright Registration",
  benefits: [
    "Legal Protection",
    "Branding or Goodwill",
    "After The Creators Death",
    "Prima Facie Evidence",
    "Owner publicity",
    "Restricts Unauthorized Reproduction",
    "Creation of Asset",
    "Public Record",
    "Copyright helps in establishing credibility in Market",
    "Global Protection"
  ]
};

export const COPYRIGHT_CATEGORIES = [
  {
    id: "cinematography",
    name: "Cinematography film",
    title: "Cinematography film"
  },
  {
    id: "sound-recording",
    name: "Sound recording",
    title: "Sound recording"
  },
  {
    id: "musical",
    name: "Musical Work",
    title: "Musical work & Sound recording"
  },
  {
    id: "artistic",
    name: "Artistic Work",
    title: "Artistic work like paintings, photographs"
  },
  {
    id: "literary",
    name: "Literary",
    title: "Original literary others"
  },
  {
    id: "books",
    name: "Books",
    title: "Books"
  },
  {
    id: "computer-programs",
    name: "Computer programs",
    title: "Computer programs"
  },
  {
    id: "website",
    name: "Website",
    title: "Website"
  },
  {
    id: "television",
    name: "Television",
    title: "Broadcasts on Radio and Television"
  },
  {
    id: "published-editions",
    name: "Published Editions",
    title: "Published editions"
  },
  {
    id: "databases",
    name: "Databases",
    title: "Databases"
  },
  {
    id: "advertisements",
    name: "Advertisements",
    title: "Advertisements"
  }
];

export const COPYRIGHT_PRICING = {
  title: "Copyright Registration Pricing",
  subtitle: "Affordable and transparent pricing for copyright registration of logos, software, artwork, books, videos, music, databases, and more",
  plans: [
    {
      id: "copyright-registration",
      title: "Copyright Registration Package",
      price: "Rs. 2,999*",
      recommended: true,
      features: [
        "Free Consultation with Copyright Expert",
        "Dedicated Copyright Expert",
        "Call, Chat & Email Support",
        "Drafting and Filing",
        "Document Review",
        "Status Updates"
      ],
      excludes: []
    }
  ],
  note: "*Government Fees Extra. Professional service fee only."
};

export const COPYRIGHT_BASIC_REQUIREMENTS = {
  title: "Basic Requirements for Copyright Registration",
  subtitle: "Registration under Copyright Act will protect any form of artistic creations or Intellectual property. It gives both the Economic & Ethical Rights to the original creator.",
  requirements: [
    {
      title: "Basic Details of Creator",
      description: "To register before the Copyright Act, some basic details of the creator like Name, Address & Nationality are mandatory.",
      icon: "User"
    },
    {
      title: "Power of Attorney",
      description: "The candidate must sign the power of attorney rightfully if you are registering copyright through any advocate or legal firm.",
      icon: "FileText"
    },
    {
      title: "Submission of the work sample",
      description: "A candidate registering for copyright should put forward his/her work in a soft copy format in JPEG, JPG, or GIF format. Copyright registration for computer programs, database requires 4 CDs or DVDs of that particular computer programs.",
      icon: "Upload"
    },
    {
      title: "Trademark Certificate for Artistic Work",
      description: "For submitting copyright registration on any sort of artistic work, the applicant must get a clear copyright search certificate from the trademark office on a prior basis.",
      icon: "Award"
    }
  ]
};

export const COPYRIGHT_DOCUMENTS_REQUIRED = [
  "Name, Address & Nationality of the Candidate – ID proof",
  "NOC from the publisher if work published and publisher is different from the applicant.",
  "Search Certificate from Trade Mark Office (TM -60) if any",
  "NOC from a person whose photograph appears on the work.",
  "Power of Attorney",
  "2 Copies of work",
  "KYC of author",
  "DD/IPO of Rs. per work ((as applicable)",
  "NOC from the author if the candidate is different from the author."
];

export const COPYRIGHT_COMPARISON_TABLE = {
  title: "Copyright vs Trademark vs Patent",
  headers: ["Basis", "Copyright", "Trademark", "Patent"],
  rows: [
    {
      basis: "Meaning",
      copyright: "It is a helpful legal security aid for the creator/producer on any of their original artwork such as literature, music composition, sound recording, cinematography, or computer programs. Copyright ensures the entire Economic & Ethical authority of the creator on his/her intellectual properties.",
      trademark: "Trademark legally preserves any particular word, symbol, or designs that make a business entity distinctive among its competitors.",
      patent: "It is a form of intellectual property that guards the invention of any inventor for a limited period of time. Through a patent, the inventor/owner can legally exclude others from reproducing, using or selling a particular invention."
    },
    {
      basis: "Protection is given for",
      copyright: "Original artistic works like written text, composed music, recorded sounds, paintings, choreography, motion pictures, cinematography, computer programming & databases etc.",
      trademark: "Any word, logo, color, font, design that differentiate products, the identity of any particular party from others.",
      patent: "Features of shape, configuration, pattern, and ornament, the form of lines, colour or blend thereof applied to each article."
    },
    {
      basis: "Significance",
      copyright: "Expression of Ideas",
      trademark: "Identification of brand",
      patent: "Invention"
    },
    {
      basis: "Govern by",
      copyright: "Indian Copyright Act, 1957",
      trademark: "Trade Marks Act, 1999",
      patent: "Indian Patent Act, 1970"
    },
    {
      basis: "Requirements of Registration",
      copyright: "The work must be original, creative and must be able of fixing in the tangible form.",
      trademark: "The marks needs to be unique.",
      patent: "The design needs to be original and must be referred to the article by any industrial process."
    },
    {
      basis: "Exclusions",
      copyright: "Others are not permitted copy the work without the permission of the creator.",
      trademark: "Stop others from using the same logo/symbol.",
      patent: "Stop others from using the invention without the permission"
    },
    {
      basis: "Validity Term",
      copyright: "The validity time in copyright is 60 years.",
      trademark: "The validity time in trademark is 10 years.",
      patent: "The validity time in patent is 20 years."
    },
    {
      basis: "Rights Provided",
      copyright: "The right to be the owner of the original artworks and excludes others from illegal copying, distributing and reproducing of the copyrighted intellectual properties.",
      trademark: "Rights to apply the mark, design, color, font and stop every illegal usage of the same by any third person.",
      patent: "Right to stop others from producing, selling using or importing the patented invention."
    }
  ]
};

export const COPYRIGHT_FAQ = [
  {
    question: "What is copyright?",
    answer: "Copyright registration is an intellectual property right just like a trademark and patent. It is basically a legal right which is provided to the creators for their unique work. Copyright falls under the auspices of intellectual property law and protects the rights of creators of original works of authorship whether the work in question is published or not. Original works of authorship include literary, dramatic, musical, and artistic works such as poetry, novels, movies, songs, computer software, and photography."
  },
  {
    question: "What can be copyrighted?",
    answer: "Copyright works include books, sound recordings, music, artistic work, cinematographic films, dramatic, computer programs, databases, advertisements, and paintings."
  },
  {
    question: "Can I apply for Copyright registration in respect of ideas or mathematical concepts?",
    answer: "No, one cannot apply for Copyright registration in respect of ideas or mathematical concepts. Copyright does not provide protection to the ideas or concepts."
  },
  {
    question: "Can I apply for Copyright registration of my website?",
    answer: "Copyright protection cannot be given to a website as a whole. For this, an applicant has to submit a separate application in respect of each component appearing on a website."
  },
  {
    question: "Who can apply for the copyright registration?",
    answer: "Any Individual or business entity can apply for copyright registration. Author, creator, musician, photographer, producer, painter, composer, or a company may safeguard their creatives with using this legal power."
  },
  {
    question: "Is Copyright Registration is mandatory?",
    answer: "By law, when something is written, drawn, photographed, etc., its copyright is automatically owned by the author. In other words, a copyright exists at the moment the work is created. Registering a copyright with the Copyright Office is voluntary. Copyright protection exists even without registration; However, your work must be registered before you can file a copyright infringement legal case in a court. In addition, registration of copyright makes it easier to prove ownership of your work in the event of an infringement and allows you to collect more in damages from the infringer/theft."
  },
  {
    question: "What is the difference between a patent and copyright?",
    answer: "The main a difference between a patent and copyright is on the basis of their objective. The patent protects an invention of a new product or a process, from being stolen by others and to facilitate commercialization of its use by the inventor. On the other side, copyright protects original works, e.g. literary works, videos, music records, artistic works, architecture, software etc. from being plagiarized."
  },
  {
    question: "Why Copyright registration is necessary?",
    answer: "Copyright registration to secure your original work from theft or undue advantage. Having copyright your original work give evidence that this particular work belongs to you only."
  },
  {
    question: "What are the benefits of Copyright Registration?",
    answer: "Can use the copyright logo. Makes it easier to prove ownership of your work in the event of an infringement and plagiarism. Can file a copyright infringement legal case in a court. Allows you to collect more in damages from the infringer/theft. One time cost, lifetime protection."
  },
  {
    question: "Is my original work after Copyright registration is protected globally?",
    answer: "Copyright Registration under Indian Copyright Act is valid only within the borders of the country. However, To secure protection to Indian works in foreign countries, India has become a member of the following international conventions on copyright and neighboring (related) rights: Berne Convention for the Protection of Literary and Artistic Works. Universal Copyright Convention. Convention for the Protection of Producers of Phonograms against Unauthorised Duplication of their Phonograms. Multilateral Convention for the Avoidance of Double Taxation of Copyright Royalties. Trade-Related Aspects of Intellectual Property Rights (TRIPS) Agreement. Now, Your original work register under India Copyright office shall be protected under 176 countries."
  },
  {
    question: "What is the validity of my copyright?",
    answer: "Your literary or musical or artistic work copyright is valid for lifetime and even after the demise of creator it remains valid for 60 more years"
  },
  {
    question: "What is a Copyright Diary Number?",
    answer: "It is a unique application number generated at the time of submission of Copyright application online. You can track down your copyright application from this number."
  },
  {
    question: "How to copyright a book in India?",
    answer: "In order to copyright your book you just need to provide some basic information about the author and complete content of a book. Rest our professional copyright consultant do & register your book under copyright office."
  },
  {
    question: "How to copyright a song in India?",
    answer: "In order to copyright your song you just need to provide some basic information about the music composer/owner and MP3 file of the original song. Rest our copyright experts do & register your song under copyright office."
  },
  {
    question: "Explain the process of copyright registration?",
    answer: "Copyright registration process is very simple with our online portal. You can easily fill-up the form and upload your original work which needs to be copyright. Once we receive information & placed an order. Your application shall be forwarded to our copyright consultant & start process your copyright application. We will provide you DAIRY NUMBER (unique Reference Number) within 3 working days subject to complete information furnished by you."
  },
  {
    question: "Whether computer Software or Computer Programme can be registered?",
    answer: "Yes. Computer Software or programme can be registered as a literary work carrying open source code. As per Copyright Act, 1957 literary work includes computer programmes, tables, and compilations, including computer databases. Source Code has also to be supplied along with the application for registration of copyright for software products."
  },
  {
    question: "How can I get copyright registration for my Web-site?",
    answer: "A website contains several works such as literary works, artistic works (photographs etc.), sound recordings, video clips, cinematograph films and broadcasting and computer software too. Therefore, a separate application has to be filed for registration of all these works."
  },
  {
    question: "What is the term of protection of copyright?",
    answer: "The general rule is that copyright registration in India lasts for 60 years. In the case of original literary, dramatic, musical and artistic works the 60-year period is counted from the year following the death of the author. In the case of cinematograph films, sound recordings, photographs, posthumous publications, anonymous and pseudonymous publications, works of government and works of international organizations, the 60-year period is counted from the date of publication."
  },
  {
    question: "Which are the international copyright conventions of which India is a member?",
    answer: "Copyright, as provided by the Indian Copyright Act, is valid only within India To secure the Indian works in foreign countries, India has become a member of the following international conventions on copyright and neighbouring (related) rights: Berne Convention for the Protection of Literary and Artistic Works, where India is among 176 member nations. Universal Copyright Convention. Convention for the Protection of Producers of Phonograms against Unauthorized Duplication of their Phonograms. Multilateral Convention for the Avoidance of Double Taxation of Copyright Royalties. Trade-Related Aspects of Intellectual Property Rights (TRIPS) Agreement."
  },
  {
    question: "Do you provide copyright services in my town?",    answer: `Yes ${SITE_FULL_NAME} is an online platform serving all over India no matters wherever you are doing business all you need is internet connection on your mobile or desktop and we are ready to get your job done`
  },
  {
    question: "Do I need to physically present for the process?",
    answer: `No, You don't need to be physically present for the process, ${SITE_FULL_NAME} is an online catering platform all you need is internet connection in your phone/computer and the required documents with you and we can get the job done no matters even if you are present at remotest location of the India.`
  }
];
