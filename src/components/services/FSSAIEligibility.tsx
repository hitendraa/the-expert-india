"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Building2 } from "lucide-react";
import "@/app/animations.css";

const FSSAIEligibility = () => {
  const eligibleBusinesses = [
    { name: "Canteen", icon: "🍽️" },
    { name: "Club", icon: "🏢" },
    { name: "Dhaba", icon: "🍛" },
    { name: "Distributor", icon: "🚚" },
    { name: "Food Processor", icon: "🏭" },
    { name: "Restaurant", icon: "🍴" },
    { name: "Retailer", icon: "🏪" },
    { name: "Storage", icon: "📦" },
    { name: "Supplier", icon: "🚛" },
    { name: "Transporter", icon: "🚐" },
    { name: "Wholesaler", icon: "🏬" },
    { name: "Others", icon: "➕" }
  ];

  const requiredDocuments = [
    {
      title: "Passport-size photo",
      description: "Recent passport size photograph of the applicant"
    },
    {
      title: "Business Constitution Certificate",
      description: "Partnership deed, certificate of incorporation, shop and establishment licence, or other business registration certificate"
    },
    {
      title: "Food Safety Management Plan",
      description: "Plan for a food safety management system as per FSSAI guidelines"
    },
    {
      title: "Business Premises Address Proof",
      description: "Rental agreement, letter of authorisation from owner, utility bills etc."
    },
    {
      title: "Food Products List",
      description: "List of food products manufactured or processed by your business"
    },
    {
      title: "Identity Proof",
      description: "Aadhaar Card, Ration Card, Voter ID Card, PAN Card, or Driving License"
    }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Who Needs FSSAI License */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-6 md:mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Users className="h-4 w-4 mr-2" />
              Eligibility
            </Badge>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Who Needs a FSSAI FoSCos License?
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              All food business operators involved in any food-related activity require FSSAI registration
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {eligibleBusinesses.map((business, index) => (
              <Card key={index} className="animated-hover shadow-md border-0 bg-gradient-to-b from-white to-gray-50">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2">{business.icon}</div>
                  <div className="text-sm font-semibold text-gray-900">
                    {business.name}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="bg-blue-50 rounded-2xl p-6 max-w-3xl mx-auto">
              <p className="text-base text-gray-700">
                <span className="font-semibold text-brand-primary">Any business</span> involved in manufacturing, processing, 
                packaging, storage, distribution, sale, or import of food items requires FSSAI registration. 
                This includes <span className="font-semibold text-brand-primary">home-based food businesses</span> and 
                <span className="font-semibold text-brand-primary"> online food delivery platforms</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Required Documents */}
        <div>
          <div className="text-center mb-6 md:mb-8">
            <Badge className="bg-brand-secondary/10 text-brand-secondary hover:bg-brand-secondary/20 mb-4">
              <Building2 className="h-4 w-4 mr-2" />
              Documentation
            </Badge>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Documents required for new FSSAI registration/licence
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Prepare these essential documents for a smooth FSSAI license application process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requiredDocuments.map((document, index) => (
              <Card key={index} className="animated-hover shadow-lg border-0 bg-gradient-to-b from-white to-gray-50 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-secondary/10 p-3 rounded-lg flex-shrink-0">
                      <Building2 className="h-6 w-6 text-brand-secondary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {document.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {document.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FSSAIEligibility;
