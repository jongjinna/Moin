import * as THREE from "three";
import React, { useRef, useState } from "react";

function LightPoint(props: JSX.IntrinsicElements["mesh"]) {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      position={[0,0,0]}
    >
      <boxGeometry args={[10, 10, 10]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

export default LightPoint;

// TODO 도형을 비모양으로 바꾸기
// TODO 여러개 복제하기
// TODO 내려가는 효과 주기
// NOTE R POINT position={[600, 420, -300]}
// NOTE L POINT position={[-800, 420, -300]}
