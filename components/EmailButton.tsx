"use client";

import { useCallback } from "react";

interface EmailButtonProps {
  label?: string;
  className?: string;
}

export default function EmailButton({
  label = "Email Santa Guy",
  className = "inline-block px-5 py-2.5 bg-santa-red text-white text-sm font-semibold rounded-lg hover:bg-santa-red-dark transition-colors shadow-sm",
}: EmailButtonProps) {
  const handleClick = useCallback(() => {
    const parts = ["enquiries", "voiceoverguy.co.uk"];
    window.location.href = `mailto:${parts[0]}@${parts[1]}`;
  }, []);

  return (
    <button type="button" onClick={handleClick} className={className}>
      {label}
    </button>
  );
}
