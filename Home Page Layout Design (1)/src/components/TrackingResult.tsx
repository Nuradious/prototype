import { useState } from "react";
import { Package, MapPin, CheckCircle2, Clock, Mail, MessageSquare, ArrowLeft, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

interface TimelineEvent {
  id: number;
  status: string;
  description: string;
  location: string;
  date: string;
  time: string;
  completed: boolean;
}

interface TrackingResultProps {
  onBack?: () => void;
}

export function TrackingResult({ onBack }: TrackingResultProps) {
  const [trackingNumber] = useState("GY123456789");
  const [emailSent, setEmailSent] = useState(false);
  const [smsSent, setSmsSent] = useState(false);

  const timelineEvents: TimelineEvent[] = [
    {
      id: 1,
      status: "Package Arrived",
      description: "Package arrived at Guyana facility",
      location: "Cheddi Jagan International Airport",
      date: "Nov 12, 2025",
      time: "09:15 AM",
      completed: true,
    },
    {
      id: 2,
      status: "Customs Clearance",
      description: "Package cleared customs",
      location: "Georgetown Customs Office",
      date: "Nov 13, 2025",
      time: "02:30 PM",
      completed: true,
    },
    {
      id: 3,
      status: "Out for Delivery",
      description: "Package is on the delivery vehicle",
      location: "Georgetown Delivery Hub",
      date: "Nov 15, 2025",
      time: "08:00 AM",
      completed: true,
    },
    {
      id: 4,
      status: "Delivered",
      description: "Package will be delivered today",
      location: "Georgetown, Guyana",
      date: "Nov 15, 2025",
      time: "Expected by 5:00 PM",
      completed: false,
    },
  ];

  const handleEmailNotification = () => {
    setEmailSent(true);
    setTimeout(() => setEmailSent(false), 3000);
  };

  const handleSmsNotification = () => {
    setSmsSent(true);
    setTimeout(() => setSmsSent(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <div className="flex gap-3 mb-6">
          <Button 
            variant="ghost" 
            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
            onClick={onBack}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tracking
          </Button>
          <Button 
            variant="outline" 
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
            onClick={onBack}
          >
            <Search className="w-4 h-4 mr-2" />
            Search Again
          </Button>
        </div>

        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Package className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-600">Tracking Number</span>
              </div>
              <h2 className="text-gray-900">{trackingNumber}</h2>
            </div>
            <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 w-fit">
              <Clock className="w-4 h-4 mr-2" />
              In Transit
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Timeline Section */}
          <div className="md:col-span-2">
            <Card className="p-6">
              <h3 className="mb-6 text-gray-900">Delivery Timeline</h3>
              
              <div className="space-y-8">
                {timelineEvents.map((event, index) => (
                  <div key={event.id} className="relative">
                    {/* Vertical Line */}
                    {index < timelineEvents.length - 1 && (
                      <div
                        className={`absolute left-4 top-10 w-0.5 h-full ${
                          event.completed ? "bg-blue-600" : "bg-gray-300"
                        }`}
                        style={{ height: "calc(100% + 2rem)" }}
                      ></div>
                    )}
                    
                    <div className="flex gap-4">
                      {/* Status Icon */}
                      <div className="relative z-10">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            event.completed
                              ? "bg-blue-600 text-white"
                              : "bg-gray-200 text-gray-400"
                          }`}
                        >
                          {event.completed ? (
                            <CheckCircle2 className="w-5 h-5" />
                          ) : (
                            <Clock className="w-4 h-4" />
                          )}
                        </div>
                      </div>

                      {/* Event Details */}
                      <div className="flex-1 pb-8">
                        <div className="flex items-start justify-between mb-1">
                          <h4 className={event.completed ? "text-gray-900" : "text-gray-600"}>
                            {event.status}
                          </h4>
                          <span className="text-sm text-gray-500">{event.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{event.description}</p>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <MapPin className="w-3 h-3" />
                          <span>{event.location}</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{event.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Sender/Receiver Info Card */}
            <Card className="p-6">
              <h4 className="mb-4 text-gray-900">Shipment Details</h4>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Sender</p>
                  <p className="text-gray-900">Amazon Fulfillment</p>
                  <p className="text-sm text-gray-600">Miami, FL, USA</p>
                </div>
                
                <Separator />
                
                <div>
                  <p className="text-sm text-gray-500 mb-1">Receiver</p>
                  <p className="text-gray-900">John Smith</p>
                  <p className="text-sm text-gray-600">123 Main Street</p>
                  <p className="text-sm text-gray-600">Georgetown, Guyana</p>
                </div>
                
                <Separator />
                
                <div>
                  <p className="text-sm text-gray-500 mb-1">Package Type</p>
                  <p className="text-gray-900">Standard Parcel</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-1">Weight</p>
                  <p className="text-gray-900">2.5 kg</p>
                </div>
              </div>
            </Card>

            {/* Notification Buttons Card */}
            <Card className="p-6">
              <h4 className="mb-4 text-gray-900">Get Notifications</h4>
              
              <div className="space-y-3">
                <Button
                  onClick={handleEmailNotification}
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700 transition-all"
                  disabled={emailSent}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  {emailSent ? "Email Sent!" : "Email Updates"}
                </Button>
                
                <Button
                  onClick={handleSmsNotification}
                  variant="outline"
                  className="w-full border-red-600 text-red-600 hover:bg-red-50 hover:border-red-700 transition-all"
                  disabled={smsSent}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  {smsSent ? "SMS Sent!" : "SMS Updates"}
                </Button>
              </div>
              
              <p className="text-xs text-gray-500 mt-4">
                Receive real-time updates about your package delivery status
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}