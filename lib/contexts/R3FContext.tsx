import React, { Dispatch, SetStateAction } from 'react';

// Create a context with a default value (if any)
export const MacBookProTextureContext = React.createContext<{
  macBookProTextureName: string;
  setMacBookProTextureName: Dispatch<SetStateAction<string>>;
}>({
  macBookProTextureName: 'macBookProTexture1', // Default value for textureName
  setMacBookProTextureName: () => {}, // Default noop function for setTextureName
});

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
  iPhoneOpacity: 0, // Default opacity value for iPhone
  setiPhoneOpacity: () => {}, // Default noop function for setIPhoneOpacity
});

export const IPadOpacityContext = React.createContext<{
  iPadOpacity: number;
  setiPadOpacity: Dispatch<SetStateAction<number>>;
}>({
  iPadOpacity: 0, // Default opacity value for iPad
  setiPadOpacity: () => {}, // Default noop function for setIPadOpacity
});

export const MacBookProOpacityContext = React.createContext<{
  macBookProOpacity: number;
  setMacBookProOpacity: Dispatch<SetStateAction<number>>;
}>({
  macBookProOpacity: 0, // Default opacity value for macBookPro
  setMacBookProOpacity: () => {}, // Default noop function for setMacBookProOpacity
});