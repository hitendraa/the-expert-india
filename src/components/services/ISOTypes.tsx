"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Shield, 
  Globe, 
  CheckCircle,
  Crown,
  Star
} from "lucide-react";

const ISOTypes = () => {
  const nabcbFeatures = [
    {
      icon: Award,
      title: "Premium Certification",
      description: "NABCB provides premium certification for your requirements"
    },
    {
      icon: Shield,
      title: "Government Recognized",
      description: "A Constituent Board of the Quality Council of India"
    },
    {
      icon: Globe,
      title: "International Recognition",
      description: "Member of ILAC, IAF, APAC with MLAs/MRAs"
    },
    {
      icon: Star,
      title: "Wide Services",
      description: "Inspection, assessment, validation, verification, and certification services"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Premium Certification
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Need More Premium ISO Certification?
            </h2>
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">
              Here is How! Get NABCB Accredited Certificate
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Crown className="h-8 w-8 text-yellow-600" />
                <h3 className="text-2xl font-bold text-gray-900">
                  About NABCB
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                NABCB stands for National Accreditation Board for Certification Bodies. They provide premium certification for your requirements. It is A Constituent Board of the Quality Council of India. We issue NABCB Accredited certificates at the most reasonable cost.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                It is a premium certification body that has wide inspection, assessment, validation, verification, and certification services in accordance with International Standards and Guidelines. NABCB is a member of the International Laboratory Accreditation Cooperation (ILAC), International Accreditation Forum (IAF), Asia Pacific Accreditation Cooperation (APAC) and signatory to their MLAs / MRAs. (Multilateral Recognition Arrangement/ Mutual Recognition Agreement or Arrangement).
              </p>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3 text-center">
                  What are you waiting for, then?
                </h4>
                <p className="text-xl font-bold text-blue-600 text-center">
                  ISO Certification Is So Easy To Get…
                </p>
              </div>
            </div>

            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    NABCB Features
                  </h3>
                </div>
                <div className="space-y-6">
                  {nabcbFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-2 rounded-full bg-blue-100 flex-shrink-0">
                        <feature.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
              Why Choose Our ISO Certification Services?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Easy Communication
                </h4>
                <p className="text-gray-600">
                  Easy Communication and Query Solution
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Shield className="h-12 w-12 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Highly Secured
                </h4>
                <p className="text-gray-600">
                  Highly Secured Payment Gateway
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Star className="h-12 w-12 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Reliable Service
                </h4>
                <p className="text-gray-600">
                  Reliable Service Proving Assurance
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get NABCB Certificate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ISOTypes;
