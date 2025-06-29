import { Phone, Mail, MessageCircle, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CONTACT_INFO } from "@/lib/constants"
import "@/app/animations.css"

const Topbar = () => {
  return (
    <div className="bg-brand-primary text-white py-1.5 md:py-2 px-4 text-xs md:text-sm border-b border-brand-secondary/30">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left side - Contact Info */}
        <div className="flex items-center space-x-3 md:space-x-6 overflow-hidden">
          <div className="flex items-center space-x-1.5 md:space-x-2">
            <Phone className="h-2.5 w-2.5 md:h-3 md:w-3 flex-shrink-0" />
            <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-brand-secondary transition-colors whitespace-nowrap">
              {CONTACT_INFO.phone}
            </a>
          </div>
          <div className="hidden sm:flex items-center space-x-1.5 md:space-x-2">
            <Mail className="h-2.5 w-2.5 md:h-3 md:w-3 flex-shrink-0" />
            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-brand-secondary transition-colors truncate max-w-[120px] md:max-w-none">
              {CONTACT_INFO.email}
            </a>
          </div>
          <div className="hidden lg:flex items-center space-x-2">
            <Clock className="h-3 w-3 flex-shrink-0" />
            <span className="text-white/80 whitespace-nowrap">Mon-Sat: 9:00 AM - 7:00 PM</span>
          </div>
        </div>

        {/* Right side - CTA and Social */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <MapPin className="h-3 w-3 flex-shrink-0" />
            <span className="text-white/80 whitespace-nowrap">Serving Across India</span>
          </div>
          <Button 
            size="sm" 
            variant="secondary" 
            className="bg-green-600 hover:bg-green-700 text-white border-0 h-6 md:h-7 px-2 md:px-3 text-xs font-medium"
            asChild
          >
            <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-2.5 w-2.5 md:h-3 md:w-3 mr-1" />
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="sm:hidden">WA</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Topbar