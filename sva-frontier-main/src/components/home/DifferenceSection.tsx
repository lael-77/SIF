import { Zap, Globe, Cpu, Rocket } from "lucide-react";

const points = [
  {
    icon: Zap,
    title: "Not STEM",
    description: "We go beyond traditional STEM. We're training future architects of reality.",
  },
  {
    icon: Globe,
    title: "Not Coding",
    description: "Code is a tool, not the destination. We focus on systems that shape civilizations.",
  },
  {
    icon: Cpu,
    title: "Not Robotics Clubs",
    description: "We're building planetary problem solvers who think in centuries, not semesters.",
  },
  {
    icon: Rocket,
    title: "Future Engineers",
    description: "Training minds to engineer solutions at civilization scale.",
  },
];

export function DifferenceSection() {
  const primaryPoints = points.slice(0, 3);
  const heroPoint = points[3];

  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Makes SIF{" "}
            <span className="gradient-text">Different</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We train future engineers, reality builders, and planetary problem solvers.
          </p>
        </div>

        <div className="space-y-8">
          {/* First row: three smaller "Not" points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {primaryPoints.map((point, index) => (
              <div
                key={point.title}
                className="glass-panel bg-white text-slate-900 p-5 md:p-6 hover-glow transition-all duration-500 group transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOF-nyvAgI91Ga9HnL6YIzIWsUrnegAoo9mg&s"
                    alt="Not STEM icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-display text-lg md:text-xl font-semibold text-slate-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* Second row: dominant Future Engineers card (with softer glow) */}
          <div
            className="relative group"
            style={{ animationDelay: `${primaryPoints.length * 100}ms` }}
          >
            <div className="relative glass-panel bg-white text-slate-900 p-8 md:p-10 lg:p-12 transition-all duration-500 transform group-hover:-translate-y-1 flex flex-col items-center text-center gap-6">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center shadow-lg shadow-neon-purple/30 overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-baPh2G6kcHgkA_QNefTYpfjcuPsaXixVhQ&s"
                  alt="Future engineers icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                  {heroPoint.title}
                </h3>
                <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
                  {heroPoint.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
