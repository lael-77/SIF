import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium font-display tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 hover:shadow-xl",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-muted hover:border-primary/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/25 hover:bg-secondary/80 hover:shadow-secondary/40",
        ghost: 
          "text-foreground hover:bg-muted hover:text-foreground",
        link: 
          "text-primary underline-offset-4 hover:underline",
        // SVA Custom variants
        hero: 
          "bg-gradient-to-r from-[hsl(191,98%,56%)] to-[hsl(277,98%,56%)] text-[hsl(240,10%,4%)] font-semibold shadow-lg hover:shadow-[0_0_30px_hsl(191,98%,56%,0.4)] hover:scale-[1.02] active:scale-[0.98]",
        heroOutline:
          "border border-[hsl(191,98%,56%,0.5)] bg-transparent text-foreground backdrop-blur-sm hover:bg-[hsl(191,98%,56%,0.1)] hover:border-[hsl(191,98%,56%)] hover:shadow-[0_0_20px_hsl(191,98%,56%,0.3)]",
        neon:
          "bg-transparent border border-[hsl(191,98%,56%)] text-[hsl(191,98%,56%)] hover:bg-[hsl(191,98%,56%,0.1)] hover:shadow-[0_0_25px_hsl(191,98%,56%,0.4)]",
        neonPurple:
          "bg-transparent border border-[hsl(277,98%,56%)] text-[hsl(277,98%,56%)] hover:bg-[hsl(277,98%,56%,0.1)] hover:shadow-[0_0_25px_hsl(277,98%,56%,0.4)]",
        gold:
          "bg-gradient-to-r from-[hsl(45,100%,50%)] to-[hsl(45,100%,60%)] text-[hsl(240,10%,4%)] font-semibold shadow-lg hover:shadow-[0_0_25px_hsl(45,100%,50%,0.4)]",
        glass:
          "bg-[hsl(240,10%,6%,0.4)] backdrop-blur-xl border border-[hsl(240,10%,15%,0.5)] text-foreground hover:bg-[hsl(240,10%,6%,0.6)] hover:border-[hsl(240,10%,15%)]",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
