import { Scale, Home, Users, FileText, Shield, Briefcase } from "lucide-react";

const areas = [
  { icon: Home, title: "Real Estate", desc: "Property transactions, closings, title issues, and land use matters throughout the Thousand Islands." },
  { icon: Users, title: "Family Law", desc: "Divorce, custody, support, and adoption handled with compassion and discretion." },
  { icon: FileText, title: "Estate Planning", desc: "Wills, trusts, powers of attorney, and probate to protect your legacy." },
  { icon: Scale, title: "Litigation", desc: "Civil disputes, contract conflicts, and courtroom representation you can count on." },
  { icon: Shield, title: "Criminal Defense", desc: "Aggressive defense of your rights from misdemeanors to serious felonies." },
  { icon: Briefcase, title: "Business Law", desc: "Formation, contracts, compliance, and counsel for local businesses." },
];

const PracticeAreas = () => {
  return (
    <section id="practice-areas" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-12 h-0.5 bg-gold mx-auto mb-4" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Practice Areas
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Comprehensive legal services tailored to the needs of the Thousand Islands community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {areas.map((area) => (
            <div
              key={area.title}
              className="group p-8 border border-border rounded-lg hover:border-gold/50 hover:shadow-lg transition-all duration-300 bg-card"
            >
              <area.icon className="w-10 h-10 text-gold mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
