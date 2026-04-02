import content from "@/data/content.json";

const { experience } = content;

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 md:px-12 max-w-magazine mx-auto py-24 border-t border-border"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        {/* Left */}
        <div className="md:col-span-4">
          <span className="text-sm tracking-[0.2em] uppercase text-muted">
            Experience
          </span>
          <h2 className="font-serif text-headline mt-4">
            {experience.headline}
            <br />
            {experience.headlineSecondLine}
          </h2>

          {/* Skills */}
          <div className="mt-12">
            <span className="text-sm tracking-[0.2em] uppercase text-muted block mb-4">
              Expertise
            </span>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs tracking-wide border border-border rounded-full px-3 py-1.5 text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Timeline */}
        <div className="md:col-span-7 md:col-start-6">
          <div className="space-y-0">
            {experience.roles.map((role) => (
              <div
                key={role.company}
                className="py-8 border-b border-border first:pt-0"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl">
                      {role.company}
                    </h3>
                    <p className="text-sm text-muted mt-1">{role.role}</p>
                  </div>
                  <span className="text-xs tracking-[0.15em] uppercase text-muted whitespace-nowrap">
                    {role.period}
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed mt-3">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
