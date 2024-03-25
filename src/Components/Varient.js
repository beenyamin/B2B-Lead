import { motion } from "framer-motion"
motion
export const fadeIn = (direction, delay) => {
      return {
        hidden: {
          y: direction === 'up' ? 100 : direction === 'down' ? -60 : 0,
          x: direction === 'left' ? 40 : direction === 'right' ? -50 : 0,
          opacity: 0,
          scale: 0.8, // Start with a slightly smaller scale
          rotate: direction === 'left' || direction === 'right' ? 20 : 0, // Rotate slightly for left/right directions
        },
        show: {
          y: 0,
          x: 0,
          opacity: 1,
          scale: 1, // Normal scale
          rotate: 0, // No rotation
          transition: {
            type: 'tween',
            duration: 1.00,
            delay: delay,
            ease: [0.25, 0.25, 0.25, 0.75], // Custom easing function
          },
        },
      };
    };
    