'use client';
import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState, useContext } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { Texture, Mesh, Color, SRGBColorSpace, LinearSRGBColorSpace, RepeatWrapping, MeshStandardMaterial, ACESFilmicToneMapping, Object3D, PerspectiveCamera, Clock, Material } from 'three';
import { OrbitControls, ScrollControls, useScroll} from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";

import { CustomCamera, IPhoneModel, IPadModel, MacBookProModel, CageModel } from '@/components/three.js/assets';
import { useLoadAssets } from '@/components/three.js/useLoadAssets';

import { IPhoneTextureContext, IPadTextureContext, IPhoneOpacityContext, IPadOpacityContext, MacBookProTextureContext, MacBookProOpacityContext } from '@/lib/contexts/R3FContext';

// Dynamically import DatGuiWrapper with SSR disabled
const DatGuiWrapper = dynamic(() => import('@/components/three.js/datGuiWrapper'), {
  ssr: false, // Disable server-side rendering
});


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
export const HomeIntroR3F: React.FC = () => {
  const { iPhone, textures } = useLoadAssets();
  const { setiPhoneOpacity } = useContext(IPhoneOpacityContext);

  const container = useRef(null);
  const iPhoneRef = useRef<Mesh>(null);

  /* ===== GSAP React ===== */
  useGSAP(
    () => {
      const checkintroHomer3FViewer = setInterval(() => {
        if (document.querySelector('.introHomer3FViewer') && document.querySelector('.homeSection') && iPhone?.scene) {
          clearInterval(checkintroHomer3FViewer);

          const setintroHomer3FViewerOpacity = gsap.quickSetter(".introHomer3FViewer", "opacity");

          // Initial settings and positioning
          setintroHomer3FViewerOpacity(0);
          gsap.set(iPhone.scene.scale, {x: 6, y: 6, z: 6})
          gsap.set(iPhone.scene.position, {x: 0, y: 1.5, z: 0})
          gsap.set(iPhone.scene.rotation, {x: 0, y: -3, z: 0});
          //console.log("Initial settings and positioning done");
          setiPhoneOpacity(1);

          // Pin it
          ScrollTrigger.create({
            trigger: "body",
            start: "top top",
            endTrigger: ".homeSection",
            end: "bottom 50%",
            //end: () => lastCardST.start + bottomDistance,
            pin: ".introHomer3FViewer",
            markers:false,
            onUpdate: (self) => {
              ///console.log(self.progress);
            }
          });

          // iPhoneHomeAnimIn
          const iPhoneHomeAnimIn = gsap.timeline({paused:true, delay:0.25, fastScrollEnd: 3000})
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
                toggleActions: "play none none reverse",
                onEnterBack: () => {
                  setiPhoneOpacity(1);
                }
            },
          })
            .set(iPhone.scene.scale, {x: 6, y: 6, z: 6})
            .set(iPhone.scene.position, {x: 0, y: -0.3, z: 0}, 0)
            .set(iPhone.scene.rotation, {x: -0.5, y: 0, z: 0}, 0)
            .fromTo(iPhone.scene.position, {x: 0, y: -0.3}, {x: 2, y: -3, ease:"power1.in"}, 0)
            .to(iPhone.scene.scale, {x: 9, y: 9, z: 9, ease:"linear"}, "<")
            .fromTo(iPhone.scene.rotation, {x: -0.5}, {x: -2.2, ease:"power1.out"}, "<")

        }
      }, 50); // Check every 50ms

      /* GSDevTools.create(); */
    },
    { dependencies: [iPhone?.scene], revertOnUpdate: true }
  );

  return (
    <div ref={container} className="introHomer3FViewer absolute z-[2] h-screen w-screen overflow-visible">
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

interface HomeFeaturesR3FLoadedProps {
  onLoaded: () => void; // Specify that onLoaded is a function that returns void
}
// Home Features
export const HomeFeaturesR3F: React.FC<HomeFeaturesR3FLoadedProps> = ({ onLoaded }) => {
  const { iPhone, iPad, macBookPro, cage, textures } = useLoadAssets();
  const { setMacBookProOpacity } = useContext(MacBookProOpacityContext);
  const { setiPhoneOpacity } = useContext(IPhoneOpacityContext);
  const { setiPadOpacity } = useContext(IPadOpacityContext);

  const container = useRef(null);
  const macBookProRef = useRef<Mesh>(null);
  const iPhoneRef = useRef<Mesh>(null);
  const iPadRef = useRef<Mesh>(null);

  //This is to provide the loading state to the parent to trigger the Manual ScrollTrigger
  useEffect(() => {
    // Ensure onLoaded is called only if it's provided
    if (onLoaded) {
      onLoaded();
    }
  }, [onLoaded]);

  /* ===== GSAP React ===== */
  useGSAP(
    () => {
      const checkHomeFeaturesR3FViewer = setInterval(() => {
        if (document.querySelector('.homeFeaturesR3FViewer') && document.querySelector('#featuresDashboard') && document.querySelector('#featuresJudge') && document.querySelector('#featuresRecordKeeper') && iPhone?.scene && iPad?.scene && macBookPro?.scene) {
          clearInterval(checkHomeFeaturesR3FViewer);

          const setContainerOpacity = gsap.quickSetter(".homeFeaturesR3FViewer", "opacity");
          //setContainerOpacity(0);

          // First declare the variables outside of the traverse method
          let macBookProDisplay: Object3D | null = null;
          let macBookProGlass: MeshStandardMaterial | null = null;
          let macBookProScreen: MeshStandardMaterial | null = null;
          let macBookProScreenOutline: MeshStandardMaterial | null = null;
          let macBookProKeyboardBacklight: MeshStandardMaterial | null = null;
          macBookPro.scene.traverse((child: Object3D) => {
            if (child.name === 'Display') {
              macBookProDisplay = child as Mesh; // Assign to the variable when the condition is met
              //console.log(macBookProDisplay);
              //macBookProDisplay.rotation.x = 6.285; // Close the MacBook Pro Display
            }
            if (child instanceof Mesh && child.material.name === 'Front_Glass') {
              macBookProGlass = child.material as MeshStandardMaterial;
              //console.log(macBookProGlass);
              macBookProGlass.transparent = true;
              macBookProGlass.opacity = 0; //Set the screen to OFF
            } 
            if (child instanceof Mesh && child.material.name === 'Keyboard_Backlight') {
              macBookProKeyboardBacklight = child.material as MeshStandardMaterial;
              //console.log(macBookProKeyboardBacklight);
              //macBookProKeyboardBacklight.emissive = new Color(0x000000); //Set the keyboard backlight to black
            }
            if (child instanceof Mesh && child.material.name === 'macBookPro_Screen') {
              let macBookProScreenMaterial: any = child.material;
              // Apply the texture to the existing material's map
              macBookProScreenMaterial.toneMapped = false;
              // If the material uses an emissive map and you want to apply the same texture to it making it glow
              macBookProScreenMaterial.emissive = new Color(0xffffff);
              macBookProScreenMaterial.emissiveIntensity = 0.125;
              macBookProScreenMaterial.needsUpdate = true;
            }
            if (child instanceof Mesh && child.material.name === 'Material.007') {
              let macBookProScreenOutline: any = child.material as MeshStandardMaterial;
              // Apply the texture to the existing material's map
              //macBookProScreenOutline.toneMapped = false;
              // If the material uses an emissive map and you want to apply the same texture to it making it glow
              //macBookProScreenOutline.emissive = new Color(0x000000);
              //macBookProScreenOutline.emissiveIntensity = 0.125;
              //macBookProScreenOutline.needsUpdate = true;
            }
          });

          // macBookProFeaturesAnimIn
          if (macBookProDisplay && macBookProKeyboardBacklight && macBookProGlass && iPhone && iPad) {

            //Initial settings and positioning
            const InitialAnim = gsap.timeline({
              paused:true,
              scrollTrigger: {
                trigger: '#featuresDashboard',
                start: 'top bottom',
                //end: 'top top',
                markers: false,
                scrub: false,
                invalidateOnRefresh: true,
                onEnter: () => {
                  console.log("onEnter InitialAnim");
                  setMacBookProOpacity(1);
                  setiPhoneOpacity(0);
                  setContainerOpacity(1);
                }
              },
            })
              .set(macBookPro.scene.scale, {x: 0.61, y: 0.61, z: 0.61})
              .set((macBookProDisplay as Mesh).rotation, {x: 6.285})
              .set((macBookProKeyboardBacklight as MeshStandardMaterial).emissive, {r: 0, g: 0, b: 0})
              //.set((macBookProScreenOutline as MeshStandardMaterial).emissive, {r: 0.5, g: 0.5, b: 0.5})

              //.set((macBookProGlass as MeshStandardMaterial), {opacity: 1})
              .set(iPhone.scene.scale, {x: 3.5, y: 3.5, z: 3.5})
              .set(iPhone.scene.position, {x: 0})
              .set(iPhone.scene.rotation, {x: -1.57, y: 0, z: 1.57})
              .set(iPad.scene.scale, {x: 0.45, y: 0.45, z: 0.45})
              .set(iPad.scene.position, {x: 0})
              .set(iPad.scene.rotation, {x: -1.57, y: 0, z: 1.57})

            // macBookProFeaturesAnimIn
            const macBookProFeaturesAnimIn = gsap.timeline({
              paused:true,
              scrollTrigger: {
                trigger: '#featuresDashboard',
                start: 'top 70%',
                end: 'top 10%',
                markers: false,
                scrub: true,
                invalidateOnRefresh: true,
                toggleActions: "play none none reverse"
              },
            })
              .fromTo(macBookPro.scene.position, {x: 3}, {x: 0.625, ease:"power1.out"})
              .fromTo(macBookPro.scene.position, {y: 0.4}, {y: -0.5, ease:"power1.in"}, "<")
              .fromTo(macBookPro.scene.rotation, {x: 0.65, y: -0.5}, {x: -0.075, y: -0.5, ease:"power1.in"}, "<")
              //.fromTo((macBookProDisplay as Mesh).rotation, {x: 6.285}, {x: 4.6, ease:"power1.in", duration:0.5})
              //.fromTo((macBookProKeyboardBacklight as MeshStandardMaterial).emissive, {r: 0, g: 0, b: 0}, {r: 1, g: 1, b: 1, ease:"power1.out", duration:0.5})
              //.fromTo((macBookProGlass as MeshStandardMaterial), {opacity: 1}, {opacity: 0, ease:"power1.out", duration:0.5}, "<")

            const macBookProOpenDisplayAnimIn = gsap.timeline({
              paused:true,
              scrollTrigger: {
                trigger: '#featuresDashboard',
                start: 'top 10%',
                end: 'top -15%',
                markers: false,
                scrub: true,
                invalidateOnRefresh: true,
                toggleActions: "play none none reverse"
              },
            })
              .fromTo(macBookPro.scene.position, {y: -0.5}, {y: -0.7, ease:"linear", duration:1})
              .fromTo((macBookProDisplay as Mesh).rotation, {x: 6.285}, {x: 4.6, ease:"power1.in", duration:1}, "<")
              .fromTo((macBookProKeyboardBacklight as MeshStandardMaterial).emissive, {r: 0, g: 0, b: 0}, {r: 1, g: 1, b: 1, ease:"power1.out", duration:0.25}, "<75%")
              //.fromTo((macBookProGlass as MeshStandardMaterial), {opacity: 1}, {opacity: 0, ease:"power1.out", duration:0.5}, "<")

            // macBookProFeaturesAnimOut
            const macBookProFeaturesAnimOut = gsap.timeline({
              paused:true,
              scrollTrigger:{
                trigger: '#featuresDashboard',
                start: 'bottom bottom',
                end: 'bottom 52%',
                markers: false,
                scrub: true,
                invalidateOnRefresh: true,
                toggleActions: "play none none reverse"
              }
            })
              .fromTo((macBookProDisplay as Mesh).rotation, {x: 4.6}, {x: 6.285, ease:"power1.in", duration:1})
              .fromTo((macBookProKeyboardBacklight as MeshStandardMaterial).emissive, {r: 1, g: 1, b: 1}, {r: 0, g: 0, b: 0, ease:"power1.in", duration:1}, "<")
              //.fromTo((macBookProGlass as MeshStandardMaterial), {opacity: 0}, {opacity: 1, ease:"power1.in", duration:1}, "<")
              .fromTo(macBookPro.scene.position, {x: 0.625}, {x: 0, ease:"power1.out", duration:0.75}, "<")
              .fromTo(macBookPro.scene.position, {y: -0.7}, {y: -0.03, ease:"linear", duration:0.75}, "<")
              .fromTo(macBookPro.scene.rotation, {x: -0.075, y: -0.5, z: 0}, {x: 0, y: 0, z: 0, ease:"power1.out", duration:1}, "<")
              .fromTo(macBookPro.scene.scale, {x: 0.61, y: 0.61, z: 0.61}, {x: 0.3, y: 0.3, z: 0.3, ease:"power2.out", duration:1}, "<")

              // iPhoneFeaturesAnimIn
            const iPhoneFeaturesAnimIn = gsap.timeline({
              paused:true,
              scrollTrigger: {
                trigger: '#featuresDashboard',
                start: 'bottom 48%',
                end: 'bottom top',
                markers: false,
                scrub: true,
                invalidateOnRefresh: true,
                //animation: iPhoneFeaturesAnimIn,
                toggleActions: "play none none reverse",
                /* onEnter: () => {
                  console.log("onEnter iPhoneFeaturesAnimIn");
                  //setContainerOpacity(0);
                  setMacBookProOpacity(1);
                } */
              },
            })
              .fromTo(iPhone.scene.position, {x: 0, y: 0}, {x: -1, y: -0.1, ease:"power1.out"}, "<")
              .fromTo(iPhone.scene.rotation, {x: -1.57, y: 0, z: 1.57}, {x: 0, y: 0.5, z: 0, ease:"power1.in"}, "<")
              .fromTo(iPhone.scene.scale, {x: 3.5, y: 3.5, z: 3.5}, {x: 9, y: 9, z: 9, ease:"power3.in"}, "<")

            // iPhoneFeaturesAnimOut
            const iPhoneFeaturesAnimOut = gsap.timeline({
              paused:true,
              scrollTrigger:{
                trigger: '#featuresJudge',
                start: 'bottom bottom',
                end: 'bottom 52%',
                markers: false,
                scrub: true,
                invalidateOnRefresh: true,
                //animation: iPhoneFeaturesAnimOut,
                toggleActions: "play none none reverse"
              }
            })
              .fromTo(iPhone.scene.position, {x: -1, y: -0.1}, {x: 0, y: 0, ease:"power1.out"}, "<")
              .fromTo(iPhone.scene.rotation, {x: 0, y: 0.5, z: 0}, {x: -1.57, y: 0, z: 1.57, ease:"power1.out"}, "<")
              .fromTo(iPhone.scene.scale, {x: 8, y: 8, z: 8}, {x: 3.5, y: 3.5, z: 3.5, ease:"power3.out"}, "<")


            // iPadFeaturesAnimIn
            const iPadFeaturesAnimIn = gsap.timeline({
              paused:true,
              scrollTrigger: {
                trigger: '#featuresJudge',
                start: 'bottom 48%',
                end: 'bottom top',
                markers: false,
                scrub: true,
                invalidateOnRefresh: true,
                //animation: iPadFeaturesAnimIn,
                toggleActions: "play none none reverse"
              },
            })
              .fromTo(iPad.scene.position, {x: 0, y: 0}, {x: 0.8, y: -0.085, ease:"power1.out"}, "<")
              .fromTo(iPad.scene.rotation, {x: -1.57, y: 0, z: 1.57}, {x: 0, y: -0.65, z: 0, ease:"power1.in"}, "<")
              .fromTo(iPad.scene.scale, {x: 0.45, y: 0.45, z: 0.45}, {x: 0.7, y: 0.7, z: 0.7, ease:"power3.in"}, "<")
          }


        }
      }, 50); // Check every 50ms
      /* GSDevTools.create(); */
    },
    { dependencies: [macBookPro?.scene, iPhone?.scene, iPad?.scene, setMacBookProOpacity, setiPhoneOpacity, setiPadOpacity], revertOnUpdate: true }
  );

  return (
    <div ref={container} className="homeFeaturesR3FViewer absolute z-[2] h-screen w-screen overflow-visible">
      <Canvas linear>
        <CustomCamera />
        {/* <ScrollControls pages={5} damping={0.1}> */}

          {/* <OrbitControls enableZoom={false} enablePan={false}/> */}
          <ambientLight intensity={3}/>
          <pointLight position={[2, 3, 4]} />
          <directionalLight position={[2, 1, 1]}/>

          {macBookPro && textures.macBookPro_texture_1 && textures.macBookPro_texture_2 && textures.macBookPro_texture_3 && textures.macBookPro_texture_4 && textures.macBookPro_texture_5 && (
            <MacBookProModel macBookPro={macBookPro} textures={textures} innerRef={macBookProRef}/>
          )}

          {iPhone && textures.iPhone_texture_1 && textures.iPhone_texture_2 && textures.iPhone_texture_3 && textures.iPhone_texture_4 && textures.iPhone_texture_5 && textures.iPhone_texture_6 && (
          <IPhoneModel iPhone={iPhone} textures={textures} innerRef={iPhoneRef}/>
          )}

          {iPad && textures.iPad_texture_1 && textures.iPad_texture_2 && textures.iPad_texture_3 && textures.iPad_texture_4 && textures.iPad_texture_5 && (
          <IPadModel iPad={iPad} textures={textures} innerRef={iPadRef}/>
          )}

          {/* <IPhoneBobAnimation iPhoneRef={iPhoneRef} /> */}

        {/* </ScrollControls> */}
      </Canvas>
    </div>
  )
}





// TestR3F
export const TestR3F: React.FC = () => {
  const { iPhone, iPad, macBookPro, cage, textures } = useLoadAssets();
  const { setiPhoneOpacity } = useContext(IPhoneOpacityContext);
  const { setiPadOpacity } = useContext(IPadOpacityContext);
  const { setMacBookProOpacity } = useContext(MacBookProOpacityContext);

  const container = useRef(null);
  const iPhoneRef = useRef<Mesh>(null);
  const iPadRef = useRef<Mesh>(null);
  const macBookProRef = useRef<Mesh>(null);
  const cageRef = useRef<Mesh>(null);

  /* ===== GSAP React ===== */
  useGSAP(
    () => {

      //setiPhoneOpacity(1);
      const TestiPadR3F = setInterval(() => {
        if (iPad?.scene) {
          clearInterval(TestiPadR3F);
          //setiPadOpacity(1);
          gsap.set(iPad.scene.scale, {x: 0.4, y: 0.4, z: 0.4});
        }
      }, 50); // Check every 50ms

      const TestmacBookProR3F = setInterval(() => {
        if (macBookPro?.scene) {
          clearInterval(TestmacBookProR3F);
          gsap.set(".TestR3F", {opacity:0});
          setMacBookProOpacity(1);
          gsap.set(macBookPro.scene.scale, {x: 0.5, y: 0.5, z: 0.5});
          gsap.set(macBookPro.scene.rotation, {x: 0, y: 0, z: 0})

          // First declare the variables outside of the traverse method
          let macBookProDisplay: Object3D | null = null;
          let macBookProGlass: MeshStandardMaterial | null = null;
          let macBookProKeyboardBacklight: MeshStandardMaterial | null = null;
          macBookPro.scene.traverse((child: Object3D) => {
            if (child.name === 'Display') {
              macBookProDisplay = child as Mesh; // Assign to the variable when the condition is met
              //console.log(macBookProDisplay);
              macBookProDisplay.rotation.x = 6.285; // Close the MacBook Pro Display
            }
            if (child instanceof Mesh && child.material.name === 'Front_Glass') {
              macBookProGlass = child.material as MeshStandardMaterial;
              //console.log(macBookProGlass);
              macBookProGlass.transparent = true;
              //macBookProGlass.opacity = 1; //Set the screen to OFF
            } 
            if (child instanceof Mesh && child.material.name === 'Keyboard_Backlight') {
              macBookProKeyboardBacklight = child.material as MeshStandardMaterial;
              //console.log(macBookProKeyboardBacklight);
              //macBookProKeyboardBacklight.emissive = new Color(0x000000); //Set the keyboard backlight to black
            }
          });

          // macBookProHomeAnimIn
          if (macBookProDisplay && macBookProKeyboardBacklight && macBookProGlass) {
          const macBookProHomeAnimIn = gsap.timeline({paused:true, delay:0.1, fastScrollEnd: 3000})
            .to(".TestR3F", {opacity:1, duration:0.1}, "<")
            .fromTo(macBookPro.scene.position, {y: 1.5}, {y: -0.65, ease:"power1.out", duration:1}, "<")
            .fromTo(macBookPro.scene.rotation, {x: -3, y: -3}, {x: 0, y: 0, ease:"power1.out", duration:1}, "<")
            .fromTo((macBookProDisplay as Mesh).rotation, {x: 6.285}, {x: 4.6, ease:"power1.in", duration:1})
          macBookProHomeAnimIn.play()
            .fromTo((macBookProKeyboardBacklight as MeshStandardMaterial).emissive, {r: 0, g: 0, b: 0}, {r: 1, g: 1, b: 1, ease:"power1.in", duration:1})
            .fromTo((macBookProGlass as MeshStandardMaterial), {opacity: 1}, {opacity: 0, ease:"power1.in", duration:1}, "<")
          macBookProHomeAnimIn.play()
          }

        }
      }, 50); // Check every 50ms


      const TestcageR3F = setInterval(() => {
        if (cage?.scene) {
          clearInterval(TestcageR3F);
          gsap.set(cage.scene.scale, {x: 0.85, y: 0.85, z: 0.85});

          // cageHomeAnimIn
          const cageHomeAnimIn = gsap.timeline({paused:true, delay:0.1, fastScrollEnd: 3000})
            .to(".TestR3F", {opacity:1, duration:0.1}, "<")
            .fromTo(cage.scene.position, {y: -4}, {y: -0.65, ease:"power1.out", duration:1}, "<")
            .fromTo(cage.scene.rotation, {x: 0.6, y: -6}, {x: 0.15, y: -2.38, ease:"power1.out", duration:1.125}, "<")
          cageHomeAnimIn.play()
        }
      }, 50); // Check every 50ms

      /* GSDevTools.create(); */
    },
    { dependencies: [iPhone?.scene, iPad?.scene, macBookPro?.scene, cage?.scene], revertOnUpdate: true }
  );

  return (
    <div ref={container} className="TestR3F absolute z-[2] h-screen w-screen overflow-visible">
      <Canvas linear>
        <CustomCamera />
        {/* <ScrollControls pages={5} damping={0.1}> */}

          {/* <OrbitControls enableZoom={false} enablePan={false}/> */}
          <ambientLight intensity={2}/>
          <pointLight position={[2, 3, 4]} />
          <directionalLight position={[2, 1, 1]}/>

          {/* {iPhone && textures.iPhone_texture_1 && textures.iPhone_texture_2 && textures.iPhone_texture_3 && textures.iPhone_texture_4 && textures.iPhone_texture_5 && textures.iPhone_texture_6 && (
            <IPhoneModel iPhone={iPhone} textures={textures} innerRef={iPhoneRef}/>
          )} */}

          {/* {iPad && textures.iPad_texture_1 && textures.iPad_texture_2 && textures.iPad_texture_3 && textures.iPad_texture_4 && textures.iPad_texture_5 && (
            <IPadModel iPad={iPad} textures={textures} innerRef={iPadRef}/>
          )} */}

          {macBookPro && textures.macBookPro_texture_1 && textures.macBookPro_texture_2 && textures.macBookPro_texture_3 && textures.macBookPro_texture_4 && textures.macBookPro_texture_5 && (
            <MacBookProModel macBookPro={macBookPro} textures={textures} innerRef={macBookProRef}/>
          )}

          {/* {cage && (
            <CageModel cage={cage} innerRef={cageRef}/>
          )} */}

          {/* <IPhoneBobAnimation iPhoneRef={iPhoneRef} /> */}

        {/* </ScrollControls> */}
      </Canvas>
    </div>
  )
}