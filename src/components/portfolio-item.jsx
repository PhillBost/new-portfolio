function PortfolioItem({ projectsrc, projectdesc }) {
    return (
      <div
        className="h-[300px] w-[33vw] sm:w-[50vw] bg-no-repeat bg-[length:100%] hover:opacity-65 hover:bg-[length:120%] hover:cursor-pointer bg-center transition-[background-size] duration-400 ease-in-out"
        style={{ backgroundImage: `url(${projectsrc})` }}
      >
        <div className="">
          {projectdesc}
        </div>
      </div>
    );
  }
  
  export default PortfolioItem;
  