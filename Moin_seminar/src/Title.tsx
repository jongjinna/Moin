import * as THREE from 'three'
import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import CameraControls from "./assets/mds/Controler";
import Texts from "./assets/mds/Texts";
import BACKGROUND from "./assets/mds/Background";
import StreetLampR from "./assets/mds/StreetLampR";
import StreetLampL from "./assets/mds/StreetLampL";
import LightPoint from "./assets/mds/LightPoint";

const Container = styled.div`
  background-color: black;
`;

// Main
const Title = () => {
  return (
    <Container>
      <Canvas
        shadows
        dpr={[0, 1]}
        style={{ width: "100vw", height: "100vh" }}
        camera={{ fov: 75, near: 1, far: 5000, position: [-30, 0, 30] }}
      >
        <CameraControls />
        <ambientLight color={"#606060"} />
        <spotLight
          position={[600, 420, -300]}
          intensity={2}
          angle={0.3}
          color={"red"}
          // onUpdate={(self) => {
          //   self.target.lookAt(new THREE.Vector3(-1000, -100, 0));
          //   self.target.updateMatrix();
          // }}
        />
        <spotLight
          position={[-800, 420, -300]}
          intensity={2}
          angle={0.3}
          color={"blue"}
          // onUpdate={(self) => {
          //   self.target.lookAt(new THREE.Vector3(-1000, -100, 0));
          //   self.target.updateMatrix();
          // }}

        />
        <Suspense fallback={null}>
          <BACKGROUND />
          <Texts />
          <StreetLampR />
          <StreetLampL />
          <LightPoint />
        </Suspense>
      </Canvas>
    </Container>
  );
};

export default Title;

// NOTE <ambientLight color={'#606060'}/>
