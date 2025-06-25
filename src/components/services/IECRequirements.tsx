"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  CreditCard, 
  MapPin, 
  FileText, 
  User, 
  Zap
} from "lucide-react";

const IECRequirements = () => {
  const documents = [
    {
      icon: Camera,
      title: "Passport Photo",
      description: "Two Colour Photographs of Promoters/Individuals/Company/Director",
      color: "text-blue-600"
    },
    {
      icon: CreditCard,
      title: "PAN Card",
      description: "PAN Card of each Shareholders and directors",
      color: "text-green-600"
    },
    {
      icon: User,
      title: "Aadhar Card",
      description: "Identity Proof (Voter ID / Driving License/ Passport)",
      color: "text-purple-600"
    },
    {
      icon: MapPin,
      title: "Address Proof",
      description: "Address Proof (Bank Statement / Electricity, Mobile, Telephone Bill)",
      color: "text-orange-600"
    },
    {
      icon: FileText,
      title: "Rent Agreement",
      description: "Proof of Registered Office",
      color: "text-red-600"
    },
    {
      icon: Zap,
      title: "Electricity Bill",
      description: "Utility Bill as proof must be Latest",
      color: "text-yellow-600"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Document Requirements
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Documents Required for IEC Registration
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ensure you have all the necessary documents ready for a smooth IEC registration process. 
              Our experts will guide you through the documentation requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-full bg-gray-50`}>
                      <doc.icon className={`h-6 w-6 ${doc.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-lg">
                        {doc.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {doc.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Important Notes
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">For Individual Applicants:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      Recent passport-size photographs
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      PAN Card copy
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      Bank certificate or cancelled cheque
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">For Company/LLP:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      Certificate of Incorporation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      MOA & AOA
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      Board Resolution
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IECRequirements;
