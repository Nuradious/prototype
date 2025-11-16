import { useState } from "react";
import { Package, Home, Building2, MapPin, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const postOfficeBranches = [
  { id: "1", name: "Georgetown Main Branch", address: "Robb Street, Georgetown" },
  { id: "2", name: "Stabroek Branch", address: "Water Street, Georgetown" },
  { id: "3", name: "Bourda Branch", address: "Bourda Market, Georgetown" },
  { id: "4", name: "Diamond Branch", address: "Diamond, East Bank Demerara" },
  { id: "5", name: "New Amsterdam Branch", address: "Strand, New Amsterdam" },
  { id: "6", name: "Linden Branch", address: "Mackenzie, Linden" },
];

interface DeliveryPreferenceProps {
  onBack?: () => void;
}

export function DeliveryPreference({ onBack }: DeliveryPreferenceProps) {
  const [deliveryOption, setDeliveryOption] = useState<string>("home");
  const [selectedBranch, setSelectedBranch] = useState<string>("");
  const [saved, setSaved] = useState(false);

  const handleSaveChanges = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    console.log("Delivery preference saved:", {
      option: deliveryOption,
      branch: selectedBranch,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-gray-900">Choose Delivery Option</h2>
          </div>
          <p className="text-gray-600">
            Select how you would like to receive your package
          </p>
        </div>

        {/* Delivery Options Card */}
        <Card className="p-6 md:p-8 mb-6">
          <RadioGroup value={deliveryOption} onValueChange={setDeliveryOption}>
            <div className="space-y-4">
              {/* Home Delivery Option */}
              <div
                className={`relative flex items-start gap-4 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                  deliveryOption === "home"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setDeliveryOption("home")}
              >
                <RadioGroupItem value="home" id="home" className="mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        deliveryOption === "home"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <Home className="w-5 h-5" />
                    </div>
                    <Label
                      htmlFor="home"
                      className="cursor-pointer text-gray-900"
                    >
                      Home Delivery
                    </Label>
                  </div>
                  <p className="text-sm text-gray-600 ml-13">
                    Your package will be delivered directly to your registered
                    address
                  </p>
                </div>
              </div>

              {/* Post Office Pickup Option */}
              <div
                className={`relative flex items-start gap-4 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                  deliveryOption === "pickup"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setDeliveryOption("pickup")}
              >
                <RadioGroupItem value="pickup" id="pickup" className="mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        deliveryOption === "pickup"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <Building2 className="w-5 h-5" />
                    </div>
                    <Label
                      htmlFor="pickup"
                      className="cursor-pointer text-gray-900"
                    >
                      Post Office Pickup
                    </Label>
                  </div>
                  <p className="text-sm text-gray-600 ml-13 mb-4">
                    Collect your package from your preferred post office branch
                  </p>

                  {/* Branch Selection Dropdown */}
                  {deliveryOption === "pickup" && (
                    <div className="ml-13">
                      <Label
                        htmlFor="branch"
                        className="text-sm text-gray-700 mb-2 block"
                      >
                        Select Post Office Branch
                      </Label>
                      <Select
                        value={selectedBranch}
                        onValueChange={setSelectedBranch}
                      >
                        <SelectTrigger
                          id="branch"
                          className="w-full border-2 border-gray-300 focus:border-blue-600"
                        >
                          <SelectValue placeholder="Choose a branch..." />
                        </SelectTrigger>
                        <SelectContent>
                          {postOfficeBranches.map((branch) => (
                            <SelectItem key={branch.id} value={branch.id}>
                              <div className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                <div>
                                  <div className="text-gray-900">
                                    {branch.name}
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    {branch.address}
                                  </div>
                                </div>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </RadioGroup>
        </Card>

        {/* Selected Branch Info */}
        {deliveryOption === "pickup" && selectedBranch && (
          <Card className="p-4 mb-6 bg-blue-50 border-blue-200">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="text-sm text-gray-900 mb-1">
                  Selected Branch:
                </p>
                <p className="text-blue-900">
                  {
                    postOfficeBranches.find(
                      (branch) => branch.id === selectedBranch
                    )?.name
                  }
                </p>
                <p className="text-sm text-gray-600">
                  {
                    postOfficeBranches.find(
                      (branch) => branch.id === selectedBranch
                    )?.address
                  }
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Save Button */}
        <Button
          onClick={handleSaveChanges}
          className="w-full h-12 bg-red-600 hover:bg-red-700 text-white transition-all duration-200"
          size="lg"
          disabled={deliveryOption === "pickup" && !selectedBranch}
        >
          {saved ? (
            <>
              <Check className="w-5 h-5 mr-2" />
              Changes Saved!
            </>
          ) : (
            "Save Changes"
          )}
        </Button>

        {deliveryOption === "pickup" && !selectedBranch && (
          <p className="text-sm text-red-600 text-center mt-3">
            Please select a post office branch to continue
          </p>
        )}
      </div>
    </div>
  );
}