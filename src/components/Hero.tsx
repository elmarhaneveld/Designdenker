"use client";

import { useRef, useState, useCallback, useEffect } from "react";
interface Line {
  label: string;
  /** Anchor position as fraction of container (0–1) */
  anchor: { x: number; y: number };
}

const lines: Line[] = [
  { label: "Business", anchor: { x: 0.2, y: 0 } },
  { label: "Design", anchor: { x: 0.8, y: 0 } },
  { label: "Systems", anchor: { x: 1, y: 0.55 } },
  { label: "People", anchor: { x: 0.6, y: 1 } },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [isHovering, setIsHovering] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      setMouse({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
      if (!isHovering) setIsHovering(true);
    },
    [isHovering]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setMouse({ x: 0.5, y: 0.5 });
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect || !e.touches[0]) return;
      setMouse({
        x: (e.touches[0].clientX - rect.left) / rect.width,
        y: (e.touches[0].clientY - rect.top) / rect.height,
      });
      if (!isHovering) setIsHovering(true);
    },
    [isHovering]
  );

  const handleTouchEnd = useCallback(() => {
    setIsHovering(false);
    setMouse({ x: 0.5, y: 0.5 });
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-[100vh] flex items-end pb-16 md:pb-24 pt-16 md:pt-24"
      style={{ cursor: isHovering ? "none" : "default" }}
    >
      {/* Glow effect following mouse */}
      {hasMounted && (
        <div
          className="absolute pointer-events-none"
          style={{
            left: `${mouse.x * 100}%`,
            top: `${mouse.y * 100}%`,
            width: 600,
            height: 600,
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(235,140,50,0.25) 0%, rgba(220,120,40,0.12) 30%, rgba(210,110,30,0.04) 55%, transparent 70%)",
            opacity: isHovering ? 1 : 0.6,
            transition: "opacity 0.6s ease",
            animation: "glowPulse 3s ease-in-out infinite",
            zIndex: 0,
          }}
        />
      )}

      {/* Interactive SVG lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      >
        {hasMounted &&
          lines.map((line) => {
            const mx = mouse.x * 100;
            const my = mouse.y * 100;
            const ax = line.anchor.x * 100;
            const ay = line.anchor.y * 100;

            // Angle in degrees for rotating the label
            let angle = Math.atan2(my - ay, mx - ax) * (180 / Math.PI);

            // Place label 20% along the line from the anchor, clamped to stay in view
            const t = 0.18;
            const lx = Math.max(8, Math.min(88, ax + (mx - ax) * t));
            const ly = Math.max(4, Math.min(96, ay + (my - ay) * t));

            // Flip text so it's always readable (not upside down)
            const flipLabel = angle > 90 || angle < -90;
            const displayAngle = flipLabel ? angle + 180 : angle;

            return (
              <g key={line.label}>
                {/* The line */}
                <line
                  x1={`${ax}%`}
                  y1={`${ay}%`}
                  x2={`${mx}%`}
                  y2={`${my}%`}
                  stroke="#1a1a1a"
                  strokeWidth="1"
                  strokeDasharray="2 6"
                  opacity={isHovering ? 0.2 : 0.08}
                  style={{
                    transition: "opacity 0.6s ease, x2 0.15s ease-out, y2 0.15s ease-out",
                  }}
                />
                {/* Label along the line */}
                <text
                  x={`${lx}%`}
                  y={`${ly}%`}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  transform={`rotate(${displayAngle}, ${lx}%, ${ly}%)`}
                  className="font-sans"
                  fontSize="11"
                  letterSpacing="0.15em"
                  fill="#1a1a1a"
                  opacity={isHovering ? 0.4 : 0.12}
                  style={{ transition: "opacity 0.6s ease", textTransform: "uppercase" as const }}
                >
                  {line.label}
                </text>
              </g>
            );
          })}

        {/* Intersection cross */}
        {hasMounted && (
          <text
            x={`${mouse.x * 100}%`}
            y={`${mouse.y * 100}%`}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={isHovering ? 22 : 18}
            fill="#9b9b9b"
            opacity={1}
            style={{ transition: "opacity 0.6s ease, font-size 0.3s ease" }}
          >
            +
          </text>
        )}
      </svg>

      {/* Content layer */}
      <div className="relative w-full max-w-3xl px-6 md:px-12 mx-auto" style={{ zIndex: 2, maxWidth: "1400px" }}>
        {/* Eyebrow */}
        <p className="text-sm tracking-[0.2em] uppercase text-muted mb-6 animate-fade-up opacity-0">
          Art Director &amp; Design System Architect
        </p>

        {/* Main headline — magazine style */}
        <h1 className="font-serif text-display animate-fade-up opacity-0 animate-delay-100">
          Elmar Haneveld
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed animate-fade-up opacity-0 animate-delay-200">
          I work where business, craft, systems, and people intersect.
          For 20+ years I&apos;ve been turning strategy into design systems
          and experiences that scale — connecting what organizations need
          with what people actually value.
        </p>

        {/* Scroll indicator */}
        <div className="mt-16 animate-fade-up opacity-0 animate-delay-300">
          <a
            href="#work"
            className="inline-flex items-center gap-3 text-sm tracking-wide text-muted hover:text-foreground transition-colors"
          >
            <span className="magazine-divider" />
            Scroll to explore
          </a>
        </div>
      </div>
    </section>
  );
}
