"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Building, Clock, Shield } from "lucide-react";

const IECOverview = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              About IEC Registration
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is Import Export Code (IEC)?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              An Importer Exporter Code (IEC) is a key business identification number which is mandatory for export from India or Import to India. No export or import shall be made by any person without obtaining an IEC. For services exports however, IEC shall not be necessary except when the service provider is taking benefits under the Foreign Trade Policy. An individual or a business entity needs a 10 digit code to import or export products or services. This code is known as Import Export Code or IEC and it is issued by DGFT, Ministry of Commerce and Industries, Govt. of India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="h-8 w-8 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    When is IEC code required?
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    Customs authorities need it to clear shipments during imports.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    The bank needs it to transfer the money when imports are made.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    Similarly during export the shipments the IEC is required.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    When exporter is supposed to receive money in foreign currency, IEC code is required to transfer the money to his account directly.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="h-8 w-8 text-green-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Who can apply for IEC Code?
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  The IEC code registration is applicable for all business registrations:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Proprietorship
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Partnership
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    LLP
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Limited Company
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Trust
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    HUF
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Society
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                IEC Registration Fees
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-gray-900">Aayaat Niryaat Form Submit</span>
                  </div>
                  <p className="text-lg font-bold text-green-600">Zero</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Building className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-gray-900">Filing at DGFT</span>
                  </div>
                  <p className="text-lg font-bold text-green-600">Zero</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Globe className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-gray-900">Professional Fees</span>
                  </div>
                  <p className="text-lg font-bold text-blue-600">Rs. 1999</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-gray-900">Govt. Fees (Exclude)</span>
                  </div>
                  <p className="text-lg font-bold text-orange-600">Rs. 500</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-3xl font-bold text-blue-600">Rs. 1999 Only</p>
                <p className="text-gray-600 mt-2">*Government fees additional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IECOverview;
