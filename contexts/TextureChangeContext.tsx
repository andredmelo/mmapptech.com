import React, { createContext, useContext, useState } from 'react';
import { Object3D } from 'three';

// Define the context shape
interface TextureChangeFunction {
  (target: Object3D, texture: any): void;
}

interface TextureChangeContextType {
  setTextureChangeFunction: (fn: TextureChangeFunction) => void;
  textureChangeFunction: TextureChangeFunction;
}

// Create the context with an empty default value
const TextureChangeContext = createContext<TextureChangeContextType | undefined>(undefined);

// Create a custom hook for easy context consumption
export const useTextureChange = () => {
  const context = useContext(TextureChangeContext);
  if (!context) {
    throw new Error('useTextureChange must be used within a TextureChangeProvider');
  }
  return context;
};

// Provider component
export const TextureChangeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [textureChangeFunction, setTextureChangeFunction] = useState<TextureChangeFunction>(() => () => {});

  return (
    <TextureChangeContext.Provider value={{ setTextureChangeFunction, textureChangeFunction }}>
      {children}
    </TextureChangeContext.Provider>
  );
};