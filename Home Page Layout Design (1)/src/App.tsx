import { useState } from "react";
import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TrackingResult } from "./components/TrackingResult";
import { DeliveryPreference } from "./components/DeliveryPreference";
import { Contact } from "./components/Contact";
import { Services } from "./components/Services";
import { Locations } from "./components/Locations";
import { FAQs } from "./components/FAQs";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "tracking" | "delivery" | "services" | "locations" | "faqs" | "contact">("home");

  const renderPage = () => {
    switch (currentPage) {
      case "tracking":
        return <TrackingResult onBack={() => setCurrentPage("home")} />;
      case "delivery":
        return <DeliveryPreference onBack={() => setCurrentPage("home")} />;
      case "contact":
        return <Contact />;
      case "services":
        return <Services />;
      case "locations":
        return <Locations />;
      case "faqs":
        return <FAQs />;
      default:
        return <Hero onTrack={() => setCurrentPage("tracking")} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}