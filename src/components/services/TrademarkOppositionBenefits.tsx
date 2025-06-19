import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TRADEMARK_OPPOSITION_BENEFITS, TRADEMARK_OPPOSITION_KEY_FACTORS } from "@/lib/services-constants";
import { Shield, Ban, CheckCircle, AlertTriangle } from "lucide-react";

const TrademarkOppositionBenefits = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Shield":
        return <Shield className="h-6 w-6 md:h-8 md:w-8 text-green-600" />;
      case "Ban":
        return <Ban className="h-6 w-6 md:h-8 md:w-8 text-red-600" />;
      case "CheckCircle":
        return <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-brand-primary" />;
      default:
        return <Shield className="h-6 w-6 md:h-8 md:w-8 text-brand-primary" />;
    }
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Benefits Section */}
          <div className="text-center mb-6 md:mb-8 lg:mb-12">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <CheckCircle className="h-4 w-4 mr-2" />
              Service Benefits
            </Badge>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Benefits from the Service
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Understand the key advantages of filing a trademark opposition to protect your brand interests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {TRADEMARK_OPPOSITION_BENEFITS.map((benefit, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-6 md:p-8">
                  <div className="bg-brand-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                    {getIcon(benefit.icon)}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-brand-primary font-medium mb-3">{benefit.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Factors Section */}
          <div className="text-center mb-6 md:mb-8 lg:mb-12">
            <Badge className="bg-brand-secondary/10 text-brand-secondary hover:bg-brand-secondary/20 mb-4">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Important Points
            </Badge>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Key Factors / Important Points
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {TRADEMARK_OPPOSITION_KEY_FACTORS.map((factor, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 border-l-4 border-l-brand-secondary">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-brand-secondary/10 text-brand-secondary rounded-full flex items-center justify-center text-sm font-bold border-2 border-brand-secondary/20">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-800 leading-relaxed font-medium">{factor}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="shadow-lg border-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5">
              <CardContent className="p-6 md:p-8">
                <div className="bg-brand-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <Shield className="h-6 w-6 md:h-8 md:w-8 text-brand-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Need Expert Guidance?
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our experienced trademark attorneys can help you navigate the opposition process effectively and protect your brand interests.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-1">Professional</div>
                    <div className="text-sm text-gray-600">Legal Assistance</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-1">Affordable</div>
                    <div className="text-sm text-gray-600">Service Packages</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-1">Complete</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrademarkOppositionBenefits;
