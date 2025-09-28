import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

interface AppProviderProps {
  children: React.ReactNode;
}

interface AppContextType {
  darkMode: boolean,
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  // Sync darkMode state with <html> class
  useEffect(() => {
    const root = document.documentElement; // <html>
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const values = { darkMode, setDarkMode };

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}

