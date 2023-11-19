'use client';

import { createContext, useContext } from 'react';
import type { SidebarTheme } from './Sidebar';

export type SidebarContext = {
  theme: SidebarTheme;
  isCollapsed: boolean;
};

export const SidebarContext = createContext<SidebarContext | undefined>(undefined);

export function useSidebarContext(): SidebarContext {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error('useSidebarContext should be used within the SidebarContext provider!');
  }

  return context;
}
