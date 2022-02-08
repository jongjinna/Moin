import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import StreetLampGlb from "../../StreetLamp.glb";

type GLTFResult = GLTF & {
  nodes: {
    Sphere: THREE.Mesh;
    Sphere_1: THREE.Mesh;
    Sphere_2: THREE.Mesh;
    Torus001: THREE.Mesh;
    Pole: THREE.Mesh;
    Plane: THREE.Mesh;
  };
  materials: {
    Glass: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
  };
};

const Model = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF(StreetLampGlb) as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[7.26, 13.32, 0]}
        rotation={[0, 0, -0.1]}
        scale={[1.47, 0.51, 1]}
      >
        <mesh
          geometry={nodes.Sphere_1.geometry}
          material={nodes.Sphere_1.material}
        />
        <mesh geometry={nodes.Sphere_2.geometry} material={materials.Glass} />
      </group>
      <mesh
        geometry={nodes.Pole.geometry}
        material={materials["Material.002"]}
        position={[0, 6.9, 0]}
        scale={[0.37, 6.94, 0.37]}
      />
      <mesh
        geometry={nodes.Torus001.geometry}
        material={nodes.Torus001.material}
        position={[3.79, 12.55, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1, 0.45, 0.3]}
      />
      <mesh
        geometry={nodes.Sphere.geometry}
        material={nodes.Sphere.material}
        position={[0, 14.08, 0]}
        scale={0.41}
      />
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials["Material.001"]}
        scale={16.9}
      />
    </group>
  );
};

const StreetLampL = (props: JSX.IntrinsicElements["mesh"]) => {
  const mesh = useRef<THREE.Mesh>(null!);
  return (
    <mesh
      ref={mesh}
      scale={40}
      rotation={[0, -Math.PI / 4, 0]}
      position={[-1000, -101, -500]}
    >
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </mesh>
  );
};

export default StreetLampL;
