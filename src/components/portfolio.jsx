import PortfolioItem from "./portfolio-item"
import Pharoah from "../assets/img/roboclimb.jpg"
import Swerve from "../assets/img/swerve2021.jpg"

function portfolio(){
    return (
        <div>
            <h1 class="grid grid-cols-1 text-center w-full pt-4 pb-4">
                Portfolio
            </h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0" >
                <PortfolioItem 
                    projectsrc={Pharoah}
                    projectdesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse quis odio nec ligula molestie viverra. Ut a libero porttitor, euismod 
                    nunc et, interdum lacus. Sed rhoncus quam a mauris viverra viverra. In viverra finibus ex auctor ornare.
                     Nulla aliquam eget mauris iaculis hendrerit. Sed in semper justo, sed laoreet massa. Proin mattis risus 
                     nec enim fermentum posuere. Morbi et libero vehicula"
                />
                <PortfolioItem 
                    projectsrc={Swerve}
                    projectdesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse quis odio nec ligula molestie viverra. Ut a libero porttitor, euismod 
                    nunc et, interdum lacus. Sed rhoncus quam a mauris viverra viverra. In viverra finibus ex auctor ornare.
                     Nulla aliquam eget mauris iaculis hendrerit. Sed in semper justo, sed laoreet massa. Proin mattis risus 
                     nec enim fermentum posuere. Morbi et libero vehicula"
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