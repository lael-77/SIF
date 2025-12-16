import React from "react";

const impactStats = [
  {
    label: "Young People Reached",
    value: "5,000+",
    detail: "students across camps, leagues, and deep-tech fellowships",
  },
  {
    label: "Frontier Projects",
    value: "80+",
    detail: "prototypes, policy ideas, and civilization-scale simulations",
  },
  {
    label: "Schools & Hubs",
    value: "20+",
    detail: "partner schools, labs, and learning spaces across the region",
  },
  {
    label: "Allies & Partners",
    value: "25+",
    detail: "universities, research labs, and ecosystem builders",
  },
];

export function ImpactSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-neon-purple/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-neon-purple mb-3">
            Impact
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Where SIF is already shifting the curve.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Numbers that hint at what happens when young Africans are trusted to think in centuries,
            not semesters.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {impactStats.map((item) => (
            <div
              key={item.label}
              className="group relative rounded-2xl border border-border/60 bg-white px-6 py-7 flex flex-col items-start shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-neon-blue/40 via-neon-purple/30 to-transparent" />

              <p className="text-[0.72rem] font-semibold tracking-[0.28em] uppercase text-slate-600 mb-4">
                {item.label}
              </p>
              <p className="font-display text-4xl sm:text-5xl font-bold text-slate-900 leading-none mb-3">
                {item.value}
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
