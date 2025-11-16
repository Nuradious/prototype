import { useState } from "react";
import { Search, MapPin, Clock, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface HeroProps {
  onTrack: () => void;
}

export function Hero({ onTrack }: HeroProps) {
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleTrack = () => {
    if (trackingNumber.trim()) {
      onTrack();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleTrack();
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Real-time package tracking</span>
            </div>
            
            <h2 className="mb-6">
              Track Your Package in Real-Time
            </h2>
            
            <p className="text-blue-100 mb-12 text-lg">
              Enter your tracking number below to get instant updates on your delivery status
            </p>

            {/* Tracking Input */}
            <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="Enter tracking number (e.g., GY123456789)"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="h-14 text-gray-900 border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
                <Button
                  onClick={handleTrack}
                  className="h-14 px-8 bg-red-600 hover:bg-red-700 text-white transition-all duration-200"
                  size="lg"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Track Package
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-gray-900">Real-Time Location</h3>
              <p className="text-gray-600">
                Track your package's exact location throughout Guyana
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="mb-2 text-gray-900">Estimated Delivery</h3>
              <p className="text-gray-600">
                Get accurate delivery time estimates and notifications
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-gray-900">Secure Delivery</h3>
              <p className="text-gray-600">
                Your packages are safe with our trusted delivery network
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}