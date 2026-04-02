import content from "@/data/content.json";

const { contact } = content;

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-12 max-w-magazine mx-auto py-24 border-t border-border"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left */}
        <div className="md:col-span-5">
          <span className="text-sm tracking-[0.2em] uppercase text-muted">
            Contact
          </span>
          <h2 className="font-serif text-headline mt-4">
            {contact.headline}
            <br />
            <span className="italic">{contact.headlineItalic}</span>
          </h2>
          <p className="text-muted mt-6 leading-relaxed max-w-md">
            {contact.description}
          </p>
        </div>

        {/* Right */}
        <div className="md:col-span-5 md:col-start-8 space-y-8">
          {/* Email */}
          <div>
            <span className="text-xs tracking-[0.15em] uppercase text-muted block mb-2">
              Email
            </span>
            <a
              href={`mailto:${contact.email}`}
              className="text-lg hover:text-muted transition-colors underline underline-offset-4"
            >
              {contact.email}
            </a>
          </div>

          {/* Location */}
          <div>
            <span className="text-xs tracking-[0.15em] uppercase text-muted block mb-2">
              Location
            </span>
            <p>{contact.location}</p>
          </div>

          {/* Social links */}
          <div>
            <span className="text-xs tracking-[0.15em] uppercase text-muted block mb-3">
              Connect
            </span>
            <div className="flex flex-wrap gap-4">
              {contact.social.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-muted transition-colors underline underline-offset-4"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
