import { createContext, useContext } from 'react';

interface HrefContextType {
  href: string;
  setHref: (href: string) => void;
}

// Create a context with a default empty value and updater function
export const HrefContext = createContext<HrefContextType>({
  href: '',
  setHref: () => {}
});

// Custom hook to use the HrefContext
export const useHref = () => useContext(HrefContext);