"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CTA from "@/components/common/CTA";
import { 
  Award, 
  Factory, 
  Leaf, 
  Globe, 
  Users, 
  Shield, 
  Monitor,
  FileText
} from "lucide-react";

const ISOCategories = () => {
  const categories = [
    {
      id: "quality",
      icon: Award,
      title: "Quality Management",
      description: "Standards for quality assurance and customer satisfaction",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      standards: [
        { code: "ISO 9001:2015", title: "Quality Management Systems" },
        { code: "ISO 10004:2012", title: "Customer Satisfaction" },
        { code: "ISO 13485:2016", title: "Medical Devices" },
        { code: "ISO 10006:2017", title: "Project Management" },
        { code: "ISO 18091", title: "Local Government" },
        { code: "ISO/TS 16949:2009", title: "Automotive Industry" },
        { code: "ISO 17582:2014", title: "Electoral Organizations" },
        { code: "ISO 19443:2018", title: "Nuclear Energy" },
        { code: "ISO/TS 29001", title: "Oil & Gas Industries" },
        { code: "ISO 20001", title: "Educational Organizations" },
        { code: "ISO 90003", title: "Software Engineering" }
      ]
    },
    {
      id: "environment",
      icon: Leaf,
      title: "Environment & Energy",
      description: "Standards for environmental protection and energy efficiency",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      standards: [
        { code: "ISO 14001:2015", title: "Environmental Management" },
        { code: "ISO 50001:2018", title: "Energy Management" },
        { code: "ISO 14002-1:2019", title: "Environmental Guidelines" },
        { code: "ISO 14005:2010", title: "Phased Implementation" },
        { code: "ISO 14004:2016", title: "General Guidelines" },
        { code: "ISO 14006:2011", title: "Eco-design" },
        { code: "ISO 50004:2014", title: "Energy Implementation" }
      ]
    },
    {
      id: "safety",
      icon: Shield,
      title: "Safety & Security",
      description: "Standards for occupational health, safety, and security",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      standards: [
        { code: "ISO 45001:2018", title: "Occupational Health & Safety" },
        { code: "ISO 22000:2018", title: "Food Safety Management" },
        { code: "ISO 22301:2012", title: "Business Continuity" },
        { code: "ISO 10393:2013", title: "Consumer Product Recall" },
        { code: "ISO 22004:2014", title: "Food Safety Guidance" },
        { code: "ISO 10377:2013", title: "Consumer Product Safety" },
        { code: "ISO 18788:2015", title: "Private Security Operations" },
        { code: "ISO 24518:2015", title: "Crisis Management" },
        { code: "ISO 28007-1:2015", title: "Marine Technology" },
        { code: "ISO 29001:2012", title: "Road Traffic Safety" },
        { code: "ISO 80079-34:2011", title: "Explosive Atmospheres" },
        { code: "ISO/TS 34700:2016", title: "Animal Welfare" },
        { code: "ISO/NP 35001", title: "Laboratory Biorisk" }
      ]
    },
    {
      id: "technology",
      icon: Monitor,
      title: "Information Technology",
      description: "Standards for IT service management and cybersecurity",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      standards: [
        { code: "ISO 27001:2013", title: "Information Security" },
        { code: "ISO 20000-1:2011", title: "IT Service Management" },
        { code: "ISO 27018:2019", title: "Cloud Privacy" },
        { code: "ISO 27003:2017", title: "Security Implementation" },
        { code: "ISO 19770-1", title: "IT Asset Management" },
        { code: "ISO 90003:2014", title: "Software Engineering" },
        { code: "ISO 27013:2015", title: "Integrated Implementation" },
        { code: "ISO 27010:2015", title: "Inter-sector Communications" }
      ]
    },
    {
      id: "management",
      icon: Users,
      title: "General Management",
      description: "Standards for governance, compliance, and business management",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      standards: [
        { code: "ISO 26000:2010", title: "Social Responsibility" },
        { code: "ISO 37001:2016", title: "Anti-bribery Management" },
        { code: "ISO 31000:2018", title: "Risk Management" },
        { code: "ISO 19600:2014", title: "Compliance Management" },
        { code: "ISO 30401:2018", title: "Knowledge Management" },
        { code: "ISO 30301:2011", title: "Information & Documentation" },
        { code: "ISO 37002:2021", title: "Whistleblowing Management" },
        { code: "ISO 37101:2016", title: "Sustainable Development" },
        { code: "ISO 41001:2018", title: "Facility Management" },
        { code: "ISO 37301:2021", title: "Compliance Management" },
        { code: "ISO 44001:2017", title: "Collaborative Business" },
        { code: "ISO 55001:2014", title: "Asset Management" },
        { code: "ISO 56002:2019", title: "Innovation Management" },
        { code: "ISO 21500:2012", title: "Project Management" },
        { code: "ISO 21502:2020", title: "Project Portfolio Management" }
      ]
    },
    {
      id: "industry",
      icon: Factory,
      title: "Industry Specific",
      description: "Specialized standards for specific industries and sectors",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      standards: [
        { code: "ISO 16000-40", title: "Indoor Air Quality" },
        { code: "ISO 15378:2017", title: "Primary Packaging" },
        { code: "ISO 14298:2013", title: "Graphic Technology" },
        { code: "ISO 34101-1", title: "Sustainable Cocoa" }
      ]
    },
    {
      id: "services",
      icon: Globe,
      title: "Service Industries",
      description: "Standards for tourism, hospitality, and service sectors",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      standards: [
        { code: "ISO 24526", title: "Water Efficiency Management" },
        { code: "ISO 21101:2014", title: "Adventure Tourism Safety" },
        { code: "ISO 21404:2018", title: "Tourism Sustainability" },
        { code: "ISO 20121:2012", title: "Event Sustainability" },
        { code: "ISO 18295-1:2017", title: "Customer Contact Centers" }
      ]
    }
  ];  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <FileText className="w-4 h-4 mr-2" />
              ISO Standards
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Complete ISO Standards Catalog
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive catalog of ISO standards organized by categories. 
              Find the perfect certification for your business needs.
            </p>
          </div>

          {/* Tabs for Categories */}
          <Tabs defaultValue="quality" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 mb-8">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center gap-2 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700"
                >
                  <category.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.title.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                {/* Category Header */}
                <div className={`p-6 rounded-lg ${category.bgColor} border ${category.borderColor}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-white ${category.borderColor} border`}>
                      <category.icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">{category.standards.length} Standards Available</span>
                  </div>
                </div>

                {/* Standards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.standards.map((standard, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className={`w-3 h-3 rounded-full ${category.color.replace('text-', 'bg-')} mb-3`}></div>
                        <h4 className="font-bold text-gray-900 text-sm mb-2">{standard.code}</h4>
                        <p className="text-gray-700 text-sm">{standard.title}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      {/* Expert Consultation CTA - Full container width */}
      <div className="container mx-auto px-4 mt-5">
        <CTA
          variant="gradient"
          title="Need Help Choosing the Right ISO Standard?"
          description="Our ISO experts will analyze your business requirements and recommend the most suitable certification for your organization."
          primaryButton="Consult ISO Expert"
          secondaryButton="Download Standards Guide"
          badge="Expert Guidance"
        />
      </div>
    </section>
  );
};

export default ISOCategories;
