import * as THREE from 'three'
import React, { useRef } from 'react'
import styled from 'styled-components'
import { Canvas, useFrame, useThree } from '@react-three/fiber'

const Container = styled.div`
  background-color: white;
`;

function Box(props: JSX.IntrinsicElements['mesh']) {
  const mesh = useRef<THREE.Mesh>(null!)
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
      scale={2}
      onClick={e => console.log('click')}
      onWheel={e => console.log('wheel spins')}
      onPointerUp={e => console.log('up')}
      onPointerDown={e => console.log('down')}
      onPointerOver={e => console.log('hover')}
      onPointerOut={e => console.log('unhover')}
      onPointerMove={e => console.log('move')}
      onUpdate={self => console.log('props have been updated')}
      geometry={new THREE.BoxGeometry(1,1,1)}
      material={new THREE.MeshStandardMaterial({color:'orange'})} />
  )
}

const AHDLS = () => {
  return (
    <Container>
      <Canvas>
        <ambientLight />  {/* 기본 라이트인듯? */}
        <pointLight position={[10, 10, 10]} />  {/* 빛 들어오는 방향 */}
        <Box position={[0, 0, 0]} />
      </Canvas>
    </Container>
  )
};

export default AHDLS
