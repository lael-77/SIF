import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src="/videos/hero.mp4.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-deep-black/60" />
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 z-10 bg-gradient-radial from-neon-blue/5 via-transparent to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-radial from-neon-purple/5 via-transparent to-transparent translate-x-1/2" />
      
      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px] animate-float z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] animate-float z-10" style={{ animationDelay: "3s" }} />
      
      {/* Glowing lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent" />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Main headline */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up">
          <span className="text-foreground">Engineering Africa's</span>
          <br />
          <span className="gradient-text">Next Century.</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-6 animate-fade-in-up delay-200">
          A youth-led movement shaping civilization-scale solutions through deep technology, systems thinking, and planetary engineering.
        </p>

        {/* Slogan */}
        <div className="mb-12 animate-fade-in-up delay-300 flex justify-center">
          <p className="font-display text-sm sm:text-base tracking-[0.3em] text-neon-purple uppercase px-6 py-3 rounded-full bg-black/80 border border-white/10 backdrop-blur-md">
            Humans Build Humanity
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
          <Button asChild variant="hero" size="xl">
            <Link to="/join">
              Join the Initiative
              <ArrowRight size={20} />
            </Link>
          </Button>
          <Button asChild variant="heroOutline" size="xl">
            <Link to="/programs">
              Explore Programs
            </Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
