import React, { ReactNode, useEffect, useState, useCallback, useRef } from 'react';

interface DatGuiWrapperProps {
  children: (gui: any, addFolderSafely: (name: string) => any) => ReactNode;
}

const DatGuiWrapper = ({ children }: DatGuiWrapperProps) => {
  const [gui, setGui] = useState<any>(null);
  const foldersRef = useRef<{ [key: string]: any }>({});

  useEffect(() => {
    const loadDatGui = async () => {
      if (typeof window !== 'undefined' && !gui) {
        const datGuiModule = await import('dat.gui');
        const newGui = new datGuiModule.GUI();
        setGui(newGui);
      }
    };

    loadDatGui();

    return () => {
      gui?.destroy();
    };
  }, [gui]);

  const addFolderSafely = useCallback((name: string) => {
    const folders = foldersRef.current;
    if (!folders[name] && gui) {
      const newFolder = gui.addFolder(name);
      folders[name] = newFolder;
      return newFolder;
    }
    return folders[name];
  }, [gui]);

  return <>{gui ? children(gui, addFolderSafely) : null}</>;
};

export default DatGuiWrapper;