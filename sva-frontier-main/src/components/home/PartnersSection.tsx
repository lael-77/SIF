import React from "react";

const partners = [
  { name: "ICT Chamber", logoSrc: "/ict-chamber.png" },
  { name: "Fab Lab", logoSrc: "/fab-lab.png" },
  { name: "Republic of Rwanda – Ministry of ICT & Innovation", logoSrc: "/rwanda-minict.png" },
  { name: "REB", logoSrc: "/reb.png" },
];

export function PartnersSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border/60 bg-white/95 shadow-sm px-6 sm:px-10 py-10 sm:py-12 lg:py-14">
          {/* Header */}
          <div className="text-center mb-8">
            <p className="text-[0.7rem] sm:text-xs font-semibold tracking-[0.3em] uppercase text-neon-blue mb-3">
              Partners
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              SIF doesn't build the future alone.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              We collaborate with schools, labs, ecosystems, and institutions that take young African talent
              seriously – from early-stage classrooms to frontier research.
            </p>
          </div>

          {/* Moving partners marquee */}
          <div className="relative mt-10">
            <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white/95 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white/95 to-transparent pointer-events-none" />

            <div className="overflow-hidden">
              <div className="flex w-max items-center gap-4 sm:gap-6 animate-marquee motion-reduce:animate-none">
                {[...partners, ...partners].map((partner, idx) => (
                  <div
                    key={`${partner.name}-${idx}`}
                    className="shrink-0 w-[220px] sm:w-[260px] h-20 sm:h-24 rounded-2xl border border-border/70 bg-white flex items-center justify-center shadow-sm px-6"
                  >
                    <span className="sr-only">{partner.name}</span>
                    {partner.logoSrc ? (
                      <img
                        src={partner.logoSrc}
                        alt={partner.name}
                        loading="lazy"
                        decoding="async"
                        className="max-h-14 sm:max-h-16 max-w-[200px] object-contain"
                        onError={(e) => {
                          const img = e.currentTarget;
                          img.src = "/placeholder.svg";
                          img.classList.add("opacity-40");
                        }}
                      />
                    ) : (
                      <div className="flex items-center gap-3" aria-hidden="true">
                        <div className="h-8 w-8 rounded-lg bg-slate-200/80" />
                        <div className="h-3 w-24 rounded-md bg-slate-200/80" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Callout line */}
        </div>
      </div>
    </section>
  );
}
