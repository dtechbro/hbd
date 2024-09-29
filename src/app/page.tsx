'use client'

import { useEffect, useState, useRef } from "react";
import BalloonFlood from "./components/Balloon";
import ImageCarousel from "./components/pictures";


export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);

  // Create a ref to hold the audio element
  const audioRef = useRef<HTMLAudioElement>(null);

  // Automatically change sections every 5 seconds (adjustable)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prevSection) =>
        prevSection === 5 ? 0 : prevSection + 1
      );
    }, 6000); // Change time in milliseconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play(); // Play the audio when the component mounts
    }
  }, []);


  return (
    <div className="w-full h-screen overflow-hidden relative bg-pink-200">
      {/* Background music */}
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      {/* 1st Display */}
      {currentSection === 0 && (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-bold font-primary">
            Hey {`Ni'mah`}
          </h1>
          <p className="text-lg md:text-2xl">
            I know its a special day for you
          </p>
        </div>
      )}

      {/* 2nd Display */}
      {currentSection === 1 && (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-lg md:text-2xl p-4 md:p-32">
            {`The thought of creating this for you popped up out of the blue, and
            I was eager to do something different. Even though we don't interact
            often, I appreciate our friendship.`}
          </p>
        </div>
      )}

      {currentSection === 2 && (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-lg md:text-2xl p-4 md:p-32">
            {`I'm proud of your growth and journey. This might be challenging, but I hope it shows my appreciation. I wish you the very best, dearest.`}
          </p>
        </div>
      )}

      {/* 3rd Display - Balloon Flood */}
      {currentSection === 3 && <BalloonFlood />}

      {/* 4th Display */}
      {currentSection === 4 && (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-center">
            Happy Birthday {`Ni'mah`}
          </h1>
          <p className="text-lg">Cheers to many more years</p>
          {/* Carousel goes here */}
          <div style={{ height: "400px", width: "100%" }}>
            <ImageCarousel />
          </div>
        </div>
      )}

      {/* 5th Display */}
      {currentSection === 5 && (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-3xl">Enjoy your day dearest ❤!</h1>
          {/* <p className="text-lg">With love from {`{Your Name}`}</p> */}
          {/* <p className="text-sm">To replay, click the screen again</p> */}
        </div>
      )}
    </div>
  );
}
