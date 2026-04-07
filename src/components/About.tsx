const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-12 h-0.5 bg-gold mb-4" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Rooted in the Community, <br />
              <span className="text-gold">Dedicated to Results</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For decades, 1000 Island Law has served families, individuals, and
              businesses across the Thousand Islands region. Our attorneys
              combine deep local knowledge with proven legal strategies to
              deliver outcomes that matter.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We believe in accessible, straightforward legal counsel. When you
              work with us, you get a partner who listens, explains your
              options clearly, and fights for your best interests — every step
              of the way.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "30+", label: "Years Experience" },
                { value: "2,500+", label: "Cases Handled" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading text-3xl font-bold text-gold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary rounded-lg p-12 text-primary-foreground">
            <h3 className="font-heading text-2xl font-semibold mb-6">
              Why Choose Us?
            </h3>
            <ul className="space-y-5">
              {[
                "Personal attention from experienced attorneys",
                "Deep roots in the Thousand Islands community",
                "Transparent fees with no hidden costs",
                "Proven track record of successful outcomes",
                "Available when you need us — evenings & weekends",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  <span className="text-primary-foreground/90 text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
