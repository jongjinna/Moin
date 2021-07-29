import * as THREE from 'three'
import React, { useRef, useMemo } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import CameraControls from './Controler'
import earthImg from '../imgs/earth.jpg'
import bumpImg from '../imgs/bump.jpg'

const Earth = (props: JSX.IntrinsicElements['mesh']) => {
  const ref = useRef<THREE.Mesh>(null!)
  const [texture, bump] = useLoader(THREE.TextureLoader, [earthImg, bumpImg])
  useFrame(({ clock }) => (ref.current.rotation.y = Math.cos(clock.getElapsedTime() / 16) * Math.PI))
  
  //NOTE 여기는 곡선그리는거
  const start = new THREE.Vector3(-150,180,-195)
  const mid1 = new THREE.Vector3(-100, 450,-100)
  const mid2 = new THREE.Vector3(-40,450,200)
  const end = new THREE.Vector3(40,170,245)
  const spline = new THREE.CubicBezierCurve3(start, mid1, mid2, end);
  const points = spline.getPoints(32)
  const geo = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points])
  const materials = new THREE.LineBasicMaterial( { color: 'red' } );

  return (
    <group ref={ref} scale={1.5}>
      <mesh position={[0,0,0]}>
        <CameraControls />
        <sphereBufferGeometry attach="geometry" args={[300, 64, 64]} />
        <meshStandardMaterial attach="material" map={texture} bumpMap={bump} bumpScale={0.05} />
      </mesh>
      <mesh position={[-150,180,-195]}>
        <boxGeometry args={[5,5,5]}/>
        <meshNormalMaterial />
      </mesh>
      <mesh position={[40,170,245]}>
        <boxGeometry args={[5,5,5]}/>
        <meshNormalMaterial />
      </mesh>
      <mesh 
        geometry={geo}
        material={materials}
      />
    </group>
  )
}

export default Earth