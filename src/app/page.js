"use client";
import styles from "./page.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "./utils/useMousePosition";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          A Junior in the tech world, got my hands in a lot of areas, trying to
          make my mark. I'm eager to contribute and make it worth your time, but
          let's make sure the paycheck matches the effort!{" "}
        </p>
      </motion.div>

      <div className={styles.body}>
        <p>
          I'm a <span>passionate tech</span> enthusiast with a strong focus on
          front-end development, aiming to make user experiences fun and
          impactful.
        </p>
      </div>
    </main>
  );
}
