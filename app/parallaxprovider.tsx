"use client";
import { ParallaxProvider } from "react-scroll-parallax";

import { createContext } from "react";

export default function ParallaxClientProvider({ children }: { children: React.ReactNode }) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}
