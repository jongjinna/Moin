import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import Balls from "../../Balls.gltf";

type GLTFResult = GLTF & {
  nodes: {
    Solid001_1: THREE.Mesh
    Solid001_2: THREE.Mesh
  }
  materials: {
    Bianco: THREE.MeshStandardMaterial
    ['Nero.001']: THREE.MeshStandardMaterial
  }
}

const Model = (props: JSX.IntrinsicElements['group']) => {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF(Balls) as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Solid001_1.geometry} material={ new THREE.MeshStandardMaterial({color:'white'}) } />
      <mesh geometry={nodes.Solid001_2.geometry} material={ new THREE.MeshStandardMaterial({color:'black'}) } />
    </group>
  )
}

const BALL = (props: JSX.IntrinsicElements["mesh"]) => {
  const mesh = useRef<THREE.Mesh>(null!);
  return (
    <mesh
      ref={mesh}
      scale={100}
      position={[0, 0, 0]}
    >
      
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </mesh>
  );
};

export default BALL;
