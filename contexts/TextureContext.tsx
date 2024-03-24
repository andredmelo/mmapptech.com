import React, { Dispatch, SetStateAction } from 'react';

// Create a context with a default value (if any)
const TextureContext = React.createContext<{
  textureName: string;
  setTextureName: Dispatch<SetStateAction<string>>;
}>({
  textureName: 'iPhoneTexture1', // Default value for textureName
  setTextureName: () => {}, // Default noop function for setTextureName
});

export default TextureContext;