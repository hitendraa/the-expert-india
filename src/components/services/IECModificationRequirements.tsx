"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  CreditCard, 
  User, 
  Building, 
  PenTool,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const IECModificationRequirements = () => {
  const documents = [
    {
      icon: FileText,
      title: "GST Certificate",
      description: "Valid GST registration certificate",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: CreditCard,
      title: "Cancel Cheque",
      description: "Cancelled cheque of the business bank account",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Building,
      title: "Company MOA/ AOA/ Incorporation certificate",
      description: "Company incorporation and constitutional documents",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: FileText,
      title: "Partnership deed / LLP deed",
      description: "Partnership or LLP agreement documents",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: CreditCard,
      title: "PAN Card",
      description: "PAN card of the business entity",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: User,
      title: "Aadhar Card",
      description: "Aadhar card of authorized signatory",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: PenTool,
      title: "Digital Signature Certificate",
      description: "Valid DSC of authorized signatory",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ];

  const keyPoints = [
    {
      icon: CheckCircle,
      title: "Quick Turnaround",
      description: "1-5 working days processing time",
      color: "text-green-600"
    },
    {
      icon: AlertCircle,
      title: "DSC Requirement",
      description: "DSC mandatory if mobile not linked with Aadhaar",
      color: "text-orange-600"
    },
    {
      icon: FileText,
      title: "Document Verification",
      description: "All documents verified before submission",
      color: "text-blue-600"
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
              Documents Required for IEC Modification
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ensure you have all the necessary documents ready for a smooth IEC modification process. 
              Our experts will guide you through the specific requirements based on your business type.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {documents.map((doc, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-full ${doc.bgColor}`}>
                      <doc.icon className={`h-6 w-6 ${doc.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-lg leading-tight">
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

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {keyPoints.map((point, index) => (
              <Card key={index} className="text-center border-l-4 border-l-gray-200 hover:border-l-blue-500 transition-colors">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <point.icon className={`h-8 w-8 ${point.color}`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Important Notes for IEC Modification
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 text-lg">Processing Guidelines:</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    Fresh IEC Certificate will be issued after modification
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    All modifications are reflected in DGFT portal
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    Government fees of Rs.200 applicable
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 text-lg">Additional Requirements:</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    Valid email ID for correspondence
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    Active mobile number of applicant
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    DSC mandatory if mobile not linked with Aadhaar
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IECModificationRequirements;
