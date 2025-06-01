"use client";
import { useEffect, useState } from "react";

export default function NewsLetterThumbnail({
  link,
  thumbnail,
}: {
  link: string;
  thumbnail: string;
}) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check screen width on client side
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <div className="relative w-full max-w-md h-64 rounded-md overflow-hidden">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 w-full h-full"
      >
        {isDesktop ? (
          <iframe
            src={`${link}#page=1&toolbar=0&navpanes=0&scrollbar=0`}
            title="Newsletter preview"
            className="w-full h-full rounded-md pointer-events-none"
          />
        ) : (
          <img
            src={thumbnail}
            alt="Newsletter preview"
            className="w-full h-full object-contain"
          />
        )}
      </a>
    </div>
  );
}
