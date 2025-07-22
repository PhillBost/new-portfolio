function PortfolioItem({ projectsrc, projectdesc }) {
  return (
    <div className="relative group h-90 w-[100vw] sm:w-[50vw] md:w-[33vw] overflow-hidden">
      
      {/* Background Layer */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover group-hover:sepia group-hover:scale-120 transition-all duration-500 ease-in-out"
        style={{ backgroundImage: `url(${projectsrc})`, zIndex: 0 }}
      ></div>

      {/* Text Overlay (appears on hover) */}
      <div className="absolute inset-0 flex items-center justify-center p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-black/50">
        <p className="text-sm">{projectdesc}</p>
      </div>
      
    </div>
  );
}

export default PortfolioItem;
