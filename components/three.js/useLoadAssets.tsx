import { useState, useEffect } from 'react';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TextureLoader, Texture } from 'three';

// Define a type for the hook's return value
type LoadAssetsReturnType = {
  iPhone: GLTF | null;
  iPad: GLTF | null;
  textures: {
    iPhone_texture_1: Texture | null,
    iPhone_texture_2: Texture | null,
    iPhone_texture_3: Texture | null,
    iPhone_texture_4: Texture | null,
    iPhone_texture_5: Texture | null,
    iPhone_texture_6: Texture | null,
    newiPhoneTextureName: Texture | null,
    iPad_texture_1: Texture | null,
    iPad_texture_2: Texture | null,
    iPad_texture_3: Texture | null,
    iPad_texture_4: Texture | null,
    iPad_texture_5: Texture | null,
    newiPadTextureName: Texture | null
  };
};

export const useLoadAssets = (): LoadAssetsReturnType => {
  const [iPhone, setIPhone] = useState<GLTF | null>(null);
  const [iPad, setIPad] = useState<GLTF | null>(null);
  const [textures, setTextures] = useState<{
    // Define the textures state here as in your original code
    iPhone_texture_1: Texture | null,
    iPhone_texture_2: Texture | null,
    iPhone_texture_3: Texture | null,
    iPhone_texture_4: Texture | null,
    iPhone_texture_5: Texture | null,
    iPhone_texture_6: Texture | null,
    newiPhoneTextureName: Texture | null,
    iPad_texture_1: Texture | null,
    iPad_texture_2: Texture | null,
    iPad_texture_3: Texture | null,
    iPad_texture_4: Texture | null,
    iPad_texture_5: Texture | null,
    newiPadTextureName: Texture | null
    
  }>({
    // Initial state
    iPhone_texture_1: null,
    iPhone_texture_2: null,
    iPhone_texture_3: null,
    iPhone_texture_4: null,
    iPhone_texture_5: null,
    iPhone_texture_6: null,
    newiPhoneTextureName: null,
    iPad_texture_1: null,
    iPad_texture_2: null,
    iPad_texture_3: null,
    iPad_texture_4: null,
    iPad_texture_5: null,
    newiPadTextureName: null,
  });

  useEffect(() => {
    const loadModelsAndTextures = async () => {
      // Your loading logic here
      const iPhoneLoader = new GLTFLoader(); 
      const iPadLoader = new GLTFLoader();
      const textureLoader = new TextureLoader();
      const iPhoneModel = await iPhoneLoader.loadAsync("/3d-models/iPhone_14_Pro_Max.glb");
      const iPadModel = await iPadLoader.loadAsync("/3d-models/iPad_Pro_4th.glb");
      const iPhoneTexture1 = await textureLoader.loadAsync("/images/features/officialsJudge/featuresOfficialsJudge-1.webp");
      const iPhoneTexture2 = await textureLoader.loadAsync("/images/features/officialsJudge/featuresOfficialsJudge-2.webp");
      const iPhoneTexture3 = await textureLoader.loadAsync("/images/features/officialsJudge/featuresOfficialsJudge-3.webp");
      const iPhoneTexture4 = await textureLoader.loadAsync("/images/features/officialsJudge/featuresOfficialsJudge-4.webp");
      const iPhoneTexture5 = await textureLoader.loadAsync("/images/features/officialsJudge/featuresOfficialsJudge-5.webp");
      const iPhoneTexture6 = await textureLoader.loadAsync("/images/features/officialsJudge/featuresOfficialsJudge-6.webp");
      const iPadTexture1 = await textureLoader.loadAsync("/images/features/officialsRecordKeeper/featuresOfficialsRecordKeeper-1.webp");
      const iPadTexture2 = await textureLoader.loadAsync("/images/features/officialsRecordKeeper/featuresOfficialsRecordKeeper-2.webp");
      const iPadTexture3 = await textureLoader.loadAsync("/images/features/officialsRecordKeeper/featuresOfficialsRecordKeeper-3.webp");
      const iPadTexture4 = await textureLoader.loadAsync("/images/features/officialsRecordKeeper/featuresOfficialsRecordKeeper-4.webp");
      const iPadTexture5 = await textureLoader.loadAsync("/images/features/officialsRecordKeeper/featuresOfficialsRecordKeeper-5.webp");

      setIPhone(iPhoneModel);
      setIPad(iPadModel);
      setTextures({ iPhone_texture_1: iPhoneTexture1, iPhone_texture_2: iPhoneTexture2, iPhone_texture_3: iPhoneTexture3, iPhone_texture_4: iPhoneTexture4, iPhone_texture_5: iPhoneTexture5, iPhone_texture_6: iPhoneTexture6, newiPhoneTextureName: iPhoneTexture1, iPad_texture_1: iPadTexture1, iPad_texture_2: iPadTexture2, iPad_texture_3: iPadTexture3, iPad_texture_4: iPadTexture4, iPad_texture_5: iPadTexture5, newiPadTextureName: iPadTexture1 });
    };

    loadModelsAndTextures();
  }, []);

  return { iPhone, iPad, textures };
};