'use client';
import { createContext, useContext } from 'react';
import { defaultContent, type PortfolioContent } from '@/lib/content-defaults';
const Context = createContext<PortfolioContent>(defaultContent);
export function ContentProvider({ content, children }: { content: PortfolioContent; children: React.ReactNode }) {
  return <Context.Provider value={content}>{children}</Context.Provider>;
}
export const useContent = () => useContext(Context);
