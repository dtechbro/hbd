import { motion } from "framer-motion";
import { Ballon1, Ballon2, Ballon3 } from "@/assets/svg";
import { useState } from "react";
// import "./globals.css";;

// Define the Balloon type
type Balloon = {
  id: number;
  randomX: number;
  randomDelay: number;
  randomScale: number;
};

// Function to generate random positions and delay for balloons
const generateRandomBalloons = (numBalloons: number) => {
  const balloons = [];
  for (let i = 0; i < numBalloons; i++) {
    const randomX = Math.random() * 100; // Random X position in percentage (0-100%)
    const randomDelay = Math.random() * 2; // Shorter random delay (0-2 seconds)
    const randomScale = 0.5 + Math.random(); // Random scale (0.5-1.5)

    balloons.push({
      id: i,
      randomX,
      randomDelay,
      randomScale,
    });
  }
  return balloons;
};

const BalloonFlood = () => {
  const [balloons] = useState<Balloon[]>(
    generateRandomBalloons(150)
  ); // Increase to 150 balloons for better spread

  // Balloon animation variant
  const balloonVariants = {
    animate: (i: number) => ({
      y: [800, -800], // Start 800px below the viewport and move upwards
      opacity: [1, 0], // Fade out as they move up
      scale: [1, balloons[i].randomScale], // Balloons grow in size
      x: [
        `${balloons[i].randomX}%`,
        `${balloons[i].randomX + (Math.random() * 50 - 25)}%`, // More aggressive spread left and right (-25 to 25%)
        `${balloons[i].randomX + (Math.random() * 80 - 40)}%`, // Random zigzag spread in the X-axis
      ],
      transition: {
        duration: 4 + Math.random() * 2, // Slightly shorter animation duration (4-6 seconds)
        delay: balloons[i].randomDelay, // Random delay before starting
        repeat: Infinity, // Repeat the animation infinitely
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="inset-0 w-screen h-full overflow-hidden">
      {balloons.map((balloon, i) => (
        <motion.div
          key={balloon.id}
          custom={i}
          variants={balloonVariants}
          initial={{ y: 800, opacity: 1 }} // Start 800px below the screen
          animate="animate"
          className="absolute w-screen flex items-center"
          style={{
            width: "150px", // Adjust balloon size here (smaller balloons will fit more)
            height: "auto",
            left: `${balloon.randomX}%`, // Set initial position to random X on the screen
          }}
        >
          {/* You can alternate between different balloons */}
          {i % 3 === 0 ? <Ballon1 /> : i % 3 === 1 ? <Ballon2 /> : <Ballon3 />}
        </motion.div>
      ))}
    </div>
  );
};

export default BalloonFlood;
