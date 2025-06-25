"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Leaf, 
  Shield, 
  Utensils, 
  GraduationCap, 
  School,
  Lock,
  Heart,
  Target,
  Globe,
  Factory,
  Users,
  CheckCircle,
  Settings
} from "lucide-react";

const ISOServices = () => {
  const popularServices = [
    {
      icon: Award,
      title: "ISO 9001:2015",
      subtitle: "Quality Management System (QMS)",
      description: "This certification demonstrates the ability to meet Quality Standards or product or services",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Leaf,
      title: "ISO 14001:2015",
      subtitle: "Environment Management System (EMS)",
      description: "Ensures the safety of the effective environmental system of an organization and regulates it.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Shield,
      title: "ISO 45001:2018",
      subtitle: "Occupational Health & Safety Management System",
      description: "This ISO ensures occupational health and safety management systems with specified guidelines.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Utensils,
      title: "ISO 22000:2018",
      subtitle: "Food Safety Management System (FSMS)",
      description: "Ensures quality in food safety in the food chain from the farm to the fork, aiming to make food systems fair and healthy.",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: GraduationCap,
      title: "ISO 29993:2017",
      subtitle: "Learning Services outside Formal Education",
      description: "Specifies requirements for learning services outside formal education, including life-long learnings",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: School,
      title: "ISO 21001:2018 (EOMS)",
      subtitle: "Educational Organizations- Management Systems",
      description: "Demonstrate its ability to support the acquisition and development of competence through teaching, learning or research.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      icon: Lock,
      title: "ISO 27001:2022",
      subtitle: "Information Security Management System (ISMS)",
      description: "The certification ensure best practice in terms of managing information security in electro-technical sectors.",
      color: "text-gray-600",
      bgColor: "bg-gray-50"
    },
    {
      icon: Heart,
      title: "ISO 7101:2023",
      subtitle: "Healthcare Organization Management",
      description: "Management Systems for Quality in Healthcare Organizations, identifying safety and wellbeing",
      color: "text-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      icon: Target,
      title: "ISO 10004:2018",
      subtitle: "Quality Management & Customer Satisfaction",
      description: "Guidelines for Monitoring and Measuring to enhance qualitative service",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    }
  ];

  const otherServices = [
    {
      icon: CheckCircle,
      title: "HACCP",
      subtitle: "Hazard Analysis and Critical Control Points for the Food Manufacturing Industry",
      color: "text-blue-600"
    },
    {
      icon: Globe,
      title: "RoHS",
      subtitle: "Restriction of Hazardous Substances Directive for Sellers and Manufacturers of Electronic Goods",
      color: "text-green-600"
    },
    {
      icon: Factory,
      title: "GMP",
      subtitle: "Good Manufacturing Practices - GMP Standards: standardizes goods or products manufacturing policy",
      color: "text-orange-600"
    },
    {
      icon: Settings,
      title: "CMMI",
      subtitle: "Capability Maturity Model Integration - An advanced framework designed to improve and integrate processes across various disciplines",
      color: "text-purple-600"
    },
    {
      icon: Heart,
      title: "WHO - GMP",
      subtitle: "Certification Services - Good Manufacturing Practices GMP Standards: standardizes Health products manufacturing policies",
      color: "text-red-600"
    },
    {
      icon: CheckCircle,
      title: "CE Marking",
      subtitle: "Certification - Providing authority to certify company's product that it is safe to use for the customers",
      color: "text-indigo-600"
    },
    {
      icon: Users,
      title: "SA 8000",
      subtitle: "Social Accountability International - An international standard for social accountability management systems for trade unions, NGOs, etc.",
      color: "text-gray-600"
    },
    {
      icon: Settings,
      title: "ISO Modification",
      subtitle: "All category ISO Modification and Surveillance Audit - ISO Category Modification and surveillance Audit for all categories of ISO according to the demand",
      color: "text-yellow-600"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              ISO Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Popular ISO Services We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of ISO certification services designed to meet your business requirements and industry standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {popularServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className={`p-4 rounded-full ${service.bgColor} w-fit mb-4`}>
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">
                    {service.subtitle}
                  </h4>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
              Other Services:
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-gray-50 flex-shrink-0">
                        <service.icon className={`h-6 w-6 ${service.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          {service.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Not matched? Learn more ISO services
            </h3>
            <p className="text-lg opacity-90 mb-6">
              If you cannot identify which ISO matches with your requirement, contact us now. Our experts will suggest you choose the right genre that fulfils your requirement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Contact ISO Expert
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ISOServices;
