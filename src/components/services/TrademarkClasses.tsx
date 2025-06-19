"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Search, Smartphone, Shirt, Briefcase, GraduationCap } from "lucide-react";
import { TRADEMARK_CLASSES_INFO } from "@/lib/services-constants";
import { CONTACT_INFO } from "@/lib/constants";
import TrademarkClassPopup from "@/components/common/TrademarkClassPopup";
import "@/app/animations.css";

const classIcons = {
  "Class 9": Smartphone,
  "Class 25": Shirt,
  "Class 35": Briefcase,
  "Class 41": GraduationCap
};

const TrademarkClasses = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-brand-secondary/10 text-brand-secondary hover:bg-brand-secondary/20 mb-4">
            <BookOpen className="h-4 w-4 mr-2" />
            Trademark Classes
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            {TRADEMARK_CLASSES_INFO.title}
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {TRADEMARK_CLASSES_INFO.subtitle}
          </p>
        </div>

        {/* Classes Overview */}
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg mb-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Understanding Trademark Classifications
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {TRADEMARK_CLASSES_INFO.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">1-34</div>
              <div className="font-semibold text-gray-900 mb-1">Goods Classes</div>
              <div className="text-sm text-gray-600">Physical products and tangible items</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">35-45</div>
              <div className="font-semibold text-gray-900 mb-1">Service Classes</div>
              <div className="text-sm text-gray-600">Services and intangible offerings</div>
            </div>
          </div>
        </div>

        {/* Popular Classes */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Most Popular Trademark Classes
            </h3>
            <p className="text-gray-600">
              Commonly used classes for different types of businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRADEMARK_CLASSES_INFO.popularClasses.map((classInfo, index) => {
              const IconComponent = classIcons[classInfo.class as keyof typeof classIcons];
              
              return (
                <Card key={index} className="animated-hover shadow-md border-0 h-full bg-white">
                  <CardHeader className="pb-4">
                    <div className="bg-brand-primary/10 p-3 rounded-full w-fit mx-auto mb-3">
                      <IconComponent className="h-6 w-6 text-brand-primary" />
                    </div>
                    <CardTitle className="text-center">
                      <div className="text-lg font-bold text-brand-primary mb-1">
                        {classInfo.class}
                      </div>
                      <div className="text-base font-semibold text-gray-900">
                        {classInfo.title}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {classInfo.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Class Selection Help */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 md:p-8 mb-8">
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Need Help Selecting the Right Class?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choosing the correct trademark class is crucial for proper protection. Our experts will help you identify the most appropriate classes for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="font-semibold text-gray-900 mb-1">Free Class Search</div>
              <div className="text-sm text-gray-600">We'll help you find the right class</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="font-semibold text-gray-900 mb-1">Expert Guidance</div>
              <div className="text-sm text-gray-600">Professional advice included</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="font-semibold text-gray-900 mb-1">Multiple Classes</div>
              <div className="text-sm text-gray-600">Register in multiple classes if needed</div>
            </div>          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-end">
            <TrademarkClassPopup
              trigger={
                <Button 
                  size="lg"
                  className="bg-brand-primary text-white hover:bg-brand-primary/90 font-semibold transition-colors duration-200"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Find Your Trademark Class
                </Button>
              }
            />
            <Button 
              size="lg"
              variant="outline"
              className="border-brand-primary text-brand-primary bg-white hover:!bg-brand-primary hover:!text-white hover:!border-brand-primary font-semibold transition-all duration-200"
              onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`, '_blank')}
            >
              Get Expert Help
            </Button>
          </div>
        </div>

        {/* Important Note */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <div className="bg-yellow-100 p-2 rounded-full flex-shrink-0">
              <BookOpen className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Important Class Selection Guidelines</h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p>• Choose classes that accurately represent your goods/services</p>
                <p>• You can file for multiple classes in a single application</p>
                <p>• Each class requires separate government fees</p>
                <p>• Incorrect class selection may lead to application rejection</p>
                <p>• Our experts ensure you select the most appropriate classes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrademarkClasses;
