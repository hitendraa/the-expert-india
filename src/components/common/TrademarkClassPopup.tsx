"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, X } from "lucide-react";

interface TrademarkClassPopupProps {
  trigger: React.ReactNode;
}

const TRADEMARK_CLASSES = [
  {
    class: "Trademark Class 1",
    description: "Chemicals used in industry, science and photography, as well as in agriculture, horticulture and forestry; unprocessed artificial resins, unprocessed plastics; manures; fire extinguishing compositions; tempering and soldering preparations; chemical substances for preserving foodstuffs; tanning substances; adhesives used in industry"
  },
  {
    class: "Trademark Class 2",
    description: "Paints, varnishes, lacquers; preservatives against rust and against deterioration of wood; colorants; mordants; raw natural resins; metals in foil and powder form for painters, decorators, printers and artists"
  },
  {
    class: "Trademark Class 3",
    description: "Bleaching preparations and other substances for laundry use; cleaning, polishing, scouring and abrasive preparations; soaps; perfumery, essential oils, cosmetics, hair lotions; dentifrices"
  },
  {
    class: "Trademark Class 4",
    description: "Industrial oils and greases; lubricants; dust absorbing, wetting and binding compositions; fuels (including motor spirit) and illuminates; candles and wicks for lighting"
  },
  {
    class: "Trademark Class 5",
    description: "Pharmaceutical and veterinary preparations; sanitary preparations for medical purposes; dietetic substances adapted for medical use, food for babies; plasters, materials for dressings; material for stopping teeth, dental wax; disinfectants; preparations for destroying vermin; fungicides, herbicides"
  },
  {
    class: "Trademark Class 6",
    description: "Common metals and their alloys; metal building materials; transportable buildings of metal; materials of metal for railway tracks; non-electric cables and wires of common metal; ironmongery, small items of metal hardware; pipes and tubes of metal; safes; goods of common metal not included in other classes; ores"
  },
  {
    class: "Trademark Class 7",
    description: "Machines and machine tools; motors and engines (except for land vehicles); machine coupling and transmission components (except for land vehicles); agricultural implements other than hand-operated; incubators for eggs"
  },
  {
    class: "Trademark Class 8",
    description: "Hand tools and implements (hand-operated); cutlery; side arms; razors"
  },
  {
    class: "Trademark Class 9",
    description: "Scientific, nautical, surveying, photographic, cinematographic, optical, weighing, measuring, signalling, checking (supervision), life-saving and teaching apparatus and instruments; apparatus and instruments for conducting, switching, transforming, accumulating, regulating or controlling electricity; apparatus for recording, transmission or reproduction of sound or images; magnetic data carriers, recording discs; automatic vending machines and mechanisms for coin-operated apparatus; cash registers, calculating machines, data processing equipment and computers; fire-extinguishing apparatus"
  },
  {
    class: "Trademark Class 10",
    description: "Surgical, medical, dental and veterinary apparatus and instruments, artificial limbs, eyes and teeth; orthopedic articles; suture materials"
  },
  {
    class: "Trademark Class 11",
    description: "Apparatus for lighting, heating, steam generating, cooking, refrigerating, drying, ventilating, water supply and sanitary purposes"
  },
  {
    class: "Trademark Class 12",
    description: "Vehicles and conveyances, Parts and fittings for vehicles, Anti-theft, security and safety devices and equipment for vehicles, Powertrains, including engines and motors, for land vehicles"
  },
  {
    class: "Trademark Class 13",
    description: "Firearms; ammunition and projectiles; explosives; fireworks"
  },
  {
    class: "Trademark Class 14",
    description: "Precious metals and their alloys and goods in precious metals or coated therewith, not included in other classes; jewellery, precious stones; horological and chronometric instruments"
  },
  {
    class: "Trademark Class 15",
    description: "Musical Instruments and supplies, Musical accessories."
  },
  {
    class: "Trademark Class 16",
    description: "Paper, cardboard and goods made from these materials, not included in other classes; printed matter; bookbinding material; photographs; stationery; adhesives for stationery or household purposes; artists' materials; paint brushes; typewriters and office requisites (except furniture); instructional and teaching material (except apparatus); plastic materials for packaging (not included in other classes); printers' type; printing blocks"
  },
  {
    class: "Trademark Class 17",
    description: "Rubber, gutta-percha, gum, asbestos, mica and goods made from these materials and not included in other classes; plastics in extruded form for use in manufacture; packing, stopping and insulating materials; flexible pipes, not of metal"
  },
  {
    class: "Trademark Class 18",
    description: "Leather and imitations of leather, and goods made of these materials and not included in other classes; animal skins, hides; trunks and travelling bags; umbrellas, parasols and walking sticks; whips, harness and saddler"
  },
  {
    class: "Trademark Class 19",
    description: "Building materials (non-metallic); non-metallic rigid pipes for building; asphalt, pitch and bitumen; non-metallic transportable buildings; monuments, not of metal"
  },
  {
    class: "Trademark Class 21",
    description: "Household or kitchen utensils and containers; combs and sponges; brushes (except paint brushes); brush-making materials; articles for cleaning purposes; steel wool; un worked or semi-worked glass (except glass used in building); glassware, porcelain and earthenware not included in other classes"
  },
  {
    class: "Trademark Class 22",
    description: "Ropes, string, nets, tents, awnings, tarpaulins, sails, sacks and bags (not included in other classes); padding and stuffing materials (except of rubber or plastics); raw fibrous textile materials"
  },
  {
    class: "Trademark Class 23",
    description: "Yarns and threads, for textile use"
  },
  {
    class: "Trademark Class 24",
    description: "Textiles and textile goods, not included in other classes; bed and table covers"
  },
  {
    class: "Trademark Class 25",
    description: "Clothing, Footwear and Headgear"
  },
  {
    class: "Trademark Class 26",
    description: "Lace and embroidery, ribbons and braid; buttons, hooks and eyes, pins and needles; artificial flowers"
  },
  {
    class: "Trademark Class 27",
    description: "Carpets, rugs, mats and matting, linoleum and other materials for covering existing floors; wall hangings (non-textile)"
  },
  {
    class: "Trademark Class 28",
    description: "Games and playthings; gymnastic and sporting articles not included in other classes; decorations for Christmas trees"
  },
  {
    class: "Trademark Class 29",
    description: "Meat, fish, poultry and game; meat extracts; preserved, frozen, dried and cooked fruits and vegetables; jellies, jams, compotes; eggs, milk and milk products; edible oils and fats"
  },
  {
    class: "Trademark Class 30",
    description: "Coffee, tea, cocoa, sugar, rice, tapioca, sago, artificial coffee; flour and preparations made from cereals, bread, pastry and confectionery, ices; honey, treacle; yeast, baking-powder; salt, mustard; vinegar, sauces (condiments); spices; ice"
  },
  {
    class: "Trademark Class 31",
    description: "Agricultural, horticultural and forestry products and grains not included in other classes; live animals; fresh fruits and vegetables; seeds, natural plants and flowers; foodstuffs for animals; malt"
  },
  {
    class: "Trademark Class 32",
    description: "Beers; mineral and aerated waters and other non-alcoholic drinks; fruit drinks and fruit juices; syrups and other preparations for making beverages"
  },
  {
    class: "Trademark Class 33",
    description: "Preparations for making alcoholic beverages, Wines, Spirits, Liqueurs"
  },
  {
    class: "Trademark Class 34",
    description: "Tobacco, Smokers Requisites & Matches"
  },
  {
    class: "Trademark Class 35",
    description: "Advertising, Business Consulting, marketing and promotional consultancy, advisory and assistance services, Commercial trading and consumer information services, Business assistance, management and administrative services"
  },
  {
    class: "Trademark Class 36",
    description: "Insurance, Financial, Currency trading and exchange services, Loan and credit, and lease-finance services, Valuation services"
  },
  {
    class: "Trademark Class 37",
    description: "Construction, Repair, Cleaning , Mining, and oil and gas extraction, Installation, cleaning, repair and maintenance, Glazing, installation, maintenance and repair of glass, windows and blinds, Extermination, disinfection and pest control"
  },
  {
    class: "Trademark Class 38",
    description: "Communications Services, Broadcasting services, Computer communication and Internet access, Access to content, websites and portals"
  },
  {
    class: "Trademark Class 39",
    description: "Transport, Utilities, Mail delivery and courier services, Freight and cargo transportation and removal services, car transport, Storage & Warehousing"
  },
  {
    class: "Trademark Class 40",
    description: "Materials Treatment, Energy production, Textile, leather and fur treatment, Recycling and waste treatment, Duplication of audio and video recordings, Air and water conditioning and purification"
  },
  {
    class: "Trademark Class 41",
    description: "Education, Amusement, Entertainment, Gambling, Translation and interpretation"
  },
  {
    class: "Trademark Class 42",
    description: "Scientific and technological services, IT services, eCommerce, Data duplication and conversion services, data coding services and research and design relating thereto"
  },
  {
    class: "Trademark Class 43",
    description: "Services for providing food and drink; temporary accommodations, Hotels, hostels and boarding houses, holiday and tourist accommodation, Rental of furniture, linens and table settings"
  },
  {
    class: "Trademark Class 44",
    description: "Medical services; veterinary services; hygienic and beauty care for human beings or animals, Body art, Landscape design, Agriculture, aquaculture, horticulture and forestry services"
  },
  {
    class: "Trademark Class 45",
    description: "Personal and social services rendered by others to meet the needs of individuals, Astrological and spiritual services, Dating services, Legal services"
  }
];

const TrademarkClassPopup = ({ trigger }: TrademarkClassPopupProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);

  const filteredClasses = TRADEMARK_CLASSES.filter(
    (item) =>
      item.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900 mb-2">
            Find Your Trademark Class
          </DialogTitle>
        </DialogHeader>
        
        {/* Search Input */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search by class number or business category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-10"
          />
          {searchTerm && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSearchTerm("")}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Search Results Count */}
        {searchTerm && (
          <div className="mb-3">
            <Badge variant="secondary" className="text-xs">
              {filteredClasses.length} of {TRADEMARK_CLASSES.length} classes found
            </Badge>
          </div>
        )}

        {/* Classes List */}
        <ScrollArea className="h-[50vh] pr-4">
          <div className="space-y-4">
            {filteredClasses.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="font-bold text-brand-primary text-lg mb-2">
                  {item.class}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          
          {filteredClasses.length === 0 && searchTerm && (
            <div className="text-center py-8">
              <div className="text-gray-500 mb-2">No classes found matching your search</div>
              <Button
                variant="outline"
                onClick={() => setSearchTerm("")}
                className="text-sm"
              >
                Clear Search
              </Button>
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TrademarkClassPopup;
