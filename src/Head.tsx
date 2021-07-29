// import * as THREE from 'three'
import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import Cloud from "./assets/mds/Cloudmodel";
import MainText from "./assets/mds/MainText";

// import RAIN from './assets/mds/Rain'

const Container = styled.div`
  background: linear-gradient(#ffffff, #defdff);
`;

// Main
const Head = () => {
  return (
    <Container>
      <Canvas
        style={{ width: "100vw", height: "100vh" }}
        camera={{ fov: 75, near: 1, far: 5000, position: [0, 0, 100] }}
      >
        <ambientLight />
        <Suspense fallback={null}>
          <Cloud />
          <MainText />
        </Suspense>
      </Canvas>
    </Container>
  );
};

export default Head;
