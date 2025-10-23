import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp business number
    const phoneNumber = "919045012237"; // Format: country code + number (no + or spaces)
    const message = encodeURIComponent("Hi! I'm interested in learning more about your insurance policies.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl z-50 p-0 animate-bounce hover:animate-none"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  );
}
