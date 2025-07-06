
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Users,
  Award,
  Shield,
  Globe,
  Target,
  Heart,
  TrendingUp,
  Star,
  Phone,
  MessageCircle,
  Clock
} from "lucide-react";
import { ABOUT_CONTENT, ABOUT_STATS, ABOUT_VALUES, CONTACT_INFO } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 border-primary/20 text-primary">
              {ABOUT_CONTENT.badge}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {ABOUT_CONTENT.headline}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {ABOUT_CONTENT.description}
            </p>
            
            {/* Rating */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold text-lg">{ABOUT_CONTENT.story.rating.score}</span>
              <Separator orientation="vertical" className="h-4" />
              <span className="text-sm text-muted-foreground">{ABOUT_CONTENT.story.rating.subtitle}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href={`tel:${CONTACT_INFO.phone}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  Get Free Consultation
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5" asChild>
                <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Chat
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {ABOUT_STATS.map((stat, index) => {
              const IconComponent = {
                Users,
                Award,
                Shield,
                Globe
              }[stat.icon] || Users;

              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{ABOUT_CONTENT.story.title}</h2>
            </div>
            
            <div className="text-center space-y-6">
              {ABOUT_CONTENT.story.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
              
              <div className="flex items-center justify-center gap-4 p-4 bg-primary/5 rounded-lg max-w-md mx-auto">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold">{ABOUT_CONTENT.story.rating.score}</span>
                <span className="text-sm text-muted-foreground">({ABOUT_CONTENT.story.rating.subtitle})</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{ABOUT_CONTENT.mission.title}</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {ABOUT_CONTENT.mission.description}
            </p>
            <Badge variant="secondary" className="text-lg px-6 py-2">
              {ABOUT_CONTENT.mission.commitment}
            </Badge>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{ABOUT_CONTENT.values.title}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {ABOUT_CONTENT.values.subtitle}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ABOUT_VALUES.map((value, index) => {
                const IconComponent = {
                  Target,
                  Shield,
                  Heart,
                  TrendingUp
                }[value.icon] || Target;

                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Excellence Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Team Excellence</h2>
              <p className="text-lg text-muted-foreground">
                Powered by qualified legal experts, chartered accountants, and technology specialists
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Legal Experts</h3>
                  <p className="text-sm text-muted-foreground">Qualified lawyers with specialization in corporate law</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-bold mb-2">CA Professionals</h3>
                  <p className="text-sm text-muted-foreground">Chartered accountants for financial compliance</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold mb-2">24/7 Support</h3>
                  <p className="text-sm text-muted-foreground">Round-the-clock assistance for urgent matters</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
