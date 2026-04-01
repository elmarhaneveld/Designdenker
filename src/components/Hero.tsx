"use client";

import { useRef, useState, useCallback, useEffect } from "react";
interface Line {
  label: string;
  anchor: { x: number; y: number };
  color: string;
}

// Colors meet WCAG 2.1 AA (4.5:1 contrast on white)
const lines: Line[] = [
  { label: "Business", anchor: { x: 0.2, y: 0 }, color: "#4e7a4a" }, // deep sage green — 5.1:1
  { label: "Design", anchor: { x: 0.8, y: 0 }, color: "#3d6878" },   // deep slate blue — 5.4:1
  { label: "Systems", anchor: { x: 1, y: 0.9 }, color: "#7a5c4f" }, // deep clay — 5.0:1
  { label: "People", anchor: { x: 0.6, y: 1 }, color: "#7a4460" },   // deep mauve — 5.2:1
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [isHovering, setIsHovering] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [glowSize, setGlowSize] = useState(600);

  useEffect(() => {
    setHasMounted(true);
    const updateGlowSize = () => setGlowSize(window.innerWidth >= 1200 ? 900 : 600);
    updateGlowSize();
    window.addEventListener("resize", updateGlowSize);
    return () => window.removeEventListener("resize", updateGlowSize);
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

  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const isTouchInteracting = useRef(false);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (!e.touches[0]) return;
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
      isTouchInteracting.current = false;
    },
    []
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect || !e.touches[0] || !touchStartRef.current) return;

      // Only start tracking if mostly horizontal movement
      if (!isTouchInteracting.current) {
        const dx = Math.abs(e.touches[0].clientX - touchStartRef.current.x);
        const dy = Math.abs(e.touches[0].clientY - touchStartRef.current.y);
        if (dy > dx) return; // Vertical scroll — don't interfere
        if (dx < 10) return; // Not enough movement yet
        isTouchInteracting.current = true;
      }

      setMouse({
        x: (e.touches[0].clientX - rect.left) / rect.width,
        y: (e.touches[0].clientY - rect.top) / rect.height,
      });
      if (!isHovering) setIsHovering(true);
    },
    [isHovering]
  );

  const handleTouchEnd = useCallback(() => {
    touchStartRef.current = null;
    isTouchInteracting.current = false;
    setIsHovering(false);
    setMouse({ x: 0.5, y: 0.5 });
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-[100vh] flex flex-col justify-between pt-16 md:pt-24 pb-16 md:pb-24 overflow-hidden"
      style={{ cursor: isHovering ? "none" : "default", touchAction: "pan-y" }}
    >
      {/* Glow effect following mouse */}
      {hasMounted && (
        <div
          className="absolute pointer-events-none"
          style={{
            left: `${mouse.x * 100}%`,
            top: `${mouse.y * 100}%`,
            width: glowSize,
            height: glowSize,
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,180,100,0.22) 0%, rgba(255,160,80,0.10) 30%, rgba(255,145,60,0.03) 55%, transparent 70%)",
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
            const angle = Math.atan2(my - ay, mx - ax) * (180 / Math.PI);

            // Place label along the line from the anchor
            const t = 0.22;
            const lx = ax + (mx - ax) * t;
            const ly = ay + (my - ay) * t;

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
                  opacity={isHovering ? 0.35 : 0.18}
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
                  fontSize="13"
                  letterSpacing="0.15em"
                  fill={line.color}
                  opacity={isHovering ? 1 : 0.7}
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

      {/* Centered content */}
      <div className="relative flex-1 flex items-center" style={{ zIndex: 2 }}>
        <div className="w-full px-6 md:px-12 mx-auto" style={{ maxWidth: "1400px" }}>
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
            I work at the intersection of business, design, systems and people.
            For 20+ years I&apos;ve been turning strategy into design systems
            and experiences that scale — connecting what organizations need
            with what people actually value.
          </p>
        </div>
      </div>

      {/* Scroll indicator — pinned to bottom */}
      <div className="relative px-6 md:px-12 animate-fade-up opacity-0 animate-delay-300" style={{ zIndex: 2 }}>
        <a
          href="#work"
          className="inline-flex items-center gap-3 text-sm tracking-wide text-muted hover:text-foreground transition-colors"
        >
          <span className="magazine-divider" />
          Scroll to explore
        </a>
      </div>
    </section>
  );
}
