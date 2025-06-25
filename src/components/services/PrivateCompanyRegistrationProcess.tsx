"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight,
  Clock,
  CreditCard,
  UserCheck,
  FileText,
  Building,
  CheckCircle,
  Send
} from "lucide-react";
import CTA from "@/components/common/CTA";
import "@/app/animations.css";

const PrivateCompanyRegistrationProcess = () => {
  const processSteps = [
    {
      step: "01",
      title: "Fill the form and make the required payment",
      description: "Complete our online form with your details and make the consultation payment",
      icon: CreditCard
    },
    {
      step: "02", 
      title: "Post-Payment the experts will call back",
      description: "Our CA/CS experts will call you back and proceed accordingly with your requirements",
      icon: UserCheck
    },
    {
      step: "03",
      title: "A draft regarding how to register a pvt ltd company will be made",
      description: "Our team will prepare a comprehensive draft and plan for your company registration",
      icon: FileText
    },
    {
      step: "04",
      title: "The DIN Number and the DSC will be applied for",
      description: "Director Identification Number and Digital Signature Certificate application",
      icon: UserCheck
    },
    {
      step: "05",
      title: "AOA and MOA are the next document that needs to be submitted",
      description: "Articles of Association and Memorandum of Association preparation and submission",
      icon: FileText
    },
    {
      step: "06",
      title: "All documents are then sent to the Registrar Of Companies (ROC)",
      description: "Complete documentation sent to ROC of the concerned state for registration",
      icon: Send
    },
    {
      step: "07",
      title: "Once all the process is done it is just a matter of time",
      description: "Wait for the processing and approval from the Ministry of Corporate Affairs",
      icon: Clock
    },
    {
      step: "08",
      title: "After the private limited company registration, the document is then sent",
      description: "Receive your Certificate of Incorporation and other important documents",
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
            <Building className="h-4 w-4 mr-2" />
            Registration Process
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Process of Registering PVT. Ltd. Company
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Follow our streamlined 8-step process to get your Private Limited Company registered quickly and efficiently
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {processSteps.map((step, index) => (
            <Card key={index} className="animated-hover shadow-lg border-0 bg-white relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  {/* Step Number */}
                  <div className="bg-brand-gradient text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step.step}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start space-x-3 mb-3">
                      <div className="bg-brand-primary/10 p-2 rounded-lg">
                        <step.icon className="h-5 w-5 text-brand-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 leading-tight">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Arrow for flow indication */}
                {index < processSteps.length - 1 && (
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-md md:hidden">
                    <ArrowRight className="h-4 w-4 text-brand-primary rotate-90" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline and Support Info */}
        <div className="bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 rounded-2xl p-6 md:p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-3">
                <Clock className="h-6 w-6 text-brand-primary mr-2" />
                <h3 className="text-xl font-bold text-gray-900">
                  Fast Processing
                </h3>
              </div>
              <p className="text-gray-600 mb-2">
                Complete registration in <span className="font-semibold text-brand-primary">same day</span> with our expert team
              </p>
              <p className="text-sm text-gray-500">
                Our experienced CA/CS professionals ensure quick and error-free processing
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <UserCheck className="h-8 w-8 text-brand-primary mx-auto md:ml-auto md:mr-0 mb-3" />
                <h4 className="text-base font-bold text-gray-900 mb-2">
                  Expert Support
                </h4>
                <p className="text-gray-600 mb-3 text-sm">
                  10+ years experienced CA/CS team guidance
                </p>
                <div className="flex items-center justify-center md:justify-end space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle key={i} className="h-3 w-3 text-green-500" />
                  ))}
                  <span className="text-xs text-gray-500 ml-2">Professional Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <CTA
          title="Ready to Start Your Company Registration?"
          description="Our expert CA/CS team is ready to help you register your Private Limited Company with complete legal compliance and same-day processing."
          primaryButton="Start Registration Now"
          secondaryButton="Download Process Guide"
          secondaryButtonHref="/resources/registration-guide"
          badge="Expert Assistance"
          variant="gradient"
          size="compact"
        />
      </div>
    </section>
  );
};

export default PrivateCompanyRegistrationProcess;
