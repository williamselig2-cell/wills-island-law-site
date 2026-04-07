const Footer = () => (
  <footer className="bg-primary py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-heading text-xl font-bold text-primary-foreground">
          1000 Island <span className="text-gold">Law</span>
        </div>
        <div className="flex gap-8">
          {["Home", "Practice Areas", "About", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-primary-foreground/60 hover:text-gold text-sm transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <p className="text-primary-foreground/40 text-xs">
          © {new Date().getFullYear()} 1000 Island Law. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
