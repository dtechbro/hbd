'use client'

import { useEffect, useState } from "react";
import BalloonFlood from "./components/Balloon";


export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);

  // Automatically change sections every 5 seconds (adjustable)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prevSection) =>
        prevSection === 4 ? 0 : prevSection + 1
      );
    }, 6000); // Change time in milliseconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden relative">
      {/* 1st Display */}
      {currentSection === 0 && (
        <div className="flex flex-col items-center justify-center h-full bg-blue-500">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Hey {`Ni'mah`}
          </h1>
          <p className="text-lg md:text-2xl text-white">I know its a special day for you</p>
        </div>
      )}

      {/* 2nd Display */}
      {currentSection === 1 && (
        <div className="flex flex-col items-center justify-center h-full bg-purple-500">
          <p className="text-lg md:text-2xl text-white">
            More paragraphs to light up the mood!
          </p>
        </div>
      )}

      {/* 3rd Display - Balloon Flood */}
      {currentSection === 2 && <BalloonFlood />}

      {/* 4th Display */}
      {currentSection === 3 && (
        <div className="flex flex-col items-center justify-center h-full bg-yellow-500">
          <h1 className="text-5xl font-bold">Happy Birthday {`{Her Name}`}</h1>
          <p className="text-lg">Some more paragraph</p>
          {/* Carousel goes here */}
        </div>
      )}

      {/* 5th Display */}
      {currentSection === 4 && (
        <div className="flex flex-col items-center justify-center h-full bg-green-500">
          <h1 className="text-3xl">Enjoy your day!</h1>
          <p className="text-lg">With love from {`{Your Name}`}</p>
          <p className="text-sm">To replay, click the screen again</p>
        </div>
      )}
    </div>
  );
}
