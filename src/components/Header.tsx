"use client";

import { Button } from "@/components/ui/button";
export const Header = () => {
  return <header className="w-full bg-primary text-primary-foreground py-3 px-4 text-center sticky top-0 z-50">
      <div className="flex items-center justify-center gap-2">
        <span className="text-sm font-bold animate-pulse">⚡</span>
        <span className="text-sm font-bold">Desconto só HOJE nessa página !!! </span>
        <span className="text-sm font-bold animate-pulse">⚡</span>
      </div>
    </header>;
};