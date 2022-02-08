import * as THREE from "three";
import React, { useRef } from "react";

function SppotLight(props: JSX.IntrinsicElements["mesh"]) {
  const mesh = useRef<THREE.Mesh>(null!);
  // const color = 'white';
  // const intensity = 2;
  // const angle = 0.3;
  const light = new THREE.SpotLight();
  // light.target.lookAt(new THREE.Vector3(-800, 0, 0))
  // light.target.updateMatrixWorld()

  return (
    <mesh {...props} ref={mesh} position={[800, 420, -300]}>
      <light />
    </mesh>
  );
}

export default SppotLight;

// TODO target light 설정
// NOTE R TARGET POINT
// NOTE L TARGET POINT

// TODO Position 설정
// NOTE R POINT position={[600, 420, -300]}
// NOTE L POINT position={[-800, 420, -300]}
