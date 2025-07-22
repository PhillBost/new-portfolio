import { useEffect, useRef, useState } from "react";

function PortfolioItem({ projectsrc, projectdesc }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simple mobile detection (you can customize)
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // 50% visible triggers
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`relative group h-90 w-[100vw] sm:w-[50vw] md:w-[33vw] overflow-hidden ${
        isVisible ? "is-visible" : ""
      }`}
    >
      {/* Background Layer */}
      <div
        className={`absolute inset-0 bg-no-repeat bg-center bg-cover transition-all duration-500 ease-in-out z-0 ${
          "group-hover:sepia group-hover:scale-120"
        } ${isVisible ? "sepia scale-120" : ""}`}
        style={{ backgroundImage: `url(${projectsrc})` }}
      ></div>

      {/* Text Overlay (appears on hover) */}
      <div
        className={`absolute inset-0 flex items-center justify-center p-4 text-white opacity-0 transition-opacity duration-300 z-10 bg-black/50 ${
          "group-hover:opacity-100"
        } ${isVisible ? "opacity-100" : ""}`}
      >
        <p className="text-sm">{projectdesc}</p>
      </div>
    </div>
  );
}

export default PortfolioItem;
