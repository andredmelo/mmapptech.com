'use client';
import React, { useEffect, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader, Mesh, RepeatWrapping, MeshStandardMaterial } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls, ScrollControls, useScroll} from '@react-three/drei';
import { GUI } from 'dat.gui'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";

export default function ThreeJSViewer() {
  const iPhone = useLoader(GLTFLoader, '/3d-models/iPhone_14_Pro_Max.glb');
  const texture_1 = useLoader(TextureLoader, "/3d-models/textures/iPhone_Front_Screen.jpg");
  const texture_2 = useLoader(TextureLoader, "/3d-models/textures/color.png");
  const texture_3 = useLoader(TextureLoader, "/3d-models/textures/color2.png");
  const container = useRef(null);

  /* ===== GSAP React ===== */
  useGSAP(
    () => {
      const checkthreeJSViewer = setInterval(() => {
        if (document.querySelector('.threeJSViewer') && document.querySelector('.homeSection') && document.querySelector('.features2')) {
          clearInterval(checkthreeJSViewer);
          /* console.log("threeJSViewer is ready"); */
          //gsap.set(iPhone.scene.scale, {x: 0.5, y: 0.5, z: 0.5})
          gsap.set(".threeJSViewer", {opacity:0})

          ScrollTrigger.create({
            trigger: "body",
            start: "top top",
            endTrigger: ".featuresRecordKeeperBottom",
            end: "bottom bottom",
            //end: () => lastCardST.start + bottomDistance,
            pin: ".threeJSViewer",
            markers:false,
            onUpdate: (self) => {
              ///console.log(self.progress);
              //console.log(iPhone.scene.position);
              //console.log(iPhone.scene.rotation);
              //console.log(iPhone.scene.scale);
            }
          });

          const iPhoneHomeAnimIn = gsap.timeline({paused:false, delay:0.25, fastScrollEnd: 3000})
              //.set(iPhone.scene.scale, {x: 1, y: 1, z: 1})
              .set(iPhone.scene.scale, {x: 1, y: 1, z: 1})
              .set(iPhone.scene.position, {x: 0, y: 0, z: 0}, "<")
              .set(iPhone.scene.rotation, {x: 0, y: 0, z: 0}, "<")
              .to(".threeJSViewer", {opacity:1}, "<")
              .fromTo(iPhone.scene.position, {y: 6}, {y: -1.5, ease:"power1.out", duration:1}, "<")
              .fromTo(iPhone.scene.rotation, {y: -3}, {y: 0, ease:"power1.out", duration:1}, "<")
              .fromTo(iPhone.scene.rotation, {x: 0}, {x: -0.8, ease:"power1.in", duration:1}, "<")
              //.fromTo(iPhone.scene.scale, {x: 3, y: 3, z: 3, ease:"linear"}, "<")

          const iPhoneHomeAnimOut = gsap.timeline({
            scrollTrigger: {
                trigger: '.homeSection',
                start: 'top top',
                end: 'bottom 75%',
                markers: false,
                scrub: true,
                toggleActions: "play none none reverse"
                //pin: ".threeJSViewer",
            },
          })
            //.set(iPhone.scene.scale, {x: 1, y: 1, z: 1})
            .fromTo(iPhone.scene.position, {y: -1.5}, {y: -6.3, ease:"power1.in"})
            .to(iPhone.scene.scale, {x: 3, y: 3, z: 3, ease:"linear"}, "<")
            .fromTo(iPhone.scene.rotation, {x: -0.8}, {x: -2.2, ease:"power1.out"}, "<")
            //.set(".threeJSViewer", {opacity:0})
            .set(iPhone.scene.scale, {x: 1, y: 1, z: 1})
            .set(iPhone.scene.position, {x: 8, y: 0, z: 0})
            .set(iPhone.scene.rotation, {x: 0, y: -2, z: 0})

          const iPhoneFeaturesAnimIn = gsap.timeline({paused:true})
            //.set(".threeJSViewer", {autoAlpha:1})
            .fromTo(iPhone.scene.position, {x: 8}, {x: 2.5, ease:"power1.out"}, "<")
            .fromTo(iPhone.scene.rotation, {y: -2}, {y: -1, ease:"power1.in"}, "<")
            .fromTo(iPhone.scene.scale, {x: 1, y: 1, z: 1}, {x: 1.5, y: 1.5, z: 1.5, ease:"power3.in"}, "<")

          ScrollTrigger.create({
            trigger: '.featuresJudge',
            start: 'top 90%',
            end: 'top 25%',
            markers: false,
            scrub: true,
            animation: iPhoneFeaturesAnimIn,
            toggleActions: "play none none reverse"
          });

          /* const iPhoneFeaturesAnimOut = gsap.timeline({paused:true})
            //.set(".threeJSViewer", {autoAlpha:1})
            .fromTo(iPhone.scene.position, {x: 8}, {x: 2.5, ease:"power1.out"}, "<")
            .fromTo(iPhone.scene.rotation, {y: -2}, {y: -0.5, ease:"power1.in"}, "<")
            .fromTo(iPhone.scene.scale, {x: 1, y: 1, z: 1}, {x: 1.5, y: 1.5, z: 1.5, ease:"power3.in"}, "<")

          ScrollTrigger.create({
            trigger: '.featuresJudge',
            start: 'top bottom',
            end: 'bottom bottom',
            markers: false,
            scrub: true,
            animation: iPhoneFeaturesAnimOut,
            toggleActions: "play none none reverse"
          }); */

        }
      }, 50); // Check every 50ms

      /* GSDevTools.create(); */
    },
    { dependencies: [iPhone.scene, texture_1, texture_2, texture_3], revertOnUpdate: true }
  );

  return (
    <div ref={container} className="threeJSViewer absolute top-0 left-0 z-[2] h-screen w-screen overflow-visible">
      <Canvas>
        {/* <ScrollControls pages={5} damping={0.1}> */}
          {/* <OrbitControls enableZoom={false} enablePan={false}/> */}
          <ambientLight intensity={2}/>
          <pointLight position={[2, 3, 4]} />
          {/* <directionalLight position={[2, 1, 1]}/> */}
          {/* <Cube /> */}
          {/* <primitive object={iPhone.scene} /> */}
          <IPhoneModel />
        {/* </ScrollControls> */}
      </Canvas>
    </div>
  )
}

export const IPhoneModel: React.FC = () => {
  const iPhone = useLoader(GLTFLoader, '/3d-models/iPhone_14_Pro_Max.glb');
  const texture_1 = useLoader(TextureLoader, "/3d-models/textures/iPhone_Front_Screen.jpg");
  const texture_2 = useLoader(TextureLoader, "/3d-models/textures/color.png");
  const texture_3 = useLoader(TextureLoader, "/3d-models/textures/color2.png");
  const iPhoneRef = useRef<Mesh>(null);

  /* iPhone.scene.scale.set(1, 1, 1) */
  /* iPhone.scene.position.set(0, -1.5, 0) */

  /* useFrame((_state, delta) => {
      if (iPhoneRef.current) {
          iPhoneRef.current.rotation.y += delta / 1;
      }
  }); */
  
  useEffect(() => {
    iPhone.scene.traverse((child) => {
      if ( child.name === 'ID279_14' && 'material' in child) {
        const mesh = child as any;

        // Create a new MeshStandardMaterial with texture_1 as its map
        const screenMaterial = new MeshStandardMaterial({
          map: texture_1
        });

        // Apply the new material to the mesh
        mesh.material = screenMaterial;
  
        // If the mesh uses an array of materials, you might need to replace the entire array or a specific index
        // mesh.material[0] = screenMaterial; // Example for replacing a specific material in an array
  
        // Ensure the texture repeats correctly, if necessary
        texture_1.wrapS = RepeatWrapping;
        texture_1.wrapT = RepeatWrapping;
        texture_1.repeat.set(1, 1); // Adjust repeat values as needed
  
        // Mark the material and texture for update
        mesh.material.map.needsUpdate = true;
        mesh.material.needsUpdate = true;
      }
    });
    /* child instanceof Mesh */ //Apply to all surfaces
    /* child.name === 'ID299001_5' 'ID279_14'*/

    const gui = new GUI()
    const scaleProxy = { scale: 1 };
    const opacityProxy = { opacity: 1 };
    const dummyFolder = gui.addFolder('.')
    const dummy2Folder = gui.addFolder('..')
    const iPhoneFolder = gui.addFolder('iPhone')
    iPhoneFolder.add(iPhone.scene.position, 'x').min(-7).max(7).step(0.01).name('Position X')
    iPhoneFolder.add(iPhone.scene.position, 'y').min(-7).max(7).step(0.01).name('Position Y')
    iPhoneFolder.add(iPhone.scene.position, 'z').min(-7).max(7).step(0.01).name('Position Z')
    iPhoneFolder.add(iPhone.scene.rotation, 'x').min(-7).max(7).step(0.01).name('Rotation X')
    iPhoneFolder.add(iPhone.scene.rotation, 'y').min(-7).max(7).step(0.01).name('Rotation Y')
    iPhoneFolder.add(iPhone.scene.rotation, 'z').min(-7).max(7).step(0.01).name('Rotation Z')
    iPhoneFolder.add(scaleProxy, 'scale', 0.1, 15, 0.01).name('Scale XYZ').onChange((newValue) => {
      // Update the actual object's scale in the listener
      iPhone.scene.scale.set(newValue, newValue, newValue);
    });
    iPhoneFolder.add(opacityProxy, 'opacity', 0, 1, 0.01).name('Opacity').onChange((newValue) => {
      // Update the actual object's opacity in the listener
      iPhone.scene.traverse((child) => {
        if (child instanceof Mesh) {
          child.material.opacity = newValue; // Set your desired opacity here
          child.material.transparent = true; // Ensure transparency is enabled for opacity to take effect
          child.material.needsUpdate = true; // Mark the material for update
        }
      });
    });
    /* iPhoneFolder.add(iPhone.scene.rotation, 'x', 0, Math.PI * 2)
    iPhoneFolder.add(iPhone.scene.rotation, 'y', 0, Math.PI * 2)
    iPhoneFolder.add(iPhone.scene.rotation, 'z', 0, Math.PI * 2) */

    return () => {
      gui.destroy()
    }
  }, [iPhone.scene, texture_1])

  return (
      <>
          <pointLight position={[-10, -10, -10]} color="#636363" intensity={500} />
          <pointLight position={[10, 10, 10]} color="#636363" intensity={500} />
          <primitive object={iPhone.scene} ref={iPhoneRef} />
      </>
  );
};