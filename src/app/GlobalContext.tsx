"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

export type GlobalContextType = {
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
};

export const GlobalContext = createContext<GlobalContextType | null>(null);

export default function ContextProvider({ children }: { children: ReactNode }) {
  // const [data, setData] = useState(0)

  const [isDesktop, setIsDesktop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const checkWindowSize = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1024) {
      setIsDesktop(true);
      setIsTablet(false);
      setIsMobile(false);
    } else if (windowWidth >= 768) {
      setIsDesktop(false);
      setIsTablet(true);
      setIsMobile(false);
    } else {
      setIsDesktop(false);
      setIsTablet(false);
      setIsMobile(true);
    }
  };

  useEffect(() => {
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("resize", checkWindowSize);
  }

  return (
    <GlobalContext.Provider
      value={{
        isDesktop,
        isTablet,
        isMobile,
      }}
    >
      <div className="w-full bg-[green]">{children}</div>
    </GlobalContext.Provider>
  );
}

// const checkWindowSize = () => {
//     const windowWidth = window.innerWidth;
//     if (windowWidth >= 1024) {
//         setIsDesktop(true);
//         setIsTablet(false);
//         setIsMobile(false);
//     } else if (windowWidth >= 768) {
//         setIsDesktop(false);
//         setIsTablet(true);
//         setIsMobile(false);
//     } else {
//         setIsDesktop(false);
//         setIsTablet(false);
//         setIsMobile(true);
//     }
// };

// useEffect(() => {
//     checkWindowSize();
//     window.addEventListener("resize", checkWindowSize);

//     return () => {
//         window.removeEventListener("resize", checkWindowSize);
//     };
// }, []);
