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
            Design is a bridge
          </h2>
        </div>

        {/* Right column */}
        <div className="md:col-span-7 md:col-start-6 space-y-8">
          {/* Photo placeholder */}
          <div className="aspect-[4/3] bg-[#f5f5f0] rounded-lg flex items-center justify-center mb-12">
            <span className="text-muted text-sm">Photo placeholder</span>
          </div>

          <p className="text-lg md:text-xl leading-relaxed">
            I like to see the role of a designer as a bridge between technology
            and people. For over 20 years, I&apos;ve been shaping digital
            experiences — adapting through every major technological shift while
            staying true to what matters: making things that are meaningful.
          </p>

          <p className="text-muted leading-relaxed">
            As an independent design thinker and art director from the
            Netherlands, I focus on concepts, art direction, and UI/UX design.
            My work lives at the intersection of design and development, with
            deep expertise in scaling design systems powered by tokens.
          </p>

          <p className="text-muted leading-relaxed">
            I believe in collaboration that bridges disciplines — explaining
            design concepts to developers, understanding technical constraints,
            and finding pragmatic solutions that serve both the user and the
            brand.
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
