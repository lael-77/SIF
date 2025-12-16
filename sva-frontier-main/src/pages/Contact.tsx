import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  MapPin,
  Send,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";
import { useState, type FormEvent } from "react";

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      alert("Missing Web3Forms access key. Set VITE_WEB3FORMS_ACCESS_KEY in your environment.");
      return;
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `SIF Website — Contact Form — ${formData.subject || "(no subject)"}`,
        email: formData.email,
        name: formData.name,
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
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Contact{" "}
              <span className="gradient-text">SIF</span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              Designing the futures Africa will live in.
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
                <p className="text-slate-200 leading-relaxed mb-8">
                  Reach out to the Silicon Institute for the Futures (SIF). We typically respond within 48 hours on working days.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Headquarters */}
                <div className="rounded-2xl border border-border/60 bg-white p-6 flex items-start gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-neon-purple/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-neon-purple" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 mb-1">Headquarters</p>
                    <p className="text-slate-800 leading-relaxed">
                      Silicon Institute for the Futures (SIF)
                      <br />Kigali — Rwanda
                    </p>
                  </div>
                </div>

                {/* General Inquiries */}
                <a
                  href="mailto:info@siliconvalleyafrica.org"
                  className="rounded-2xl border border-border/60 bg-white p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-neon-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 mb-1">General Inquiries</p>
                    <p className="text-slate-800 leading-relaxed">
                      info@siliconvalleyafrica.org
                      <br />(+250) 792390938
                    </p>
                  </div>
                </a>

                {/* Program Admissions */}
                <a
                  href="mailto:info@siliconvalleyafrica.org"
                  className="rounded-2xl border border-border/60 bg-white p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-neon-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 mb-1">Program Admissions</p>
                    <p className="text-slate-800 leading-relaxed">
                  info@siliconvalleyafrica.org
                      <br />For NDL, NDA, Summer Camp, and Frontier Lab application support.
                    </p>
                  </div>
                </a>

                {/* Partnerships & Strategic Alliances */}
                <a
                  href="mailto:info@siliconvalleyafrica.org"
                  className="rounded-2xl border border-border/60 bg-white p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-neon-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 mb-1">Partnerships &amp; Strategic Alliances</p>
                    <p className="text-slate-800 leading-relaxed">
                      info@siliconvalleyafrica.org
                      <br />For collaborations with universities, research institutes, governments, and global industry leaders.
                    </p>
                  </div>
                </a>

                {/* Media & Public Relations */}
                <a
                  href="mailto:info@siliconvalleyafrica.org"
                  className="rounded-2xl border border-border/60 bg-white p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-neon-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 mb-1">Media &amp; Public Relations</p>
                    <p className="text-slate-800 leading-relaxed">
                      info@siliconvalleyafrica.org
                      <br />For interviews, publications, and media features.
                    </p>
                  </div>
                </a>
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
                      className="w-12 h-12 rounded-xl border border-border/60 bg-white flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border border-border/60 bg-white p-8 sm:p-10 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-border text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-border text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-border text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Your Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-border text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us more..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-black text-white rounded-md hover:bg-slate-900 border border-black/80 transition-colors"
                >
                  Send Message
                  <Send size={18} />
                </Button>
              </form>
            </div>
          </div>

          {/* Footer Transparency Note */}
          <div className="mt-12 max-w-3xl text-sm text-slate-200 leading-relaxed">
            SIF is committed to advancing frontier science, speculative futures, and emerging technologies for the next generation of African innovators. Responses are typically delivered within 48 hours on working days.
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
