import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <img
        src={heroBg}
        alt="Ithaca waterway at sunset"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-primary/70" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-20 h-0.5 bg-gold mx-auto mb-8" />
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Trusted Legal Counsel in{" "}
            <span className="text-gold">Ithaca</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Dedicated to protecting your rights and achieving the best outcomes
            for you and your family. Experienced attorneys serving the
            Ithaca region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gold text-accent-foreground px-8 py-4 rounded text-sm font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors"
            >
              Free Consultation
            </a>
            <a
              href="#practice-areas"
              className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded text-sm font-semibold uppercase tracking-wider hover:border-gold hover:text-gold transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
