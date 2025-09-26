import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const purchaseData = [
  { name: "Maria Silva", location: "São Paulo, SP", time: "2 minutos atrás" },
  { name: "João Santos", location: "Rio de Janeiro, RJ", time: "5 minutos atrás" },
  { name: "Ana Costa", location: "Belo Horizonte, MG", time: "8 minutos atrás" },
  { name: "Carlos Lima", location: "Brasília, DF", time: "12 minutos atrás" },
  { name: "Fernanda Oliveira", location: "Salvador, BA", time: "15 minutos atrás" },
  { name: "Roberto Pereira", location: "Curitiba, PR", time: "18 minutos atrás" },
  { name: "Juliana Mendes", location: "Fortaleza, CE", time: "22 minutos atrás" },
  { name: "Paulo Rodrigues", location: "Recife, PE", time: "25 minutos atrás" }
];

export const PurchaseNotification = () => {
  const [currentNotification, setCurrentNotification] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      setIsVisible(true);
      
      // Hide after 4 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
      
      // Change notification after hiding
      setTimeout(() => {
        setCurrentNotification((prev) => 
          prev === purchaseData.length - 1 ? 0 : prev + 1
        );
      }, 4500);
    };

    // Show first notification after 3 seconds
    const initialTimer = setTimeout(showNotification, 3000);
    
    // Then show every 8 seconds
    const interval = setInterval(showNotification, 8000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const notification = purchaseData[currentNotification];

  return (
    <div
      className={cn(
        "fixed top-20 left-4 z-50 max-w-sm transition-all duration-500 ease-out transform",
        isVisible 
          ? "translate-x-0 opacity-100 scale-100" 
          : "-translate-x-full opacity-0 scale-95"
      )}
    >
      <div className="bg-card border border-border rounded-lg shadow-lg p-4 smooth-transition">
        <div className="flex items-center space-x-3">
          {/* Green dot indicator */}
          <div className="flex-shrink-0">
            <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
          </div>
          
          {/* Notification content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-sm font-semibold text-card-foreground truncate">
                {notification.name}
              </span>
              <span className="text-xs text-muted-foreground">
                comprou
              </span>
            </div>
            <p className="text-xs text-primary font-medium">
              Curso Completo de Técnicas Íntimas
            </p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-muted-foreground truncate">
                {notification.location}
              </span>
              <span className="text-xs text-muted-foreground">
                {notification.time}
              </span>
            </div>
          </div>
        </div>
        
        {/* Small arrow pointing to content */}
        <div className="absolute -right-1 top-4 w-2 h-2 bg-card border-r border-b border-border transform rotate-45"></div>
      </div>
    </div>
  );
};