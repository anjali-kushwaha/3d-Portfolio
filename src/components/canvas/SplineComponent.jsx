import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

const SplineComponent = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/OE00DjoFkwg0omCG/scene.splinecode');

    // Ensure the canvas has a transparent background
    canvas.style.backgroundColor = 'transparent';
  }, []);

  return (
    <div style={{
      width: '2000px',   // Set the desired width
      height: '900px',  // Set the desired height
      backgroundColor: 'transparent',
      position: 'relative'
    }}>
      <canvas id="canvas3d" style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        position: 'absolute', // This ensures the canvas is positioned correctly
        top: '-350px', // Adjust this to crop from the top
        left: '-50px' // Adjust this to crop from the left
      }}></canvas>
    </div>
  );
};

export default SplineComponent;
