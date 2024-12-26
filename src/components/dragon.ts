import { RefObject, useEffect, useRef } from 'react';

const DragonCanvas:any = () => {
  // Reference to the canvas element
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current; // Get the canvas element
    if (!canvas) return; // Early exit if canvas is not available

    const ctx = canvas.getContext('2d');
    if (!ctx) return; // Early exit if 2D context is not available

    // Set canvas width and height
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Dragon properties
    const dragon = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      width: 50,
      height: 50,
      color: 'red',
    };

    // Function to draw the dragon
    const drawDragon = (x: number, y: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas on every frame
      ctx.fillStyle = dragon.color;

      // Dragon body
      ctx.beginPath();
      ctx.ellipse(x, y, 20, 30, Math.PI / 4, 0, 2 * Math.PI);
      ctx.fill();

      // Dragon tail
      ctx.beginPath();
      ctx.moveTo(x - 25, y + 10);
      ctx.lineTo(x - 50, y + 20);
      ctx.lineTo(x - 25, y);
      ctx.closePath();
      ctx.fill();

      // Dragon wings
      ctx.beginPath();
      ctx.moveTo(x - 10, y - 15);
      ctx.lineTo(x - 50, y - 50);
      ctx.lineTo(x + 10, y - 15);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(x + 10, y + 15);
      ctx.lineTo(x + 50, y + 50);
      ctx.lineTo(x - 10, y + 15);
      ctx.closePath();
      ctx.fill();
    };

    // Event handler to update dragon's position based on mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      dragon.x = e.clientX;
      dragon.y = e.clientY;
    };

    // Animation loop to draw the dragon and follow the cursor
    const animate = () => {
      drawDragon(dragon.x, dragon.y);
      requestAnimationFrame(animate); // Keep looping
    };

    // Add event listener to update mouse position
    window.addEventListener('mousemove', handleMouseMove);

    // Start the animation loop
    animate();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

    return <canvas ref={ canvasRef } className = "w-full h-full" />;
};

export default DragonCanvas;
