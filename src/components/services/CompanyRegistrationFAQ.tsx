"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, MessageCircle, Phone } from "lucide-react";
import { COMPANY_REGISTRATION_FAQ } from "@/lib/services-constants";
import { CONTACT_INFO } from "@/lib/constants";
import CTA from "@/components/common/CTA";
import "@/app/animations.css";

const CompanyRegistrationFAQ = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-brand-secondary/10 text-brand-secondary hover:bg-brand-secondary/20 mb-4">
            <HelpCircle className="h-4 w-4 mr-2" />
            Frequently Asked Questions
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Common Questions About Company Registration
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Get answers to the most frequently asked questions about company registration in India
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {/* FAQ List */}
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-3">
              {COMPANY_REGISTRATION_FAQ.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg shadow-sm">
                  <AccordionTrigger className="text-left px-4 py-3 hover:no-underline hover:bg-gray-50">
                    <span className="text-base md:text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="pt-2 border-t border-gray-200">
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact Support */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card className="shadow-lg border-0 bg-gradient-to-br from-brand-primary to-brand-secondary text-white mb-4">
                <CardContent className="p-4 md:p-6">
                  <div className="text-center">
                    <div className="bg-white/20 p-3 rounded-full w-12 h-12 mx-auto mb-4">
                      <HelpCircle className="h-6 w-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-bold mb-3">
                      Still Have Questions?
                    </h3>
                    
                    <p className="text-white/90 mb-4 leading-relaxed text-sm">
                      Our expert legal team is available 24/7 to answer all your questions
                    </p>
                    
                    <div className="space-y-3">
                      <Button className="w-full bg-white text-brand-primary hover:bg-gray-100 animated-hover text-sm py-2">
                        <Phone className="h-4 w-4 mr-2" />
                        Call {CONTACT_INFO.phone}
                      </Button>                      <Button 
                        variant="outline" 
                        className="w-full border-white text-white hover:bg-white hover:text-brand-primary animated-hover text-sm py-2 transition-all duration-200 group"
                        onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`, '_blank')}
                      >
                        <MessageCircle className="h-4 w-4 mr-2 group-hover:text-brand-primary transition-colors duration-200" />
                        WhatsApp Chat
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="shadow-md border-0">
                <CardContent className="p-4">
                  <h4 className="font-bold text-gray-900 mb-3 text-center text-sm">
                    Why Choose Us?
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-xs">Response Time</span>
                      <span className="font-bold text-brand-primary text-xs">&lt; 30 mins</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-xs">Success Rate</span>
                      <span className="font-bold text-brand-primary text-xs">99.8%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-xs">Happy Clients</span>
                      <span className="font-bold text-brand-primary text-xs">1,00,000+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-xs">Processing Time</span>
                      <span className="font-bold text-brand-primary text-xs">15 days</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA */}
        <CTA
          title="Ready to Register Your Company?"
          description="Don't let legal complexities hold you back. Start your entrepreneurial journey today with our expert guidance and support."
          primaryButton="Get Started Now"
          secondaryButton="Schedule Free Consultation"
          secondaryButtonHref="/consultation"
          badge="Expert Support"
          variant="gradient"
          size="compact"
        />
      </div>
    </section>
  );
};

export default CompanyRegistrationFAQ;
