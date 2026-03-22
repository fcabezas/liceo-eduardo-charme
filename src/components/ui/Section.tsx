import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function Section({
  children,
  className,
  id,
  title,
  subtitle,
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-padding",
        dark ? "bg-gray-900 text-white" : "bg-white",
        className
      )}
    >
      <div className="container-custom">
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <h2
                className={cn(
                  "text-3xl md:text-4xl font-bold mb-4",
                  dark ? "text-white" : "text-gray-900"
                )}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={cn(
                  "text-lg max-w-2xl mx-auto",
                  dark ? "text-gray-400" : "text-gray-600"
                )}
              >
                {subtitle}
              </p>
            )}
            <div className="w-20 h-1 bg-gold mx-auto mt-6 rounded-full" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
