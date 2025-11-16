import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Card } from "./ui/card";

const faqCategories = [
  {
    category: "Package Tracking",
    questions: [
      {
        id: "track-1",
        question: "How do I track my package?",
        answer:
          "Enter your tracking number on the home page in the tracking field. You'll receive real-time updates on your package's location and estimated delivery time. Tracking numbers typically start with 'GY' followed by 9 digits.",
      },
      {
        id: "track-2",
        question: "What if my tracking number isn't working?",
        answer:
          "Please verify that you've entered the correct tracking number. If the issue persists, contact our customer service team at +592-226-4211 or visit your nearest branch. It may take up to 24 hours for new tracking numbers to appear in the system.",
      },
      {
        id: "track-3",
        question: "How often is tracking information updated?",
        answer:
          "Tracking information is updated in real-time as your package moves through our delivery network. Major checkpoints include arrival at facility, customs clearance, out for delivery, and delivery confirmation.",
      },
    ],
  },
  {
    category: "Delivery & Delays",
    questions: [
      {
        id: "delivery-1",
        question: "What are the typical delivery times?",
        answer:
          "Domestic deliveries within Georgetown typically take 1-2 business days. Deliveries to other regions may take 2-5 business days depending on location. Express delivery options are available for faster service.",
      },
      {
        id: "delivery-2",
        question: "Why is my package delayed?",
        answer:
          "Delays can occur due to customs processing, weather conditions, incorrect address information, or high package volumes during peak seasons. Check your tracking information for specific details or contact us for assistance.",
      },
      {
        id: "delivery-3",
        question: "What happens if I'm not home for delivery?",
        answer:
          "Our delivery personnel will leave a notice with instructions. You can reschedule delivery, arrange for pickup at your nearest post office, or authorize a neighbor to receive the package on your behalf.",
      },
    ],
  },
  {
    category: "Customs & International",
    questions: [
      {
        id: "customs-1",
        question: "How long does customs clearance take?",
        answer:
          "Customs clearance typically takes 1-3 business days for standard packages. Processing times may vary based on package contents, documentation completeness, and current customs workload. We'll notify you if additional information is needed.",
      },
      {
        id: "customs-2",
        question: "Do I need to pay customs fees?",
        answer:
          "Customs duties and taxes may apply to international shipments based on the item's value and type. You'll be notified if any fees are due before delivery. Payment can be made at the delivery point or at a post office branch.",
      },
      {
        id: "customs-3",
        question: "What items are restricted for international shipping?",
        answer:
          "Prohibited items include hazardous materials, explosives, illegal substances, and certain perishables. Contact our international shipping desk for a complete list and guidance on restricted items.",
      },
    ],
  },
  {
    category: "Post Office Pickup",
    questions: [
      {
        id: "pickup-1",
        question: "How do I choose post office pickup?",
        answer:
          "Go to the Delivery Preferences page and select 'Post Office Pickup,' then choose your preferred branch. You'll receive a notification when your package is ready for collection.",
      },
      {
        id: "pickup-2",
        question: "What do I need to bring for pickup?",
        answer:
          "Bring a valid government-issued ID and your tracking number or pickup notification. If someone else is collecting on your behalf, they'll need authorization and their own ID.",
      },
      {
        id: "pickup-3",
        question: "How long will my package be held?",
        answer:
          "Packages are held for 14 days from the ready-for-pickup notification. After this period, packages may be returned to sender or transferred to our main facility. Contact us if you need an extension.",
      },
    ],
  },
];

export function FAQs() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="mb-4 text-gray-900">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our tracking system, delivery services, and postal operations
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {faqCategories.map((category) => (
            <div key={category.category}>
              <h3 className="mb-4 text-blue-900">{category.category}</h3>
              <Card className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      className={index === category.questions.length - 1 ? "border-b-0" : ""}
                    >
                      <AccordionTrigger className="text-left hover:text-blue-600">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <Card className="mt-12 p-8 bg-blue-50 border-blue-200 text-center">
          <h3 className="text-blue-900 mb-3">Still Have Questions?</h3>
          <p className="text-gray-700 mb-6">
            Our customer support team is ready to help you with any inquiries
          </p>
          <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-200">
            Contact Support
          </button>
        </Card>
      </div>
    </div>
  );
}