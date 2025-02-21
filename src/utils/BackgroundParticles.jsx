/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const BackgroundParticles = () => {
    const [init, setInit] = useState(false);
    useEffect(() => {
      initParticlesEngine(async (engine) => {
        await loadFull(engine);
      }).then(() => {
        setInit(true);
      });
    }, []);
  
    const particlesLoaded = (container) => {
    };
  
    return (
      <>
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            style={{
              zIndex: -1,
            }}
            options={{
              background: {
                color: {
                  value: "transparent",
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 2,
                  },
                  repulse: {
                    distance: 100,
                    duration: 0.2,
                  },
                },
              },
              particles: {
                color: {
                  value: "#05b2fc",
                },
                links: {
                  color: "#05b2fc", 
                  distance: 150,
                  enable: true,
                  opacity: 1,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: true,
                  speed: 1.5,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 1400,
                  },
                  value: 200,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        )}
      </>
    );
};

export default BackgroundParticles;
