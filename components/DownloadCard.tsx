import { Download } from "lucide-react";

interface DownloadCardProps {
  title: string;
  description?: string;
  downloadHref?: string;
  placeholder?: boolean;
}

export default function DownloadCard({
  title,
  description,
  downloadHref,
  placeholder = true,
}: DownloadCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-santa-cream rounded-lg flex items-center justify-center flex-shrink-0">
          <Download className="w-5 h-5 text-santa-red" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 text-sm">{title}</h4>
          {description && (
            <p className="text-xs text-gray-500 mt-1">{description}</p>
          )}
          {placeholder ? (
            <p className="text-xs text-gray-400 mt-2 italic">
              Download coming soon
            </p>
          ) : (
            downloadHref && (
              <a
                href={downloadHref}
                download
                className="inline-flex items-center gap-1 text-xs font-medium text-santa-red hover:text-santa-red-dark mt-2 transition-colors"
              >
                <Download size={12} />
                Download (.zip)
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
}
