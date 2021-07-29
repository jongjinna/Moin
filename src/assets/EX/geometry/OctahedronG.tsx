import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { Canvas, useFrame } from '@react-three/fiber'

const Container = styled.div`
  background-color: black;
`;

function Cone(props: JSX.IntrinsicElements['mesh']) {
  const mesh = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => {
    mesh.current.rotation.x += 0.02;
    mesh.current.rotation.y += 0.02;
    mesh.current.rotation.z += 0.02;
  }
  )
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 2 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <octahedronGeometry args={[ 1, 0 ]}/>
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const OctahedronG = () => {
  return (
    <Container>
      <Canvas>
        {/* <ambientLight /> */}
        <pointLight position={[10, 10, 10]} />
        <Cone position={[0, 0, 0]} />
      </Canvas>
    </Container>
  )
};

export default OctahedronG
