import * as THREE from "three";
import React, { useRef } from "react";
import {
  useFrame,
  extend,
  useThree,
  ReactThreeFiber,
} from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// import RAIN from './assets/mds/Rain'

extend({ OrbitControls });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<
        OrbitControls,
        typeof OrbitControls
      >;
    }
  }
}

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef<THREE.CameraHelper>(null!);

  useFrame((state) => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minDistance={1000}
      maxDistance={5000}
    />
  );
};

export default CameraControls;
