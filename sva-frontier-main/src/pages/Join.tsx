import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Building, 
  Users, 
  Handshake,
  Mail,
  MessageCircle,
  ArrowRight
} from "lucide-react";
import { useState, type FormEvent } from "react";

const joinTypes = [
  {
    id: "student",
    icon: GraduationCap,
    title: "Students",
    description: "High school and early university students ready to build the future.",
  },
  {
    id: "school",
    icon: Building,
    title: "Schools",
    description: "Educational institutions looking to bring SIF programs to their students.",
  },
  {
    id: "mentor",
    icon: Users,
    title: "Mentors",
    description: "Industry professionals who want to guide the next generation.",
  },
  {
    id: "sponsor",
    icon: Handshake,
    title: "Sponsors & Partners",
    description: "Organizations aligned with our mission to engineer Africa's future.",
  },
];

const Join = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const accessKey =
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
      "c144e41f-36ea-4a60-9895-cc5acdb59767";

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `SIF Website — Join Form — ${selectedType ?? "general"}`,
        email: formData.email,
        category: selectedType ?? "general",
        name: formData.name,
        phone: formData.phone,
        country: formData.country,
        message: formData.message,
      }),
    });

    const data = await res.json().catch(() => null);

    if (res.ok && data?.success) {
      window.location.reload();
      return;
    }

    alert(data?.message || "Submission failed. Please try again.");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-radial from-neon-blue/5 via-transparent to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Join the{" "}
              <span className="gradient-text">Movement</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Whether you're a student, educator, mentor, or organization — there's a place for you in SIF's mission to engineer Africa's future.
            </p>
          </div>
        </div>
      </section>

      {/* Join Types */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {joinTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`
                  glass-panel p-6 text-left transition-all duration-300
                  ${selectedType === type.id 
                    ? 'border-primary/50 shadow-[0_0_30px_hsl(191_98%_56%/0.2)]' 
                    : 'hover:border-border/80'}
                `}
              >
                <div className={`
                  w-12 h-12 rounded-lg mb-4 flex items-center justify-center
                  ${selectedType === type.id 
                    ? 'bg-primary/20' 
                    : 'bg-muted'}
                `}>
                  <type.icon className={`w-6 h-6 ${
                    selectedType === type.id ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {type.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {type.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 sm:p-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              {selectedType 
                ? `Apply as ${joinTypes.find(t => t.id === selectedType)?.title}`
                : "Select a category above to get started"}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Country"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tell us about yourself
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Why do you want to join SIF? What excites you about engineering the future?"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Submit Application
                <ArrowRight size={18} />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              Or reach out directly
            </h2>
            <p className="text-muted-foreground">We'd love to hear from you.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="glass" size="lg">
              <a href="mailto:hello@sva.africa">
                <Mail size={18} />
                info@siliconvalleyafrica.org
              </a>
            </Button>
            <Button asChild variant="glass" size="lg">
              <a href="https://wa.me/250792390983" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Join;
