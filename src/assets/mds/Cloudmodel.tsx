import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import Cloud_1 from "../../Cloud_1.glb";
import Cloud_2 from "../../Cloud_2.glb";
import Cloud_3 from "../../Cloud_3.glb";
import Cloud_4 from "../../Cloud_4.glb";

type GLTFResult = GLTF & {
  nodes: {
    Cloud_1: THREE.Mesh;
    Cloud_2: THREE.Mesh;
    Cloud_3: THREE.Mesh;
    Cloud_4: THREE.Mesh;
  };
};

const Cloudtype = ['#fc5151','#86ff68','#fcff49','#39f8ff','#ff3cef'];

const Model1 = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group>(null);
  const { nodes } = useGLTF(Cloud_1) as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <Suspense fallback={null}>
        {Cloudtype.map((color,index) => {
          const randomX = Math.random() * 140 - 70;
          const randomY = Math.random() * 45 - 15;
          const randomZ = Math.random() * 140 - 70;
          return (
            <mesh
              key={index}
              geometry={nodes.Cloud_1.geometry}
              material={new THREE.MeshStandardMaterial({color: color})}
              scale={5.39}
              position={[randomX, randomY, randomZ]}
            />  
          );
      })}
      </Suspense>
    </group>
  );
};

const Model2 = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group>();
  const { nodes } = useGLTF(Cloud_2) as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <Suspense fallback={null}>
        {Cloudtype.map((color,index) => {
          const randomX = Math.random() * 140 - 70;
          const randomY = Math.random() * 45 - 15;
          const randomZ = Math.random() * 140 - 70;
          return (
            <mesh
              key={index}
              geometry={nodes.Cloud_2.geometry}
              material={new THREE.MeshStandardMaterial({color: color})}
              scale={2.87}
              position={[randomX, randomY, randomZ]}
            />  
          );
      })}
      </Suspense>
    </group>
  );
};

const Model3 = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group>();
  const { nodes } = useGLTF(Cloud_3) as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <Suspense fallback={null}>
        {Cloudtype.map((color,index) => {
          const randomX = Math.random() * 140 - 70;
          const randomY = Math.random() * 45 - 15;
          const randomZ = Math.random() * 140 - 70;
          return (
            <mesh
              key={index}
              geometry={nodes.Cloud_3.geometry}
              material={new THREE.MeshStandardMaterial({color: color})}
              scale={2.87}
              position={[randomX, randomY, randomZ]}
            />  
          );
      })}
      </Suspense>
    </group>
  );
};

const Model4 = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group>();
  const { nodes } = useGLTF(Cloud_4) as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <Suspense fallback={null}>
        {Cloudtype.map((color,index) => {
          const randomX = Math.random() * 140 - 70;
          const randomY = Math.random() * 45 - 15;
          const randomZ = Math.random() * 140 - 70;
          return (
            <mesh
              key={index}
              geometry={nodes.Cloud_4.geometry}
              material={new THREE.MeshStandardMaterial({color: color})}
              scale={3.22}
              position={[randomX, randomY, randomZ]}
            />  
          );
      })}
      </Suspense>
    </group>
  );
};

const Cloud = (props: JSX.IntrinsicElements["mesh"]) => {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => {
    mesh.current.rotation.y += 0.01;
  })

  return (
    <mesh ref={mesh}>
      <directionalLight />
      <Model1 />
      <Model2 />
      <Model3 />
      <Model4 />
    </mesh>
  )
};

export default Cloud;

// NOTE 범위는 X축 -60,60 Y축 -10,25 Z축 -60,60