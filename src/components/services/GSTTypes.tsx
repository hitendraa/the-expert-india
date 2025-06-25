"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Globe, 
  Monitor,
  Clock,
  MapPin,
  Building
} from "lucide-react";

const GSTTypes = () => {
  const gstTypes = [
    {
      id: "01",
      icon: Users,
      title: "Casual Taxable Persons",
      description: "According to the GST Act, a casual taxable person is a person who sporadically offers goods or services in a State or a Union territory where the firm doesn't have a fixed location.",
      details: "Individuals running roaming businesses at shows or seasonal operations would be regarded as casual taxable people under the GST.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: "02",
      icon: Globe,
      title: "Non-resident Taxable Persons",
      description: "A non-resident taxable person is any person, corporation, or organisation that offers goods or services subject to the GST but does not have a permanent place of business or habitation in India (NRI).",
      details: "Any foreign person, business, or organisation that provides goods or services to India would be regarded as a non-resident taxable person and would have to follow all applicable GST legislation in India.",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      id: "03",
      icon: Monitor,
      title: "E-Commerce Operators",
      description: "An \"electronic commerce operator\" is somebody who owns, operates, or oversees a digital or electronic facility or platform for electronic commerce.",
      details: "Anyone who sells online can be categorised as an e-Commerce Operator and is consequently needed to register for GST, regardless of the amount of business earnings.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    }
  ];

  const registrationRequirements = [
    {
      category: "Mandatory For",
      items: [
        {
          title: "Turnover Criteria",
          description: "Any businesses which have a turnover of above 40 lakhs (Rs 10 Lakhs for North-Eastern states, J & K, Himachal Pradesh and Uttarakhand), Rs 20 lakhs in case of services.",
          icon: Building
        },
        {
          title: "E-commerce operator",
          description: "Person who connects through e-commerce business (such as Amazon or Flipkart), should register for GST from the beginning only.",
          icon: Monitor
        },
        {
          title: "Casual Taxpayer",
          description: "If you supply goods or services in events/exhibition & you don't have a permanent place of business, you need to get online GST Registration. The validity of causal GST Registration is 90 days",
          icon: Clock
        },
        {
          title: "Sales/Service provide to other state (Inter State)",
          description: "One should register under GST if any supplier of goods or service provider involved in any other state.",
          icon: MapPin
        },
        {
          title: "Involved In Online Information",
          description: "Person supplying online information and database access other than a registered taxable person",
          icon: Globe
        },
        {
          title: "NRI Exporters & Importers",
          description: "Any NRI person or company supplying goods or services in India need to register GST regardless of turnover.",
          icon: Users
        }
      ]
    }
  ];

  const businessTypes = [
    {
      type: "Individual/Proprietorship Firm",
      timeline: "Get GST Registration Certificate and Number within 1-5 days"
    },
    {
      type: "Partnership Firm",
      timeline: "Get GST Registration Certificate and Number within 1-5 days"
    },
    {
      type: "Private Limited/LLP/NGO",
      timeline: "Get GST Registration Certificate and Number within 1-5 days"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Types of GST Registration
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Different GST Registration Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Regular, sporadic, non-resident and e-Commerce operators are some of the different GST registration categories. 
              Casual taxpayers, non-resident taxpayers, and e-Commerce enterprises must register for GST regardless of the turnover criteria.
            </p>
          </div>

          {/* GST Types */}
          <div className="space-y-6 mb-16">
            {gstTypes.map((type) => (
              <Card key={type.id} className={`overflow-hidden border-l-4 ${type.borderColor} hover:shadow-lg transition-shadow`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-lg ${type.bgColor} flex items-center justify-center`}>
                        <type.icon className={`h-6 w-6 ${type.color}`} />
                      </div>
                      <div className={`mt-2 w-12 h-8 rounded ${type.bgColor} flex items-center justify-center`}>
                        <span className={`font-bold ${type.color}`}>{type.id}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                      <p className="text-gray-600 mb-4">{type.description}</p>
                      <div className={`p-4 rounded-lg ${type.bgColor} border ${type.borderColor}`}>
                        <p className={`text-sm ${type.color} font-medium`}>{type.details}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Who Should Register */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Who Should Register for GST?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {registrationRequirements[0].items.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                        <item.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-3">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Business Types & Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">GST Registration Timeline by Business Type</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {businessTypes.map((business, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Building className="h-6 w-6 text-green-600" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-3">{business.type}</h4>
                      <p className="text-green-600 text-sm font-medium">{business.timeline}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Important Note */}
          <div className="mt-12">
            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="p-6">
                <h4 className="font-bold text-yellow-900 mb-2">📝 Important Note</h4>
                <p className="text-yellow-800 text-sm">
                  A person liable for GST registration must apply for the GST within 30 days from the date 
                  he becomes liable for GST. PAN is mandatory for general taxpayers and also the casual 
                  taxpayers entitled under GST.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GSTTypes;
