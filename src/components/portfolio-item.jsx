function portfolio_item({projectsrc, projectdesc}) {
    return (
        <div style={{backgroundImage: `url(${projectsrc})`}} 
            class="h-50 w-1/2 sm:w-1/3 ">

            <div 
                class={"text-center "}>
                {projectdesc}
            </div>
        </div>
    )
}

export default portfolio_item;