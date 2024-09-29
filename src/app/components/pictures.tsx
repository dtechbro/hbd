import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { image1, image2, image3, image4, image5, image6  } from "@/assets/images";

// Example images, replace with your actual paths
const images = [image1, image2, image3, image4, image5, image6, ];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5, // 5 items in view for super large screens
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 4, // 4 items in view for desktops
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 3, // 3 items in view for tablets
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1, // 1 item in view for mobile
  },
};

const ImageCarousel: React.FC = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      showDots={false} // Disable pagination dots
      swipeable={true}
      draggable={true}
      arrows={false} // Disable navigation arrows
      containerClass="carousel-container" // Optional: Add custom class for styling
    >
      {images.map((src, index) => (
        <div key={index} className="relative h-[60vh] flex items-center justify-center gap-4 mt-5">
          <Image
            src={src}
            alt={`image-${index}`}
            // layout="responsive" // Make image responsive
            width={120} // Define the width relative to the container
            height={70} // Define a fixed height for uniformity
            objectFit="cover" // Cover to maintain aspect ratio
            className="carousel-image h-[60vh] w-auto rounded-xl" // Custom class for styling
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;