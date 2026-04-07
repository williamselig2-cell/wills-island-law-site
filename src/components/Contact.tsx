import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const fullName = (formData.get("fullName") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim() || null;
    const practiceArea = (formData.get("practiceArea") as string) || null;
    const message = (formData.get("message") as string)?.trim() || null;

    if (!fullName || !email) {
      toast.error("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.from("contact_submissions").insert({
      full_name: fullName,
      email,
      phone,
      practice_area: practiceArea,
      message,
    });

    if (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please try again.");
      setLoading(false);
      return;
    }

    setSubmitted(true);
    setLoading(false);
    toast.success("Your message has been sent!");
  };

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-12 h-0.5 bg-gold mx-auto mb-4" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Schedule your free consultation today. We're here to help.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {[
              { icon: Phone, label: "Phone", value: "(315) 555-1000", href: "tel:+13155551000" },
              { icon: Mail, label: "Email", value: "info@1000islandlaw.com", href: "mailto:info@1000islandlaw.com" },
              { icon: MapPin, label: "Office", value: "123 River Street, Clayton, NY 13624" },
              { icon: Clock, label: "Hours", value: "Mon–Fri 9am–5pm | Evenings by appt." },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-foreground font-medium hover:text-gold transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-foreground font-medium">{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {submitted ? (
              <div className="bg-primary/5 border border-gold/30 rounded-lg p-8 text-center">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground text-sm">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                />
                <select
                  name="practiceArea"
                  className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:border-gold transition-colors"
                  defaultValue=""
                >
                  <option value="" disabled>Select Practice Area</option>
                  <option>Real Estate</option>
                  <option>Family Law</option>
                  <option>Estate Planning</option>
                  <option>Litigation</option>
                  <option>Criminal Defense</option>
                  <option>Business Law</option>
                </select>
                <textarea
                  rows={4}
                  name="message"
                  placeholder="Tell us about your case..."
                  className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gold text-accent-foreground py-3.5 rounded text-sm font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Request Consultation"}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
