import React, { useEffect, useRef, useState } from "react";
import { Fireworks } from "fireworks-js";
import fireworksMP3 from "./assets/fireworks.mp3";

const FireworksEffect = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (ref.current && show) {
      const fireworks = new Fireworks(ref.current, {
        speed: 2,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 100,
        traceLength: 3,
        traceSpeed: 10,
        explosion: 5,
        intensity: 30,
        flickering: 50,
        opacity: 0.5,
        hue: { min: 0, max: 360 },
        delay: { min: 30, max: 60 },
      });

      fireworks.start();

      // 🎵 Phát âm thanh
      const audio = new Audio(fireworksMP3); // Đặt file firework.mp3 vào thư mục public
      audio.play();

      // Dừng sau 10 giây
      setTimeout(() => {
        fireworks.stop();
        setShow(false);
      }, 10000);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
    />
  );
};

export default FireworksEffect;
