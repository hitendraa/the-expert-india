"use client";

import ServiceHero from "@/components/common/ServiceHero";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Truck, Clock, CheckCircle, Shield, AlertTriangle, MapPin, Users } from "lucide-react";
import { SITE_FULL_NAME } from "@/lib/constants";

const EWayBillPage = () => {
  const heroData = {
    badge: "GST E-Way Bill Services",
    title: "GST E-Way Bill Generation",
    subtitle: "Professional E-Way Bill Compliance Solutions",
    description: "Get expert assistance for GST E-Way Bill generation and compliance. Our professionals help you track goods movement efficiently, ensure tax compliance, and avoid penalties with seamless E-Way Bill management.",
    rating: {
      score: "4.9/5",
      reviews: "Trusted by logistics providers"
    },
    features: [
      "E-Way Bill Generation",
      "Consolidated E-Way Bills",
      "Validity Management",
      "Compliance Tracking",
      "Document Support",
      "Exemption Guidance"
    ],
    pricing: {
      consultation: "₹999",
      consultationLabel: "Starting from",
      consultationDescription: "Professional E-Way Bill service"
    },
    trustIndicators: [
      {
        title: "GST Experts",
        subtitle: "E-Way Bill Specialists"
      },
      {
        title: "Real-time Support",
        subtitle: "24/7 Compliance Help"
      }
    ],
    form: {
      title: "Get E-Way Bill Service",
      subtitle: "Connect with our GST experts for professional E-Way Bill generation and compliance services",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "Service Type"
      },
      placeholders: {
        name: "Enter your name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        hearAbout: "Select service type",
        state: "Choose your state"
      },
      button: "Get E-Way Bill Service",
      note: "Our GST experts will contact you within 1 hour",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for GST consultation"
      }
    }
  };

  const serviceTypes = [
    "E-Way Bill Generation",
    "Consolidated E-Way Bills",
    "Validity Extension",
    "Compliance Review",
    "Document Support",
    "Training & Guidance"
  ];

  const eWayBillOverview = {
    title: "GST E-Way Bill Overview",
    description: "The E-Way Bill system under GST is an electronic mechanism for tracking goods movement to ensure tax compliance and curb evasion. It's mandatory for goods valued over ₹50,000 and contains crucial details about the consignment including supplier, recipient, value, nature of goods, and route."
  };

  const eWayBillRequirements = [
    {
      title: "Supply Related Movement",
      description: "For goods movement in relation to supply transactions",
      icon: Truck,
      threshold: "Above ₹50,000",
      details: [
        "Business to business supplies",
        "Interstate and intrastate movement",
        "Taxable supplies under GST",
        "Regular commercial transactions"
      ]
    },
    {
      title: "Non-Supply Movement",
      description: "For movement not related to supply (job work, transfer, exhibition)",
      icon: MapPin,
      threshold: "Above ₹50,000",
      details: [
        "Job work movement",
        "Stock transfer between branches",
        "Exhibition or demonstration",
        "Return of goods"
      ]
    },
    {
      title: "Inward Supply from Unregistered",
      description: "When receiving goods from unregistered suppliers",
      icon: Users,
      threshold: "Above ₹50,000",
      details: [
        "Purchase from unregistered dealers",
        "Import from unregistered persons",
        "Reverse charge mechanism supplies",
        "Recipient generates E-Way Bill"
      ]
    }
  ];

  const specialProvisions = [
    {
      title: "Job Work Goods (Inter-State)",
      description: "Special provision for inter-state job work movement",
      icon: Shield,
      color: "text-blue-600",
      requirement: "E-Way Bill mandatory irrespective of value for inter-state movement"
    },
    {
      title: "Handicraft Goods",
      description: "GST exempt handicraft goods movement",
      icon: Shield,
      color: "text-green-600",
      requirement: "E-Way Bill required for inter-state transport regardless of value"
    }
  ];

  const generationResponsibility = [
    {
      title: "Registered Person",
      description: "Primary responsibility for E-Way Bill generation",
      icon: Users,
      responsibilities: [
        "Generates Part A and Part B of Form GST EWB-01",
        "Provides complete consignment details",
        "Ensures accuracy of information",
        "Updates transport details if required"
      ]
    },
    {
      title: "Transporter",
      description: "When goods are handed over to transporter",
      icon: Truck,
      responsibilities: [
        "Generates E-Way Bill if Part B not filled by consignor",
        "Creates consolidated E-Way Bill for multiple consignments",
        "Updates vehicle and transport details",
        "Ensures compliance during transit"
      ]
    },
    {
      title: "Unregistered Supplier",
      description: "Options for unregistered suppliers",
      icon: FileText,
      responsibilities: [
        "May opt to generate E-Way Bill themselves",
        "Registered recipient can generate if supplier known",
        "Provide necessary details to recipient",
        "Ensure proper documentation"
      ]
    }
  ];

  const validityPeriods = [
    {
      distance: "Up to 200 km",
      validity: "1 day",
      type: "Regular cargo",
      icon: Clock,
      color: "text-green-600"
    },
    {
      distance: "Every additional 200 km",
      validity: "1 additional day",
      type: "Regular cargo",
      icon: Clock,
      color: "text-blue-600"
    },
    {
      distance: "Up to 20 km",
      validity: "1 day",
      type: "Over dimensional cargo",
      icon: Clock,
      color: "text-orange-600"
    },
    {
      distance: "Every additional 20 km",
      validity: "1 additional day",
      type: "Over dimensional cargo",
      icon: Clock,
      color: "text-red-600"
    }
  ];

  const documentRequirements = [
    {
      title: "Tax Invoice/Bill of Supply",
      description: "Original invoice or bill of supply for the consignment",
      icon: FileText,
      mandatory: true
    },
    {
      title: "E-Way Bill",
      description: "Physical or electronic E-Way Bill mapped to RFID device",
      icon: Shield,
      mandatory: true
    },
    {
      title: "Delivery Challan",
      description: "Required in specific cases instead of invoice",
      icon: FileText,
      mandatory: false
    },
    {
      title: "Bill of Entry",
      description: "For imported goods in certain circumstances",
      icon: FileText,
      mandatory: false
    }
  ];

  const exemptionCategories = [
    {
      category: "Transport Mode Exemptions",
      description: "Based on mode of transportation",
      icon: Truck,
      exemptions: [
        "Goods transported by non-motorized conveyance",
        "Movement within 20 km to/from weighbridge",
        "Port/airport to ICD/CFS movement",
        "Movement within notified areas"
      ]
    },
    {
      category: "Goods Type Exemptions",
      description: "Specific goods exempt from E-Way Bill",
      icon: Shield,
      exemptions: [
        "Live animals and fresh produce",
        "Fresh milk, vegetables, and fruits",
        "Bread, curd, honey (unbranded)",
        "Human blood and medical supplies",
        "Printed books and newspapers"
      ]
    },
    {
      category: "Entity Exemptions",
      description: "Specific entities exempt from requirements",
      icon: Users,
      exemptions: [
        "Defence and government entities",
        "Transit to/from Nepal or Bhutan",
        "Empty containers transport",
        "LPG cylinders (not for supply)"
      ]
    }
  ];

  const managementFeatures = [
    {
      title: "Cancellation",
      description: "Cancel E-Way Bill within 24 hours if goods not transported",
      icon: AlertTriangle,
      timeframe: "24 hours",
      condition: "If not verified in transit"
    },
    {
      title: "Validity Extension",
      description: "Extend validity in exceptional cases like trans-shipment",
      icon: Clock,
      timeframe: "Within 8 hours after expiry",
      condition: "Update Part B of Form GST EWB-01"
    },
    {
      title: "Consolidated E-Way Bill",
      description: "Single bill for multiple consignments in one vehicle",
      icon: FileText,
      timeframe: "Before movement",
      condition: "Form GST EWB-02"
    }
  ];

  const faqs = [
    {
      question: "What is an E-Way Bill and when is it required?",
      answer: "An E-Way Bill is an electronically generated document required for goods movement valued over ₹50,000. It's mandatory for supply-related movement, non-supply movement (like job work), and inward supply from unregistered persons."
    },
    {
      question: "Who is responsible for generating the E-Way Bill?",
      answer: "Typically, the registered person generates the E-Way Bill. However, transporters can generate it if Part B details are not filled by the consignor, and unregistered suppliers may generate it or have the registered recipient do so."
    },
    {
      question: "What is the validity period of an E-Way Bill?",
      answer: "Validity depends on distance: 1 day for up to 200 km, with 1 additional day for every additional 200 km (or part thereof). For over-dimensional cargo, it's 1 day for up to 20 km with 1 additional day for every additional 20 km."
    },
    {
      question: "Can an E-Way Bill be cancelled or extended?",
      answer: "Yes, an E-Way Bill can be cancelled within 24 hours of generation if goods are not transported and it hasn't been verified in transit. Validity can be extended within 8 hours after expiry in exceptional cases."
    },
    {
      question: "What documents must be carried during goods transport?",
      answer: "The person in charge of the conveyance must carry the tax invoice/bill of supply/delivery challan and the E-Way Bill (physically or electronically mapped to RFID device)."
    },
    {
      question: "Are there any exemptions from E-Way Bill requirements?",
      answer: "Yes, exemptions include non-motorized transport, certain goods like fresh produce and books, movement within 20 km to weighbridge, government entities, and specific logistical movements."
    },
    {
      question: "What is a Consolidated E-Way Bill?",
      answer: "A Consolidated E-Way Bill (Form GST EWB-02) covers multiple consignments transported in one vehicle. It's useful for transporters carrying goods for multiple consignors in a single vehicle."
    },
    {
      question: `How does ${SITE_FULL_NAME} help with E-Way Bill compliance?`,
      answer: "We provide comprehensive E-Way Bill services including generation, validity management, consolidated bills, compliance tracking, document support, and training to ensure smooth goods movement without penalties."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ServiceHero 
        heroData={heroData}
        selectOptions={serviceTypes}
        selectFieldType="hearAbout"
      />

      {/* E-Way Bill Overview Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              E-Way Bill Overview
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {eWayBillOverview.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {eWayBillOverview.description}
            </p>
          </div>
        </div>
      </section>

      {/* E-Way Bill Requirements Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Truck className="h-4 w-4 mr-2" />
              Requirements
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              When is E-Way Bill Required?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding the mandatory requirements for E-Way Bill generation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {eWayBillRequirements.map((requirement, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-brand-primary">
                    <requirement.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {requirement.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{requirement.description}</p>
                  <Badge className="bg-orange-100 text-orange-800 w-fit mt-2">
                    {requirement.threshold}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {requirement.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Provisions Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Shield className="h-4 w-4 mr-2" />
              Special Provisions
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Special E-Way Bill Provisions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specific scenarios with different E-Way Bill requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {specialProvisions.map((provision, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className={`flex items-center ${provision.color}`}>
                    <provision.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {provision.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{provision.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-gray-800">
                      <span className="font-semibold">Requirement:</span> {provision.requirement}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Generation Responsibility Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Users className="h-4 w-4 mr-2" />
              Generation Responsibility
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Who Generates the E-Way Bill?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding roles and responsibilities for E-Way Bill generation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {generationResponsibility.map((responsibility, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-brand-primary">
                    <responsibility.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {responsibility.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{responsibility.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {responsibility.responsibilities.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Validity Periods Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Clock className="h-4 w-4 mr-2" />
              Validity Periods
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              E-Way Bill Validity Based on Distance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding validity periods for different types of cargo and distances
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {validityPeriods.map((period, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <period.icon className={`h-8 w-8 mx-auto mb-3 ${period.color}`} />
                  <CardTitle className="text-brand-primary text-sm">
                    {period.distance}
                  </CardTitle>
                  <Badge className="bg-gray-100 text-gray-800 mt-2">
                    {period.type}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="bg-brand-primary/10 rounded-lg p-3">
                    <span className="text-lg font-bold text-brand-primary">
                      {period.validity}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Document Requirements Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Document Requirements
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Documents Required During Transit
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Essential documents that must be carried during goods transportation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {documentRequirements.map((doc, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-brand-primary">
                    <doc.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {doc.title}
                  </CardTitle>
                  <Badge className={`${doc.mandatory ? "bg-red-100 text-red-800" : "bg-blue-100 text-blue-800"} w-fit mt-2`}>
                    {doc.mandatory ? "Mandatory" : "Conditional"}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {doc.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exemptions Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Shield className="h-4 w-4 mr-2" />
              Exemptions
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              E-Way Bill Exemptions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cases where E-Way Bill is not required under GST rules
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {exemptionCategories.map((category, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-brand-primary">
                    <category.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {category.category}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.exemptions.map((exemption, exemptionIndex) => (
                      <li key={exemptionIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{exemption}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Management Features Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Management Features
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              E-Way Bill Management Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Options for modifying, cancelling, and managing E-Way Bills
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {managementFeatures.map((feature, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-brand-primary">
                    <feature.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {feature.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-blue-800">
                        <span className="font-semibold">Timeframe:</span> {feature.timeframe}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-gray-800">
                        <span className="font-semibold">Condition:</span> {feature.condition}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about GST E-Way Bill requirements and compliance"
        faqs={faqs}
        columns={2}
        ctaTitle="Get E-Way Bill Service"
        ctaDescription="Need help with E-Way Bill generation and compliance? Our GST experts provide comprehensive support for all types of goods movement, ensuring compliance and avoiding penalties."
      />
    </div>
  );
};

export default EWayBillPage;
