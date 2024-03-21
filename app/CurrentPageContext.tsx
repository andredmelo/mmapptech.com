import { createContext, useContext } from 'react';

interface CurrentPageContextType {
  currentPage: string;
  setCurrentPage: (currentPage: string) => void;
}

// Create a context with a default empty value and updater function
export const CurrentPageContext = createContext<CurrentPageContextType>({ currentPage: '', setCurrentPage: () => {} });

// Custom hook to use the CurrentPageContext
export const useCurrentPage = () => useContext(CurrentPageContext);