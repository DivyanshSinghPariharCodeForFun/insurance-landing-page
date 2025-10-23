import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";
import emailjs from "emailjs-com";
import { Send } from "lucide-react";

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    insuranceType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Prepare payload
    const payload = { ...formData, submittedAt: new Date().toISOString() };

  // Vite env variables should be prefixed with VITE_
  const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL as string | undefined;
    const OWNER_EMAIL = import.meta.env.VITE_OWNER_EMAIL as string | undefined; // fallback
    const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined; // international number, e.g. 919999888777
    const WHATSAPP_GROUP = import.meta.env.VITE_WHATSAPP_GROUP_URL as string | undefined; // group invite link

  // New: local/server API
  const API_BASE = (import.meta.env.VITE_API_URL as string | undefined) || 'http://localhost:4000';

    let sent = false;

    // Try server API first (recommended) then fallback to configured webhook
    if (API_BASE) {
      try {
        const res = await fetch(`${API_BASE.replace(/\/$/, '')}/submit`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          sent = true;
        } else {
          console.warn('API responded with non-OK status', res.status);
        }
      } catch (err) {
        console.warn('Server API send error', err);
      }
    }

    if (!sent && WEBHOOK_URL) {
      try {
        const res = await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (res.ok) {
          sent = true;
        } else {
          console.warn("Webhook responded with non-OK status", res.status);
        }
      } catch (err) {
        console.warn("Webhook send error", err);
      }
    }

  // Fallback: open mailto for owner email if API/webhook not configured or failed
    // Try EmailJS if configured (client-side email service)
    const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
    const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
    const EMAILJS_USER_ID = import.meta.env.VITE_EMAILJS_USER_ID as string | undefined;

    if (!sent && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_USER_ID) {
      try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, payload, EMAILJS_USER_ID);
        sent = true;
      } catch (err) {
        console.warn("EmailJS send failed", err);
      }
    }

    if (!sent && OWNER_EMAIL) {
      try {
        const subject = encodeURIComponent(`New quote request from ${payload.name}`);
        const body = encodeURIComponent(
          `Name: ${payload.name}\nPhone: ${payload.phone}\nEmail: ${payload.email}\nCity: ${payload.city}\nInsurance: ${payload.insuranceType}\nSubmittedAt: ${payload.submittedAt}`
        );
        // open mail client
        window.location.href = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
        sent = true;
      } catch (err) {
        console.warn("Mailto fallback failed", err);
      }
    }

    // If neither webhook nor mailto available, we still accept and notify on-page
    setSubmittedData(formData);
    setSubmitted(true);
    setIsSubmitting(false);

    toast.success("Thanks — we've received your request.", {
      description: "You'll see WhatsApp options below to continue the conversation."
    });

    // Open WhatsApp group invite immediately after submission (if configured)
    try {
      // prefer env var, otherwise use hard-coded fallback
      let GROUP_URL = "https://chat.whatsapp.com/Bar4emTc3RFHjZfCeonm9f?mode=wwt";
      try {
        const meta: any = import.meta as any;
        if (meta && meta.env && meta.env.VITE_WHATSAPP_GROUP_URL) {
          GROUP_URL = meta.env.VITE_WHATSAPP_GROUP_URL;
        }
      } catch {}

      if (GROUP_URL) {
        window.location.href = GROUP_URL;
      }
    } catch (err) {
      console.warn("Failed to open WhatsApp group URL", err);
      try { window.location.href = "https://chat.whatsapp.com/Bar4emTc3RFHjZfCeonm9f?mode=wwt"; } catch {}
    }
  };

  return (
    <section id="quote-form" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-4">Get Your Free Insurance Quote</h2>
            <p className="text-gray-600 mb-6">
              Fill out the form and our insurance experts will help you find the perfect plan that fits your needs and budget.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600">1</span>
                </div>
                <div>
                  <h4 className="mb-1">Share Your Details</h4>
                  <p className="text-gray-600 text-sm">Tell us about your insurance needs</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600">2</span>
                </div>
                <div>
                  <h4 className="mb-1">Get Expert Consultation</h4>
                  <p className="text-gray-600 text-sm">Our team will contact you within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600">3</span>
                </div>
                <div>
                  <h4 className="mb-1">Choose & Get Covered</h4>
                  <p className="text-gray-600 text-sm">Select the best plan and secure your future</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="shadow-xl border-2">
            <CardHeader>
              <CardTitle>Request a Free Quote</CardTitle>
              <CardDescription>Fill in your details and we'll get back to you</CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="space-y-4 text-center">
                  <h3 className="text-lg font-medium">Thanks! We got your request.</h3>
                  <p className="text-sm text-gray-600">An expert will contact you soon. Meanwhile you can join our WhatsApp group or start a chat.</p>

                  <div className="mt-4 inline-flex gap-3 flex-col sm:flex-row items-center justify-center">
                        <button
                          type="button"
                          onClick={() => {
                            // Try to open group invite (https link will open app on mobile/desktop if associated)
                            const groupUrl = import.meta.env.VITE_WHATSAPP_GROUP_URL || "#";
                            // Use location.href to let the OS/browser handle app opening if configured
                            window.location.href = groupUrl;
                            // As a secondary fallback open in new tab after a short delay
                            setTimeout(() => {
                              if (groupUrl && groupUrl !== "#") window.open(groupUrl, "_blank");
                            }, 800);
                          }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md shadow"
                        >
                          Join WhatsApp Group
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            const num = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;
                            const text = `Hi, I submitted a quote request. Name: ${submittedData?.name || ''}`;
                            if (num) {
                              const appUrl = `whatsapp://send?phone=${num}&text=${encodeURIComponent(text)}`;
                              const webUrl = `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
                              // Try app scheme first
                              window.location.href = appUrl;
                              // Fallback to web after short delay
                              setTimeout(() => {
                                window.open(webUrl, "_blank");
                              }, 800);
                            } else {
                              // If no number configured, open group or do nothing
                              const groupUrl = import.meta.env.VITE_WHATSAPP_GROUP_URL || "#";
                              window.location.href = groupUrl;
                            }
                          }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow"
                        >
                          Chat in WhatsApp
                        </button>
                  </div>

                  <div className="mt-4 text-left bg-gray-50 p-3 rounded border">
                    <strong>Submitted details:</strong>
                    <pre className="text-xs mt-2 overflow-auto">{JSON.stringify(submittedData, null, 2)}</pre>
                  </div>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address (optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="city">City (optional)</Label>
                  <Input
                    id="city"
                    placeholder="Enter your city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="insuranceType">Type of Insurance *</Label>
                  <Select
                    value={formData.insuranceType}
                    onValueChange={(value) => setFormData({ ...formData, insuranceType: value })}
                    required
                  >
                    <SelectTrigger id="insuranceType">
                      <SelectValue placeholder="Select insurance type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="health">Health Insurance</SelectItem>
                      <SelectItem value="life">Life Insurance</SelectItem>
                      <SelectItem value="motor">Motor Insurance</SelectItem>
                      <SelectItem value="property">Property Insurance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Get Free Quote
                    </>
                  )}
                </Button>
              </form>
                )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
