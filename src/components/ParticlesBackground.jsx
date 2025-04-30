import React, { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Load particles.js script dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;

    script.onload = () => {
      // Wait for the DOM to be ready
      setTimeout(() => {
        if (window.particlesJS && containerRef.current) {
          window.particlesJS('particles-js', {
            particles: {
              number: { value: 80, density: { enable: true, value_area: 800 } },
              color: {
                value: ['#4f46e5', '#06b6d4', '#8b5cf6', '#ec4899', '#f59e0b']
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#000000'
                }
              },
              opacity: {
                value: 0.6,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: true,
                  speed: 2,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: '#4f46e5',
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                  enable: true,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse'
                },
                onclick: {
                  enable: true,
                  mode: 'push'
                },
                resize: true
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                }
              }
            },
            retina_detect: true
          });
        }
      }, 100);
    };

    document.body.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      id="particles-js"
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default ParticlesBackground; 