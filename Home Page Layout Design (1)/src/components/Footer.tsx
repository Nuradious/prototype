import { Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  onNavigate: (page: "home" | "tracking" | "delivery" | "services" | "locations" | "faqs" | "contact") => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="mb-4">Guyana Post Office</h4>
            <p className="text-blue-200">
              Delivering excellence across Guyana with reliable and efficient postal services.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate("tracking")}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Track Package
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("services")}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("locations")}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Locations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("faqs")}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("delivery")}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Delivery Preferences
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-blue-200">
                <Phone className="w-4 h-4" />
                <span>+592-226-4211</span>
              </li>
              <li className="flex items-center gap-2 text-blue-200">
                <Mail className="w-4 h-4" />
                <span>info@guyanapost.gy</span>
              </li>
              <li className="flex items-center gap-2 text-blue-200">
                <MapPin className="w-4 h-4" />
                <span>Georgetown, Guyana</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8 text-center text-blue-200">
          <p>© 2025 Guyana Post Office. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}