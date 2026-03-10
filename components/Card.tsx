import type { ReactNode } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface CardProps {
  title: string;
  description: ReactNode;
  icon?: LucideIcon;
  href?: string;
  linkLabel?: string;
}

export default function Card({
  title,
  description,
  icon: Icon,
  href,
  linkLabel = "Learn more",
}: CardProps) {
  return (
    <div className="group bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-santa-red/20 transition-all">
      {Icon && (
        <div className="w-12 h-12 bg-santa-cream rounded-lg flex items-center justify-center mb-5 group-hover:bg-santa-red/10 transition-colors">
          <Icon className="w-6 h-6 text-santa-red" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
      {href && (
        <Link
          href={href}
          className="inline-flex items-center text-sm font-medium text-santa-red hover:text-santa-red-dark transition-colors"
        >
          {linkLabel}
          <span className="ml-1 group-hover:translate-x-1 transition-transform">&rarr;</span>
        </Link>
      )}
    </div>
  );
}
