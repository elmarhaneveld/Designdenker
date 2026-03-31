import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-end pb-16 md:pb-24 pt-32 px-6 md:px-12 max-w-magazine mx-auto">
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
        {/* Text content */}
        <div className="md:col-span-7">
          {/* Eyebrow */}
          <p className="text-sm tracking-[0.2em] uppercase text-muted mb-6 animate-fade-up opacity-0">
            Art Director &amp; Design System Specialist
          </p>

          {/* Main headline — magazine style */}
          <h1 className="font-serif text-display animate-fade-up opacity-0 animate-delay-100">
            Business, design
            <br />
            <span className="italic">&amp; people</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed animate-fade-up opacity-0 animate-delay-200">
            I work at the intersection of business, design, and people.
            For 20+ years I&apos;ve been helping brands turn strategy into
            experiences that look beautiful and actually work — bridging
            the gap between what a company needs and what people love.
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

        {/* Portrait */}
        <div className="md:col-span-4 md:col-start-9 animate-fade-up opacity-0 animate-delay-200">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-[#f5f5f0]">
            <Image
              src="/images/elmar-portrait.jpg"
              alt="Elmar Haneveld"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
