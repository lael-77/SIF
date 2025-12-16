import { Layout } from "@/components/layout/Layout";

const approaches = [
  { title: "Planetary & Civilization-Scale Engineering", description: "Thinking in decades and centuries, not quarters." },
  { title: "AGI & Future Intelligence Alignment", description: "At the frontier of artificial and human intelligence." },
  { title: "Climate & Environmental Resilience", description: "Engineering Africa's sustainable tomorrow." },
  { title: "Future Policy & Scenario Design", description: "Building frameworks and simulations for long-term governance and development." },
  { title: "Speculative & Neuro-Creative Technologies", description: "Exploring the edges of cognition, creativity, and expressive technologies." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-radial from-neon-blue/5 via-transparent to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Text side */}
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                About{" "}
                <span className="gradient-text">SIF</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The Silicon Institute for the Futures (SIF) empowers students to tackle civilization-scale challenges. Through advanced programs, labs, and creative studios, we train thinkers and builders who design transformative technologies, craft future-ready policies, and shape a knowledge society. Humans Build Humanity.
              </p>
            </div>

            {/* Image side */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 shadow-xl">
                <img
                  src="/images/about-hero.jpg"
                  alt="Students and mentors collaborating at SIF"
                  className="w-full h-72 sm:h-80 md:h-[22rem] lg:h-[24rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="glass-panel bg-white text-slate-900 p-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-blue/20 to-transparent flex items-center justify-center mb-6 overflow-hidden">
                <img
                  src="https://toppng.com/uploads/preview/our-mission-icon-goals-icon-blue-11553495841k1kcypo62h.png"
                  alt="Our Mission icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To engineer Africa's future by cultivating the next generation of deep-tech innovators, systems thinkers, and civilization architects. We believe the solutions to humanity's greatest challenges will emerge from the minds we're training today.
              </p>
            </div>

            {/* Philosophy */}
            <div className="glass-panel bg-white text-slate-900 p-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-purple/20 to-transparent flex items-center justify-center mb-6 overflow-hidden">
                <img
                  src="https://pic.onlinewebfonts.com/thumbnails/icons_713727.svg"
                  alt="Our Philosophy icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">Our Philosophy</h2>
              <p className="text-slate-600 leading-relaxed">
                Post-STEM. Post-coding. Future engineering. We transcend traditional education paradigms to focus on what truly matters: understanding complex systems, designing at scale, and building technology that serves humanity's long-term flourishing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Text side */}
            <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <div className="w-12 h-12 overflow-hidden rounded-xl flex-shrink-0">
                  <img
                    src="/images/about-origin-icon.jpg"
                    alt="SIF origin icon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Our <span className="gradient-text">Origin</span>
            </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The Silicon Institute for the Futures (SIF) was founded in Rwanda to transform the way young Africans learn and innovate. Recognizing that conventional STEM and coding education was no longer enough, our founder, <span className="text-neon-blue font-semibold">Ismael Kaleeba</span>, created a movement to empower students to tackle planetary problems, existential threats, and civilization-scale challenges.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From a small group of brilliant minds emerged a movement. Students who refused to accept the limitations placed upon them. Young engineers who saw not just problems, but planetary-scale opportunities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, SIF spans Rwanda and Uganda, with a growing community of future engineers, researchers, and innovators — all united by a single belief: <span className="text-neon-purple font-semibold">Humans Build Humanity.</span>
              </p>
            </div>

            {/* Image side */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 shadow-xl">
                <img
                  src="/images/about-origin.jpg"
                  alt="Early SIF students working together in Rwanda"
                  className="w-full h-72 sm:h-80 md:h-[22rem] lg:h-[24rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section
        className="py-16 relative overflow-hidden"
        style={{
          backgroundImage: "url(/images/about-origin-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-deep-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our <span className="gradient-text">Approach</span>
            </h2>
            <p className="text-foreground max-w-xl mx-auto">
              Five interconnected pillars that define how we think about and build the future.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {approaches.map((item, index) => (
              <div
                key={item.title}
                className="glass-panel bg-white text-slate-900 p-6 text-center hover-glow transition-all duration-500"
              >
                <h3 className="font-display font-semibold text-slate-900 mb-2 text-sm">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
