import { motion, useMotionValue, useTransform, animate } from "motion/react"
import { useEffect } from "react";

const cursorVariants = {
    /**
     * blinking invariant with four keyframes
     * WOW i love tailwind
     */
    blinking: {
        opacity: [0, 0, 1, 1],
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0,
            ease: "linear",
            times: [0, 0.5, 0.5, 1]
        }
    }
};

function CursorBlinker() {
    return (
        <motion.span
            variants={cursorVariants}
            animate="blinking"
            className="inline-block h-5 w-[1px] bg-black align-middle"
        />
    );
}

function TextAnim() {
    const baseText = "Hi, I'm Phillip Bernwanger";
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
        baseText.slice(0, latest)
    );

    useEffect(() => {
        const controls = animate(count, baseText.length, {
            type: "tween",
            duration: 3,
            ease: "easeInOut",
        });
        return controls.stop;
    }, []);

    return (
        <div className="text-xl font-mono text-center align-middle">
            <motion.span style={{ display: "inline-block" }}>
                {displayText}
            </motion.span>
            <CursorBlinker />
        </div >
    );
}
const GreetingCard = () => {

    return (
        <div className="p-4 w-full h-100">
            <TextAnim />
        </div>
    );
    
};

export default GreetingCard;