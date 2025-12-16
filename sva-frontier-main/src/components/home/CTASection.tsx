import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/10 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="glass-panel bg-white text-slate-900 p-10 sm:p-12 lg:p-14 neon-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Text + CTA */}
            <div className="text-center lg:text-left">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                SIF is the new{" "}
                <span className="gradient-text">frontier.</span>
              </h2>

              <p className="text-lg text-slate-600 max-w-xl mb-10 mx-auto lg:mx-0">
                Join the movement that's redefining what's possible for African youth. 
                Shape the future. Build humanity.
              </p>

              <div className="flex flex-col sm:flex-row lg:justify-start items-center gap-4">
                <Button asChild variant="hero" size="xl">
                  <Link to="/join">
                    Join Us Now
                    <ArrowRight size={20} />
                  </Link>
                </Button>
                <Button asChild variant="glass" size="xl">
                  <Link to="/about">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>

            {/* Image side */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 shadow-xl">
                <img
                  src="/images/sva-frontier.jpg"
                  alt="SIF students and frontier technology"
                  className="w-full h-72 sm:h-80 md:h-[24rem] lg:h-[26rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
