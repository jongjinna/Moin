import * as THREE from 'three'
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const Shape = (props: JSX.IntrinsicElements['mesh']) => {
  const mesh = useRef<THREE.Mesh>(null!)
  useFrame((state, delta) => {
    mesh.current.rotation.x += 0.02;
    mesh.current.rotation.y += 0.02;
  }
    )
  return (
    <mesh
      {...props}
      ref={mesh}>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  )
}

const BoxShape = () => {
  return (
    <div>
      <Canvas camera={{ fov: 75, aspect: window.innerWidth / window.innerHeight, near: 0.1, far: 1000, position: [0, 0, 5] }}>
        <ambientLight />
        <Shape />
      </Canvas>
    </div>
  )
};

export default BoxShape
