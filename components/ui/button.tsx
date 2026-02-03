import { ButtonHTMLAttributes, forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-sm transition-all duration-300 font-medium tracking-wide focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 uppercase",
                    {
                        "bg-primary text-white hover:bg-neutral-800": variant === "primary",
                        "bg-secondary text-white hover:bg-[#7a6b5e]": variant === "secondary",
                        "border border-primary text-primary hover:bg-primary hover:text-white":
                            variant === "outline",
                        "hover:bg-accent/10 text-primary": variant === "ghost",
                        "h-9 px-4 text-xs": size === "sm",
                        "h-11 px-8 text-sm": size === "md",
                        "h-14 px-10 text-base": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, cn };
