interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  color: string;
  span?: "full" | "half";
}

const projects: Project[] = [
  {
    title: "Polestar",
    category: "Design System",
    description:
      "Collaborated with the design system team to develop reusable components for digital applications. Aligning design feedback, implementing UX best practices, and delivering quality designs based on strict brand guidelines.",
    image: "/images/polestar.jpg",
    color: "bg-[#f5f5f0]",
    span: "full",
  },
  {
    title: "TomTom",
    category: "Art Direction",
    description:
      "Designed the user interface for a fitness watch with a 3-bit screen — making something meaningful for athletes on a tiny surface with a palette of just 8 colors.",
    image: "/images/tomtom.jpg",
    color: "bg-[#f0f2f5]",
    span: "half",
  },
  {
    title: "Air France KLM",
    category: "Digital Design",
    description:
      "Design system work and digital experience design for one of Europe's leading airline groups.",
    image: "/images/airfranceklm.jpg",
    color: "bg-[#f0f4f8]",
    span: "half",
  },
  {
    title: "E.ON Drive",
    category: "UX / UI Design",
    description:
      "Digital product design for E.ON's electric vehicle charging platform, creating intuitive experiences for the future of mobility.",
    image: "/images/eondrive.jpg",
    color: "bg-[#f5f2f0]",
    span: "half",
  },
  {
    title: "Centraal Beheer",
    category: "Design & Concept",
    description:
      "Creative concept and design work for one of the Netherlands' most recognizable insurance brands.",
    image: "/images/centraalbeheer.jpg",
    color: "bg-[#f2f5f0]",
    span: "half",
  },
  {
    title: "Vrank",
    category: "Product Design",
    description:
      "A mobile app designed to spark engaging, meaningful conversations. From concept to launch — bringing people closer through the art of asking better questions.",
    image: "/images/vrank.jpg",
    color: "bg-[#faf5f0]",
    span: "full",
  },
  {
    title: "Makuuchi",
    category: "App Design & Development",
    description:
      "A beautifully crafted app for sumo wrestling fans, bringing the ancient sport to a modern digital audience.",
    image: "/images/makuuchi.jpg",
    color: "bg-[#f5f0f2]",
    span: "half",
  },
  {
    title: "CreateNew",
    category: "Brand & Product",
    description:
      "A creative venture exploring new ways to bring ideas to life through design and technology.",
    image: "/images/createnew.jpg",
    color: "bg-[#f0f5f3]",
    span: "half",
  },
];

export default function ProjectGrid() {
  return (
    <section id="work" className="px-6 md:px-12 max-w-magazine mx-auto py-24">
      {/* Section header */}
      <div className="flex items-center gap-6 mb-16">
        <span className="text-sm tracking-[0.2em] uppercase text-muted">
          Selected Work
        </span>
        <div className="flex-1 hr-magazine border-t" />
        <span className="text-sm text-muted">
          {projects.length} Projects
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`project-card group ${
              project.span === "full" ? "md:col-span-2" : ""
            }`}
          >
            {/* Image container */}
            <div
              className={`${project.color} rounded-lg overflow-hidden aspect-[16/9] ${
                project.span === "full" ? "md:aspect-[21/9]" : ""
              } relative flex items-center justify-center`}
            >
              {/* Placeholder — replace with actual images */}
              <div className="text-center p-12">
                <span className="font-serif text-headline text-foreground/20">
                  {project.title}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="mt-5 flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div>
                <span className="text-xs tracking-[0.15em] uppercase text-muted">
                  {project.category}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl mt-1">
                  {project.title}
                </h3>
              </div>
              <p className="text-sm text-muted max-w-md leading-relaxed md:text-right">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
