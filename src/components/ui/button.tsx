import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium  transition-colors focus-visible:outline-none gap-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-lightPrimary dark:bg-darkSecondary dark:text-lightAccent text-primary-foreground hover:bg-lightPrimary/90 flex items-center gap-1 dark:hover:bg-darkSecondary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        profileBtn:
          "bg-white text-lightPrimary rounded-none border-none hover:bg-lightAccent w-full",
        sleekTransparent:
          "bg-transparent text-lightPrimary  border border-lightAccent hover:bg-lightAccent font-normal gap-1 ",
          input:"flex h-10 w-full rounded-md border hover:dark:border-secondary hover:border-secondary   dark:border-gray-500 bg-gray-200  border-gray-300 dark:bg-gray-800 px-4 py-2 text-sm file:border-0  focus:file:bg-transparent file:text-sm file:font-medium  placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50 outline-none", 
          formGradient:"bg-gradient-to-r from-lightPrimary to-darkAccent hover:to-lightPrimary text-white rounded-md px-4 py-2",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        sleek: "h-8 px-3 py-1",
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
