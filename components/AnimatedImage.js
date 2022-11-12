import React, { useRef, useEffect, useState } from "react";

const AnimatedImage = (image_url, props) => {
    const canvasRef = useRef(null);
    const [frameIndex, setFrame] = React.useState(0);
    const [frameBase, setBase] = React.useState(0);
    const [direction, setDirection] = React.useState('fwd');
    const [locations, setLocations] = React.useState([]);

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
        setDirection(direction)
        if (frameIndex >= 0 && frameIndex < 400 && direction === 'fwd') {
            setBase(frameIndex)
            setFrame(frameIndex + 100);
        } else if (frameIndex > 0 && frameIndex <= 400 && direction === 'rwd') {
            setBase(frameIndex)
            setFrame(frameIndex - 100);
        }
    }

    function handleCanvasClick(e) {

        const newLocation = { x: e.clientX, y: e.clientY };
        console.log('clcikc')
        setLocations([...locations, newLocation]);
    }

    return (
        <div className="relative flex items-center h-screen mb-20 overflow-hidden">
            
            <div className="flex h-full w-full justify-between z-20">
                <button onClick={() => handleClick('rwd')} className="custom-pointer-left text-transparent w-1/4">
                    Previous Image
                </button>
                <button onClick={() => handleClick('fwd')} className="custom-pointer-right text-transparent w-1/4">
                    Next Image
                </button>
            </div>
            <canvas ref={canvasRef} {...props} onClick={handleCanvasClick} className='absolute z-10 w-auto min-w-full min-h-full max-w-none'/>
        </div>
    );
}

export default AnimatedImage;

