import { createContext, useState } from "react";

// Create context with default values for sidebar and scroll states
export const NavigationContext = createContext({
  sidebarOpen: false,
  setSidebarOpen: () => {},
  isScrolled: false,
  setIsScrolled: () => {},
  isHidden: false,
  setIsHidden: () => {},
  lastScrollY: 0,
  setLastScrollY: () => {},
});
