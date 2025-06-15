import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { vertexShader, fragmentShader } from './distortionShader';

const DistortionMesh = ({ image }) => {
  const mesh = useRef();
  const texture = useLoader(THREE.TextureLoader, image);
  const [mouse, setMouse] = useState([0.5, 0.5]);
  const { size, viewport } = useThree();

  const uniforms = useRef({
    uTexture: { value: texture },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uTime: { value: 0 },
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / size.width;
      const y = 1 - e.clientY / size.height;
      uniforms.current.uMouse.value.set(x, y);
      setMouse([x, y]);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [size]);

  useFrame(({ clock }) => {
    uniforms.current.uTime.value = clock.getElapsedTime();
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[viewport.width, viewport.height, 32, 32]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms.current}
      />
    </mesh>
  );
};

const ImageDistortion = ({ image }) => {
  return (
    <div className="relative w-full h-full">
      <Canvas className="absolute top-0 left-0 w-full h-full">
        <DistortionMesh image={image} />
      </Canvas>
    </div>
  );
};

export default ImageDistortion;