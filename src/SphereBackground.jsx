import { useEffect, useState, useRef} from "react";
import { motion } from "motion/react"

function SphereBackground() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
        
    }, []);

    const spheres = useRef(
        Array.from({ length: 30 }).map(() => ({
            id: Math.random().toString(36).slice(2),
            size: Math.random() * 30 + 10,
            left: Math.random() * 100,
            top: Math.random() * 100,
            speed: Math.random()*0.2 + 0.4,
            duration: Math.random() * 2 + 5
        }))
    ).current;

    return (
    <>

        <div id="sphere-container" className="absolute inset-0 z-0">
            {spheres.map((sphere) => (
                <motion.div
                    key={sphere.id}
                    style={{
                        width: sphere.size,
                        height: sphere.size,
                        left: `${sphere.left}%`,
                        top: `${sphere.top}%`,
                        transform: `translateY(${scrollY * sphere.speed}px)`,
                        position: "absolute",
                    }}
                >
                    <div
                        className="sphere-float"
                        style={{
                        width: "100%",
                        height: "100%",
                        animationDuration: `${sphere.duration}s`,
                        }}
                    />

                </motion.div>
                

            ))}
        </div>

        <style>
            {`

                .sphere-float {
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