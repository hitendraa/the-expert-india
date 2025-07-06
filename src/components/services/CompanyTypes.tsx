"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  User, 
  Users, 
  Heart, 
  TrendingUp, 
  FileCheck,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { COMPANY_TYPES_DETAILED } from "@/lib/services-constants";
import CTA from "@/components/common/CTA";
import Link from "next/link";
import "@/app/animations.css";

const iconMap = {
  Building2,
  User,
  Users,
  Heart,
  TrendingUp,
  FileCheck
};

const CompanyTypes = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
            <Building2 className="h-4 w-4 mr-2" />
            Company Types
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Types of Company Registration in India
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Choose the right business structure that best fits your business goals, size, and requirements
          </p>
        </div>

        {/* Company Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">          {COMPANY_TYPES_DETAILED.map((companyType) => {
            const IconComponent = iconMap[companyType.icon as keyof typeof iconMap];
            
            return (
              <Card key={companyType.id} className="animated-hover shadow-md border-0 h-full group">
                <CardHeader className="text-center pb-3">
                  {companyType.subtitle && (
                    <Badge className="bg-brand-secondary/10 text-brand-secondary w-fit mx-auto mb-2 text-xs">
                      {companyType.subtitle}
                    </Badge>
                  )}
                  <div className="bg-brand-gradient p-3 rounded-full w-12 h-12 mx-auto mb-3">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-base md:text-lg font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                    {companyType.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 px-4 pb-4 flex flex-col h-full">
                  <p className="text-gray-600 text-center leading-relaxed mb-4 text-sm">
                    {companyType.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-4 flex-grow">
                    {companyType.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-brand-primary mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link href={companyType.route} className="mt-auto">
                    <Button className="w-full bg-white border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300 animated-hover text-sm py-2">
                      Learn More
                      <ArrowRight className="h-3 w-3 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <CTA
          title="Not Sure Which Company Type is Right for You?"
          description="Our legal experts will help you choose the perfect business structure based on your specific needs and industry requirements."
          primaryButton="Get Expert Consultation"
          secondaryButton="Compare All Types"
          secondaryButtonHref="#company-comparison"
          badge="Expert Guidance"
          variant="gradient"
          size="compact"
        />
      </div>
    </section>
  );
};

export default CompanyTypes;
