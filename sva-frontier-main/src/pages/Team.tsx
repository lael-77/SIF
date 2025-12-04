import { Layout } from "@/components/layout/Layout";
import { Linkedin, Twitter, Mail } from "lucide-react";

const leadership = [
  {
    name: "Ismael Kaleeba",
    role: "Founder",
    bio: "Visionary leader driving SVA's mission to engineer Africa's technological future.",
    image: null,
  },
];

const operations = [
  {
    name: "Operations Lead — Rwanda",
    role: "Country Director",
    bio: "Leading SVA's expansion and program implementation across Rwanda.",
    image: null,
  },
  {
    name: "Operations Lead — Uganda",
    role: "Country Director",
    bio: "Spearheading SVA initiatives and community building in Uganda.",
    image: null,
  },
];

const advisors = [
  {
    name: "Advisory Board",
    role: "Strategic Guidance",
    bio: "Industry experts and thought leaders guiding SVA's direction and impact.",
    image: null,
  },
];

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string | null;
  featured?: boolean;
}

function TeamMember({ name, role, bio, featured }: TeamMemberProps) {
  return (
    <div className={`glass-panel p-6 ${featured ? 'lg:col-span-2' : ''} hover-glow transition-all duration-500`}>
      <div className={`flex ${featured ? 'flex-col sm:flex-row items-start' : 'flex-col'} gap-6`}>
        {/* Avatar placeholder */}
        <div className={`
          ${featured ? 'w-24 h-24' : 'w-20 h-20'} 
          rounded-2xl bg-gradient-to-br from-neon-blue/30 to-neon-purple/30 
          flex items-center justify-center flex-shrink-0
        `}>
          <span className="font-display text-2xl font-bold text-foreground">
            {name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        
        <div className="flex-1">
          <h3 className="font-display text-xl font-bold text-foreground mb-1">
            {name}
          </h3>
          <p className="text-primary text-sm font-medium mb-3">
            {role}
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {bio}
          </p>
          
          {/* Social links placeholder */}
          <div className="flex gap-3 mt-4">
            <button className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
              <Linkedin size={18} />
            </button>
            <button className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
              <Twitter size={18} />
            </button>
            <button className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
              <Mail size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const Team = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our{" "}
              <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Meet the visionaries and builders driving SVA's mission to engineer Africa's future.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">Leadership</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {leadership.map((member) => (
              <TeamMember key={member.name} {...member} featured />
            ))}
          </div>
        </div>
      </section>

      {/* Operations */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">Operations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {operations.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-8 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">Advisors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisors.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
