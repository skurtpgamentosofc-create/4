"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export const Header = () => {
  const [timeLeft, setTimeLeft] = useState(514); // 8:34 em segundos
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          return 600; // Reinicia quando chega a zero
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const today = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <header className="w-full bg-primary text-primary-foreground py-3 px-2 sm:px-4 text-center sticky top-0 z-50">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm font-bold">📅 {today}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
          <span className="text-xs sm:text-sm font-bold">
            Oferta termina em {minutes}:{seconds.toString().padStart(2, '0')}
          </span>
          <span className="text-xs sm:text-sm font-bold animate-pulse">⚡</span>
        </div>
      </div>
    </header>
  );
};