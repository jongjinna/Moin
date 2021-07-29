import * as THREE from 'three'
import React, { Suspense, useRef, useState } from 'react'
import styled from 'styled-components'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import texture_1 from '../imgs/dice1.jpeg'
import texture_2 from '../imgs/dice2.jpeg'
import texture_3 from '../imgs/dice3.jpeg'
import texture_4 from '../imgs/dice4.jpeg'
import texture_5 from '../imgs/dice5.jpeg'
import texture_6 from '../imgs/dice6.jpeg'

const Container = styled.div`
  background-color: black;
`;

function Shape(props: JSX.IntrinsicElements['mesh']) {
  const mesh = useRef<THREE.Mesh>(null!)
  const [active, setActive] = useState(false)
  const [Dice_1, Dice_2, Dice_3, Dice_4, Dice_5, Dice_6] = useLoader(THREE.TextureLoader, [texture_1, texture_2, texture_3, texture_4, texture_5, texture_6])
  // useFrame(({ clock }) => (mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z = Math.cos(clock.getElapsedTime() / 8) * Math.PI))
  useFrame((state, delta) => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.z += 0.01;
  }
  )
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 2 : 1}
      onClick={(event) => setActive(!active)}>
      <boxBufferGeometry attach="geometry" args={[200, 200, 200]} />
      {/* <meshStandardMaterial color={'orange'} /> */}
      <meshStandardMaterial map={Dice_1} attachArray="material" />
      <meshStandardMaterial map={Dice_2} attachArray="material" />
      <meshStandardMaterial map={Dice_3} attachArray="material" />
      <meshStandardMaterial map={Dice_4} attachArray="material" />
      <meshStandardMaterial map={Dice_5} attachArray="material" />
      <meshStandardMaterial map={Dice_6} attachArray="material" />
    </mesh>
  )
}

const DICE = () => {
  return (
    <Container>
      <Canvas style={{ height: '100vh', width: '100vw' }} camera={{ position: [400, 400, 400] }}>
          {/* <ambientLight /> */}
          <pointLight position={[400, 400, 400]} />
          <Suspense fallback={null}>
            <Shape position={[0, 0, 0]} />
          </Suspense>
      </Canvas>
    </Container>
  )
};

export default DICE