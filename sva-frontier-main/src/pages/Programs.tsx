import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Trophy, 
  GraduationCap, 
  Sun, 
  Rocket, 
  BookOpen, 
  Palette,
  ArrowRight,
  Globe,
  Cpu,
  Leaf,
  Building,
  Brain
} from "lucide-react";

const programs = [
  {
    id: "ndl",
    icon: Trophy,
    title: "NDL",
    subtitle: "National High School Developers League",
    description: "A country-scale competition and sandbox for youth to tackle Africa's most pressing challenges.",
    features: [
      "National problem-solving competitions",
      "Climate and energy challenges",
      "Food systems innovation",
      "Digital infrastructure projects",
      "Governance simulations",
    ],
    color: "neon-purple",
  },
  {
    id: "nda",
    icon: GraduationCap,
    title: "NDA",
    subtitle: "National High School Developers Academy",
    description: "An advanced curriculum that goes beyond traditional education to shape future civilization architects.",
    features: [
      "Temporal thinking frameworks",
      "Systems design methodology",
      "Civilization-scale engineering",
      "AGI alignment fundamentals",
      "Climate resilience engineering",
    ],
    color: "neon-blue",
  },
  {
    id: "camp",
    icon: Sun,
    title: "Summer Camp",
    subtitle: "Intensive Innovation Program",
    description: "An immersive experience for rapid skill development, prototyping, and early-stage idea acceleration.",
    features: [
      "Intensive upskilling sessions",
      "Hands-on incubation",
      "Rapid prototyping workshops",
      "Idea acceleration tracks",
      "Mentorship from industry leaders",
    ],
    color: "gold",
  },
];

const labs = [
  {
    id: "frontier",
    icon: Rocket,
    title: "The Frontier Lab",
    description: "Where students work on the edges of possibility.",
    focus: [
      { icon: Globe, text: "Planetary problems" },
      { icon: Brain, text: "AGI alignment research" },
      { icon: Leaf, text: "Climate resilience" },
      { icon: Building, text: "Civilization-scale engineering" },
    ],
  },
  {
    id: "institute",
    icon: BookOpen,
    title: "Future Institute",
    description: "Producing the intellectual foundations for tomorrow.",
    focus: [
      { icon: BookOpen, text: "Research briefs" },
      { icon: Cpu, text: "Policy proposals" },
      { icon: Globe, text: "Future simulations" },
      { icon: Brain, text: "Scenario planning" },
    ],
  },
  {
    id: "studios",
    icon: Palette,
    title: "SVA Studios",
    description: "The creative frontier of technology and culture.",
    focus: [
      { icon: Palette, text: "AI art & design" },
      { icon: Brain, text: "Neuro-music" },
      { icon: Globe, text: "Technoculture" },
      { icon: BookOpen, text: "Future storytelling" },
    ],
  },
];

const Programs = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-radial from-neon-purple/5 via-transparent to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our{" "}
              <span className="gradient-text">Programs</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From competitions to research labs, our programs form a complete ecosystem for developing the next generation of African innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Core Programs */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {programs.map((program, index) => (
              <div
                key={program.id}
                id={program.id}
                className="glass-panel p-8 lg:p-12 scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className={`
                      w-16 h-16 rounded-2xl mb-6 flex items-center justify-center overflow-hidden
                      ${program.color === 'neon-blue' ? 'bg-neon-blue/20' : 
                        program.color === 'neon-purple' ? 'bg-neon-purple/20' : 'bg-gold/20'}
                    `}>
                      {program.id === 'nda' ? (
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/4208/4208366.png"
                          alt="NDA icon"
                          className="w-full h-full object-contain"
                        />
                      ) : program.id === 'ndl' ? (
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/1622/1622553.png"
                          alt="NDL icon"
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <program.icon className={`w-8 h-8 ${
                          program.color === 'neon-blue' ? 'text-neon-blue' : 
                          program.color === 'neon-purple' ? 'text-neon-purple' : 'text-neon-purple'
                        }`} />
                      )}
                    </div>
                    <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                      {program.title}
                    </h2>
                    <p className={`text-sm font-medium mb-4 ${
                      program.color === 'neon-blue' ? 'text-neon-blue' : 
                      program.color === 'neon-purple' ? 'text-neon-purple' : 'text-neon-purple'
                    }`}>
                      {program.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {program.description}
                    </p>
                    <Button asChild variant={program.color === 'gold' ? 'gold' : program.color === 'neon-purple' ? 'neonPurple' : 'neon'}>
                      <Link to="/join">
                        Apply Now
                        <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </div>
                  <div className="space-y-3">
                    {program.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-muted-foreground">
                        <div className={`w-2 h-2 rounded-full ${
                          program.color === 'neon-blue' ? 'bg-neon-blue' : 
                          program.color === 'neon-purple' ? 'bg-neon-purple' : 'bg-gold'
                        }`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SVA Labs */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              SVA <span className="gradient-text">Labs</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Research, innovation, and creative exploration — shaping a knowledge society for Africa's future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {labs.map((lab) => (
              <div
                key={lab.id}
                id={lab.id}
                className="glass-panel p-8 hover-glow transition-all duration-500 scroll-mt-24"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                  <lab.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {lab.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {lab.description}
                </p>
                <div className="space-y-3">
                  {lab.focus.map((item) => (
                    <div key={item.text} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <item.icon size={16} className="text-primary" />
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
