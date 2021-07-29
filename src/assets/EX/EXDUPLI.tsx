import * as THREE from 'three'
import React, { useRef } from 'react'
import styled from 'styled-components'
import { Canvas, useFrame } from '@react-three/fiber'

const Container = styled.div`
  background-color: black;
`;

const amount = parseInt( window.location.search.substr( 1 ) ) || 10;

const Box = (props: JSX.IntrinsicElements['mesh']) => {
  const mesh = useRef<THREE.InstancedMesh>(null!)
  useFrame(({ clock }) => ((
    mesh.current.rotation.y = Math.sin(clock.getElapsedTime() / 2) * Math.PI,
    mesh.current.rotation.z = Math.sin(clock.getElapsedTime() / 4) * Math.PI))
  )


  return (
    <group ref={mesh}>
      <mesh
        {...props}
        ref={mesh}
        scale={1}>
        <boxGeometry args={[ 0.5, 0.5, 0.5 ]} />
        <meshNormalMaterial />
      </mesh>
    </group>
  )
}


// const Summ = (props: JSX.IntrinsicElements['mesh']) => {
//   const dummy = useRef<THREE.Object3D>(null!)
//   let i = 0;
// 	const offset = ( amount - 1 ) / 2;
//   for ( let x = 0; x < amount; x ++ ) {
//     for ( let y = 0; y < amount; y ++ ) {
//       for ( let z = 0; z < amount; z ++ ) {
//         <mesh
//         {...props}
//         ref={dummy}
//         position={[ offset - x, offset - y, offset - z ]}>
//         <Box />
//         <meshNormalMaterial />
//         </mesh>
        

//       }
//     }
//   }
//   return (
//     <mesh
//         {...props}
//         ref={dummy}
//         scale={1}>
//     </mesh>
//   )
// }


const Exdupli = () => {
  return (
    <Container>
      <Canvas style={{ width: '100vw', height: '100vh'}} camera={{position:[amount*0.9,amount*0.9,amount*0.9]}}> 
        <ambientLight />
        <group>
          <Box position={[0,0,0]}/>
        </group>
      </Canvas>
    </Container>
  )
};

export default Exdupli
