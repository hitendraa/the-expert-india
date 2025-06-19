"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, MessageCircle, Phone } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import CTA from "@/components/common/CTA";
import "@/app/animations.css";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  title: string;
  subtitle: string;
  faqs: FAQItem[];
  ctaTitle?: string;
  ctaDescription?: string;
  columns?: 1 | 2;
}

const ServiceFAQ = ({ 
  title, 
  subtitle, 
  faqs, 
  ctaTitle = "Still Have Questions?",
  ctaDescription = "Our expert legal team is available 24/7 to answer all your questions and provide personalized guidance for your specific needs.",
  columns = 1
}: ServiceFAQProps) => {
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
            {title}
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* FAQ Content */}        {/* FAQ Content */}
        <div className="max-w-6xl mx-auto mb-8">
          {columns === 2 ? (
            // Two-column layout
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[0, 1].map((colIndex) => (
                <Card key={colIndex} className="shadow-lg border-0">
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {faqs
                        .filter((_, index) => index % 2 === colIndex)
                        .map((faq, index) => {
                          const originalIndex = faqs.findIndex(f => f === faq);
                          return (
                            <AccordionItem 
                              key={originalIndex} 
                              value={`item-${originalIndex}`} 
                              className="border-b border-gray-100 last:border-b-0"
                            >
                              <AccordionTrigger className="text-left hover:no-underline py-4">
                                <span className="font-semibold text-gray-900 pr-4">
                                  {faq.question}
                                </span>
                              </AccordionTrigger>
                              <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>
                          );
                        })}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            // Single-column layout
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-b-0">
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          )}
        </div>        {/* Expert Help CTA */}
        <CTA
          variant="gradient"
          title={ctaTitle}
          description={ctaDescription}
          primaryButton="Call Expert Now"
          secondaryButton="WhatsApp Chat"
          badge="24/7 Support"
        />
      </div>
    </section>
  );
};

export default ServiceFAQ;
