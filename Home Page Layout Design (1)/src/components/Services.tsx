import { Package, Truck, Globe, Clock, Shield, FileText, Box, Plane } from "lucide-react";
import { Card } from "./ui/card";

const services = [
  {
    id: 1,
    icon: Package,
    title: "Standard Mail",
    description: "Reliable delivery of letters and documents within Guyana. Affordable rates for everyday postal needs.",
    color: "blue",
  },
  {
    id: 2,
    icon: Truck,
    title: "Express Delivery",
    description: "Fast-track delivery service for urgent packages. Same-day and next-day delivery options available.",
    color: "red",
  },
  {
    id: 3,
    icon: Globe,
    title: "International Shipping",
    description: "Send and receive packages worldwide. Customs clearance assistance and tracking included.",
    color: "blue",
  },
  {
    id: 4,
    icon: Clock,
    title: "Package Tracking",
    description: "Real-time tracking for all your shipments. Get instant updates on package status and location.",
    color: "blue",
  },
  {
    id: 5,
    icon: Box,
    title: "Post Office Box Rental",
    description: "Secure mailbox rental at convenient locations. Daily mail collection and package notifications.",
    color: "blue",
  },
  {
    id: 6,
    icon: Shield,
    title: "Registered Mail",
    description: "Enhanced security for valuable items. Signature confirmation and insurance coverage available.",
    color: "red",
  },
  {
    id: 7,
    icon: FileText,
    title: "Business Solutions",
    description: "Bulk mailing services for businesses. Special rates and dedicated account management.",
    color: "blue",
  },
  {
    id: 8,
    icon: Plane,
    title: "Air Mail Services",
    description: "Priority air mail for domestic and international delivery. Fastest shipping option available.",
    color: "red",
  },
];

export function Services() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="mb-4 text-gray-900">Our Services</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive postal and delivery solutions tailored to meet your needs across Guyana and beyond
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            const bgColor = service.color === "blue" ? "bg-blue-100" : "bg-red-100";
            const iconColor = service.color === "blue" ? "text-blue-600" : "text-red-600";
            const hoverBorder = service.color === "blue" ? "hover:border-blue-600" : "hover:border-red-600";

            return (
              <Card
                key={service.id}
                className={`p-6 transition-all duration-300 hover:shadow-lg border-2 border-transparent ${hoverBorder} cursor-pointer`}
              >
                <div className={`w-14 h-14 ${bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${iconColor}`} />
                </div>
                <h3 className="text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white text-center">
            <h3 className="text-white mb-4">Need Help Choosing a Service?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our team is ready to assist you in finding the perfect solution for your delivery needs
            </p>
            <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-200">
              Contact Us Today
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
}