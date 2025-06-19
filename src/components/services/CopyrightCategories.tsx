import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { COPYRIGHT_CATEGORIES } from "@/lib/services-constants";
import CTA from "@/components/common/CTA";
import { 
  Film, 
  Music, 
  Palette, 
  BookOpen, 
  Code, 
  Globe, 
  Tv, 
  FileText, 
  Database,
  Megaphone 
} from "lucide-react";

const CopyrightCategories = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case "cinematography":
        return <Film className="h-8 w-8 text-purple-600" />;
      case "sound-recording":
        return <Music className="h-8 w-8 text-green-600" />;      case "musical":
        return <Music className="h-6 w-6 md:h-8 md:w-8 text-brand-primary" />;
      case "artistic":
        return <Palette className="h-8 w-8 text-pink-600" />;
      case "literary":
        return <BookOpen className="h-8 w-8 text-indigo-600" />;
      case "books":
        return <BookOpen className="h-8 w-8 text-orange-600" />;
      case "computer-programs":
        return <Code className="h-8 w-8 text-cyan-600" />;
      case "website":
        return <Globe className="h-8 w-8 text-emerald-600" />;
      case "television":
        return <Tv className="h-8 w-8 text-red-600" />;
      case "published-editions":
        return <FileText className="h-8 w-8 text-yellow-600" />;
      case "databases":
        return <Database className="h-8 w-8 text-slate-600" />;
      case "advertisements":
        return <Megaphone className="h-8 w-8 text-violet-600" />;
      default:
        return <FileText className="h-8 w-8 text-gray-600" />;
    }
  };
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-8 lg:mb-12">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Palette className="h-4 w-4 mr-2" />
              Copyright Categories
            </Badge>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Select Category
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Choose the appropriate category for your creative work to ensure proper copyright protection.
            </p>
          </div>          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-6">
            {COPYRIGHT_CATEGORIES.map((category, index) => (
              <Card 
                key={index} 
                className="shadow-md border-0 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1 text-center"
              >
                <CardContent className="p-4">
                  <div className="bg-brand-primary/10 p-2 rounded-full w-fit mx-auto mb-3 group-hover:bg-brand-primary/20 transition-colors">
                    {getIcon(category.id)}
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{category.name}</h4>
                  <p className="text-xs text-gray-600 leading-snug">{category.title}</p>
                </CardContent>
              </Card>            ))}
          </div>
        </div>

        {/* Full width CTA outside the max-width container */}
        <div className="mt-12">
          <CTA
            variant="gradient"
            size="default"
            title="Need Help Choosing the Right Category?"
            description="Our copyright experts can help you identify the most appropriate category for your creative work. Get free consultation today!"
            primaryButton="Get Free Consultation"
            secondaryButton="WhatsApp Chat"
            badge="Expert Guidance"
          />
        </div>
      </div>
    </section>
  );
};

export default CopyrightCategories;
