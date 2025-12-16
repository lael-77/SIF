import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Trophy, FlaskConical } from "lucide-react";

const pillars = [
  {
    icon: GraduationCap,
    title: "NDA",
    subtitle: "National Development Academy",
    description: "Advanced curriculum focused on temporal thinking, systems design, civilization-scale engineering, AGI alignment research, and climate resilience.",
    color: "neon-blue",
    href: "/programs#nda",
  },
  {
    icon: Trophy,
    title: "NDL",
    subtitle: "National Developers League",
    description: "Country-scale competition for youth to tackle national problems — climate challenges, energy, food systems, digital infrastructure, governance.",
    color: "neon-purple",
    href: "/programs#ndl",
  },
  {
    icon: FlaskConical,
    title: "SIF Labs",
    subtitle: "Research & Innovation",
    description: "Where breakthrough ideas become reality. Frontier Lab, Future Institute, and Studios working on planetary-scale challenges.",
    color: "gold",
    href: "/programs#frontier",
  },
];

export function PillarsSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: "url(/images/pillars-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlay & accent */}
      <div className="absolute inset-0 bg-deep-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Three{" "}
            <span className="gradient-text">Pillars</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The foundation of Africa's technological renaissance.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Link
              key={pillar.title}
              to={pillar.href}
              className="group relative"
            >
              <div className={`
                glass-panel bg-white text-slate-900 p-8 h-full transition-all duration-500
                hover:border-${pillar.color}/50
                hover:shadow-[0_0_40px_hsl(var(--${pillar.color})/0.2)]
              `}>
                {/* Icon */}
                <div className={`
                  w-16 h-16 rounded-2xl mb-6 flex items-center justify-center overflow-hidden
                  bg-gradient-to-br from-${pillar.color}/20 to-transparent
                  group-hover:scale-110 transition-transform duration-300
                `}>
                  {pillar.title === 'NDA' ? (
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/4208/4208366.png"
                      alt="NDA icon"
                      className="w-full h-full object-contain"
                    />
                  ) : pillar.title === 'NDL' ? (
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1622/1622553.png"
                      alt="NDL icon"
                      className="w-full h-full object-contain"
                    />
                  ) : pillar.title === 'SIF Labs' ? (
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/8711/8711362.png"
                      alt="SIF Labs icon"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <pillar.icon className={`w-8 h-8 ${
                      pillar.color === 'neon-blue' ? 'text-neon-blue' :
                      pillar.color === 'neon-purple' ? 'text-neon-purple' : 'text-neon-purple'
                    }`} />
                  )}
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-1">
                  {pillar.title}
                </h3>
                <p className={`text-sm font-medium mb-4 ${
                  pillar.color === 'neon-blue' ? 'text-neon-blue' :
                  pillar.color === 'neon-purple' ? 'text-neon-purple' : 'text-neon-purple'
                }`}>
                  {pillar.subtitle}
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Link */}
                <div className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  Learn more
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
