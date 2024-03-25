'use client';
import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState, useContext, Suspense } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { Texture, Mesh, Color, SRGBColorSpace, LinearSRGBColorSpace, RepeatWrapping, MeshStandardMaterial, ACESFilmicToneMapping, Object3D, PerspectiveCamera, Clock, Material } from 'three';
//import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
//import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls, ScrollControls, useScroll} from '@react-three/drei';
//import { GUI } from 'dat.gui'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";

import { useLoadAssets } from '@/components/three.js/useLoadAssets';

import { IPhoneTextureContext, IPadTextureContext, IPhoneOpacityContext, IPadOpacityContext } from '@/contexts/R3FContext';

// Dynamically import DatGuiWrapper with SSR disabled
const DatGuiWrapper = dynamic(() => import('@/components/three.js/datGuiWrapper'), {
  ssr: false, // Disable server-side rendering
});

export default function ThreeJSViewer() {

  const { iPhone, iPad, textures } = useLoadAssets();
  const container = useRef(null);

  /* ===== GSAP React ===== */
  useGSAP(
    () => {
      const checkthreeJSViewer = setInterval(() => {
        if (document.querySelector('.threeJSViewer') && document.querySelector('.homeSection') && document.querySelector('.features2') && iPhone?.scene && iPad?.scene) {
          clearInterval(checkthreeJSViewer);
          /* console.log("threeJSViewer is ready"); */
          //gsap.set(iPhone.scene.scale, {x: 0.5, y: 0.5, z: 0.5})
          const setOpacity = gsap.quickSetter(".threeJSViewer", "opacity");

          //gsap.set(".threeJSViewer", {opacity:0})
          setOpacity(0);
          gsap.set(iPhone.scene.scale, {x: 8, y: 8, z: 8})
          gsap.set(iPad.scene.scale, {x: 0.5, y: 0.5, z: 0.5})
          gsap.set(iPad.scene.position, {x: -0.55, y: 0, z: 0})
          /* iPad.scene.traverse((child) => {
            if (child instanceof Mesh && child.material instanceof Material) {
              child.material.opacity = 0;
              child.material.transparent = true; // Ensure transparency is enabled
              child.material.needsUpdate = true; // Mark the material for update
            }
          }); */
          //gsap.set(".threeJSViewer", {opacity:1})



          // Pin threeJSViewer
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

          // HomeAnimIn
          /* const HomeAnimIn = gsap.timeline({paused:true, delay:0.25, fastScrollEnd: 3000})
          //.set(iPhone.scene.scale, {x: 6, y: 6, z: 6})
          .to(".threeJSViewer", {opacity:1, duration:0.1}, "<")
          .fromTo(iPhone.scene.position, {y: 1.5, x: 0}, {y: -0.4, x: 1.5, ease:"power1.out", duration:1}, "<")
          .fromTo(iPhone.scene.rotation, {y: -3}, {y: -0.75, ease:"power1.out", duration:1}, "<")
          //.fromTo(iPhone.scene.rotation, {x: 0}, {x: -0.5, ease:"power1.in", duration:1}, "<")
          .fromTo(iPad.scene.position, {y: -1.5, x:0}, {y: -0.5, x: -1.2, ease:"power1.out", duration:1}, "<")
          .fromTo(iPad.scene.rotation, {y: -1}, {y: 1, ease:"power1.out", duration:1}, "<")
          //.fromTo(iPad.scene.rotation, {x: 0}, {x: -0.5, ease:"power1.in", duration:1}, "<")
          HomeAnimIn.play(); */

          // iPhoneHomeAnimIn
          const iPhoneHomeAnimIn = gsap.timeline({paused:true, delay:0.25, fastScrollEnd: 3000})
              //.set(iPhone.scene.scale, {x: 1, y: 1, z: 1})
              .set(iPhone.scene.scale, {x: 6, y: 6, z: 6})
              .set(iPhone.scene.position, {x: 0, y: 0, z: 0}, "<")
              .set(iPhone.scene.rotation, {x: 0, y: 0, z: 0}, "<")
              .to(".threeJSViewer", {opacity:1, duration:0.1}, "<")
              .fromTo(iPhone.scene.position, {y: 1.5}, {y: -0.3, ease:"power1.out", duration:1}, "<")
              .fromTo(iPhone.scene.rotation, {y: -3}, {y: 0, ease:"power1.out", duration:1}, "<")
              .fromTo(iPhone.scene.rotation, {x: 0}, {x: -0.5, ease:"power1.in", duration:1}, "<")
          iPhoneHomeAnimIn.play();

          // iPhoneHomeAnimOut
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
            .set(iPhone.scene.scale, {x: 6, y: 6, z: 6})
            .set(iPhone.scene.position, {x: 0, y: -0.3, z: 0}, 0)
            .set(iPhone.scene.rotation, {x: -0.5, y: 0, z: 0}, 0)
            .fromTo(iPhone.scene.position, {y: -0.3}, {y: -3, ease:"power1.in"}, 0)
            .to(iPhone.scene.scale, {x: 9, y: 9, z: 9, ease:"linear"}, "<")
            .fromTo(iPhone.scene.rotation, {x: -0.5}, {x: -2.2, ease:"power1.out"}, "<")
            //.set(".threeJSViewer", {opacity:0})
            .set(iPhone.scene.scale, {x: 6, y: 6, z: 6})
            .set(iPhone.scene.position, {x: 2, y: 0, z: 0})
            .set(iPhone.scene.rotation, {x: 0, y: -2, z: 0})

          // iPhoneFeaturesAnimIn
          const iPhoneFeaturesAnimIn = gsap.timeline({paused:true})
            //.set(".threeJSViewer", {autoAlpha:1})
            .fromTo(iPhone.scene.position, {x: 2}, {x: 0.6, ease:"power1.out"}, "<")
            .fromTo(iPhone.scene.rotation, {y: -2}, {y: -0.5, ease:"power1.in"}, "<")
            .fromTo(iPhone.scene.scale, {x: 6, y: 6, z: 6}, {x: 8, y: 8, z: 8, ease:"power3.in"}, "<")

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
    { dependencies: [iPhone?.scene, iPad?.scene, textures.iPhone_texture_1, textures.iPhone_texture_2, textures.iPhone_texture_3, textures.iPhone_texture_4, textures.iPhone_texture_5, textures.iPhone_texture_6, textures.iPad_texture_1, textures.iPad_texture_2, textures.iPad_texture_3, textures.iPad_texture_4, textures.iPad_texture_5], revertOnUpdate: true }
  );

  return (
    <div ref={container} className="threeJSViewer absolute top-0 left-0 z-[2] h-screen w-screen overflow-visible">
      <Canvas linear>
        <CustomCamera />
        {/* <ScrollControls pages={5} damping={0.1}> */}

          <OrbitControls enableZoom={false} enablePan={false}/>
          <ambientLight intensity={2}/>
          <pointLight position={[2, 3, 4]} />
          <directionalLight position={[2, 1, 1]}/>

          {/* <Cube /> */}
          {/* {textures.iPhone_texture_2 && <Cube texture={textures.iPhone_texture_1} />} */}

          {/* <primitive object={iPhone.scene} /> */}
          {/* <IPhoneModel /> */}

          {iPhone && textures.iPhone_texture_1 && textures.iPhone_texture_2 && textures.iPhone_texture_3 && textures.iPhone_texture_4 && textures.iPhone_texture_5 && textures.iPhone_texture_6 && (
          <IPhoneModel iPhone={iPhone} textures={textures} />
          )}

          {iPad && textures.iPad_texture_1 && textures.iPad_texture_2 && textures.iPad_texture_3 && textures.iPad_texture_4 && textures.iPad_texture_5 && (
          <IPadModel iPad={iPad} textures={textures} />
          )}

        {/* </ScrollControls> */}
      </Canvas>
    </div>
  )
}

const IPhoneBobAnimation = ({ iPhoneRef }: { iPhoneRef: React.RefObject<Mesh> }) => {
  useFrame((_state, delta) => {
    // Animation logic here
    let baseY = 0; // Base y-position of the model
    let amplitude = 0.05; // Amplitude of the bobbing, adjust as needed
    let frequency = 1; // Frequency of the bobbing, adjust as needed
    const clock = new Clock();
    const elapsedTime = clock.getElapsedTime();
    if (iPhoneRef.current) {
      iPhoneRef.current.rotation.y = 1.25 * elapsedTime;
      let time = performance.now() * 0.001; // Current time in seconds
      iPhoneRef.current.position.y = baseY + Math.sin(time * frequency) * amplitude;
    }
  });

  return null; // This component does not render anything itself
};

// Intro Home
export const IntroHome: React.FC = () => {
  const { iPhone, textures } = useLoadAssets();

  const container = useRef(null);
  const iPhoneRef = useRef<Mesh>(null);

  /* ===== GSAP React ===== */
  useGSAP(
    () => {
      const checkintroHomer3FViewer = setInterval(() => {
        if (document.querySelector('.introHomer3FViewer') && document.querySelector('.homeSection') && document.querySelector('.features2') && iPhone?.scene) {
          clearInterval(checkintroHomer3FViewer);

          const setOpacity = gsap.quickSetter(".introHomer3FViewer", "opacity");

          setOpacity(0);
          gsap.set(iPhone.scene.scale, {x: 8, y: 8, z: 8})

          // Pin threeJSViewer
          /* ScrollTrigger.create({
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
          }); */

          // iPhoneHomeAnimIn
          const iPhoneHomeAnimIn = gsap.timeline({paused:true, delay:0.25, fastScrollEnd: 3000})
              //.set(iPhone.scene.scale, {x: 1, y: 1, z: 1})
              .set(iPhone.scene.scale, {x: 6, y: 6, z: 6})
              .set(iPhone.scene.position, {x: 0, y: 0, z: 0}, "<")
              .set(iPhone.scene.rotation, {x: 0, y: 0, z: 0}, "<")
              .to(".introHomer3FViewer", {opacity:1, duration:0.1}, "<")
              .fromTo(iPhone.scene.position, {y: 1.5}, {y: -0.3, ease:"power1.out", duration:1}, "<")
              .fromTo(iPhone.scene.rotation, {y: -3}, {y: 0, ease:"power1.out", duration:1}, "<")
              .fromTo(iPhone.scene.rotation, {x: 0}, {x: -0.5, ease:"power1.in", duration:1}, "<")
          iPhoneHomeAnimIn.play();

          // iPhoneHomeAnimOut
          const iPhoneHomeAnimOut = gsap.timeline({
            scrollTrigger: {
                trigger: '.homeSection',
                start: 'top top',
                end: 'bottom 75%',
                markers: false,
                scrub: true,
                toggleActions: "play none none reverse"
            },
          })
            .set(iPhone.scene.scale, {x: 6, y: 6, z: 6})
            .set(iPhone.scene.position, {x: 0, y: -0.3, z: 0}, 0)
            .set(iPhone.scene.rotation, {x: -0.5, y: 0, z: 0}, 0)
            .fromTo(iPhone.scene.position, {y: -0.3}, {y: -3, ease:"power1.in"}, 0)
            .to(iPhone.scene.scale, {x: 9, y: 9, z: 9, ease:"linear"}, "<")
            .fromTo(iPhone.scene.rotation, {x: -0.5}, {x: -2.2, ease:"power1.out"}, "<")        

        }
      }, 50); // Check every 50ms

      /* GSDevTools.create(); */
    },
    { dependencies: [iPhone?.scene], revertOnUpdate: true }
  );

  return (
    <div ref={container} className="introHomer3FViewer absolute z-[2] h-screen w-screen overflow-visible border-2 border-red-500">
      <Canvas linear>
        <CustomCamera />
        {/* <ScrollControls pages={5} damping={0.1}> */}

          {/* <OrbitControls enableZoom={false} enablePan={false}/> */}
          <ambientLight intensity={2}/>
          <pointLight position={[2, 3, 4]} />
          <directionalLight position={[2, 1, 1]}/>

          {iPhone && textures.iPhone_texture_1 && textures.iPhone_texture_2 && textures.iPhone_texture_3 && textures.iPhone_texture_4 && textures.iPhone_texture_5 && textures.iPhone_texture_6 && (
          <IPhoneModel iPhone={iPhone} textures={textures} innerRef={iPhoneRef}/>
          )}

          {/* <IPhoneBobAnimation iPhoneRef={iPhoneRef} /> */}

        {/* </ScrollControls> */}
      </Canvas>
    </div>
  )
}


// Perspective Camera component
export const CustomCamera: React.FC = () => {
  // Ref to track if the GUI setup has been done
  const isGuiSetupDone = useRef(false);

  const { camera } = useThree();

  // Type assertion to PerspectiveCamera
  const perspectiveCamera = camera as PerspectiveCamera;

  // Adjust camera properties using the asserted type
  perspectiveCamera.fov = 25;
  perspectiveCamera.aspect = window.innerWidth / window.innerHeight;
  perspectiveCamera.near = 0.1;
  perspectiveCamera.far = 100;
  perspectiveCamera.position.set(0, 0, 4);
  perspectiveCamera.updateProjectionMatrix();

  // No need to render anything, as this component is only for configuring the camera
  //return null;
  return (
    <DatGuiWrapper>
      {(gui, addFolderSafely) => {
        // Use the gui instance here to add your controls
        // This function will only be executed on the client side
        if (gui && !isGuiSetupDone.current) {
          //console.log("Adding Camera controls to GUI");
          const dummyFolder = addFolderSafely('.');const dummy2Folder = addFolderSafely('..');
          const CameraFolder = addFolderSafely('Perspective Camera');
          CameraFolder.add(perspectiveCamera, 'fov').min(0).max(100).step(0.01).name('FOV').onChange((newValue: number) => {
            // Update the actual object's scale in the listener
            perspectiveCamera.fov = newValue;
            perspectiveCamera.updateProjectionMatrix();
          });
          //perspectiveCamera.position.set(0, 0, 4);
          CameraFolder.add(perspectiveCamera.position, 'x').min(-7).max(7).step(0.01).name('Position X').onChange((newValue: number) => {
            // Update the actual object's scale in the listener
            perspectiveCamera.position.x = newValue;
            perspectiveCamera.updateProjectionMatrix();
          });
          CameraFolder.add(perspectiveCamera.position, 'y').min(-7).max(7).step(0.01).name('Position Y').onChange((newValue: number) => {
            // Update the actual object's scale in the listener
            perspectiveCamera.position.y = newValue;
            perspectiveCamera.updateProjectionMatrix();
          });
          CameraFolder.add(perspectiveCamera.position, 'z').min(-7).max(7).step(0.01).name('Position Z').onChange((newValue: number) => {
            // Update the actual object's scale in the listener
            perspectiveCamera.position.z = newValue;
            perspectiveCamera.updateProjectionMatrix();
          });
          // Mark GUI setup as done
          isGuiSetupDone.current = true;
        }
        return null; // This component does not render anything itself
      }}
    </DatGuiWrapper>
  );
};


// iPhone Model component
export const IPhoneModel: React.FC<{ iPhone: any; textures: { iPhone_texture_1: any; iPhone_texture_2: any; iPhone_texture_3: any; iPhone_texture_4: any; iPhone_texture_5: any; iPhone_texture_6: any; newiPhoneTextureName: any}; innerRef?: React.Ref<Mesh>; }> = ({ iPhone, textures, innerRef }) => {
  const { iPhoneTextureName } = useContext(IPhoneTextureContext);
  const { iPhoneOpacity } = useContext(IPhoneOpacityContext);

  const { gl } = useThree(); // Access the WebGLRenderer instance as 'gl'

  const iPhoneRef = useRef<Mesh>(null);

  useFrame((_state, delta) => {
  // Make it spin
    /* if (iPhoneRef.current) {
        iPhoneRef.current.rotation.y -= delta / 1;
    } */

    // Make it bob
    /* let baseY = 0; // Base y-position of the model
    let amplitude = 0.05; // Amplitude of the bobbing, adjust as needed
    let frequency = 1; // Frequency of the bobbing, adjust as needed
    const clock = new Clock()
    const elapsedTime = clock.getElapsedTime()
    if (iPhoneRef.current){
      iPhoneRef.current.rotation.y = 1.25 * elapsedTime;
      let time = performance. now() * 0.001; // Current time in seconds
      iPhoneRef.current.position.y = baseY + Math. sin(time * frequency) * amplitude;
    } */
  });

  useEffect(() => {
    //Set initial iPhone texture
    let iPhoneScreenMaterial: any;
    iPhone.scene.traverse((child: Object3D) => {
      if (child instanceof Mesh && child.material.name === 'iPhone_Screen') {
        iPhoneScreenMaterial = child.material;
        const texture = textures.iPhone_texture_1;

        // Apply the texture to the existing material's map
        iPhoneScreenMaterial.map = texture;
        iPhoneScreenMaterial.toneMapped=false;

        // If the material uses an emissive map and you want to apply the same texture to it making it glow
        iPhoneScreenMaterial.emissive = new Color(0xffffff); // White emissive color
        iPhoneScreenMaterial.emissiveMap = texture;
        iPhoneScreenMaterial.emissiveIntensity = 0.125; // Adjust as needed

         // Update the material to reflect the new texture
         iPhoneScreenMaterial.needsUpdate = true;

        // If the texture appears too bright or washed out, adjusting the exposure of the renderer may help
         //gl.toneMappingExposure = Math.pow(0.9, 5.0); // Adjust exposure, 0.9 is an example value
         //gl.toneMapping = ACESFilmicToneMapping;
      }

      /* if (child.name === 'ID279_14') {
        const mesh = child as Mesh;
        mesh.visible = false; // This makes the mesh invisible
      } */
    });

    // Change iPhone texture function
    type TextureName = 'iPhone_texture_1' | 'iPhone_texture_2' | 'iPhone_texture_3' | 'iPhone_texture_4' | 'iPhone_texture_5' | 'iPhone_texture_6';

    const changeiPhoneTexture = (newiPhoneTextureName: TextureName) => {
      //let iPhoneScreenMaterial: any;
      iPhone.scene.traverse((child: Object3D) => {
        if (child instanceof Mesh && child.material.name === 'iPhone_Screen') {
          //console.log("texture = " + newiPhoneTextureName);
          let iPhoneScreenMaterial: any = child.material;
          const texture = textures[newiPhoneTextureName];

          if (!texture) {
            console.error("Texture not found:", newiPhoneTextureName);
            return;
          }
          // Apply the texture to the existing material's map
          iPhoneScreenMaterial.map = texture;
          iPhoneScreenMaterial.toneMapped=false;
          // If the material uses an emissive map and you want to apply the same texture to it making it glow
          iPhoneScreenMaterial.emissive = new Color(0xffffff); // White emissive color
          iPhoneScreenMaterial.emissiveMap = texture;
          iPhoneScreenMaterial.emissiveIntensity = 0.125; // Adjust as needed
          iPhoneScreenMaterial.needsUpdate = true;
        }
      });
    }
    if (iPhoneTextureName) {
      changeiPhoneTexture(iPhoneTextureName as TextureName); // Type assertion
    }

    // Change iPhone opacity function
    const changeiPhoneOpacity = (newiPhoneOpacity: number) => {
      iPhone.scene.traverse((child: any) => {
        if (child instanceof Mesh && child.material instanceof Material) {
          child.material.opacity = newiPhoneOpacity;
          if (newiPhoneOpacity === 0) {
            child.material.transparent = true; // Ensure transparency is enabled
          } else {
            child.material.transparent = false; // Ensure transparency is disabled
          }
          child.material.needsUpdate = true; // Mark the material for update
        }
      });
    }
    if (iPhoneOpacity !== undefined && iPhoneOpacity !== null) {
      console.log("iPhoneOpacity triggered = "+iPhoneOpacity);
      changeiPhoneOpacity(iPhoneOpacity as number);
    }


    // iPhone Gui setup
    /* const gui = new GUI()
    const dummyFolder = gui.addFolder('.'); const dummy2Folder = gui.addFolder('..');

    const iPhoneFolder = gui.addFolder('iPhone')
    iPhoneFolder.add(iPhone.scene.position, 'x').min(-7).max(7).step(0.01).name('Position X')
    iPhoneFolder.add(iPhone.scene.position, 'y').min(-7).max(7).step(0.01).name('Position Y')
    iPhoneFolder.add(iPhone.scene.position, 'z').min(-7).max(7).step(0.01).name('Position Z')
    iPhoneFolder.add(iPhone.scene.rotation, 'x').min(-7).max(7).step(0.01).name('Rotation X')
    iPhoneFolder.add(iPhone.scene.rotation, 'y').min(-7).max(7).step(0.01).name('Rotation Y')
    iPhoneFolder.add(iPhone.scene.rotation, 'z').min(-7).max(7).step(0.01).name('Rotation Z')
    const scaleProxy = { scale: 1 };
    iPhoneFolder.add(scaleProxy, 'scale', 0.1, 15, 0.01).name('Scale XYZ').onChange((newValue) => {
      // Update the actual object's scale in the listener
      iPhone.scene.scale.set(newValue, newValue, newValue);
    });
    const opacityProxy = { opacity: 1 };
    iPhoneFolder.add(opacityProxy, 'opacity', 0, 1, 0.01).name('Opacity').onChange((newValue) => {
      // Update the actual object's opacity in the listener
      iPhone.scene.traverse((child: any) => {
        if (child instanceof Mesh) {
          child.material.opacity = newValue; // Set your desired opacity here
          child.material.transparent = true; // Ensure transparency is enabled for opacity to take effect
          child.material.needsUpdate = true; // Mark the material for update
        }
      });
    });

    return () => {
      gui.destroy()
    } */
  }, [iPhone, textures, gl, iPhoneTextureName, iPhoneOpacity])

  return (
      <>
        <DatGuiWrapper>
          {(gui, addFolderSafely) => {
            // Use the gui instance here to add your controls
            // This function will only be executed on the client side
            if (gui) {
              //console.log("Adding iPhone controls to GUI");
              const dummyFolder = addFolderSafely('.');const dummy2Folder = addFolderSafely('..');
              const iPhoneFolder = addFolderSafely('iPhone')
              iPhoneFolder.add(iPhone.scene.position, 'x').min(-7).max(7).step(0.01).name('Position X')
              iPhoneFolder.add(iPhone.scene.position, 'y').min(-7).max(7).step(0.01).name('Position Y')
              iPhoneFolder.add(iPhone.scene.position, 'z').min(-7).max(7).step(0.01).name('Position Z')
              iPhoneFolder.add(iPhone.scene.rotation, 'x').min(-7).max(7).step(0.01).name('Rotation X')
              iPhoneFolder.add(iPhone.scene.rotation, 'y').min(-7).max(7).step(0.01).name('Rotation Y')
              iPhoneFolder.add(iPhone.scene.rotation, 'z').min(-7).max(7).step(0.01).name('Rotation Z')
              const scaleProxy = { scale: 1 };
              iPhoneFolder.add(scaleProxy, 'scale', 0.1, 15, 0.01).name('Scale XYZ').onChange((newValue: number) => {
                // Update the actual object's scale in the listener
                iPhone.scene.scale.set(newValue, newValue, newValue);
              });
              const opacityProxy = { opacity: 1 };
              iPhoneFolder.add(opacityProxy, 'opacity', 0, 1, 0.01).name('Opacity').onChange((newValue: number) => {
                // Update the actual object's opacity in the listener
                iPhone.scene.traverse((child: any) => {
                  if (child instanceof Mesh) {
                    child.material.opacity = newValue; // Set your desired opacity here
                    child.material.transparent = true; // Ensure transparency is enabled for opacity to take effect
                    child.material.needsUpdate = true; // Mark the material for update
                  }
                });
              });
            }
            return null; // This component does not render anything itself
          }}
        </DatGuiWrapper>
          <pointLight position={[-10, -10, -10]} color="#636363" intensity={2000} />
          <pointLight position={[10, 10, 10]} color="#636363" intensity={2000} />
          <primitive object={iPhone.scene} /* ref={iPhoneRef} */ ref={innerRef} />
      </>
  );
};


// iPad Model component
export const IPadModel: React.FC<{ iPad: any; textures: { iPad_texture_1: any; iPad_texture_2: any; iPad_texture_3: any; iPad_texture_4: any; iPad_texture_5: any; newiPadTextureName: any }; }> = ({ iPad, textures }) => {
  const { iPadTextureName } = useContext(IPadTextureContext);
  const { iPadOpacity } = useContext(IPadOpacityContext);

  const { gl } = useThree(); // Access the WebGLRenderer instance as 'gl'

  const iPadRef = useRef<Mesh>(null);

  useFrame((_state, delta) => {
  // Make it spin
    /* if (iPadRef.current) {
        iPadRef.current.rotation.y -= delta / 1;
    } */

    // Make it bob
    /* let baseY = 0; // Base y-position of the model
    let amplitude = 0.05; // Amplitude of the bobbing, adjust as needed
    let frequency = 1; // Frequency of the bobbing, adjust as needed
    const clock = new Clock()
    const elapsedTime = clock.getElapsedTime()
    if (iPadRef.current){
      iPadRef.current.rotation.y = 1.25 * elapsedTime;
      let time = performance. now() * 0.001; // Current time in seconds
      iPadRef.current.position.y = baseY + Math. sin(time * frequency) * amplitude;
    } */
  });

  useEffect(() => {
    //Set initial iPad texture
    let iPadScreenMaterial: any;
    iPad.scene.traverse((child: Object3D) => {
      if (child instanceof Mesh && child.material.name === 'iPad_Screen') {
        iPadScreenMaterial = child.material;
        const texture = textures.iPad_texture_3;

        // Apply the texture to the existing material's map
        iPadScreenMaterial.map = texture;
        iPadScreenMaterial.toneMapped = false;

        // If the material uses an emissive map and you want to apply the same texture to it making it glow
        iPadScreenMaterial.emissive = new Color(0xffffff); // White emissive color
        iPadScreenMaterial.emissiveMap = texture;
        iPadScreenMaterial.emissiveIntensity = 1; // Adjust as needed

         // Update the material to reflect the new texture
         iPadScreenMaterial.needsUpdate = true;

        // If the texture appears too bright or washed out, adjusting the exposure of the renderer may help
         //gl.toneMappingExposure = Math.pow(0.7, 1.0); // Adjust exposure, 0.9 is an example value
         //gl.toneMapping = ACESFilmicToneMapping;
      }

      /* if (child.name === 'ID279_14') {
        const mesh = child as Mesh;
        mesh.visible = false; // This makes the mesh invisible
      } */
    });

    // Change iPad texture function
    type TextureName = 'iPad_texture_1' | 'iPad_texture_2' | 'iPad_texture_3' | 'iPad_texture_4' | 'iPad_texture_5';

    const changeiPadTexture = (newiPadTextureName: TextureName) => {
      //let iPadScreenMaterial: any;
      iPad.scene.traverse((child: Object3D) => {
        if (child instanceof Mesh && child.material.name === 'iPad_Screen') {
          console.log("texture = " + newiPadTextureName);
          let iPadScreenMaterial: any = child.material;
          const texture = textures[newiPadTextureName];

          if (!texture) {
            console.error("Texture not found:", newiPadTextureName);
            return;
          }
          // Apply the texture to the existing material's map
          iPadScreenMaterial.map = texture;
          iPadScreenMaterial.toneMapped=false;
          // If the material uses an emissive map and you want to apply the same texture to it making it glow
          iPadScreenMaterial.emissive = new Color(0xffffff); // White emissive color
          iPadScreenMaterial.emissiveMap = texture;
          iPadScreenMaterial.emissiveIntensity = 1; // Adjust as needed
          iPadScreenMaterial.needsUpdate = true;
        }
      });
    }
    if (iPadTextureName) {
      changeiPadTexture(iPadTextureName as TextureName); // Type assertion
    }

    // Change iPad opacity function
    const changeiPadOpacity = (newiPadOpacity: number) => {
      iPad.scene.traverse((child: any) => {
        if (child instanceof Mesh && child.material instanceof Material) {
          child.material.opacity = newiPadOpacity;
          if (newiPadOpacity === 0) {
            child.material.transparent = true; // Ensure transparency is enabled
          } else {
            child.material.transparent = false; // Ensure transparency is disabled
          }
          child.material.needsUpdate = true; // Mark the material for update
        }
      });
    }    
    if (iPadOpacity !== undefined && iPadOpacity !== null) {
      console.log("iPadOpacity triggered = "+iPadOpacity);
      changeiPadOpacity(iPadOpacity as number); // Type assertion
    }

    /* // Gui setup
    const gui = new GUI()
    const dummyFolder = gui.addFolder('.');const dummy2Folder = gui.addFolder('..');

    const iPadFolder = gui.addFolder('iPad')
    iPadFolder.add(iPad.scene.position, 'x').min(-7).max(7).step(0.01).name('Position X')
    iPadFolder.add(iPad.scene.position, 'y').min(-7).max(7).step(0.01).name('Position Y')
    iPadFolder.add(iPad.scene.position, 'z').min(-7).max(7).step(0.01).name('Position Z')
    iPadFolder.add(iPad.scene.rotation, 'x').min(-7).max(7).step(0.01).name('Rotation X')
    iPadFolder.add(iPad.scene.rotation, 'y').min(-7).max(7).step(0.01).name('Rotation Y')
    iPadFolder.add(iPad.scene.rotation, 'z').min(-7).max(7).step(0.01).name('Rotation Z')
    const scaleProxy = { scale: 1 };
    iPadFolder.add(scaleProxy, 'scale', 0.1, 15, 0.01).name('Scale XYZ').onChange((newValue) => {
      // Update the actual object's scale in the listener
      iPad.scene.scale.set(newValue, newValue, newValue);
    });
    const opacityProxy = { opacity: 1 };
    iPadFolder.add(opacityProxy, 'opacity', 0, 1, 0.01).name('Opacity').onChange((newValue) => {
      // Update the actual object's opacity in the listener
      iPad.scene.traverse((child: any) => {
        if (child instanceof Mesh) {
          child.material.opacity = newValue; // Set your desired opacity here
          child.material.transparent = true; // Ensure transparency is enabled for opacity to take effect
          child.material.needsUpdate = true; // Mark the material for update
        }
      });
    });

    return () => {
      gui.destroy()
    } */

  }, [iPad, textures, gl, iPadTextureName, iPadOpacity])

  return (
      <>
      <DatGuiWrapper>
        {(gui, addFolderSafely) => {
          // Use the gui instance here to add your controls
          // This function will only be executed on the client side
          if (gui) {
            //console.log("Adding iPad controls to GUI");
            const dummyFolder = addFolderSafely('.');const dummy2Folder = addFolderSafely('..');
            const iPadFolder = addFolderSafely('iPad')
            iPadFolder.add(iPad.scene.position, 'x').min(-7).max(7).step(0.01).name('Position X')
            iPadFolder.add(iPad.scene.position, 'y').min(-7).max(7).step(0.01).name('Position Y')
            iPadFolder.add(iPad.scene.position, 'z').min(-7).max(7).step(0.01).name('Position Z')
            iPadFolder.add(iPad.scene.rotation, 'x').min(-7).max(7).step(0.01).name('Rotation X')
            iPadFolder.add(iPad.scene.rotation, 'y').min(-7).max(7).step(0.01).name('Rotation Y')
            iPadFolder.add(iPad.scene.rotation, 'z').min(-7).max(7).step(0.01).name('Rotation Z')
            const scaleProxy = { scale: 1 };
            iPadFolder.add(scaleProxy, 'scale', 0.1, 15, 0.01).name('Scale XYZ').onChange((newValue: number) => {
              // Update the actual object's scale in the listener
              iPad.scene.scale.set(newValue, newValue, newValue);
            });
            const opacityProxy = { opacity: 1 };
            iPadFolder.add(opacityProxy, 'opacity', 0, 1, 0.01).name('Opacity').onChange((newValue: number) => {
              // Update the actual object's opacity in the listener
              iPad.scene.traverse((child: any) => {
                if (child instanceof Mesh) {
                  child.material.opacity = newValue; // Set your desired opacity here
                  child.material.transparent = true; // Ensure transparency is enabled for opacity to take effect
                  child.material.needsUpdate = true; // Mark the material for update
                }
              });
            });
          }
          return null; // This component does not render anything itself
        }}
      </DatGuiWrapper>
          <pointLight position={[-10, -10, -10]} color="#636363" intensity={2000} />
          <pointLight position={[10, 10, 10]} color="#636363" intensity={2000} />
          <primitive object={iPad.scene} ref={iPadRef} />
      </>
  );
};








// Le basic Cube
interface CubeProps {
  texture: Texture;
}

function Cube({texture}: CubeProps) {

  /* const mesh = useRef(null); */
  const data = useScroll();

  const mesh = useRef<Mesh>(null);

  /* useFrame((state, delta) => {
    //mesh.current.rotation.x = mesh.current.rotation.y += 0.005;
    const { offset } = data;
    mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z = offset * 5;
  }); */

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 4, 0.25]} />
      <meshStandardMaterial map={texture} />
      {/* <meshStandardMaterial color="orange" /> */}
    </mesh>
  )
}