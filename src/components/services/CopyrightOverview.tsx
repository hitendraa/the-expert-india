import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  COPYRIGHT_OVERVIEW, 
  COPYRIGHT_REGISTER_CATEGORIES, 
  COPYRIGHT_BENEFITS 
} from "@/lib/services-constants";
import { Copyright, FileText, Shield } from "lucide-react";

const CopyrightOverview = () => {  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Overview */}
          <div className="text-center mb-6 md:mb-8 lg:mb-12">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Copyright className="h-4 w-4 mr-2" />
              Understanding Copyright
            </Badge>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              {COPYRIGHT_OVERVIEW.title}
            </h2>
          </div>

          <Card className="shadow-lg border-0 mb-8 md:mb-12">
            <CardContent className="p-6 md:p-8">
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {COPYRIGHT_OVERVIEW.description}
              </p>
            </CardContent>
          </Card>

          {/* Categories Section */}
          <div className="mb-8 md:mb-12">
            <div className="text-center mb-6 md:mb-8">
              <Badge className="bg-brand-secondary/10 text-brand-secondary hover:bg-brand-secondary/20 mb-4">
                <FileText className="h-4 w-4 mr-2" />
                Copyright Categories
              </Badge>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                {COPYRIGHT_REGISTER_CATEGORIES.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 md:mb-12">
              {COPYRIGHT_REGISTER_CATEGORIES.categories.map((category, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center text-sm font-bold border-2 border-brand-primary/20">
                          {String.fromCharCode(65 + index)}
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium leading-relaxed">{category}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>          </div>
        </div>        {/* Benefits Section - Slightly constrained width */}
        <div className="mt-8 md:mt-12 lg:mt-16">
          <div className="text-center mb-6 md:mb-8 lg:mb-12">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Shield className="h-4 w-4 mr-2" />
              Key Benefits
            </Badge>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              {COPYRIGHT_BENEFITS.title}
            </h3>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mb-8">
              {COPYRIGHT_BENEFITS.benefits.map((benefit, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 border-l-4 border-l-brand-primary bg-white">
                  <CardContent className="p-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-brand-primary rounded-full flex-shrink-0"></div>
                      <p className="text-gray-800 font-medium text-sm leading-relaxed">{benefit}</p>
                    </div>
                  </CardContent>                </Card>
              ))}
            </div>
          </div>
        </div>        {/* Bottom CTA Section - Enhanced width */}
        <div className="max-w-7xl lg:max-w-full xl:max-w-screen-xl mx-auto mt-8 md:mt-12">
          <div className="text-center">
            <Card className="shadow-lg border-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5">
              <CardContent className="p-6 md:p-8">
                <div className="bg-brand-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <Copyright className="h-6 w-6 md:h-8 md:w-8 text-brand-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  100% Online Process
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Protect your creative work today before it's too late. Our expert team ensures a smooth and secure copyright registration process.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-1">100%</div>
                    <div className="text-sm text-gray-600">Online Process</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-1">Expert</div>
                    <div className="text-sm text-gray-600">Guidance</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-1">Complete</div>
                    <div className="text-sm text-gray-600">Protection</div>
                  </div>                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CopyrightOverview;
