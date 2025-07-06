"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// SITE_YEARS_EXPERIENCE removed as it was unused
import { } from "@/lib/constants";
import {
  Menu,
  Shield,
  Building2,
  FileText,
  CreditCard,
  Scale,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MAIN_NAVIGATION, QUICK_LINKS } from "@/lib/constants";
import Topbar from "./Topbar";
import { GoogleAuthButton } from "@/components/auth/GoogleAuthButton";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper function to get service icons
  const getServiceIcon = (title: string) => {
    switch (title) {
      case "Company Registration":
        return <Building2 className="h-4 w-4 text-brand-primary group-hover:text-white transition-colors" />;
      case "Trademark":
        return <Shield className="h-4 w-4 text-brand-secondary group-hover:text-white transition-colors" />;
      case "Income Tax & Compliance":
        return <Scale className="h-4 w-4 text-brand-primary group-hover:text-white transition-colors" />;
      case "GST":
        return <CreditCard className="h-4 w-4 text-brand-secondary group-hover:text-white transition-colors" />;
      case "Food License":
        return <FileText className="h-4 w-4 text-brand-primary group-hover:text-white transition-colors" />;
      case "Business Registration":
        return <Building2 className="h-4 w-4 text-brand-secondary group-hover:text-white transition-colors" />;
      case "Loan":
        return <CreditCard className="h-4 w-4 text-brand-primary group-hover:text-white transition-colors" />;
      case "Insurance":
        return <Shield className="h-4 w-4 text-brand-secondary group-hover:text-white transition-colors" />;
      default:
        return <Building2 className="h-4 w-4 text-gray-600 group-hover:text-white transition-colors" />;
    }
  };

  return (
    <>
      <Topbar />
      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-brand-primary/10 sticky top-0 z-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-dark.png"
                alt="Expert India Consultancy"
                width={140}
                height={40}
                className="h-8 md:h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-center max-w-6xl mx-4">
              <nav className="flex items-center space-x-1">
                {MAIN_NAVIGATION.map((item) => (
                  <div key={item.title} className="relative group">
                    {item.items ? (
                      <>
                        <button className="group bg-transparent hover:bg-primary hover:text-primary-foreground transition-colors text-sm px-3 py-2 h-9 rounded-md flex items-center gap-2 text-foreground">
                          {getServiceIcon(item.title)}
                          <span className="whitespace-nowrap text-sm">
                            {item.title}
                          </span>
                        </button>
                        
                        {/* Dropdown Content */}
                        <div className="absolute top-full left-0 mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                          <div className={cn(
                            "grid gap-2 p-3 bg-popover border border-border rounded-md shadow-lg",
                            item.title === "Business Registration" 
                              ? "w-[320px] grid-cols-2" 
                              : "w-[260px] grid-cols-1"
                          )}>
                            {item.items.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground group/item"
                              >
                                <div className="text-sm font-medium leading-none text-foreground group-hover/item:text-primary-foreground">
                                  {service.name}
                                </div>
                                <p className="line-clamp-2 text-xs leading-snug text-muted-foreground group-hover/item:text-primary-foreground transition-colors">
                                  Professional {service.name.toLowerCase()} services
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href="#"
                        className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none text-foreground"
                      >
                        {getServiceIcon(item.title)}
                        <span className="ml-2">{item.title}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <GoogleAuthButton />
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center space-x-2">
              <GoogleAuthButton />
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 md:h-10 md:w-10">
                    <Menu className="h-5 w-5 md:h-6 md:w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[320px] sm:w-[360px] md:w-[400px] p-0 bg-background border-l border-border shadow-2xl"
                >
                  {/* Header Section */}
                  <div className="sticky top-0 bg-background z-10 px-6 py-4 border-b border-border shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Image
                          src="/logo-dark.png"
                          alt="Expert India Consultancy"
                          width={120}
                          height={35}
                          className="h-6 md:h-8 w-auto"
                          priority
                        />
                      </div>
                      <div className="bg-accent/10 px-2 py-1 rounded-full">
                        <span className="text-xs font-semibold text-accent-foreground">
                          24/7 Available
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Scrollable Content */}
                  <div className="h-[calc(100vh-140px)] overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-muted/50">
                    <div className="px-6 py-4 space-y-6">
                      {/* Navigation Items */}
                      <div className="space-y-4">
                        {MAIN_NAVIGATION.map((item, index) => (
                          <div key={item.title} className="group">
                            {/* Main Category */}
                            <div className="flex items-center justify-between p-3 rounded-xl bg-muted/50 border border-border hover:bg-accent/10 hover:border-accent/20 transition-all duration-300">
                              <div className="flex items-center space-x-3">
                                <div className="p-2 rounded-lg bg-background shadow-sm group-hover:shadow-md transition-shadow border border-border">
                                  {getServiceIcon(item.title)}
                                </div>
                                <div className="flex flex-col">
                                  <span className="font-semibold text-foreground text-sm md:text-base">
                                    {item.title}
                                  </span>
                                  <span className="text-xs text-muted-foreground">
                                    {item.items?.length || 0} services
                                  </span>
                                </div>
                              </div>
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="text-xs font-bold text-primary">
                                  {index + 1}
                                </span>
                              </div>
                            </div>

                            {/* Sub Items */}
                            {item.items && (
                              <div className="mt-3 ml-4 space-y-2">
                                {item.items.map((service, serviceIndex) => (
                                  <Link
                                    key={service.name}
                                    href={service.href}
                                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary hover:text-primary-foreground group/item transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-sm"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <div className="w-6 h-6 rounded-full bg-muted group-hover/item:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                                      <span className="text-xs font-medium text-muted-foreground group-hover/item:text-primary-foreground">
                                        {serviceIndex + 1}
                                      </span>
                                    </div>
                                    <div className="flex-1">
                                      <div className="text-sm font-medium text-foreground group-hover/item:text-primary-foreground transition-colors">
                                        {service.name}
                                      </div>
                                      <div className="text-xs text-muted-foreground group-hover/item:text-primary-foreground/80 transition-colors">
                                        Professional {service.name.toLowerCase()} services
                                      </div>
                                    </div>
                                    <div className="opacity-0 group-hover/item:opacity-100 transition-opacity">
                                      <svg
                                        className="w-4 h-4 text-primary-foreground"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M9 5l7 7-7 7"
                                        />
                                      </svg>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Quick Links Section */}
                      <div className="border-t border-border pt-6">
                        <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          Quick Links
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {QUICK_LINKS.map((link) => (
                            <Link
                              key={link.name}
                              href={link.href}
                              className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                                {link.name}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Footer CTA */}
                  <div className="sticky bottom-0 bg-background border-t border-border px-6 py-4 shadow-lg">
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold py-3 text-sm md:text-base shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                      <Phone className="h-4 w-4 mr-2" />
                      Get Free Consultation Now
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Button>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Call us now for immediate assistance
                    </p>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
