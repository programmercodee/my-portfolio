import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BackgroundAnimation = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const particlesRef = useRef([]);
  const rendererRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create particles with different colors
    const createParticles = () => {
      const colors = [
        0x4f46e5, // Indigo
        0x06b6d4, // Cyan
        0x8b5cf6, // Purple
        0xec4899, // Pink
        0xf59e0b, // Amber
      ];

      for (let i = 0; i < 50; i++) {
        const geometry = new THREE.SphereGeometry(0.1, 32, 32);
        const color = colors[Math.floor(Math.random() * colors.length)];
        const material = new THREE.MeshBasicMaterial({
          color: color,
          transparent: true,
          opacity: 0.6
        });

        const particle = new THREE.Mesh(geometry, material);

        // Random position
        particle.position.x = (Math.random() - 0.5) * 10;
        particle.position.y = (Math.random() - 0.5) * 10;
        particle.position.z = (Math.random() - 0.5) * 10;

        // Random scale
        const scale = Math.random() * 0.5 + 0.5;
        particle.scale.set(scale, scale, scale);

        scene.add(particle);
        particlesRef.current.push({
          mesh: particle,
          speed: Math.random() * 0.02 + 0.01,
          rotationSpeed: Math.random() * 0.02 + 0.01,
          color: color
        });
      }
    };

    createParticles();

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      particlesRef.current.forEach(particle => {
        particle.mesh.rotation.x += particle.rotationSpeed;
        particle.mesh.rotation.y += particle.rotationSpeed;

        // Move particles in a more complex pattern
        particle.mesh.position.x = Math.sin(time * particle.speed) * 5;
        particle.mesh.position.y = Math.cos(time * particle.speed) * 5;
        particle.mesh.position.z = Math.sin(time * particle.speed * 0.5) * 2;

        // Add color pulsing effect
        const pulse = Math.sin(time * 2 + particle.speed * 10) * 0.2 + 0.8;
        particle.mesh.material.opacity = 0.6 * pulse;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);

      // Remove all objects from the scene
      while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
      }

      // Dispose of geometries and materials
      particlesRef.current.forEach(particle => {
        particle.mesh.geometry.dispose();
        particle.mesh.material.dispose();
      });

      // Clear the particles array
      particlesRef.current = [];

      // Remove the renderer
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
};

export default BackgroundAnimation; 