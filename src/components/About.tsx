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
            Business, craft,
            <br />
            <span className="italic">systems &amp; people</span>
          </h2>
        </div>

        {/* Right column */}
        <div className="md:col-span-7 md:col-start-6 space-y-8">
          <p className="text-lg md:text-xl leading-relaxed">
            Great design doesn&apos;t happen in isolation. For over 20 years,
            I&apos;ve worked across four dimensions: understanding the
            <strong> business</strong>, refining the <strong>craft</strong>,
            scaling through <strong>systems</strong>, and always centering
            the <strong>people</strong> who use what we make.
          </p>

          <p className="text-muted leading-relaxed">
            As an art director and design system specialist from the Netherlands,
            I bridge the gap between strategy and execution. I translate business
            goals into design direction, build token-driven systems that scale
            across teams, and keep the craft sharp — from concept to pixel.
          </p>

          <p className="text-muted leading-relaxed">
            What sets my work apart is the ability to connect disciplines.
            I speak the language of developers, understand the priorities of
            stakeholders, and advocate for the end user. The best outcomes
            happen when business, craft, systems, and people move together.
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
