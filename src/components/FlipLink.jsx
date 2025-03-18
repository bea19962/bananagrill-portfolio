import "../styles/_fliplink.scss";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, className }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className={`motion-a ${className || ""}`}
    >
      <div>
        {children.split("").map((letter, index) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index,
            }}
            key={index}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className="motion-div-second">
        {children.split("").map((letter, index) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: "0",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index,
            }}
            key={index}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default FlipLink;