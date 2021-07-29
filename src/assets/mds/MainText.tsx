import * as THREE from "three";
import React, { Suspense, useMemo, useRef, FC } from "react";
import helvetiker_bold from "../fonts/helvetiker_bold.typeface.json";
// import Jockerman from '../fonts/Jokerman.json'

// NOTE 글자 색 수정
// NOTE Jockerman 삭제

interface Props {
  children: string;
  vAlign: string;
  hAlign: string;
  size: number;
  color: string;
}

const Text: FC<Props> = ({
  children,
  vAlign = "center",
  hAlign = "center",
  size = 1.5,
  color = "#ffffff",
  ...props
}) => {
  const font = new THREE.FontLoader().parse(helvetiker_bold);
  // const font = new THREE.FontLoader().parse(Jockerman);
  const config = useMemo(
    () => ({
      font,
      size: 25,
      height: 20,
      curveSegments: 16,
      bevelEnabled: true,
      bevelThickness: 2,
      bevelSize: 0.8,
      bevelOffset: 0,
      bevelSegments: 2,
    }),
    [font]
  );
  const mesh = useRef<THREE.Mesh>();

  return (
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <mesh ref={mesh}>
        <Suspense fallback={null}>
          <textGeometry args={[children, config]} />
          <meshToonMaterial color={"#0082ff"}/>
        </Suspense>
      </mesh>
    </group>
  );
};

const MainText = (props: JSX.IntrinsicElements["mesh"]) => {
  const ref = useRef<THREE.Mesh>(null!);

  return (
    <group>
      <mesh ref={ref} position={[-3.5, 2, 65]} layers={0}>
        <Text
          children="MOIN"
          vAlign="center"
          hAlign="center"
          size={1}
          color="#0082ff"
        />
      </mesh>
      <mesh ref={ref} position={[-7, -2, 65]} layers={0}>
        <Text
          children="SEMINAR"
          vAlign="center"
          hAlign="center"
          size={1}
          color="#00dba7"
        />
    </mesh>
  </group>
  );
};
export default MainText;
