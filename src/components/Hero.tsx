"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-massage.jpg";

export const Hero = () => {
  const benefits = [
    "Técnicas Orgásticas passo a passo na prática",
    "Demonstrações Reais em homens e mulheres",
    "Acesso Totalmente Sigiloso"
  ];

  return (
    <section className="hero-gradient min-h-screen flex flex-col items-center justify-center px-4 py-12 relative">
      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          <span className="text-foreground">
            TRANSFORME COMPLETAMENTE SUA INTIMIDADE E{" "}
          </span>
          <span className="text-primary animate-pulse">
            EXPERIMENTE SENSAÇÕES ORGÁSTICAS COMO NUNCA ANTES
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl"> 🔥</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
          Descubra os Segredos da Massagem Orgástica que Estão Transformando a vida Sexual de Milhares de Pessoas
        </p>

        <div className="relative w-full max-w-2xl mx-auto px-2">
          <video 
            src="https://cursospromocionaishoje.online/wp-content/uploads/2025/06/44566191a.webm"
            autoPlay
            muted
            loop
            playsInline
            className="w-full rounded-lg sm:rounded-2xl shadow-2xl"
          />
        </div>

        <div className="space-y-3 sm:space-y-4 px-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center justify-center gap-2 sm:gap-3 text-foreground">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0" />
              <span className="text-sm sm:text-base md:text-lg font-medium text-left sm:text-center">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 sm:gap-6 px-4">
          <Button 
            variant="cta" 
            size="xl" 
            className="w-full max-w-md animate-bounce text-sm sm:text-base"
            onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
          >
            QUERO COMPRAR AGORA! ↓
          </Button>
          
          <ArrowDown className="w-8 h-8 text-secondary animate-bounce" />
        </div>
      </div>
    </section>
  );
};