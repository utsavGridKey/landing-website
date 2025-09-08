"use client";

import React, { createContext, useContext, useRef } from "react";

interface AppContextType {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export const AppContext = createContext<AppContextType | null>(null);

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <AppContext.Provider value={{ containerRef }}>
      {children}
    </AppContext.Provider>
  );
}
