// import * as THREE from 'three'
import React, { Suspense} from 'react'
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import Earth from "./assets/mds/earth";


const Container = styled.div`
  background: linear-gradient(#defdff, #002152, #030003);
`;

// Main
const Connect = () => {
  return (
    <Container>
      <Canvas
        shadows
        dpr={[0, 1]}
        style={{ width: "100vw", height: "100vh" }}
        camera={{ fov: 75, near: 1, far: 5000, position: [0, 0, 100] }}
      >
        <ambientLight />
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </Container>
  );
};

export default Connect;

//  camera={{ fov: 75, near: 1, far: 5000, position: [0, 0, 100] }}