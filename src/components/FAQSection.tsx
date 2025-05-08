
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      id: "what-is",
      question: "What is Pathao Courier?",
      answer: "Pathao Rental offers a wide range of car types to cater to every size and need, with trip scheduling capability anywhere in the country. It also provides transparent pricing and the ability to choose your ride and vehicle from multiple offers. Additionally, you can enjoy all the other ride-sharing perks of Pathao Car.",
      isOpen: true,
    },
    {
      id: "schedule",
      question: "How long can I schedule a Round Trip?",
      answer: "You can schedule round trips according to your needs. The system allows flexible scheduling options to accommodate your travel requirements.",
      isOpen: false,
    },
    {
      id: "estimate",
      question: "What is included in the estimated range that is shown?",
      answer: "The estimated range includes the base fare, distance fare, and any applicable taxes or fees. It gives you a reasonable approximation of what your trip will cost.",
      isOpen: false,
    },
    {
      id: "multiple-stops",
      question: "Can I add multiple stops for Rental?",
      answer: "Yes, you can add multiple stops for your rental journey. This feature allows you to plan a more efficient trip with multiple destinations.",
      isOpen: false,
    },
    {
      id: "cancellation",
      question: "How does trip cancellation work? How do I cancel my trip?",
      answer: "You can cancel your trip directly from the app. Depending on when you cancel, different cancellation policies may apply. Early cancellations typically have lower or no fees.",
      isOpen: false,
    },
    {
      id: "driver-profile",
      question: "I am not able to see my driver profile and cannot contact them.",
      answer: "If you're experiencing issues viewing your driver's profile or contacting them, please ensure you have the latest version of the app installed. If the problem persists, contact our customer support team for assistance.",
      isOpen: false,
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently asked questions</h2>
        
        <Accordion type="single" collapsible defaultValue="what-is">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
