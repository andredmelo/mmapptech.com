import { createContext, useContext, useRef } from 'react';
import ScrollSmoother from "gsap/ScrollSmoother";

interface AppContextType {
  href: string;
  setHref: (href: string) => void;
  smoother: React.MutableRefObject<ScrollSmoother | undefined>;
}

// Initialize the context with default values
export const AppContext = createContext<AppContextType>({
  href: '',
  setHref: () => {},
  smoother: { current: undefined },
});

// Custom hook to use the AppContext
export const useAppContext = () => useContext(AppContext);