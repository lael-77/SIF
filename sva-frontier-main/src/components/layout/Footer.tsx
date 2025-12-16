import { Link } from "react-router-dom";
import { Twitter, Linkedin, Instagram, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = {
  explore: [
    { label: "About", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ],
  programs: [
    { label: "NDL", href: "/programs#ndl" },
    { label: "NDA", href: "/programs#nda" },
    { label: "Summer Camp", href: "/programs#camp" },
    { label: "Frontier Lab", href: "/programs#frontier" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/sva_africa", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/sva-africa", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/sva_africa", label: "Instagram" },
  { icon: Mail, href: "mailto:hello@sva.africa", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-slate-50">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-slate-800">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2">
              <img
                src="/sif-logo.png"
                alt="SIF logo"
                className="h-24 sm:h-28 md:h-32 w-auto drop-shadow-sm"
              />
            </Link>
            <p className="mt-4 text-slate-600 max-w-md leading-relaxed">
              Silicon Institute for the Futures — A youth-led deep-tech movement engineering the future of the continent.
            </p>
            <p className="mt-4 inline-flex items-center justify-center px-5 py-2 rounded-full bg-slate-200 border border-slate-300 font-display text-sm tracking-widest text-neon-purple">
              HUMANS BUILD HUMANITY
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display font-semibold text-slate-900 mb-4">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-slate-600 hover:text-slate-900 transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-semibold text-slate-900 mb-4">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-slate-600 hover:text-slate-900 transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border bg-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 px-4 sm:px-6 lg:px-8 -mx-4 sm:-mx-6 lg:-mx-8">
          <p className="text-sm text-slate-700">
            © {new Date().getFullYear()} Silicon Institute for the Futures. All rights reserved.
          </p>
          <p className="text-sm text-slate-700">
            Engineering Africa's Next Century
          </p>
        </div>
      </div>
    </footer>
  );
}
