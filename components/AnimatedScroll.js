import React, { useRef, useEffect, useState } from "react";

export const AnimatedScroll = (image_url, width, height, props) => {
  const canvasRef = useRef(null);
  const setCount = useState(0);

  useEffect(() => {
    const image = new Image();
    const frameCount = 399;
    const currentFrame = (index) =>
      `${image_url.image_url}${index
        .toString()
        .padStart(3, "0")}.jpg`;

    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    image.src = currentFrame(1);
    console.log(image_url)

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.id = 1;
    canvas.width = image_url.width;
    canvas.height = image_url.height;

    image.onload = () => {
      context.drawImage(image, 0, 0);
    };

    const handleClick = () => {
      console.log('increment like count');
    }
    
    const updateImage = (index, max, direction) => {
      image.src = currentFrame(index);
      context.drawImage(image, 0, 0);

      if (direction == "fwd") {
        index++;
        if (index < max) {
          console.log("index=" + index);
          console.log("max=" + max);
          requestAnimationFrame(() => updateImage(index, max, direction));
        }
      }
      if (direction == "rwd") {
        index--;
        console.log(index);
        if (max < index) {
          max += 1;
          console.log("index=" + index);
          console.log("max=" + max);
          //requestAnimationFrame(() => updateImage(index, max, direction));
        }
      }
    };

    const getCursorPosition = (canvas, event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      return x;
    };

    const frameIndex = 0;
    const frameBase = 0;
    const direction = "";

    window.addEventListener("click", (e) => {
      const position = getCursorPosition(canvas, e);
      if (position > 1200) {
        if (frameIndex < frameCount) {
          frameBase = frameIndex;
          frameIndex += 100;
          direction = "fwd";

          requestAnimationFrame(() =>
            updateImage(frameBase, frameIndex - 1, direction)
          );
        }
      }

      //requestAnimationFrame(() => updateImage(frameIndex - 1));
    });

    preloadImages();
  }, []);

  

  return (
    <div>
      <canvas ref={canvasRef} {...props} />
    </div>
  );
};
