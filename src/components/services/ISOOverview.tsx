"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe, 
  CheckCircle,
  Clock,
  Target
} from "lucide-react";

const ISOOverview = () => {  const phases = [
    {
      number: "1",
      title: "Documentation",
      description: "Prepare required docs",
      color: "bg-blue-600"
    },
    {
      number: "2", 
      title: "Validation",
      description: "Expert assessment",
      color: "bg-green-600"
    },
    {
      number: "3",
      title: "Draft Issue",
      description: "Certificate draft",
      color: "bg-purple-600"
    },
    {
      number: "4",
      title: "Client Approval",
      description: "Review & approve",
      color: "bg-orange-600"
    },
    {
      number: "5",
      title: "Final Certificate",
      description: "Official delivery",
      color: "bg-red-600"
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Hassle-Free Certification",
      description: "Smooth and streamlined certification process"
    },
    {
      icon: Award,
      title: "20 Years of Experience",
      description: "Two decades of expertise in ISO certification"
    },
    {
      icon: TrendingUp,
      title: "Challenging Prices across India",
      description: "Most competitive pricing in the market"
    },
    {
      icon: Clock,
      title: "Fastest ISO Certificate Delivery",
      description: "Quick turnaround time for all certifications"
    },
    {
      icon: Users,
      title: "Satisfied Customer Ratings",
      description: "High customer satisfaction and ratings"
    },
    {
      icon: Target,
      title: "Reliable Service Proving Assurance",
      description: "Proven track record of reliable services"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              About ISO Certification
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is ISO?
            </h2>
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-xl text-gray-600 italic mb-6">
                &ldquo;When things don&apos;t work as they should, it often means that standards are absent.&rdquo;
              </blockquote>
              <p className="text-lg text-gray-600 leading-relaxed">
                ISO or International Organization for Standardization (ISO) certification establishes the reliability and credibility among consumers, clients, users, investors or business partners. To compete with well-established organizations in the globalized economy, globalized standardization in manufacturing, quality maintenance, safety and security standardization and many other reasons, ISO helps to speed up to reach your goal.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                ISO certification is done by IAF and we process the data for you to ensure successful submission of forms. Get in touch with us to avoid any hazards.
              </p>
            </div>
          </div>          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
              Certification Process Steps
            </h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {phases.map((phase, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-center">
                    <div className={`w-10 h-10 ${phase.color} text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2`}>
                      {phase.number}
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                      {phase.title}
                    </h4>
                    <p className="text-gray-600 text-xs max-w-20">
                      {phase.description}
                    </p>
                  </div>
                  {index < phases.length - 1 && (
                    <div className="w-8 h-0.5 bg-gray-300 mx-2 hidden sm:block"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
              Types of ISO Certification
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    IAF Accreditation Body:
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    IAF stands for The International Accreditation Forum, a worldwide renowned ISO accreditation body to assess and provide conformity, visiting the fields of management area to ensure processes, products, and services, looking at personnel, validation and verification and similar programmes.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">IAF-approved certification is a bit costlier</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Certificate mentions &apos;IAF Approved Certificate&apos;</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Non-IAF Compliance body:
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    These accreditation bodies are not members of IAF. Still, they have the power to issue ISO certificates. These certificates are also authentic and worldwide accepted.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Less costly compared to IAF ISO certification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Certificate mentions &ldquo;ISO Certificate&rdquo;</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
              Why choose us?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <item.icon className="h-12 w-12 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <div className="flex items-center justify-center gap-4 text-lg font-semibold text-gray-900">
                <span className="flex items-center gap-2">
                  <Globe className="h-6 w-6 text-blue-600" />
                  High Google (4.4) Rating
                </span>
                <span className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-green-600" />
                  100% Personal Data Security
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ISOOverview;
