export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-end pb-16 md:pb-24 pt-32 px-6 md:px-12 max-w-magazine mx-auto">
      <div className="w-full">
        {/* Eyebrow */}
        <p className="text-sm tracking-[0.2em] uppercase text-muted mb-6 animate-fade-up opacity-0">
          Design System Specialist &amp; Art Director
        </p>

        {/* Main headline — magazine style */}
        <h1 className="font-serif text-display max-w-5xl animate-fade-up opacity-0 animate-delay-100">
          Bridging technology
          <br />
          <span className="italic">and people</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed animate-fade-up opacity-0 animate-delay-200">
          Independent design thinker from the Netherlands with 20+ years of
          experience crafting design systems, art direction, and digital
          experiences for world-class brands.
        </p>

        {/* Scroll indicator */}
        <div className="mt-16 animate-fade-up opacity-0 animate-delay-300">
          <a
            href="#work"
            className="inline-flex items-center gap-3 text-sm tracking-wide text-muted hover:text-foreground transition-colors"
          >
            <span className="magazine-divider" />
            Scroll to explore
          </a>
        </div>
      </div>
    </section>
  );
}
