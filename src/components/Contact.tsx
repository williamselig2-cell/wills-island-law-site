import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

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

          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="space-y-5"
          >
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
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                />
                <select
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
                  placeholder="Tell us about your case..."
                  className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-gold text-accent-foreground py-3.5 rounded text-sm font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors"
                >
                  Request Consultation
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
