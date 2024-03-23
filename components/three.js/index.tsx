'use client';
import React, { useEffect, useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { Texture, TextureLoader, Mesh, Color, SRGBColorSpace, LinearSRGBColorSpace, RepeatWrapping, MeshStandardMaterial, ACESFilmicToneMapping, Object3D, PerspectiveCamera, Clock } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls, ScrollControls, useScroll} from '@react-three/drei';
import { GUI } from 'dat.gui'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";

export default function ThreeJSViewer() {

  const [iPhone, setIPhone] = useState<GLTF | null>(null);
  const [iPad, setIPad] = useState<GLTF | null>(null);
  const [textures, setTextures] = useState<{ iPhone_texture_1: Texture | null, iPhone_texture_2: Texture | null, iPhone_texture_3: Texture | null , iPhone_texture_4: Texture | null, iPhone_texture_5: Texture | null, iPad_texture_1: Texture | null, iPad_texture_2: Texture | null, iPad_texture_3: Texture | null, iPad_texture_4: Texture | null, iPad_texture_5: Texture | null}>({
    iPhone_texture_1: null,
    iPhone_texture_2: null,
    iPhone_texture_3: null,
    iPhone_texture_4: null,
    iPhone_texture_5: null,
    iPad_texture_1: null,
    iPad_texture_2: null,
    iPad_texture_3: null,
    iPad_texture_4: null,
    iPad_texture_5: null
  });

  useEffect(() => {
    const loadModelsAndTextures = async () => {
      const iPhoneLoader = new GLTFLoader(); 
      const iPadLoader = new GLTFLoader();
      const textureLoader = new TextureLoader();
      const iPhoneModel = await iPhoneLoader.loadAsync("/3d-models/iPhone_14_Pro_Max.glb");
      const iPadModel = await iPadLoader.loadAsync("/3d-models/iPad_Pro_4th.glb");
      /* const iPhoneTexture1 = await textureLoader.loadAsync("/3d-models/textures/iPhone_Front_Screen.jpg"); */
      const iPhoneTexture1 = await textureLoader.loadAsync("/images/features/officialsJudge/featuresOfficialsJudge-1.webp");
      const iPhoneTexture2 = await textureLoader.loadAsync("/images/features/officialsJudge/featuresOfficialsJudge-2.webp");
      const iPhoneTexture3 = await textureLoader.loadAsync("/images/features/officialsJudge/featuresOfficialsJudge-3.webp");
      const iPhoneTexture4 = await textureLoader.loadAsync("/images/features/officialsJudge/featuresOfficialsJudge-4.webp");
      const iPhoneTexture5 = await textureLoader.loadAsync("/images/features/officialsJudge/featuresOfficialsJudge-5.webp");
      const iPadTexture1 = await textureLoader.loadAsync("/images/features/officialsRecordKeeper/featuresOfficialsRecordKeeper-1.webp");
      const iPadTexture2 = await textureLoader.loadAsync("/images/features/officialsRecordKeeper/featuresOfficialsRecordKeeper-2.webp");
      const iPadTexture3 = await textureLoader.loadAsync("/images/features/officialsRecordKeeper/featuresOfficialsRecordKeeper-3.webp");
      const iPadTexture4 = await textureLoader.loadAsync("/images/features/officialsRecordKeeper/featuresOfficialsRecordKeeper-4.webp");
      const iPadTexture5 = await textureLoader.loadAsync("/images/features/officialsRecordKeeper/featuresOfficialsRecordKeeper-5.webp");

      setIPhone(iPhoneModel);
      setIPad(iPadModel);
      setTextures({ iPhone_texture_1: iPhoneTexture1, iPhone_texture_2: iPhoneTexture2, iPhone_texture_3: iPhoneTexture3, iPhone_texture_4: iPhoneTexture4, iPhone_texture_5: iPhoneTexture5, iPad_texture_1: iPadTexture1, iPad_texture_2: iPadTexture2, iPad_texture_3: iPadTexture3, iPad_texture_4: iPadTexture4, iPad_texture_5: iPadTexture5 });
    };

    loadModelsAndTextures();
  }, []);
  /* const iPhone = useLoader(GLTFLoader, '/3d-models/iPhone_14_Pro_Max.glb');
  const iPhone_texture_1 = useLoader(TextureLoader, "/3d-models/textures/iPhone_Front_Screen.jpg");
  const iPhone_texture_2 = useLoader(TextureLoader, "/3d-models/textures/color.png");
  const iPhone_texture_3 = useLoader(TextureLoader, "/3d-models/textures/color2.png"); */
  const container = useRef(null);

  /* ===== GSAP React ===== */
  useGSAP(
    () => {
      const checkthreeJSViewer = setInterval(() => {
        if (document.querySelector('.threeJSViewer') && document.querySelector('.homeSection') && document.querySelector('.features2') && iPhone?.scene && iPad?.scene) {
          clearInterval(checkthreeJSViewer);
          /* console.log("threeJSViewer is ready"); */
          //gsap.set(iPhone.scene.scale, {x: 0.5, y: 0.5, z: 0.5})

          gsap.set(".threeJSViewer", {opacity:0})
          gsap.set(iPhone.scene.scale, {x: 8, y: 8, z: 8})
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
          const HomeAnimIn = gsap.timeline({paused:true, delay:0.25, fastScrollEnd: 3000})
          //.set(iPhone.scene.scale, {x: 1, y: 1, z: 1})
          //.set(iPhone.scene.scale, {x: 6, y: 6, z: 6})
          .to(".threeJSViewer", {opacity:1, duration:0.1}, "<")
          .fromTo(iPhone.scene.position, {y: 1.5, x: 0}, {y: -0.4, x: 1.5, ease:"power1.out", duration:1}, "<")
          .fromTo(iPhone.scene.rotation, {y: -3}, {y: -0.75, ease:"power1.out", duration:1}, "<")
          //.fromTo(iPhone.scene.rotation, {x: 0}, {x: -0.5, ease:"power1.in", duration:1}, "<")
          .fromTo(iPad.scene.position, {y: -1.5, x:0}, {y: -0.5, x: -1.2, ease:"power1.out", duration:1}, "<")
          .fromTo(iPad.scene.rotation, {y: -1}, {y: 1, ease:"power1.out", duration:1}, "<")
          //.fromTo(iPad.scene.rotation, {x: 0}, {x: -0.5, ease:"power1.in", duration:1}, "<")
          HomeAnimIn.play();

          // iPhoneHomeAnimIn
          /* const iPhoneHomeAnimIn = gsap.timeline({paused:true, delay:0.25, fastScrollEnd: 3000})
              //.set(iPhone.scene.scale, {x: 1, y: 1, z: 1})
              .set(iPhone.scene.scale, {x: 6, y: 6, z: 6})
              .set(iPhone.scene.position, {x: 0, y: 0, z: 0}, "<")
              .set(iPhone.scene.rotation, {x: 0, y: 0, z: 0}, "<")
              .to(".threeJSViewer", {opacity:1, duration:0.1}, "<")
              .fromTo(iPhone.scene.position, {y: 1.5}, {y: -0.3, ease:"power1.out", duration:1}, "<")
              .fromTo(iPhone.scene.rotation, {y: -3}, {y: 0, ease:"power1.out", duration:1}, "<")
              .fromTo(iPhone.scene.rotation, {x: 0}, {x: -0.8, ease:"power1.in", duration:1}, "<")
          iPhoneHomeAnimIn.play(); */

          /* // iPhoneHomeAnimOut
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
            .set(iPhone.scene.scale, {x: 1, y: 1, z: 1}, 0)
            .set(iPhone.scene.position, {x: 0, y: -1.5, z: 0}, 0)
            .set(iPhone.scene.rotation, {x: -0.8, y: 0, z: 0}, 0)
            //.set(iPhone.scene.scale, {x: 1, y: 1, z: 1})
            .fromTo(iPhone.scene.position, {y: -1.5}, {y: -6.3, ease:"power1.in"}, 0)
            .to(iPhone.scene.scale, {x: 3, y: 3, z: 3, ease:"linear"}, "<")
            .fromTo(iPhone.scene.rotation, {x: -0.8}, {x: -2.2, ease:"power1.out"}, "<")
            //.set(".threeJSViewer", {opacity:0})
            .set(iPhone.scene.scale, {x: 1, y: 1, z: 1})
            .set(iPhone.scene.position, {x: 8, y: 0, z: 0})
            .set(iPhone.scene.rotation, {x: 0, y: -2, z: 0})

          // iPhoneFeaturesAnimIn
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
          }); */



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
    { dependencies: [iPhone?.scene, iPad?.scene, textures.iPhone_texture_1, textures.iPhone_texture_2, textures.iPhone_texture_3, textures.iPhone_texture_4, textures.iPhone_texture_5, textures.iPad_texture_1, textures.iPad_texture_2, textures.iPad_texture_3, textures.iPad_texture_4, textures.iPad_texture_5], revertOnUpdate: true }
  );

  return (
    <div ref={container} className="threeJSViewer absolute top-0 left-0 z-[2] h-screen w-screen overflow-visible">
      <Canvas linear>
        {/* <ScrollControls pages={5} damping={0.1}> */}

          <OrbitControls enableZoom={false} enablePan={false}/>
          <ambientLight intensity={2}/>
          <pointLight position={[2, 3, 4]} />
          <directionalLight position={[2, 1, 1]}/>

          {/* <Cube /> */}
          {/* {textures.iPhone_texture_2 && <Cube texture={textures.iPhone_texture_1} />} */}

          {/* <primitive object={iPhone.scene} /> */}
          {/* <IPhoneModel /> */}

          {iPhone && textures.iPhone_texture_1 && textures.iPhone_texture_2 && textures.iPhone_texture_3 && (
          <IPhoneModel iPhone={iPhone} textures={textures} />
          )}

          {iPad && textures.iPad_texture_1 && textures.iPad_texture_2 && textures.iPad_texture_3 && (
          <IPadModel iPad={iPad} textures={textures} />
          )}

        {/* </ScrollControls> */}
      </Canvas>
    </div>
  )
}

export const IPhoneModel: React.FC<{ iPhone: any; textures: { iPhone_texture_1: any; iPhone_texture_2: any; iPhone_texture_3: any; }; }> = ({ iPhone, textures }) => {

  const { gl } = useThree(); // Access the WebGLRenderer instance as 'gl'

  const iPhoneRef = useRef<Mesh>(null);

  const { camera, scene } = useThree();
  // Type assertion to PerspectiveCamera
  const perspectiveCamera = camera as PerspectiveCamera;
  // Adjust camera properties using the asserted type
  perspectiveCamera.fov = 25;
  perspectiveCamera.aspect = window.innerWidth / window.innerHeight;
  perspectiveCamera.near = 0.1;
  perspectiveCamera.far = 100;
  perspectiveCamera.position.set(0, 0, 4);
  perspectiveCamera.updateProjectionMatrix();
  // If you need to add the camera to the scene explicitly
  // scene.add(camera);

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


    // Gui setup
    /* const gui = new GUI()
    const dummyFolder = gui.addFolder('.');const dummy2Folder = gui.addFolder('..');

    const iPhoneCameraFolder = gui.addFolder('iPhone Camera');
    iPhoneCameraFolder.add(perspectiveCamera, 'fov').min(0).max(100).step(0.01).name('FOV').onChange((newValue) => {
      // Update the actual object's scale in the listener
      perspectiveCamera.fov = newValue;
      perspectiveCamera.updateProjectionMatrix();
    });
    //perspectiveCamera.position.set(0, 0, 4);
    iPhoneCameraFolder.add(perspectiveCamera.position, 'x').min(-7).max(7).step(0.01).name('Position X').onChange((newValue) => {
      // Update the actual object's scale in the listener
      perspectiveCamera.position.x = newValue;
      perspectiveCamera.updateProjectionMatrix();
    });
    iPhoneCameraFolder.add(perspectiveCamera.position, 'y').min(-7).max(7).step(0.01).name('Position Y').onChange((newValue) => {
      // Update the actual object's scale in the listener
      perspectiveCamera.position.y = newValue;
      perspectiveCamera.updateProjectionMatrix();
    });
    iPhoneCameraFolder.add(perspectiveCamera.position, 'z').min(-7).max(7).step(0.01).name('Position Z').onChange((newValue) => {
      // Update the actual object's scale in the listener
      perspectiveCamera.position.z = newValue;
      perspectiveCamera.updateProjectionMatrix();
    });

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
  }, [iPhone, textures, gl])

  return (
      <>
          <pointLight position={[-10, -10, -10]} color="#636363" intensity={2000} />
          <pointLight position={[10, 10, 10]} color="#636363" intensity={2000} />
          <primitive object={iPhone.scene} ref={iPhoneRef} />
      </>
  );
};


export const IPadModel: React.FC<{ iPad: any; textures: { iPad_texture_1: any; iPad_texture_2: any; iPad_texture_3: any; iPad_texture_4: any; iPad_texture_5: any; }; }> = ({ iPad, textures }) => {

  const { gl } = useThree(); // Access the WebGLRenderer instance as 'gl'

  const iPadRef = useRef<Mesh>(null);

  const { camera, scene } = useThree();
  // Type assertion to PerspectiveCamera
  const perspectiveCamera = camera as PerspectiveCamera;
  // Adjust camera properties using the asserted type
  perspectiveCamera.fov = 50;
  perspectiveCamera.aspect = window.innerWidth / window.innerHeight;
  perspectiveCamera.near = 0.1;
  perspectiveCamera.far = 100;
  perspectiveCamera.position.set(0, 0, 4);
  perspectiveCamera.updateProjectionMatrix();
  // If you need to add the camera to the scene explicitly
  // scene.add(camera);

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
    let iPadScreenMaterial: any;
    iPad.scene.traverse((child: Object3D) => {
      if (child instanceof Mesh && child.material.name === 'screen') {
        iPadScreenMaterial = child.material;
        const texture = textures.iPad_texture_1;

        // Apply the texture to the existing material's map
        iPadScreenMaterial.map = texture;
        iPadScreenMaterial.toneMapped=false;

        // If the material uses an emissive map and you want to apply the same texture to it making it glow
        iPadScreenMaterial.emissive = new Color(0xffffff); // White emissive color
        iPadScreenMaterial.emissiveMap = texture;
        iPadScreenMaterial.emissiveIntensity = 1; // Adjust as needed

         // Update the material to reflect the new texture
         iPadScreenMaterial.needsUpdate = true;

        // If the texture appears too bright or washed out, adjusting the exposure of the renderer may help
         //gl.toneMappingExposure = Math.pow(0.9, 5.0); // Adjust exposure, 0.9 is an example value
         //gl.toneMapping = ACESFilmicToneMapping;
      }

      /* if (child.name === 'ID279_14') {
        const mesh = child as Mesh;
        mesh.visible = false; // This makes the mesh invisible
      } */
    });


    // Gui setup
    /* const gui = new GUI()
    const dummyFolder = gui.addFolder('.');const dummy2Folder = gui.addFolder('..');

    const iPadCameraFolder = gui.addFolder('iPad Camera');
    iPadCameraFolder.add(perspectiveCamera, 'fov').min(0).max(100).step(0.01).name('FOV').onChange((newValue) => {
      // Update the actual object's scale in the listener
      perspectiveCamera.fov = newValue;
      perspectiveCamera.updateProjectionMatrix();
    });
    //perspectiveCamera.position.set(0, 0, 4);
    iPadCameraFolder.add(perspectiveCamera.position, 'x').min(-7).max(7).step(0.01).name('Position X').onChange((newValue) => {
      // Update the actual object's scale in the listener
      perspectiveCamera.position.x = newValue;
      perspectiveCamera.updateProjectionMatrix();
    });
    iPadCameraFolder.add(perspectiveCamera.position, 'y').min(-7).max(7).step(0.01).name('Position Y').onChange((newValue) => {
      // Update the actual object's scale in the listener
      perspectiveCamera.position.y = newValue;
      perspectiveCamera.updateProjectionMatrix();
    });
    iPadCameraFolder.add(perspectiveCamera.position, 'z').min(-7).max(7).step(0.01).name('Position Z').onChange((newValue) => {
      // Update the actual object's scale in the listener
      perspectiveCamera.position.z = newValue;
      perspectiveCamera.updateProjectionMatrix();
    });

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
  }, [iPad, textures, gl])

  return (
      <>
          <pointLight position={[-10, -10, -10]} color="#636363" intensity={2000} />
          <pointLight position={[10, 10, 10]} color="#636363" intensity={2000} />
          <primitive object={iPad.scene} ref={iPadRef} />
      </>
  );
};



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