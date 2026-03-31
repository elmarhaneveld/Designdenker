export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-12 max-w-magazine mx-auto py-24 border-t border-border"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        {/* Left column */}
        <div className="md:col-span-4">
          <span className="text-sm tracking-[0.2em] uppercase text-muted">
            About
          </span>
          <h2 className="font-serif text-headline mt-4">
            Where business meets
            <br />
            <span className="italic">design &amp; people</span>
          </h2>
        </div>

        {/* Right column */}
        <div className="md:col-span-7 md:col-start-6 space-y-8">
          <p className="text-lg md:text-xl leading-relaxed">
            The best design doesn&apos;t just look good — it serves a purpose.
            For over 20 years, I&apos;ve worked at the intersection of business
            strategy, design craft, and human needs. I translate what a company
            wants to achieve into experiences people genuinely connect with.
          </p>

          <p className="text-muted leading-relaxed">
            As an art director and design system specialist from the Netherlands,
            I focus on bridging disciplines. I speak the language of developers,
            understand the goals of stakeholders, and advocate for the people who
            actually use the product. My strength is bringing these worlds
            together — pragmatically, with clarity and craft.
          </p>

          <p className="text-muted leading-relaxed">
            Whether it&apos;s building scalable design systems powered by tokens,
            shaping art direction for global brands, or guiding teams toward
            more collaborative ways of working — I believe great outcomes happen
            when business, design, and people are aligned.
          </p>

          {/* Personal touch */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted italic leading-relaxed">
              When I&apos;m not designing, you&apos;ll find me doing CrossFit,
              exploring existential philosophy, playing guitar, or hiking with
              my family. I intentionally keep my phone on mute.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
