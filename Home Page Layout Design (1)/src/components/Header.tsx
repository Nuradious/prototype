import { Package, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface HeaderProps {
  currentPage: "home" | "tracking" | "delivery" | "services" | "locations" | "faqs" | "contact";
  onNavigate: (page: "home" | "tracking" | "delivery" | "services" | "locations" | "faqs" | "contact") => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const isMoreActive = ["services", "locations", "faqs"].includes(currentPage);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-blue-900">Guyana Post Office</h1>
              <p className="text-sm text-gray-600">Delivery Tracking</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-3">
            <button
              onClick={() => onNavigate("home")}
              className={`px-5 py-2.5 rounded-lg transition-all duration-200 ${
                currentPage === "home"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate("tracking")}
              className={`px-5 py-2.5 rounded-lg transition-all duration-200 ${
                currentPage === "tracking"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              Track Package
            </button>
            <button
              onClick={() => onNavigate("delivery")}
              className={`px-5 py-2.5 rounded-lg transition-all duration-200 ${
                currentPage === "delivery"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              Delivery Preferences
            </button>

            {/* More Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`px-5 py-2.5 rounded-lg transition-all duration-200 flex items-center gap-1 ${
                    isMoreActive
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  More
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 mt-2">
                <DropdownMenuItem
                  onClick={() => onNavigate("services")}
                  className={`px-4 py-3 cursor-pointer transition-colors ${
                    currentPage === "services"
                      ? "bg-blue-50 text-blue-700"
                      : "hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-medium">Services</span>
                    <span className="text-xs text-gray-500">View our postal services</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => onNavigate("locations")}
                  className={`px-4 py-3 cursor-pointer transition-colors ${
                    currentPage === "locations"
                      ? "bg-blue-50 text-blue-700"
                      : "hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-medium">Locations</span>
                    <span className="text-xs text-gray-500">Find our branches</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => onNavigate("faqs")}
                  className={`px-4 py-3 cursor-pointer transition-colors ${
                    currentPage === "faqs"
                      ? "bg-blue-50 text-blue-700"
                      : "hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-medium">FAQs</span>
                    <span className="text-xs text-gray-500">Common questions answered</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => onNavigate("contact")}
              className={`px-5 py-2.5 rounded-lg transition-all duration-200 ${
                currentPage === "contact"
                  ? "bg-red-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-red-50 hover:text-red-700"
              }`}
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}