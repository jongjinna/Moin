import * as THREE from "three";
import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import {
  Circle,
  Stars,
} from "@react-three/drei";
import grasslight from "../imgs/grasslight.jpg";

function BACKGROUND(props: JSX.IntrinsicElements["mesh"]) {
  const mesh = useRef<THREE.Mesh>(null!);
  const groundTexture = useLoader(THREE.TextureLoader, grasslight);
  groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
  groundTexture.repeat.set(20, 20);
  groundTexture.anisotropy = 16;
  groundTexture.encoding = THREE.sRGBEncoding;

  return (
    <group>
      <Stars
        radius={2000}
        depth={50}
        count={5000}
        factor={5}
        saturation={5}
        fade
      />
      <mesh receiveShadow={true}>
        <Circle
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -100, 0]}
          args={[10000, 10000]}
        >
          <meshStandardMaterial
            attach="material"
            color="white"
            map={groundTexture}
            metalness={0.2}
          />
        </Circle>
      </mesh>
    </group>
  );
}

export default BACKGROUND;
