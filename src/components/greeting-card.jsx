import { motion, useMotionValue, useTransform, animate, useMotionValueEvent, delay } from "motion/react"
import { useEffect, useState } from "react";

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
    },

    blinkingtemp: {
        opacity: [1, 1, 0, 0],
        transition: {
            duration: 1,
            repeat: 3,
            repeatDelay: 0,
            ease: "linear",
            times: [0, 0.5, 0.5, 1]
        }
    },

    blinkingdelay: {
        opacity: [0, 0, 1, 1],
        transition: {
            delay: 3.5,
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0,
            ease: "linear",
            times: [0, 0.5, 0.5, 1]
        }
    }
};

function CursorBlinker({animate}) {
    return (
        <motion.span
            variants={cursorVariants}
            animate={animate}
            className="inline-block h-5 w-[1px] bg-white align-middle"
        />
    );
}

function TextAnim({ baseText, delay, animation}) {
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
            delay: delay,
        });
        return controls.stop;
    }, [baseText]);

    const [text, setText] = useState("");

    useMotionValueEvent(displayText, "change", (v) => {
        setText(v);
    });

    return (
        <div className=" text-3xl font-mono inline-block">
            <motion.span className>
                {displayText}
            </motion.span>
            <CursorBlinker animate={animation}/>
        </div >
    );
}

const GreetingCard = () => {

    return (
        <div className=" flex flex-col items-center justify-center mb-4 p-4 w-full h-100">
            <TextAnim  baseText="Hi, I'm Phillip Bernwanger" animation="blinkingtemp"/>
            <TextAnim baseText="I'm a Programmer" delay="3" animation="blinkingdelay"/>
        </div>
    );
    
};

export default GreetingCard;