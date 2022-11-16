import React, { useRef, useEffect, useState } from "react";

const AnimatedImage = (image_url, props) => {
  const canvasRef = useRef(null);
  const [frameIndex, setFrame] = React.useState(0);
  const [frameBase, setBase] = React.useState(0);
  const [direction, setDirection] = React.useState("fwd");

  useEffect(() => {
    const image = new Image();
    const frameCount = 399;
    const currentFrame = (index) =>
      `${image_url.image_url}${index.toString().padStart(3, "0")}.jpg`;

    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    image.src = currentFrame(1);

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.id = 1;
    canvas.width = image_url.width;
    canvas.height = image_url.height;

    image.onload = () => {
      context.drawImage(image, 0, 0);
    };

    requestAnimationFrame(() => updateImage(frameBase, frameIndex, direction));

    const updateImage = (index, max, direction) => {
      image.src = currentFrame(index);
      context.drawImage(image, 0, 0);

      if (max >= 0 && max <= frameCount + 1) {
        if (direction === "fwd") {
          index++;
          if (index <= max) {
            requestAnimationFrame(() => updateImage(index, max, direction));
          }
        }
        if (direction === "rwd") {
          index--;
          if (index >= max) {
            requestAnimationFrame(() => updateImage(index, max, direction));
          }
        }
      }
    };

    preloadImages();
  });

  function handleClick(direction) {
    setDirection(direction);
    if (frameIndex >= 0 && frameIndex < 400 && direction === "fwd") {
      setBase(frameIndex);
      setFrame(frameIndex + 100);
    } else if (frameIndex > 0 && frameIndex <= 400 && direction === "rwd") {
      setBase(frameIndex);
      setFrame(frameIndex - 100);
    }
  }

  return (
    <div className="relative">
      <canvas ref={canvasRef} {...props} />
      <div className="absolute z-20 h-full w-full top-0">
        <div className="flex h-full justify-between">
          <button
            onClick={() => handleClick("rwd")}
            className="h-full custom-pointer-left text-transparent w-1/4"
          >
            Previous Image
          </button>
          <button
            onClick={() => handleClick("fwd")}
            className="h-full custom-pointer-right text-transparent w-1/4"
          >
            Next Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimatedImage;
