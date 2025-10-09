"use client";

import React, { createContext, useContext, useRef } from "react";

interface AppContextType {
  containerRef: React.RefObject<HTMLDivElement | null>;
  nineDotsLeftRef: React.RefObject<HTMLDivElement | null>;
  performanceSolutionRef: React.RefObject<HTMLDivElement | null>;
  whyChooseSectionRef: React.RefObject<HTMLDivElement | null>;
  chooseORef: React.RefObject<HTMLDivElement | null>;
  thirdContentRef: React.RefObject<HTMLDivElement | null>;
  threeDotDestinationRef: React.RefObject<HTMLDivElement | null>;
  navbarRef: React.RefObject<HTMLDivElement | null>;
  nineDotsRightRef: React.RefObject<HTMLDivElement | null>;
  mainDivContinerRef: React.RefObject<HTMLDivElement | null>;
  heroSectionRef: React.RefObject<HTMLDivElement | null>;
  toolsRef: React.RefObject<HTMLDivElement | null>;
  secondContentRef: React.RefObject<HTMLDivElement | null>;
  animationRef: React.RefObject<any | null>;
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
  const nineDotsLeftRef = useRef<HTMLDivElement>(null);
  const performanceSolutionRef = useRef<HTMLDivElement>(null);
  const whyChooseSectionRef = useRef<HTMLDivElement>(null);
  const chooseORef = useRef<HTMLDivElement>(null);
  const thirdContentRef = useRef<HTMLDivElement>(null);
  const threeDotDestinationRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const nineDotsRightRef = useRef<HTMLDivElement>(null);
  const mainDivContinerRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const secondContentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<any>(null);

  return (
    <AppContext.Provider
      value={{
        containerRef,
        nineDotsLeftRef,
        performanceSolutionRef,
        whyChooseSectionRef,
        chooseORef,
        thirdContentRef,
        threeDotDestinationRef,
        navbarRef,
        nineDotsRightRef,
        mainDivContinerRef,
        heroSectionRef,
        toolsRef,
        secondContentRef,
        animationRef,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
