'use client';
import React, { useEffect, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls, ScrollControls, useScroll} from '@react-three/drei';
import { GUI } from 'dat.gui'

export default function index() {
  const iPhone = useLoader(GLTFLoader, '/3d-models/iPhone_14_Pro_Max.glb');
  const container = useRef(null);
  
  useEffect(() => {
    const gui = new GUI()
    /* gui.add(mesh.current.rotation, 'x', 0, Math.PI * 2)
    gui.add(mesh.current.rotation, 'y', 0, Math.PI * 2)
    gui.add(mesh.current.rotation, 'z', 0, Math.PI * 2) */

    return () => {
      gui.destroy()
    }
  }, [])

  return (
    <div ref={container} className="h-screen w-screen overflow-visible">
        {/* <div className={styles.cube}> */}
            <Canvas>
              <ScrollControls pages={5} damping={0.1}>
                <OrbitControls enableZoom={false} enablePan={false}/>
                <ambientLight intensity={2}/>
                {/* <pointLight position={[2, 3, 4]} /> */}
                <directionalLight position={[2, 1, 1]}/>
                {/* <Cube /> */}
                <primitive object={iPhone.scene} />
              </ScrollControls>
            </Canvas>
        {/* </div> */}
    </div>
  )
}

/* function Cube({}) {

  const mesh = useRef(null);
  const data = useScroll();

  useFrame((state, delta) => {
    //mesh.current.rotation.x = mesh.current.rotation.y += 0.005;
    const { offset } = data;
    mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z = offset * 5;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
} */









