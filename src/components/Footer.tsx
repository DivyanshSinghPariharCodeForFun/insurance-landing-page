import { Shield, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-yellow-400" />
              <span className="text-xl">InsureRight</span>
            </div>
            <p className="text-blue-200 text-sm">
              Your trusted partner for comprehensive insurance solutions. Protecting what matters most to you.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Claims Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Insurance Types</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Health Insurance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Life Insurance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Motor Insurance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Property Insurance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Contact Us</h4>
            <ul className="space-y-3 text-blue-200 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>+91 90450 12237</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>beemasahayata@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                {/* Facebook share/link */}
                <a href="https://www.facebook.com/share/19EQNdQkoF/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-100 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden>
                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12H20l-1 3h-2.3v7A10 10 0 0 0 22 12z" />
                  </svg>
                  <span className="text-sm">Facebook</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                {/* Telegram invite link */}
                <a href="https://t.me/+SFEVZ1iVVpQ4ZjU1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-100 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" className="w-4 h-4" fill="currentColor" aria-hidden>
                    <path d="M120 0C53.7 0 0 53.7 0 120s53.7 120 120 120 120-53.7 120-120S186.3 0 120 0zm55.6 80.5l-15.3 72.1c-1.2 5.2-4.4 6.5-9 4.1l-24.9-18.3-12 11.6c-1.3 1.3-2.4 2.4-4.9 2.4l1.7-24.9 45.4-41.1c1.9-1.7-.4-2.7-3-1l-56.1 35-24.1-7.6c-5.2-1.6-5.3-5.2 1.1-7.7L165 64.3c4.6-1.6 8.6 1 10.6 4.2 1.3 2.1 1.3 4.5-.6 12z" />
                  </svg>
                  <span className="text-sm">Telegram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8 text-center text-blue-200 text-sm">
          <p>&copy; 2025 InsureRight. All rights reserved. | <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Terms & Conditions</a></p>
        </div>
      </div>
    </footer>
  );
}
