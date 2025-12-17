import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

type Executive = {
  name: string;
  role: string;
  bio: string;
  photo: string;
};

type ProgramLead = {
  name: string;
  role: string;
  program: string;
  focus: string;
  photo: string;
};

type Specialist = {
  name: string;
  title: string;
  description: string;
};

type FellowTag = {
  label: string;
};

type Advisor = {
  name: string;
  area: string;
  bio: string;
};

const executiveLeadership: Executive[] = [
  {
    name: "Ismael Kaleeba",
    role: "Chairman of the Board",
    bio: "Leads the vision for SIF as a continent-scale builder movement for Africa's next century.",
    photo: "",
  },
   {
    name: "Karangwa Beni Bonheur",
    role: "Managing Director",
    bio: "Tells the SIF story and builds bridges with partners, schools, and communities.",
    photo: "",
  },
  {
    name: "Ineza Liza Gaxine",
    role: "Deputy Managing Director",
    bio: "Transforms long-horizon strategy into operational reality across countries and programs.",
    photo: "",
  },
  {
    name: "Ishimwe Karamage Yves",
    role: "Programs Director",
    bio: "Designs and scales the core initiatives that train future engineers and civilization builders.",
    photo: "",
  },
];

const programLeadership: ProgramLead[] = [
  {
    name: "Intwali Bugingo Lael",
    role: "Head of NDL",
    program: "National High School Developers League",
    focus: "Leads national-scale innovation challenges for high school students across Africa.",
    photo: "/images/ndl-photo.JPG",
  },
  {
    name: "Rubagumya Pacifique",
    role: "Head of NDA",
    program: "National High School Developers Academy",
    focus: "Guides applied future engineering training for the continent's top young builders.",
    photo: "/images/nda-photo.JPG",
  },
  {
    name: "Dufitimana Reponse",
    role: "Head of SIF Labs",
    program: "Research & Innovation",
    focus: "Runs frontier labs exploring AGI, climate resilience, and civilization-scale systems.",
    photo: "/images/camp-photo.JPG",
  },
];

const specialists: Specialist[] = [
  {
    name: "Manzi Pitiee",
    title: "AGI Alignment Specialist",
    description: "Explores safe and beneficial deployment of future AI systems for African societies.",
  },
  {
    name: "Biraboneye Olav",
    title: "Climate & Resilience Systems Researcher",
    description: "Models climate risks and designs resilient infrastructures for vulnerable regions.",
  },
  {
    name: "Bisetsa Keza Precious",
    title: "Planetary Engineering Specialist",
    description: "Thinks in planetary-scale interventions and long-term ecological stability.",
  },
  {
    name: "Mata Kelly Danny",
    title: "Neuro-Creative Technologies Specialist",
    description: "Builds tools at the intersection of cognition, creativity, and expressive tech.",
  },
];

const fellowTags: FellowTag[] = [
  { label: "Future Engineer" },
  { label: "Climate Innovator" },
  { label: "Neuro-Maker" },
  { label: "Systems Thinker" },
  { label: "Policy Architect" },
  { label: "Frontier Researcher" },
];

const advisors: Advisor[] = [
  {
    name: "Placeholder Name",
    area: "AI & AGI Alignment",
    bio: "Advises SIF on frontier AI safety, alignment, and long-term AI governance.",
  },
  {
    name: "Placeholder Name",
    area: "Engineering & Infrastructure",
    bio: "Provides guidance on large-scale engineering projects and systems design.",
  },
  {
    name: "Placeholder Name",
    area: "Futurism & Policy",
    bio: "Supports strategic foresight and policy engagement for Africa's next century.",
  },
];

function ExecutiveCard({ name, role, bio, photo }: Executive) {
  return (
    <div className="glass-panel bg-white text-slate-900 p-8 flex flex-col md:flex-row gap-6 hover-glow transition-all duration-500">
      <div className="w-28 h-28 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 flex-shrink-0">
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : null}
      </div>
      <div className="flex-1">
        <h3 className="font-display text-xl font-bold mb-1">{name}</h3>
        <p className="text-neon-purple text-sm font-semibold mb-3">{role}</p>
        <p className="text-slate-600 text-sm leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}

function ProgramLeadCard({ name, role, program, focus, photo }: ProgramLead) {
  return (
    <div className="glass-panel bg-white text-slate-900 p-6 flex flex-col gap-4 hover-glow transition-all duration-500">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 flex-shrink-0">
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-display text-lg font-bold mb-1">{name}</h3>
          <p className="text-neon-blue text-xs font-semibold uppercase tracking-wide mb-1">{role}</p>
          <p className="text-slate-500 text-xs">{program}</p>
        </div>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed">{focus}</p>
    </div>
  );
}

function SpecialistCard({ name, title, description }: Specialist) {
  return (
    <div className="glass-panel bg-white text-slate-900 p-5 hover-glow transition-all duration-500">
      <h3 className="font-display text-sm font-semibold mb-1">{name}</h3>
      <p className="text-neon-purple text-xs font-semibold mb-2">{title}</p>
      <p className="text-slate-600 text-xs leading-relaxed">{description}</p>
    </div>
  );
}

function AdvisorCard({ name, area, bio }: Advisor) {
  return (
    <div className="glass-panel bg-white text-slate-900 p-6 hover-glow transition-all duration-500">
      <h3 className="font-display text-base font-semibold mb-1">{name}</h3>
      <p className="text-neon-blue text-xs font-semibold mb-2 uppercase tracking-wide">{area}</p>
      <p className="text-slate-600 text-sm leading-relaxed">{bio}</p>
    </div>
  );
}

const Team = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-radial from-neon-purple/5 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The builders, researchers, and mentors engineering Africa's next century.
            </p>
          </div>
        </div>
      </section>

      {/* Team Culture (white band) */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Builders Behind the Movement
            </h2>
            <p className="text-slate-600">
              From executive leadership to youth fellows, SIF is a team of builders who think in decades, engineer at planetary scale, and mentor the next generation of African innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-16 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Executive Leadership
            </h2>
            <p className="text-muted-foreground mb-8">
              The core leadership team responsible for SIF's long-horizon vision, programs, and partnerships.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {executiveLeadership.map((exec) => (
              <ExecutiveCard key={exec.role} {...exec} />
            ))}
          </div>
        </div>
      </section>

      {/* Program Leadership */}
      <section className="py-12 bg-gradient-to-b from-background via-card/30 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Program Leadership
            </h2>
            <p className="text-muted-foreground">
              The leaders running SIF's flagship programs and laboratories across the continent.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programLeadership.map((lead) => (
              <ProgramLeadCard key={lead.role} {...lead} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specialists */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center">
              Technical Specialists &amp; R&amp;D
            </h2>
            <p className="text-muted-foreground text-center">
              A network of frontier thinkers and engineers supporting SIF's research, simulations, and deep-tech explorations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {specialists.map((spec, index) => (
              <SpecialistCard key={`${spec.title}-${index}`} {...spec} />
            ))}
          </div>
        </div>
      </section>

      {/* Youth Fellows / Innovators */}
      <section className="py-12 bg-gradient-to-b from-card/40 via-card/10 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center">
              Youth Fellows &amp; Innovators
            </h2>
            <p className="text-muted-foreground text-center">
              The heart of SIF is its students — cohorts of future engineers, climate innovators, and system designers building real projects together.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex flex-wrap gap-3 justify-center">
                {fellowTags.map((tag) => (
                  <span
                    key={tag.label}
                    className="px-3 py-1 rounded-full bg-white/80 text-slate-800 text-xs font-medium shadow-sm"
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 shadow-xl">
                <img
                  src="/images/programs-hero.JPG"
                  alt="SIF fellows collaborating"
                  className="w-full h-64 sm:h-72 md:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisors / Mentors */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Advisors &amp; Mentors
            </h2>
            <p className="text-muted-foreground">
              Senior experts who provide strategic guidance across AI, engineering, futurism, and policy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advisors.map((advisor) => (
              <AdvisorCard key={advisor.area} {...advisor} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 border-t border-border/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Join the Builders of the Next Century.
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're a student, researcher, or industry expert, there is a place for you in SIF's ecosystem of builders.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="hero">
              <a href="/join">Become a Fellow</a>
            </Button>
            <Button asChild size="lg" variant="heroOutline">
              <a href="/contact">Become a Mentor or Partner</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
