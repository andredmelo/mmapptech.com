'use client';
import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState, useContext } from 'react'
import { useFrame, useThree } from '@react-three/fiber';
import { Texture, Mesh, Color, Object3D, PerspectiveCamera, Clock, Material } from 'three';
import { OrbitControls, ScrollControls, useScroll} from '@react-three/drei';

import { IPhoneTextureContext, IPadTextureContext, IPhoneOpacityContext, IPadOpacityContext, MacBookProTextureContext, MacBookProOpacityContext } from '@/lib/contexts/R3FContext';

// Dynamically import DatGuiWrapper with SSR disabled
const DatGuiWrapper = dynamic(() => import('@/components/three.js/datGuiWrapper'), {
  ssr: false, // Disable server-side rendering
});

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
  //perspectiveCamera.position.set(0, 0, 4);
  if (window.innerWidth > window.innerHeight) {
    // Landscape mode
    perspectiveCamera.position.set(0, 0, 4);
  } else {
    // Portrait mode
    perspectiveCamera.position.set(0, 0, 6);
  }
  perspectiveCamera.updateProjectionMatrix();

  // No need to render anything, as this component is only for configuring the camera
  return null;
  /* return (
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
  ); */
};




// iPhone Model component
export const IPhoneModel: React.FC<{
  iPhone: any;
  textures: {
    iPhone_texture_1: any;
    iPhone_texture_2: any;
    iPhone_texture_3: any;
    iPhone_texture_4: any;
    iPhone_texture_5: any;
    iPhone_texture_6: any;
    newiPhoneTextureName: any
  };
  innerRef?: React.Ref<Mesh>;
}> = ({ iPhone, textures, innerRef }) => {
  const { iPhoneTextureName } = useContext(IPhoneTextureContext);
  const { iPhoneOpacity } = useContext(IPhoneOpacityContext);

  // Ref to track if the GUI setup has been done
  const isGuiSetupDone = useRef(false);

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
          //console.log("iPhone texture = " + texture);

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
        if (newiPhoneOpacity === 0) {
          iPhone.scene.visible = false; // This makes it invisible
          //child.material.transparent = true; // Ensure transparency is enabled
        } else {
          iPhone.scene.visible = true; // This makes it invisible
          //child.material.transparent = false; // Ensure transparency is disabled
        }
        /* if (child instanceof Mesh && child.material instanceof Material) {
          child.material.opacity = newiPhoneOpacity;
          if (newiPhoneOpacity === 0) {
            child.material.transparent = true; // Ensure transparency is enabled
          } else {
            child.material.transparent = false; // Ensure transparency is disabled
          }
          child.material.needsUpdate = true; // Mark the material for update
        } */
      });
    }
    if (iPhoneOpacity !== undefined && iPhoneOpacity !== null) {
      //console.log("iPhoneOpacity triggered = "+iPhoneOpacity);
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
        {/* <DatGuiWrapper>
          {(gui, addFolderSafely) => {
            // Use the gui instance here to add your controls
            // This function will only be executed on the client side
            if (gui && !isGuiSetupDone.current) {
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
              // Mark GUI setup as done
              isGuiSetupDone.current = true;
            }
            return null; // This component does not render anything itself
          }}
        </DatGuiWrapper> */}
          {/* <pointLight position={[-10, -10, -10]} color="#636363" intensity={2000} />
          <pointLight position={[10, 10, 10]} color="#636363" intensity={2000} /> */}
          <primitive object={iPhone.scene} /* ref={iPhoneRef} */ ref={innerRef} />
      </>
  );
};


// iPad Model component
export const IPadModel: React.FC<{
  iPad: any;
  textures: {
    iPad_texture_1: any;
    iPad_texture_2: any;
    iPad_texture_3: any;
    iPad_texture_4: any;
    iPad_texture_5: any;
    newiPadTextureName: any
  };
  innerRef?: React.Ref<Mesh>;
}> = ({ iPad, textures, innerRef }) => {
  const { iPadTextureName } = useContext(IPadTextureContext);
  const { iPadOpacity } = useContext(IPadOpacityContext);

  // Ref to track if the GUI setup has been done
  const isGuiSetupDone = useRef(false);

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
        const texture = textures.iPad_texture_1;

        // Apply the texture to the existing material's map
        iPadScreenMaterial.map = texture;
        iPadScreenMaterial.toneMapped = false;

        // If the material uses an emissive map and you want to apply the same texture to it making it glow
        iPadScreenMaterial.emissive = new Color(0xffffff); // White emissive color
        iPadScreenMaterial.emissiveMap = texture;
        iPadScreenMaterial.emissiveIntensity = 0.125; // Adjust as needed

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
          //console.log("texture = " + newiPadTextureName);
          let iPadScreenMaterial: any = child.material;
          const texture = textures[newiPadTextureName];
          //console.log("iPad texture = " + texture);

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
          iPadScreenMaterial.emissiveIntensity = 0.125; // Adjust as needed
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
        /* if (newiPadOpacity === 0) {
          iPad.scene.visible = false; // This makes it invisible
          //child.material.transparent = true; // Ensure transparency is enabled
        } else {
          iPad.scene.visible = true; // This makes it invisible
          //child.material.transparent = false; // Ensure transparency is disabled
        } */

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
      //console.log("iPadOpacity triggered = "+iPadOpacity);
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
      {/* <DatGuiWrapper>
        {(gui, addFolderSafely) => {
          // Use the gui instance here to add your controls
          // This function will only be executed on the client side
          if (gui && !isGuiSetupDone.current) {
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
            // Mark GUI setup as done
            isGuiSetupDone.current = true;
          }
          return null; // This component does not render anything itself
        }}
      </DatGuiWrapper> */}
          {/* <pointLight position={[-10, -10, -10]} color="#636363" intensity={2000} />
          <pointLight position={[10, 10, 10]} color="#636363" intensity={2000} /> */}
          <primitive object={iPad.scene} /* ref={iPadRef} */ ref={innerRef} />
      </>
  );
};



// MacBookPro Model component
export const MacBookProModel: React.FC<{
  macBookPro: any;
  textures: {
    macBookPro_texture_1: any;
    macBookPro_texture_2: any;
    macBookPro_texture_3: any;
    macBookPro_texture_4: any;
    macBookPro_texture_5: any;
    newMacBookProTextureName: any;
  };
  innerRef?: React.Ref<Mesh>;
}> = ({ macBookPro, textures, innerRef }) => {
  const { macBookProTextureName } = useContext(MacBookProTextureContext);
  const { macBookProOpacity } = useContext(MacBookProOpacityContext);

  // Ref to track if the GUI setup has been done
  const isGuiSetupDone = useRef(false);

  const { gl } = useThree(); // Access the WebGLRenderer instance as 'gl'

  const macBookProRef = useRef<Mesh>(null);

  useEffect(() => {
    // Set initial MacBook Pro texture
    let macBookProScreenMaterial: any;
    macBookPro.scene.traverse((child: Object3D) => {
      if (child instanceof Mesh && child.material.name === 'macBookPro_Screen') {
        macBookProScreenMaterial = child.material;
        const texture = textures.macBookPro_texture_1; // Default texture, adjust as needed

        // Apply the texture to the existing material's map
        macBookProScreenMaterial.map = texture;
        macBookProScreenMaterial.toneMapped = false;

        // If the material uses an emissive map and you want to apply the same texture to it making it glow
        macBookProScreenMaterial.emissive = new Color(0xffffff);
        macBookProScreenMaterial.emissiveMap = texture;
        macBookProScreenMaterial.emissiveIntensity = 0.125;

        // Update the material to reflect the new texture
        macBookProScreenMaterial.needsUpdate = true;
      }
    });

    // Change MacBook Pro texture function
    type TextureName = 'macBookPro_texture_1' | 'macBookPro_texture_2' | 'macBookPro_texture_3' | 'macBookPro_texture_4' | 'macBookPro_texture_5';

    const changeMacBookProTexture = (newMacBookProTextureName: TextureName) => {
      macBookPro.scene.traverse((child: Object3D) => {
        if (child instanceof Mesh && child.material.name === 'macBookPro_Screen') {
          //console.log("texture = " + newMacBookProTextureName);
          let macBookProScreenMaterial: any = child.material;
          const texture = textures[newMacBookProTextureName];
          //console.log("texture = " + texture);

          //console.log(Object.keys(textures));
          if (!texture) {
            console.error("Texture not found:", newMacBookProTextureName);
            return;
          }

          // Apply the texture to the existing material's map
          macBookProScreenMaterial.map = texture;
          macBookProScreenMaterial.toneMapped = false;
          // If the material uses an emissive map and you want to apply the same texture to it making it glow
          macBookProScreenMaterial.emissive = new Color(0xffffff);
          macBookProScreenMaterial.emissiveMap = texture;
          macBookProScreenMaterial.emissiveIntensity = 0.125;
          macBookProScreenMaterial.needsUpdate = true;
          //textures[newMacBookProTextureName].image.play();
        }
      });
    }
    if (macBookProTextureName) {
      changeMacBookProTexture(macBookProTextureName as TextureName); // Type assertion
    }

    // Change MacBook Pro opacity function
    const changeMacBookProOpacity = (newMacBookProOpacity: number) => {
      macBookPro.scene.traverse((child: any) => {
        if (newMacBookProOpacity === 0) {
          macBookPro.scene.visible = false; // This makes it invisible
          //child.material.transparent = true; // Ensure transparency is enabled
        } else {
          macBookPro.scene.visible = true; // This makes it invisible
          //child.material.transparent = false; // Ensure transparency is disabled
        }
        /* if (child instanceof Mesh && child.material instanceof Material) {
          child.material.opacity = newMacBookProOpacity;
          //child.material.transparent = newMacBookProOpacity < 1;
          if (newMacBookProOpacity === 0) {
            child.material.transparent = true; // Ensure transparency is enabled
          } else {
            child.material.transparent = false; // Ensure transparency is disabled
          }
          child.material.needsUpdate = true; // Mark the material for update
        } */
      });
    }
    if (macBookProOpacity !== undefined && macBookProOpacity !== null) {
      //console.log("macBookProOpacity triggered = "+macBookProOpacity);
      changeMacBookProOpacity(macBookProOpacity as number);
    }

    /* // Gui setup
    const gui = new GUI()
    const dummyFolder = gui.addFolder('.');const dummy2Folder = gui.addFolder('..');

    const macBookProFolder = gui.addFolder('macBookPro')
    macBookProFolder.add(macBookPro.scene.position, 'x').min(-7).max(7).step(0.01).name('Position X')
    macBookProFolder.add(macBookPro.scene.position, 'y').min(-7).max(7).step(0.01).name('Position Y')
    macBookProFolder.add(macBookPro.scene.position, 'z').min(-7).max(7).step(0.01).name('Position Z')
    macBookProFolder.add(macBookPro.scene.rotation, 'x').min(-7).max(7).step(0.01).name('Rotation X')
    macBookProFolder.add(macBookPro.scene.rotation, 'y').min(-7).max(7).step(0.01).name('Rotation Y')
    macBookProFolder.add(macBookPro.scene.rotation, 'z').min(-7).max(7).step(0.01).name('Rotation Z')
    const scaleProxy = { scale: 1 };
    macBookProFolder.add(scaleProxy, 'scale', 0.1, 15, 0.01).name('Scale XYZ').onChange((newValue) => {
      // Update the actual object's scale in the listener
      macBookPro.scene.scale.set(newValue, newValue, newValue);
    });
    const opacityProxy = { opacity: 1 };
    macBookProFolder.add(opacityProxy, 'opacity', 0, 1, 0.01).name('Opacity').onChange((newValue) => {
      // Update the actual object's opacity in the listener
      macBookPro.scene.traverse((child: any) => {
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

}, [macBookPro, textures, gl, macBookProTextureName, macBookProOpacity]);

return (
  <>
  {/* <DatGuiWrapper>
    {(gui, addFolderSafely) => {
      // Use the gui instance here to add your controls
      // This function will only be executed on the client side
      if (gui && !isGuiSetupDone.current) {
        //console.log("Adding macBookPro controls to GUI");
        const dummyFolder = addFolderSafely('.');const dummy2Folder = addFolderSafely('..');
        const macBookProFolder = addFolderSafely('macBookPro')
        macBookProFolder.add(macBookPro.scene.position, 'x').min(-7).max(7).step(0.01).name('Position X')
        macBookProFolder.add(macBookPro.scene.position, 'y').min(-7).max(7).step(0.01).name('Position Y')
        macBookProFolder.add(macBookPro.scene.position, 'z').min(-7).max(7).step(0.01).name('Position Z')
        macBookProFolder.add(macBookPro.scene.rotation, 'x').min(-7).max(7).step(0.01).name('Rotation X')
        macBookProFolder.add(macBookPro.scene.rotation, 'y').min(-7).max(7).step(0.01).name('Rotation Y')
        macBookProFolder.add(macBookPro.scene.rotation, 'z').min(-7).max(7).step(0.01).name('Rotation Z')
        const scaleProxy = { scale: 1 };
        macBookProFolder.add(scaleProxy, 'scale', 0.1, 15, 0.01).name('Scale XYZ').onChange((newValue: number) => {
          // Update the actual object's scale in the listener
          macBookPro.scene.scale.set(newValue, newValue, newValue);
        });
        const opacityProxy = { opacity: 1 };
        macBookProFolder.add(opacityProxy, 'opacity', 0, 1, 0.01).name('Opacity').onChange((newValue: number) => {
          // Update the actual object's opacity in the listener
          macBookPro.scene.traverse((child: any) => {
            if (child instanceof Mesh) {
              child.material.opacity = newValue; // Set your desired opacity here
              child.material.transparent = true; // Ensure transparency is enabled for opacity to take effect
              child.material.needsUpdate = true; // Mark the material for update
            }
          });
        });
        const rotateXProxy = { rotation: 0 };
        macBookProFolder.add(rotateXProxy, 'rotation', 0, 6.285, 0.001).name('RotateX').onChange((newValue: number) => {
          macBookPro.scene.traverse((child: Object3D) => {
            if (child.name === 'Display') {
              const macBookProDisplay = child as Mesh;
              macBookProDisplay.rotation.x = newValue;
            }
          });
        });
        // Mark GUI setup as done
        isGuiSetupDone.current = true;
      }
      return null; // This component does not render anything itself
    }}
  </DatGuiWrapper> */}
    {/* <pointLight position={[-10, -10, -10]} color="#636363" intensity={2000} />
    <pointLight position={[10, 10, 10]} color="#636363" intensity={2000} /> */}
    <primitive object={macBookPro.scene} ref={innerRef} />
  </>
);
};



export const CageModel: React.FC<{
  cage: any;
  innerRef?: React.Ref<Mesh>;
}> = ({ cage, innerRef }) => {
  const { gl } = useThree(); // Access the WebGLRenderer instance as 'gl'

  // Ref to track if the GUI setup has been done
  const isGuiSetupDone = useRef(false);

  const cageRef = useRef<Mesh>(null);

  useEffect(() => {
    // Set initial Cage model properties if needed
    // For example, setting the scale or initial position
    if (cage && cage.scene) {
      cage.scene.scale.set(1, 1, 1); // Adjust scale as needed
      cage.scene.position.set(0, 0, 0); // Adjust position as needed
    }

    // If there are specific parts of the cage model that need to be adjusted or hidden,
    // you can traverse the model and make those adjustments here.
    cage.scene.traverse((child: Object3D) => {
      if (child instanceof Mesh) {
        // Example: Adjusting material properties
        // child.material.opacity = 0.5;
        // child.material.transparent = true;
      }
    });

  }, [cage, gl]);

  return (
    <>
    {/* <DatGuiWrapper>
      {(gui, addFolderSafely) => {
        // Use the gui instance here to add your controls
        // This function will only be executed on the client side
        if (gui && !isGuiSetupDone.current) {
          //console.log("Adding macBookPro controls to GUI");
          const dummyFolder = addFolderSafely('.');const dummy2Folder = addFolderSafely('..');
          const cageFolder = addFolderSafely('cage')
          cageFolder.add(cage.scene.position, 'x').min(-7).max(7).step(0.01).name('Position X')
          cageFolder.add(cage.scene.position, 'y').min(-7).max(7).step(0.01).name('Position Y')
          cageFolder.add(cage.scene.position, 'z').min(-7).max(7).step(0.01).name('Position Z')
          cageFolder.add(cage.scene.rotation, 'x').min(-7).max(7).step(0.01).name('Rotation X')
          cageFolder.add(cage.scene.rotation, 'y').min(-7).max(7).step(0.01).name('Rotation Y')
          cageFolder.add(cage.scene.rotation, 'z').min(-7).max(7).step(0.01).name('Rotation Z')
          const scaleProxy = { scale: 1 };
          cageFolder.add(scaleProxy, 'scale', 0.1, 15, 0.01).name('Scale XYZ').onChange((newValue: number) => {
            // Update the actual object's scale in the listener
            cage.scene.scale.set(newValue, newValue, newValue);
          });
          const opacityProxy = { opacity: 1 };
          cageFolder.add(opacityProxy, 'opacity', 0, 1, 0.01).name('Model Opacity').onChange((newValue: number) => {
            // Update the actual object's opacity in the listener
            cage.scene.traverse((child: any) => {
              if (child instanceof Mesh) {
                child.material.opacity = newValue; // Set your desired opacity here
                child.material.transparent = true; // Ensure transparency is enabled for opacity to take effect
                child.material.needsUpdate = true; // Mark the material for update
              }
            });
          });
          // Mark GUI setup as done
          isGuiSetupDone.current = true;
        }
        return null; // This component does not render anything itself
      }}
    </DatGuiWrapper> */}
      <pointLight position={[-10, -10, -10]} color="#636363" intensity={2000} />
      <pointLight position={[10, 10, 10]} color="#636363" intensity={2000} />
      <primitive object={cage.scene} ref={innerRef} />
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