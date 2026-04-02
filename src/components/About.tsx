import content from "@/data/content.json";

const { about } = content;

function renderBold(text: string) {
  // Convert **text** to <strong> elements
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

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
            {about.headline}
            <br />
            <span className="italic">{about.headlineItalic}</span>
          </h2>
        </div>

        {/* Right column */}
        <div className="md:col-span-7 md:col-start-6 space-y-8">
          {about.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "text-lg md:text-xl leading-relaxed"
                  : "text-muted leading-relaxed"
              }
            >
              {renderBold(paragraph)}
            </p>
          ))}

          {/* Personal touch */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted italic leading-relaxed">
              {about.personal}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
