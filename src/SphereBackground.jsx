import { useEffect } from "react";

function SphereBackground() {
    useEffect(() => {
        const container = document.getElementById("sphere-container");

        for (let i = 0; i < 30; i++) {
            const sphere = document.createElement("div");
            sphere.className = "floating-sphere";

            //randomize position, duration
            const size = Math.random() * 30 + 10;
            sphere.style.width = `${size}px`;
            sphere.style.height = `${size}px`;
            sphere.style.left = `${Math.random() * 100}%`;
            sphere.style.top = `${Math.random() * 100}%`;
            sphere.style.animationDuration = `${5 + Math.random() * 10}s`;

            container.appendChild(sphere);
        }

    }, []);

    return (
    <>
        <div id="sphere-container" className="absolute inset-0 z-0"></div>
        <style>
            {`
                #sphere-container {
                    overflow: hidden;
                    pointer-events: none;
                }

                .floating-sphere {
                    position: absolute;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    animation: float 10s ease-in-out infinite alternate;
                }
                
                @keyframes float {
                  0% {
                    transform: translateY(0px) translateX(0px);
                  }
                  100% {
                    transform: translateY(-100px) translateX(59px);
                  }
                }
            
            `}
        </style>
    </>
    );
}


export default SphereBackground