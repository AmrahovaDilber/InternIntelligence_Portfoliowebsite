import React, { useState, useEffect, useRef } from "react";
declare module "react" {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}
interface Position {
  x: number;
  y: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  speedX: number;
  speedY: number;
  lifetime: number;
  rotation: number;
  shape: "circle" | "star" | "diamond";
}

const MagicCursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isClicking, setIsClicking] = useState<boolean>(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const lastPositionRef = useRef<Position>({ x: 0, y: 0 });
  const particleCount = 20;

  const colors: string[] = [
    "#FF1493",
    "#4169E1",
    "#FFD700",
    "#FF4500",
    "#9400D3",
    "#00FF7F",
    "#FF69B4",
    "#00FFFF",
  ];

  const shapes: Array<"circle" | "star" | "diamond"> = [
    "circle",
    "star",
    "diamond",
  ];

  const createParticle = (
    x: number,
    y: number,
    force: number = 1
  ): Particle => {
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    return {
      id: Date.now() + Math.random(),
      x,
      y,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 12 + 6,
      speedX: (Math.random() - 0.5) * 12 * force,
      speedY: (Math.random() - 0.5) * 12 * force,
      lifetime: 1,
      rotation: Math.random() * 360,
      shape,
    };
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const newPosition = { x: event.clientX, y: event.clientY };
      const dx = newPosition.x - lastPositionRef.current.x;
      const dy = newPosition.y - lastPositionRef.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);
      const force = Math.min(speed / 20, 2);

      setPosition(newPosition);
      createMultipleParticles(event.clientX, event.clientY, force);
      lastPositionRef.current = newPosition;
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => {
      setIsClicking(false);
      burstParticles(position.x, position.y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [position]);

  const createMultipleParticles = (x: number, y: number, force: number) => {
    const newParticles = Array.from({ length: 2 }, () =>
      createParticle(x, y, force)
    );
    setParticles((prev) => [...prev.slice(-particleCount), ...newParticles]);
  };

  const burstParticles = (x: number, y: number) => {
    const burstCount = 12;
    const burstParticles = Array.from({ length: burstCount }, () =>
      createParticle(x, y, 2)
    );
    setParticles((prev) => [...prev.slice(-particleCount), ...burstParticles]);
  };

  useEffect(() => {
    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.speedX,
            y: particle.y + particle.speedY,
            speedX: particle.speedX * 0.98,
            speedY: particle.speedY * 0.98,
            rotation: particle.rotation + particle.speedX * 2,
            lifetime: particle.lifetime - 0.02,
          }))
          .filter((particle) => particle.lifetime > 0)
      );
    };

    const intervalId = setInterval(animateParticles, 16);
    return () => clearInterval(intervalId);
  }, []);

  const renderParticleShape = (particle: Particle) => {
    switch (particle.shape) {
      case "star":
        return (
          <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              transform: `rotate(${particle.rotation}deg)`,
            }}
          >
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-current"
                style={{
                  width: "2px",
                  height: "100%",
                  left: "50%",
                  top: "0",
                  transform: `translateX(-50%) rotate(${i * 72}deg)`,
                  transformOrigin: "50% 50%",
                }}
              />
            ))}
          </div>
        );
      case "diamond":
        return (
          <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              transform: `rotate(${particle.rotation}deg)`,
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            }}
          />
        );
      default:
        return (
          <div
            className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        );
    }
  };

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div
          className={`relative transition-transform duration-300 ${
            isClicking ? "scale-75" : "scale-100"
          }`}
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute border-2 border-white rounded-full opacity-60"
              style={{
                width: `${32 + i * 16}px`,
                height: `${32 + i * 16}px`,
                left: `-${24 + i * 6}px`,
                top: `-${24 + i * 6}px`,
                animation: `spin-slow ${3 + i}s linear infinite ${
                  i % 2 ? "reverse" : ""
                }`,
              }}
            />
          ))}

          <div className="absolute -left-2 -top-2 w-4 h-4 bg-white rounded-full animate-pulse" />
        </div>
      </div>

      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed top-0 left-0 pointer-events-none"
          style={{
            transform: `translate3d(${particle.x}px, ${particle.y}px, 0)`,
            color: particle.color,
            backgroundColor: particle.color,
            opacity: particle.lifetime,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            filter: "brightness(1.5)",
          }}
        >
          {renderParticleShape(particle)}
        </div>
      ))}

      {/* Magical trail */}
      {colors.map((color, i) => (
        <div
          key={color}
          className="fixed top-0 left-0 pointer-events-none blur-sm"
          style={{
            transform: `translate3d(${position.x}px, ${
              position.y
            }px, 0) scale(${1 - i * 0.1})`,
            width: "16px",
            height: "16px",
            backgroundColor: color,
            opacity: 0.3,
            borderRadius: "50%",
            transition: "all 0.3s ease-out",
            transitionDelay: `${i * 0.05}s`,
          }}
        />
      ))}

      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 3s linear infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.8;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </>
  );
};

export default MagicCursor;
