import React, { createContext, useContext, useState, ReactNode } from 'react';

const HeroIntroContext = createContext({
  isHeroIntro3DComplete: false,
  setHeroIntro3DComplete: (isComplete: boolean) => {},
});

export const useHeroIntroContext = () => useContext(HeroIntroContext);

interface HeroIntroProviderProps {
  children: ReactNode; // Correctly type 'children' here
}

export const HeroIntroProvider: React.FC<HeroIntroProviderProps> = ({ children }) => {
  const [isHeroIntro3DComplete, setHeroIntro3DComplete] = useState(false);

  return (
    <HeroIntroContext.Provider value={{ isHeroIntro3DComplete, setHeroIntro3DComplete }}>
      {children}
    </HeroIntroContext.Provider>
  );
};




/* import React, { createContext, useContext, useState, ReactNode } from 'react';

interface HeroIntroContextProps {
  isHeroIntro3DComplete: boolean;
  setHeroIntro3DComplete: (isComplete: boolean) => void;
}

// Note: No 'children' in the context value
const HeroIntroContext = createContext<HeroIntroContextProps>({
  isHeroIntro3DComplete: false,
  setHeroIntro3DComplete: () => {},
});

export const useHeroIntroContext = () => useContext(HeroIntroContext);

interface HeroIntroProviderProps {
  children: ReactNode; // Correctly type 'children' here
}

export const HeroIntroProvider: React.FC<HeroIntroProviderProps> = ({ children }) => {
  const [isHeroIntro3DComplete, setHeroIntro3DComplete] = useState(false);

  return (
    <HeroIntroContext.Provider value={{ isHeroIntro3DComplete, setHeroIntro3DComplete }}>
      {children}
    </HeroIntroContext.Provider>
  );
}; */