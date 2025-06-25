"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  User, 
  MapPin, 
  Phone, 
  Mail, 
  CreditCard,
  Clock,
  CheckCircle
} from "lucide-react";
import { SITE_FULL_NAME } from "@/lib/constants";

const IECModificationOverview = () => {
  const modifications = [
    {
      icon: Building,
      title: "Company address or registered office address",
      color: "text-blue-600"
    },
    {
      icon: User,
      title: "Change in Company Name",
      color: "text-green-600"
    },
    {
      icon: MapPin,
      title: "Registered Branch details or add Branch",
      color: "text-purple-600"
    },
    {
      icon: User,
      title: "Addition / alteration/ deletion of partner or director for any partnership firm or private limited company",
      color: "text-orange-600"
    },
    {
      icon: Phone,
      title: "Change in Business activities",
      color: "text-red-600"
    },
    {
      icon: Mail,
      title: "Change in registered mobile number and email id",
      color: "text-yellow-600"
    },
    {
      icon: CreditCard,
      title: "Bank details update/modification",
      color: "text-indigo-600"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              IEC Modification Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive IEC Certificate Modification
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              It is essential to update every data of a company. That is, branch details, activity status like manufacture or merchant in the Import Export Code. If not done so, then there will be consequences during the import-export process due to the mismatch details in DGFT and customs. Almost everything is able to make modification IEC. Such as adding branch details, address change, change in PAN card number, a director change, deletion or addition of a partner, and so on.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {modifications.map((modification, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-gray-200 hover:border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-gray-50 flex-shrink-0">
                      <modification.icon className={`h-6 w-6 ${modification.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 leading-tight">
                        {modification.title}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="h-8 w-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Quick Processing
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our expert team ensures your IEC modifications are processed within 24 hours. We handle all DGFT formalities and ensure your certificate is updated promptly.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">24-hour processing time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">DGFT compliant procedures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Expert guidance throughout</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <User className="h-8 w-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Expert Support
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {SITE_FULL_NAME} provides dedicated IEC experts who understand the intricacies of DGFT procedures and ensure error-free modifications.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Dedicated IEC expert</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Call, Chat & Email Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Complete documentation assistance</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Why Choose Our IEC Modification Services?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
              Ensure your import-export business runs smoothly with up-to-date IEC certificates. 
              Avoid complications during customs clearance with proper documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Start Modification Process
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Consult Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IECModificationOverview;
