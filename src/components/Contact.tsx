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
            Let&apos;s create
            <br />
            <span className="italic">something great</span>
          </h2>
          <p className="text-muted mt-6 leading-relaxed max-w-md">
            Available for design system consulting, art direction, and creative
            collaboration. Based in the Netherlands, working globally.
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
              href="mailto:elmar@designdenker.nl"
              className="text-lg hover:text-muted transition-colors underline underline-offset-4"
            >
              elmar@designdenker.nl
            </a>
          </div>

          {/* Location */}
          <div>
            <span className="text-xs tracking-[0.15em] uppercase text-muted block mb-2">
              Location
            </span>
            <p>Amstelveen, Netherlands</p>
          </div>

          {/* Social links */}
          <div>
            <span className="text-xs tracking-[0.15em] uppercase text-muted block mb-3">
              Connect
            </span>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/elmar-haneveld/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-muted transition-colors underline underline-offset-4"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/designdenker/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-muted transition-colors underline underline-offset-4"
              >
                Instagram
              </a>
              <a
                href="https://dribbble.com/elmar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-muted transition-colors underline underline-offset-4"
              >
                Dribbble
              </a>
              <a
                href="https://medium.com/@qrafts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-muted transition-colors underline underline-offset-4"
              >
                Medium
              </a>
              <a
                href="https://github.com/elmarhaneveld"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-muted transition-colors underline underline-offset-4"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
