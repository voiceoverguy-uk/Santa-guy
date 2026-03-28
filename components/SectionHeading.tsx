interface SectionHeadingProps {
  title: string;
  subtitle?: React.ReactNode;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 sm:mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 w-16 h-1 bg-santa-red rounded-full ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}
