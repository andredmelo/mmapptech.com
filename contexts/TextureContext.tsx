import React, { Dispatch, SetStateAction } from 'react';

// Create a context with a default value (if any)
export const IPhoneTextureContext = React.createContext<{
  iPhoneTextureName: string;
  setiPhoneTextureName: Dispatch<SetStateAction<string>>;
}>({
  iPhoneTextureName: 'iPhoneTexture1', // Default value for textureName
  setiPhoneTextureName: () => {}, // Default noop function for setTextureName
});

// Create a context with a default value (if any)
export const IPadTextureContext = React.createContext<{
  iPadTextureName: string;
  setiPadTextureName: Dispatch<SetStateAction<string>>;
}>({
  iPadTextureName: 'iPadTexture1', // Default value for textureName
  setiPadTextureName: () => {}, // Default noop function for setTextureName
});

export const IPhoneOpacityContext = React.createContext<{
  iPhoneOpacity: number;
  setiPhoneOpacity: Dispatch<SetStateAction<number>>;
}>({
  iPhoneOpacity: 1, // Default opacity value for iPhone
  setiPhoneOpacity: () => {}, // Default noop function for setIPhoneOpacity
});

export const IPadOpacityContext = React.createContext<{
  iPadOpacity: number;
  setiPadOpacity: Dispatch<SetStateAction<number>>;
}>({
  iPadOpacity: 1, // Default opacity value for iPad
  setiPadOpacity: () => {}, // Default noop function for setIPadOpacity
});
