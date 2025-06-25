"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Scale, 
  DollarSign, 
  Award,
  Building2,
  TrendingUp,
  Eye,
  Shield,
  Zap,
  CheckCircle
} from "lucide-react";
import "@/app/animations.css";

const FSSAIBenefits = () => {
  const benefits = [
    {
      icon: Users,
      title: "TRUST OF THE CUSTOMERS",
      description: "An authentic communication is necessary to gain the customer's trust. It will ensure better service and also keep the customers from unhealthy and adulterated food supply.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Scale,
      title: "LEGAL ADVANTAGES",
      description: "FSSAI Certification will enhance the chance of legal enforcement and control over the department at a certain point and will encourage the establishment of several things to a particular area.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: DollarSign,
      title: "GOVERNMENT FUNDING AND LOANS",
      description: "The FSSAI registration will offer the privileges of Government Funding and Loans that can be easily accessible for the business operators.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Award,
      title: "USE OF FSSAI LOGO",
      description: "The use of FSSAI logo on your product will normally create goodwill trust worthiness amongst the consumers.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Building2,
      title: "BRAND VALUE",
      description: "A company will automatically acquire Brand Value once it is FSSAI registered.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: TrendingUp,
      title: "EXPANSION OF BUSINESS",
      description: "The FSSAI license will provide a wider scope and privilege of expansion at any geographic location.",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: Eye,
      title: "Recognition of Government",
      description: "Government of India recognizes the FSSAI Registration resulting in to customer trust and huge base of consumers.",
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: Shield,
      title: "PERMIT OF FOOD BUSINESS",
      description: "FSSAI License speaks about the safety of the customers concerning to food business.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: CheckCircle,
      title: "BENEFITS FROM GOVERNMENT ACTIONS ON NON-COMPLIANCE",
      description: "Government will take action and bestow the help on the company in case of any non-compliance issue in the future.",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: Zap,
      title: "BOOST UP YOUR BUSINESS",
      description: "If a business is FSSAI registered, it will create handsome client base and boost up the business at a larger scale.",
      color: "bg-cyan-100 text-cyan-600"
    }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-brand-secondary/10 text-brand-secondary hover:bg-brand-secondary/20 mb-4">
            <Award className="h-4 w-4 mr-2" />
            License Benefits
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Benefits of FSSAI FoSCos Certificate
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Discover the comprehensive advantages of obtaining FSSAI food license for your business
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="animated-hover shadow-lg border-0 bg-white h-full group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg flex-shrink-0 transition-colors group-hover:scale-110 ${benefit.color}`}>
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-8 md:mt-12">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Why FSSAI Registration is Mandatory?
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                FSSAI registration is not just a compliance requirement but a <span className="font-semibold text-brand-primary">strategic business advantage</span>. 
                It builds customer trust, enables business expansion, provides access to government schemes, and protects your business from legal issues. 
                With penalties up to <span className="font-semibold text-red-600">Rs. 5 Lakh and 6 months jail</span> for non-compliance, 
                FSSAI registration is essential for any food business in India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FSSAIBenefits;
