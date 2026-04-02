"use client";

import { useEffect, useCallback, useRef } from "react";

export interface ProjectDetail {
  title: string;
  category: string;
  description: string;
  color: string;
  span?: "full" | "half";
  role: string;
  tags: string[];
  challenge: string;
  solution: string;
  images: { src: string; caption: string; span?: "full" | "half" }[];
}

interface ProjectSheetProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export default function ProjectSheet({ project, onClose }: ProjectSheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 animate-backdrop-in"
        onClick={onClose}
      />

      {/* Sheet */}
      <div
        ref={sheetRef}
        className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-2xl shadow-2xl animate-sheet-up"
        style={{ maxHeight: "92vh" }}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 rounded-full bg-border" />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#f5f5f0] transition-colors text-muted hover:text-foreground"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto px-6 md:px-16 pb-16 pt-4" style={{ maxHeight: "calc(92vh - 48px)" }}>
          <div className="max-w-magazine mx-auto">
            {/* Header */}
            <div className="mb-12">
              <span className="text-xs tracking-[0.2em] uppercase text-muted">
                {project.category}
              </span>
              <h2 className="font-serif text-headline mt-2">{project.title}</h2>
              <p className="text-muted mt-1 text-sm">{project.role}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs tracking-wide border border-border rounded-full px-3 py-1.5 text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Hero image placeholder */}
            <div className={`${project.color} rounded-lg aspect-[21/9] flex items-center justify-center mb-16`}>
              <span className="font-serif text-headline text-foreground/10">{project.title}</span>
            </div>

            {/* Magazine-style two column layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
              {/* Challenge */}
              <div>
                <span className="text-xs tracking-[0.2em] uppercase text-muted block mb-4">
                  The Challenge
                </span>
                <p className="text-lg leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <span className="text-xs tracking-[0.2em] uppercase text-muted block mb-4">
                  The Solution
                </span>
                <p className="text-lg leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="hr-magazine border-t mb-16" />

            {/* Image gallery — magazine grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className={`${
                    img.span === "full" ? "md:col-span-2" : ""
                  }`}
                >
                  <div className={`${project.color} rounded-lg overflow-hidden ${
                    img.span === "full" ? "aspect-[21/9]" : "aspect-[4/3]"
                  } flex items-center justify-center`}>
                    <span className="text-sm text-foreground/20 italic">{img.caption}</span>
                  </div>
                  <p className="text-xs text-muted mt-2 italic">{img.caption}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="max-w-2xl mb-16">
              <span className="text-xs tracking-[0.2em] uppercase text-muted block mb-4">
                Overview
              </span>
              <p className="text-muted leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
