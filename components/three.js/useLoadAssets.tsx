import { useState, useEffect } from 'react';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TextureLoader, Texture, VideoTexture } from 'three';

// Define a type for the hook's return value
type LoadAssetsReturnType = {
  iPhone: GLTF | null;
  iPad: GLTF | null;
  macBookPro: GLTF | null;
  cage: GLTF | null;
  textures: {
    iPhone_texture_1: Texture | null,
    iPhone_texture_2: Texture | null,
    iPhone_texture_3: Texture | null,
    iPhone_texture_4: Texture | null,
    iPhone_texture_5: Texture | null,
    newiPhoneTextureName: Texture | null,
    iPad_texture_1: Texture | null,
    iPad_texture_2: Texture | null,
    iPad_texture_3: Texture | null,
    iPad_texture_4: Texture | null,
    iPad_texture_5: Texture | null,
    newiPadTextureName: Texture | null,
    macBookPro_texture_1: Texture | null,
    macBookPro_texture_2: Texture | null,
    macBookPro_texture_3: Texture | null,
    macBookPro_texture_4: Texture | null,
    macBookPro_texture_5: Texture | null,
    newMacBookProTextureName: Texture | null
  };
};

export const useLoadAssets = (): LoadAssetsReturnType => {
  const [iPhone, setIPhone] = useState<GLTF | null>(null);
  const [iPad, setIPad] = useState<GLTF | null>(null);
  const [macBookPro, setMacBookPro] = useState<GLTF | null>(null);
  const [cage, setCage] = useState<GLTF | null>(null);
  const [textures, setTextures] = useState<{
    // Define the textures state here as in your original code
    iPhone_texture_1: Texture | null,
    iPhone_texture_2: Texture | null,
    iPhone_texture_3: Texture | null,
    iPhone_texture_4: Texture | null,
    iPhone_texture_5: Texture | null,
    newiPhoneTextureName: Texture | null,
    iPad_texture_1: Texture | null,
    iPad_texture_2: Texture | null,
    iPad_texture_3: Texture | null,
    iPad_texture_4: Texture | null,
    iPad_texture_5: Texture | null,
    newiPadTextureName: Texture | null,
    macBookPro_texture_1: Texture | null,
    macBookPro_texture_2: Texture | null,
    macBookPro_texture_3: Texture | null,
    macBookPro_texture_4: Texture | null,
    macBookPro_texture_5: Texture | null,
    newMacBookProTextureName: Texture | null
  }>({
    // Initial state
    iPhone_texture_1: null,
    iPhone_texture_2: null,
    iPhone_texture_3: null,
    iPhone_texture_4: null,
    iPhone_texture_5: null,
    newiPhoneTextureName: null,
    iPad_texture_1: null,
    iPad_texture_2: null,
    iPad_texture_3: null,
    iPad_texture_4: null,
    iPad_texture_5: null,
    newiPadTextureName: null,
    macBookPro_texture_1: null,
    macBookPro_texture_2: null,
    macBookPro_texture_3: null,
    macBookPro_texture_4: null,
    macBookPro_texture_5: null,
    newMacBookProTextureName: null
  });

  useEffect(() => {
    const loadModelsAndTextures = async () => {
      // Your loading logic here
      const iPhoneLoader = new GLTFLoader(); 
      const iPadLoader = new GLTFLoader();
      const macBookProLoader = new GLTFLoader();
      const cageLoader = new GLTFLoader();
      const textureLoader = new TextureLoader();

      const iPhoneModel = await iPhoneLoader.loadAsync("/3d-models/iPhone_14_Pro_Max.glb");
      const iPadModel = await iPadLoader.loadAsync("/3d-models/iPad_Pro_4th.glb");
      const macBookProModel = await macBookProLoader.loadAsync("/3d-models/macBook_Pro_16.glb");
      const cageModel = await cageLoader.loadAsync("/3d-models/cage.glb");
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
      const macBookProTexture1 = await textureLoader.loadAsync("/images/features/federationsDashboard/featuresFederationsDashboard-1.webp");
      const macBookProTexture2 = await textureLoader.loadAsync("/images/features/federationsDashboard/featuresFederationsDashboard-2.webp");
      const macBookProTexture3 = await textureLoader.loadAsync("/images/features/federationsDashboard/featuresFederationsDashboard-3.webp");
      const macBookProTexture4 = await textureLoader.loadAsync("/images/features/federationsDashboard/featuresFederationsDashboard-4.webp");
      const macBookProTexture5 = await textureLoader.loadAsync("/images/features/federationsDashboard/featuresFederationsDashboard-5.webp");

      const iPhoneVideoSources = [
        "/videos/features/officialsJudge/featuresOfficialsJudge-1.mp4",
        "/videos/features/officialsJudge/featuresOfficialsJudge-2.mp4",
        "/videos/features/officialsJudge/featuresOfficialsJudge-3.mp4",
        "/videos/features/officialsJudge/featuresOfficialsJudge-4.mp4",
        "/videos/features/officialsJudge/featuresOfficialsJudge-5.mp4"
      ];
      // Map over the sources to create video textures
      const iPhoneVideoTextures = await Promise.all(iPhoneVideoSources.map(async (src) => {
        const video = document.createElement('video');
        video.src = src;
        video.loop = true;
        video.muted = true;
        //video.playsInline = true; // This doesn't seem to work
        video.setAttribute("playsinline", ""); // This is the magic attribute that makes them play on mobile browsers !!!
        //video.pause();
        await video.play(); // Consider autoplay policies in modern browsers
        return new VideoTexture(video);
      }));

      const iPadVideoSources = [
        "/videos/features/officialsRecordKeeper/featuresOfficialsRecordKeeper-1.mp4",
        "/videos/features/officialsRecordKeeper/featuresOfficialsRecordKeeper-2.mp4",
        "/videos/features/officialsRecordKeeper/featuresOfficialsRecordKeeper-3.mp4",
        "/videos/features/officialsRecordKeeper/featuresOfficialsRecordKeeper-4.mp4",
        "/videos/features/officialsRecordKeeper/featuresOfficialsRecordKeeper-5.mp4"
      ];
      // Map over the sources to create video textures
      const iPadVideoTextures = await Promise.all(iPadVideoSources.map(async (src) => {
        const video = document.createElement('video');
        video.src = src;
        video.loop = true;
        video.muted = true;
        //video.playsInline = true; // This doesn't seem to work
        video.setAttribute("playsinline", ""); // This is the magic attribute that makes them play on mobile browsers !!!
        //video.pause();
        await video.play(); // Consider autoplay policies in modern browsers
        return new VideoTexture(video);
      }));

      // Define your video sources
      const macBookProVideoSources = [
        "/videos/features/federationsDashboard/featuresFederationsDashboard-1.mp4",
        "/videos/features/federationsDashboard/featuresFederationsDashboard-2.mp4",
        "/videos/features/federationsDashboard/featuresFederationsDashboard-3.mp4",
        "/videos/features/federationsDashboard/featuresFederationsDashboard-4.mp4",
        "/videos/features/federationsDashboard/featuresFederationsDashboard-5.mp4"
      ];
      // Define your image fallback sources
      const macBookProImageSources = [
        "/images/features/federationsDashboard/featuresFederationsDashboard-1.webp",
        "/images/features/federationsDashboard/featuresFederationsDashboard-2.webp",
        "/images/features/federationsDashboard/featuresFederationsDashboard-3.webp",
        "/images/features/federationsDashboard/featuresFederationsDashboard-4.webp",
        "/images/features/federationsDashboard/featuresFederationsDashboard-5.webp"
      ];
      // Map over the sources to create video textures
      const macBookProVideoTextures = await Promise.all(macBookProVideoSources.map(async (src) => {
        const video = document.createElement('video');
        video.src = src;
        video.loop = true;
        video.muted = true;
        //video.playsInline = true; // This doesn't seem to work
        video.setAttribute("playsinline", ""); // This is the magic attribute that makes them play on mobile browsers !!!
        //video.pause();
        await video.play(); // Consider autoplay policies in modern browsers
        return new VideoTexture(video);
      }));
      /* const macBookProVideoTextures = await Promise.all(macBookProVideoSources.map(async (src, index) => {
        const video = document.createElement('video');
        video.src = src;
        video.loop = true;
        video.muted = true;
        video.setAttribute("playsinline", "");

        try {
          await video.play(); // Attempt to play to check if autoplay is possible
          video.pause(); // Pause immediately if autoplay is successful, to not actually play
          return new VideoTexture(video); // Return the video texture if successful
        } catch (error) {
          console.error(`Autoplay failed or video couldn't be played: ${src}. Error: ${error}. Loading fallback image.`);
          // Load fallback image if autoplay fails or video cannot be played
          const textureLoader = new TextureLoader();
          const fallbackSrc = macBookProImageSources[index];
          return textureLoader.loadAsync(fallbackSrc);
        }

        const videoTexturePromise = new Promise<VideoTexture | Texture>((resolve, reject) => {
          video.addEventListener('loadeddata', () => {
            resolve(new VideoTexture(video));
          }, { once: true });

          video.addEventListener('error', async () => {
            console.error(`Error loading video: ${src}. Falling back to image.`);
            // Fallback to an image texture. Adjust the path as necessary.
            const textureLoader = new TextureLoader();
            const fallbackSrc = macBookProImageSources[index];
            textureLoader.load(fallbackSrc, (texture) => {
              resolve(texture); // Resolve with the fallback texture
            }, undefined, (err) => {
              reject(err); // Reject the promise if there's an error loading the fallback image
            });
          }, { once: true });
        });

        // Attempt to play the video. This is necessary to trigger the 'loadeddata' event.
        video.play().catch((error) => {
          console.error("Error attempting to play video:", error);
          // Error handling for failed play attempt can be done here if needed.
        });

        return videoTexturePromise;
      })); */

      setIPhone(iPhoneModel);
      setIPad(iPadModel);
      setMacBookPro(macBookProModel);
      setCage(cageModel);
      setTextures({
        // Image textures
        /* iPhone_texture_1: iPhoneTexture1,
        iPhone_texture_2: iPhoneTexture2,
        iPhone_texture_3: iPhoneTexture3,
        iPhone_texture_4: iPhoneTexture4,
        iPhone_texture_5: iPhoneTexture5,
        newiPhoneTextureName: iPhoneTexture1, */
        /* iPad_texture_1: iPadTexture1,
        iPad_texture_2: iPadTexture2,
        iPad_texture_3: iPadTexture3,
        iPad_texture_4: iPadTexture4,
        iPad_texture_5: iPadTexture5,
        newiPadTextureName: iPadTexture1, */
        /* macBookPro_texture_1: macBookProTexture1,
        macBookPro_texture_2: macBookProTexture2,
        macBookPro_texture_3: macBookProTexture3,
        macBookPro_texture_4: macBookProTexture4,
        macBookPro_texture_5: macBookProTexture5,
        newMacBookProTextureName: macBookProTexture1, */
        // Video textures
        iPhone_texture_1: iPhoneVideoTextures[0],// Use the video textures for your models
        iPhone_texture_2: iPhoneVideoTextures[1],
        iPhone_texture_3: iPhoneVideoTextures[2],
        iPhone_texture_4: iPhoneVideoTextures[3],
        iPhone_texture_5: iPhoneVideoTextures[4],
        newiPhoneTextureName: iPhoneVideoTextures[0],
        iPad_texture_1: iPadVideoTextures[0],// Use the video textures for your models
        iPad_texture_2: iPadVideoTextures[1],
        iPad_texture_3: iPadVideoTextures[2],
        iPad_texture_4: iPadVideoTextures[3],
        iPad_texture_5: iPadVideoTextures[4],
        newiPadTextureName: iPadVideoTextures[0],
        macBookPro_texture_1: macBookProVideoTextures[0],// Use the video textures for your models
        macBookPro_texture_2: macBookProVideoTextures[1],
        macBookPro_texture_3: macBookProVideoTextures[2],
        macBookPro_texture_4: macBookProVideoTextures[3],
        macBookPro_texture_5: macBookProVideoTextures[4],
        newMacBookProTextureName: macBookProVideoTextures[0]
      });
    };

    loadModelsAndTextures();
  }, []);

  return { iPhone, iPad, macBookPro, cage, textures };
};