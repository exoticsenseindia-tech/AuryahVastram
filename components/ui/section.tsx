import { cn } from "./button";

export function Section({
    className,
    children,
    id,
}: {
    className?: string;
    children: React.ReactNode;
    id?: string;
}) {
    return (
        <section id={id} className={cn("py-16 md:py-24 px-6 md:px-12 max-w-[1440px] mx-auto", className)}>
            {children}
        </section>
    );
}
