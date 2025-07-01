import PortfolioItem from "./portfolio-item"
import testphoto from "../assets/img/seniorphoto.jpg"

function portfolio(){
    return (
        <div>
            <h1 class="grid grid-cols-1 text-center w-full pt-4 pb-4">
                Portfolio
            </h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3" >
                <PortfolioItem 
                    projectsrc={testphoto}
                    projectdesc="e"
                />
                <PortfolioItem 
                    projectdesc="w"
                />
                <PortfolioItem 
                    projectdesc="e"
                />
                <PortfolioItem 
                    projectdesc="w"
                />                     


            </div>
        </div>
    )
}


export default portfolio;