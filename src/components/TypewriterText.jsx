import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const TypewriterText = ({ text, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, index));
        index++;
        if (index > text.length) clearInterval(interval);
      }, 100); // Typing speed in milliseconds
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span style={{ display: "inline-flex" }}>
      <span>{displayedText}</span>
      <motion.span
        style={{
          //borderRight: "2px solid", // Cursor style
          marginLeft: "2px",
          height: "1em" // Keeps cursor height consistent
        }}
        animate={{ opacity: [0, 1] }}
        transition={{ repeat: Infinity, duration: 0.5 }}
      >
        &nbsp;
      </motion.span>
    </span>
  );
};

export default TypewriterText;
