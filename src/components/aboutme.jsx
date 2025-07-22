import portrait from "../assets/img/seniorphoto.jpg"

function AboutMe() {
    return (
        <div>
            <h1 class="grid grid-cols-1 text-2xl text-center w-full pb-6 z-20">
                About Me
            </h1>
            <div class="grid grid-cols-1 sm:grid-cols-2">
                <div class="flex w-full justify-center">
                    <img class="w-75 rounded-2xl md:w-3/4  object-contain object-center"src={portrait}></img>
                </div>
                <div class="text-center">
                    <p class="pr-6 pt-6">
                        I'm a student at Purdue University studying Computer Science with a concentration 
                        in software engineering and a background in cybersecurity coursework. While I've 
                        been coding since I was 14, my interest in Computer Science as a career path was 
                        sparked through my participation in competitive high school robotics, where 
                        in 2021 I was elected as the lead of software. Between 2019-2021, I could usually 
                        be found carrying an old Dell laptop around the robotics shop, working with experienced
                        and aspiring engineers from a variety of fields. Fast forward to today, I plan to spend 
                        my 20's mastering as many programming mediums and tools as possible, so that whenever an interesting 
                        project comes to my mind, I can sit down and create it.

                        If you'd like to reach out, shoot an email to 
                        <p class="underline">
                            pbostic789@gmail.com
                        </p>
                        
                        
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;