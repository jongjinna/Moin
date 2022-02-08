import React, { Suspense, useRef, useState } from 'react'
import styled from 'styled-components'
import * as THREE from 'three'
import {
  Canvas,
  useFrame,
  extend,
  useThree,
  ReactThreeFiber,
  useLoader
} from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import earthImg from '../assets/imgs/earth.jpg'
import bumpImg from '../assets/imgs/bump.jpg'

extend({ OrbitControls })

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>
    }
  }
}

const Container = styled.div`
  background-color: black;
`;

function Sphere(props: JSX.IntrinsicElements['mesh']) {
  const mesh = useRef<THREE.Mesh>(null!)
  const [active, setActive] = useState(false)
  const [texture, bump] = useLoader(THREE.TextureLoader, [earthImg, bumpImg])
  useFrame((state, delta) => {
    // mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
    // mesh.current.rotation.z += 0.01;
  })
  
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 2 : 1}
      onClick={(event) => setActive(!active)}>
      <sphereGeometry attach="geometry" args={[ 2, 64, 64 ]} />
      <meshStandardMaterial attach="material" map={texture} bumpMap={bump} bumpScale={0.05} />
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

const Exspinsphere = () => {
  return (
    <Container>
      <Canvas style={{ width: '100vw', height: '100vh'}} camera={{ position: [10, 10, 10] }}>
        <CameraControls />
        {/* <ambientLight />  */}
        <spotLight position={[10, 0, 10]} />  {/* 빛 들어오는 방향 */}
        <Suspense fallback={null}>
          <Sphere />
        </Suspense>
      </Canvas>
    </Container>
  )
};

export default Exspinsphere
