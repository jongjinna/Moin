import * as THREE from "three";
import React, { Suspense, useMemo, useRef, FC } from "react";
import helvetiker_bold from "../fonts/helvetiker_bold.typeface.json";

interface Props {
  children: string;
  vAlign: string;
  hAlign: string;
  size: number;
  color: string;
}

const Text: FC<Props> = ({
  children = 'HELLO',
  vAlign = "center",
  hAlign = "center",
  size = 1.5,
  color = "#ffffff",
  ...props
}) => {
  const font = new THREE.FontLoader().parse(helvetiker_bold);
  const config = useMemo(
    () => ({
      font,
      size: 500,
      height: 400,
      curveSegments: 320,
      bevelEnabled: true,
      bevelThickness: 6,
      bevelSize: 2.5,
      bevelOffset: 0,
      bevelSegments: 8,
    }),
    [font]
  );
  const mesh = useRef<THREE.Mesh>();

  return (
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <mesh ref={mesh}>
        <Suspense fallback={null}>
          <textGeometry args={[children, config]} />
          <meshStandardMaterial color={"white"} />
        </Suspense>
      </mesh>
    </group>
  );
};

const Texts = (props: JSX.IntrinsicElements["mesh"]) => {
  const ref = useRef<THREE.Mesh>(null!);
  return (
    <group ref={ref}>
      <mesh ref={ref} position={[-800, 100, 0]} layers={0}>
        <Text
          children="HELLO !"
          vAlign="center"
          hAlign="center"
          size={1.5}
          color="#ffffff"
        />
      </mesh>
      <mesh ref={ref} position={[-800, 0, 0]} layers={0}>
        <Text
          children="NICE TO"
          vAlign="center"
          hAlign="center"
          size={1.5}
          color="#ffffff"
        />
      </mesh>
      <mesh ref={ref} position={[-800, -100, 0]} layers={0}>
        <Text
          children="MEET YOU"
          vAlign="center"
          hAlign="center"
          size={1.5}
          color="#ffffff"
        />
      </mesh>
      <mesh ref={ref} position={[250, 100, 0]} layers={0}>
        <Text
          children="REACT"
          vAlign="center"
          hAlign="center"
          size={1.5}
          color="#ffffff"
        />
      </mesh>
      <mesh ref={ref} position={[250, 0, 0]} layers={0}>
        <Text
          children="THREEJS"
          vAlign="center"
          hAlign="center"
          size={1.5}
          color="#ffffff"
        />
      </mesh>
      <mesh ref={ref} position={[250, -100, 0]} layers={0}>
        <Text
          children="JONGJIN"
          vAlign="center"
          hAlign="center"
          size={1.5}
          color="#ffffff"
        />
      </mesh>
    </group>
  );
};
export default Texts;
