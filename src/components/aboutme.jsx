import portrait from "../assets/img/seniorphoto.jpg"

function AboutMe() {
    return (
        <div>
            <h1 class="grid grid-cols-1 text-center w-full pb-6">
                About Me
            </h1>
            <div class="grid grid-cols-1 sm:grid-cols-2">
                <div class="flex w-full justify-center">
                    <img class="w-75 rounded-2xl md:w-3/4  object-contain object-center"src={portrait}></img>
                </div>
                <div class="text-center">
                    <p class="pr-6 pt-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis odio nec ligula molestie viverra. Ut a libero porttitor, euismod nunc et, interdum lacus. Sed rhoncus quam a mauris viverra viverra. In viverra finibus ex auctor ornare. Nulla aliquam 
                    eget mauris iaculis hendrerit. Sed in semper justo, sed laoreet massa. Proin mattis risus nec enim fermentum posuere. Morbi et libero vehicula velit vestibulum dignissim sit amet sit amet quam. Donec auctor auctor tortor quis vestibulum. Nulla metus lectus, 
                    tempor sit amet dictum consectetur, hendrerit quis est. Praesent convallis pellentesque suscipit. Aenean at metus accumsan odio fermentum iaculis id eu dui. Donec at erat eros. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;