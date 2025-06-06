'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'

const HomePage = () => {
  return (
    <Canvas>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhongMaterial />
      </mesh>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} color="red" />
    </Canvas>
  )
}

export default HomePage
