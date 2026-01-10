import { AnimatePresence, Variants, motion } from "framer-motion";

export default function AnimatedLogo() {
  const textVariant: Variants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      fill: "#1f8d93", // Your theme accent color
      opacity: 1,
    },
  };

  return (
    <AnimatePresence>
      <motion.svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-bold text-5xl stroke-accent fill-accent"
          strokeWidth={2}
          variants={textVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, delay: 1 },
          }}
        >
          TW
        </motion.text>
      </motion.svg>
    </AnimatePresence>
  );
}