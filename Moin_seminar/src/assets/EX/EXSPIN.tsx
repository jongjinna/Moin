import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import * as THREE from 'three'
import {
  Canvas,
  useFrame,
  extend,
  useThree,
  ReactThreeFiber,
} from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls })

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>
    }
  }
}

const Container = styled.div`
  background-color: white;
`;

function Box(props: JSX.IntrinsicElements['mesh']) {
  const mesh = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.z += 0.01;
  })
  
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 2 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshNormalMaterial color={hovered ? 'red' : 'orange'} />
    </mesh>
  )
}

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef<THREE.CameraHelper>(null!)

  useFrame((state) => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}
      maxAzimuthAngle={Math.PI}
      maxPolarAngle={Math.PI}
      minAzimuthAngle={-Math.PI}
      minPolarAngle={0} />
  )
};

const AHDLS = () => {
  return (
    <Container>
      <Canvas style={{ width: '100vw', height: '100vh'}}>
        <CameraControls />
        <ambientLight />  {/* 기본 라이트인듯? */}
        <pointLight position={[10, 10, 10]} />  {/* 빛 들어오는 방향 */}
        <Box position={[0, 0, 0]} />
      </Canvas>
    </Container>
  )
};

export default AHDLS
