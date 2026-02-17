
import React, { useEffect, useRef } from 'react';

const Background3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      z: number;
      speed: number;
      color: string;
      size: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.speed = 1 + Math.random() * 1.5;
        // Updated colors: Cyans and Violets for a tech feel
        const colors = ['#22d3ee', '#3b82f6', '#8b5cf6', '#1e293b'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.size = 1 + Math.random() * 1.5;
      }

      update() {
        this.z -= this.speed;
        if (this.z <= 0) {
          this.z = 1000;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
      }

      draw() {
        const perspective = 600 / this.z;
        const px = (this.x - canvas.width / 2) * perspective + canvas.width / 2;
        const py = (this.y - canvas.height / 2) * perspective + canvas.height / 2;
        const size = this.size * perspective;

        if (px < 0 || px > canvas.width || py < 0 || py > canvas.height) return;

        ctx!.beginPath();
        ctx!.arc(px, py, size, 0, Math.PI * 2);
        ctx!.fillStyle = this.color;
        ctx!.globalAlpha = Math.min(0.8, 1 - this.z / 1000);
        ctx!.fill();
      }
    }

    const drawGrid = (time: number) => {
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = 0.15;

      const spacing = 60;
      const scrollOffset = (time * 0.03) % spacing;

      for (let x = scrollOffset; x < canvas.width; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = scrollOffset; y < canvas.height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const init = () => {
      particles = Array.from({ length: 120 }, () => new Particle());
    };

    const render = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const grad = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width
      );
      grad.addColorStop(0, '#0a192f');
      grad.addColorStop(1, '#020617');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawGrid(time);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    resize();
    init();
    render(0);

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default Background3D;
