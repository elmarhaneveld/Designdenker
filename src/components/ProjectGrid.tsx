"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectSheet from "./ProjectSheet";
import type { ProjectDetail } from "./ProjectSheet";
import content from "@/data/content.json";

const clientProjects = content.clientProjects as ProjectDetail[];
const personalVentures = content.personalVentures as ProjectDetail[];

function ProjectCard({
  project,
  onClick,
}: {
  project: ProjectDetail;
  onClick: () => void;
}) {
  const coverImage = project.images.find((image) => image.src.trim().length > 0)?.src;

  return (
    <article
      className={`project-card group cursor-pointer ${
        project.span === "full" ? "md:col-span-2" : ""
      }`}
      onClick={onClick}
    >
      {/* Image container */}
      <div
        className={`${project.color} rounded-lg overflow-hidden aspect-[16/9] ${
          project.span === "full" ? "md:aspect-[21/9]" : ""
        } relative flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.01]`}
      >
        {coverImage ? (
          <Image
            src={coverImage}
            alt={`${project.title} cover image`}
            fill
            sizes={project.span === "full" ? "(min-width: 768px) 100vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
            className="object-cover"
          />
        ) : (
          <div className="text-center p-12">
            <span className="font-serif text-headline text-foreground/20">
              {project.title}
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm tracking-[0.15em] uppercase text-foreground/60">
            View project
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
  );
}

export default function ProjectGrid() {
  const [activeProject, setActiveProject] = useState<ProjectDetail | null>(null);

  return (
    <>
      <section id="work" className="px-6 md:px-12 max-w-magazine mx-auto py-24">
        {/* Client work header */}
        <div className="flex items-center gap-6 mb-16">
          <span className="text-sm tracking-[0.2em] uppercase text-muted">
            Selected Work
          </span>
          <div className="flex-1 hr-magazine border-t" />
          <span className="text-sm text-muted">
            {clientProjects.length} Projects
          </span>
        </div>

        {/* Client projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clientProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>

        {/* Personal ventures header */}
        <div className="flex items-center gap-6 mb-16 mt-32">
          <span className="text-sm tracking-[0.2em] uppercase text-muted">
            Personal Ventures
          </span>
          <div className="flex-1 hr-magazine border-t" />
          <span className="text-sm text-muted">
            {personalVentures.length} Projects
          </span>
        </div>

        {/* Personal ventures grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personalVentures.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>
      </section>

      {/* Bottom sheet */}
      <ProjectSheet
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}
