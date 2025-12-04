import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  MessageCircle, 
  MapPin,
  Send,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";
import { useState } from "react";

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/sva_africa", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/sva-africa", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/sva_africa", label: "Instagram" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-radial from-neon-blue/5 via-transparent to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Get in{" "}
              <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions? Want to collaborate? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Reach out through any of our channels. We typically respond within 24 hours.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <a
                  href="mailto:hello@sva.africa"
                  className="glass-panel p-6 flex items-center gap-4 hover-glow transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-neon-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">hello@sva.africa</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/250780000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel p-6 flex items-center gap-4 hover-glow transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">WhatsApp</p>
                    <p className="text-muted-foreground">+250 780 000 000</p>
                  </div>
                </a>

                <div className="glass-panel p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-neon-purple/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-neon-purple" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Locations</p>
                    <p className="text-muted-foreground">Rwanda • Uganda</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="font-medium text-foreground mb-4">Follow Us</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg glass-panel flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-panel p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="John Doe"
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
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us more..."
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                  <Send size={18} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
