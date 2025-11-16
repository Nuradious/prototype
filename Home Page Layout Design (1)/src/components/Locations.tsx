import { MapPin, Clock, Phone, Star } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const branches = [
  {
    id: 1,
    name: "Main Branch - Georgetown",
    address: "Robb Street, Georgetown",
    phone: "+592-226-4211",
    hours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      saturday: "Saturday: 8:00 AM - 12:00 PM",
      sunday: "Sunday: Closed",
    },
    isMain: true,
  },
  {
    id: 2,
    name: "Stabroek Branch",
    address: "Water Street, Georgetown",
    phone: "+592-226-5432",
    hours: {
      weekday: "Monday - Friday: 8:00 AM - 4:30 PM",
      saturday: "Saturday: 8:00 AM - 12:00 PM",
      sunday: "Sunday: Closed",
    },
    isMain: false,
  },
  {
    id: 3,
    name: "Bourda Branch",
    address: "Bourda Market, Georgetown",
    phone: "+592-226-7890",
    hours: {
      weekday: "Monday - Friday: 8:00 AM - 4:30 PM",
      saturday: "Saturday: 9:00 AM - 12:00 PM",
      sunday: "Sunday: Closed",
    },
    isMain: false,
  },
  {
    id: 4,
    name: "Diamond Branch",
    address: "Diamond, East Bank Demerara",
    phone: "+592-265-3456",
    hours: {
      weekday: "Monday - Friday: 8:00 AM - 4:00 PM",
      saturday: "Saturday: 9:00 AM - 12:00 PM",
      sunday: "Sunday: Closed",
    },
    isMain: false,
  },
  {
    id: 5,
    name: "New Amsterdam Branch",
    address: "Strand, New Amsterdam, Berbice",
    phone: "+592-333-2345",
    hours: {
      weekday: "Monday - Friday: 8:00 AM - 4:00 PM",
      saturday: "Saturday: 9:00 AM - 12:00 PM",
      sunday: "Sunday: Closed",
    },
    isMain: false,
  },
  {
    id: 6,
    name: "Linden Branch",
    address: "Mackenzie, Linden",
    phone: "+592-444-5678",
    hours: {
      weekday: "Monday - Friday: 8:00 AM - 4:00 PM",
      saturday: "Saturday: 9:00 AM - 12:00 PM",
      sunday: "Sunday: Closed",
    },
    isMain: false,
  },
  {
    id: 7,
    name: "Anna Regina Branch",
    address: "Essequibo Coast, Anna Regina",
    phone: "+592-771-2345",
    hours: {
      weekday: "Monday - Friday: 8:00 AM - 4:00 PM",
      saturday: "Saturday: 9:00 AM - 12:00 PM",
      sunday: "Sunday: Closed",
    },
    isMain: false,
  },
  {
    id: 8,
    name: "Bartica Branch",
    address: "First Avenue, Bartica",
    phone: "+592-455-6789",
    hours: {
      weekday: "Monday - Friday: 8:00 AM - 3:30 PM",
      saturday: "Saturday: 9:00 AM - 12:00 PM",
      sunday: "Sunday: Closed",
    },
    isMain: false,
  },
];

export function Locations() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="mb-4 text-gray-900">Our Locations</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find a Guyana Post Office branch near you. We're here to serve you across the nation.
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {branches.map((branch) => (
            <Card
              key={branch.id}
              className={`p-6 transition-all duration-300 hover:shadow-lg ${
                branch.isMain
                  ? "border-2 border-blue-600 bg-blue-50"
                  : "border-2 border-transparent hover:border-blue-300"
              }`}
            >
              {/* Branch Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-gray-900">{branch.name}</h3>
                    {branch.isMain && (
                      <Badge className="bg-red-600 hover:bg-red-700 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Main
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              {/* Branch Details */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-900">{branch.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-900">{branch.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-gray-900">{branch.hours.weekday}</p>
                    <p className="text-gray-900">{branch.hours.saturday}</p>
                    <p className="text-gray-600">{branch.hours.sunday}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Info Banner */}
        <Card className="mt-12 p-6 bg-blue-50 border-blue-200">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-blue-900 mb-2">Need Directions?</h3>
              <p className="text-gray-700">
                Call any of our branches for detailed directions or visit our main office in Georgetown for in-person assistance.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
