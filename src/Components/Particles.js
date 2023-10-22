import React, { useState, useEffect } from 'react';
import Typed from 'typed.js';
import "../Style.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import image1 from "../Assets/Amarjeet1.png";
import About from './About';

export default function ParticlesBackground() {

    useEffect(() => {
        // Configuration for the Typed instance
        const options = {
          strings: ["Software Developer", "Competitive programmer", "Web Developer", "Content writer"],
          typeSpeed: 100,
          backSpeed: 150,
          loop: true,
        };
    
        // Target the element with the "typing" class
        const targetElement = document.querySelector(".typing");
    
        if (targetElement) {
          // Create a new Typed instance
          const typed = new Typed(targetElement, options);
    
          // Cleanup on unmount
          return () => {
            typed.destroy();
          };
        }
      }, []);

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };



  return (
    <div className="App">

    <div className="profile-container">
      <div className="profile-info">
        <h1 className="position">Hi, I'm</h1>
        <h1 className="name">Amarjeet Kumar Singh</h1>
        <h1 className="position">and I'm a <span class="typing"></span></h1>
      </div>
      <div className="profile-image">
        <img src={image1} alt="Your Profile" />
      </div>
    </div>

    <div className="particle-container">
    <Particles
      id="tsparticles"
      init={particlesInit}

      options={{
        "fullScreen": {
            "enable": true,
            "zIndex": -1
        },
        "detectRetina": true,
        "fpsLimit": 120,
        "interactivity": {
            "events": {
                "onClick": {
                    "enable": true,
                    "mode": "push"
                },
                "onDiv": {
                    "elementId": "repulse-div",
                    "enable": false,
                    "mode": "repulse"
                },
                "onHover": {
                    "enable": true,
                    "mode": "connect",
                    "parallax": {
                        "enable": false,
                        "force": 60,
                        "smooth": 10
                    }
                },
                "resize": true
            },
            "modes": {
                "bubble": {
                    "distance": 400,
                    "duration": 2,
                    "opacity": 0.8,
                    "size": 40,
                    "speed": 3
                },
                "connect": {
                    "distance": 80,
                    "lineLinked": {
                        "opacity": 0.5
                    },
                    "radius": 60
                },
                "grab": {
                    "distance": 400,
                    "lineLinked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "quantity": 4
                },
                "remove": {
                    "quantity": 2
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                }
            }
        },
        "particles": {
            "color": {
                "value": "random"
            },
            "lineLinked": {
                "blink": false,
                "color": "#ffffff",
                "consent": false,
                "distance": 150,
                "enable": false,
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "attract": {
                    "enable": false,
                    "rotate": {
                        "x": 600,
                        "y": 1200
                    }
                },
                "bounce": false,
                "direction": "none",
                "enable": true,
                "outMode": "out",
                "random": false,
                "speed": 6,
                "straight": false
            },
            "number": {
                "density": {
                    "enable": true,
                    "area": 800
                },
                "limit": 500,
                "value": 300
            },
            "opacity": {
                "animation": {
                    "enable": false,
                    "minimumValue": 0.1,
                    "speed": 1,
                    "sync": false
                },
                "random": false,
                "value": 0.5
            },
            "shape": {
                "type": "circle"
            },
            "size": {
                "animation": {
                    "enable": false,
                    "minimumValue": 0.1,
                    "speed": 40,
                    "sync": false
                },
                "random": true,
                "value": 5
            }
        },
        "polygon": {
            "draw": {
                "enable": false,
                "lineColor": "#ffffff",
                "lineWidth": 0.5
            },
            "move": {
                "radius": 10
            },
            "scale": 1,
            "type": "none",
            "url": ""
        },
        "background": {
            "color": "#ffffff",
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
        }
    }}
    />
    </div>
    <About />
    </div>
  );
}