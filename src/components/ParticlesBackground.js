import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = (props) => {
  const [, setInit] = useState(false);
  
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: "rgba(0, 0, 0, 0)"
        },
        opacity: 0
      },
      fullScreen: {
        enable: true,
        zIndex: 0
      },
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: {
            enable: true,
            mode: "push"
          },
          onHover: {
            enable: true,
            mode: "repulse",
            parallax: {
              enable: true,
              force: 60,
              smooth: 10
            }
          },
          resize: true
        },
        modes: {
          push: {
            quantity: 4
          },
          repulse: {
            distance: 200,
            duration: 0.4,
            speed: 1
          }
        }
      },
      particles: {
        color: {
          value: ["#FBBF24", "#FCD34D", "#FBBF24"],
          animation: {
            h: {
              enable: true,
              speed: 20
            }
          }
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce"
          },
          random: false,
          speed: 3,
          straight: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200
          }
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 80
        },
        opacity: {
          value: 0.7,
          random: true,
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.1,
            sync: false
          }
        },
        shape: {
          type: ["circle", "star"]
        },
        size: {
          value: { min: 3, max: 8 },
          animation: {
            enable: true,
            speed: 4,
            minimumValue: 0.1,
            sync: false
          }
        },
        links: {
          color: "#FBBF24",
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
          triangles: {
            enable: true,
            opacity: 0.1
          }
        },
        wobble: {
          distance: 30,
          enable: true,
          speed: {
            angle: 5,
            move: 5
          }
        },
        life: {
          duration: {
            sync: false,
            value: 3
          },
          count: 0,
          delay: {
            random: {
              enable: true,
              minimumValue: 0.5
            },
            value: 1
          }
        }
      },
      detectRetina: true,
      motion: {
        disable: false,
        reduce: {
          factor: 4,
          value: true
        }
      }
    }),
    []
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesBackground;