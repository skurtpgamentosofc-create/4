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
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          <span className="text-foreground">
            TRANSFORME COMPLETAMENTE SUA INTIMIDADE E{" "}
          </span>
          <span className="text-primary animate-pulse">
            EXPERIMENTE SENSAÇÕES ORGÁSTICAS COMO NUNCA ANTES
          </span>
          <span className="text-2xl md:text-3xl"> 🔥</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Descubra os Segredos da Massagem Orgástica que Estão Transformando a vida Sexual de Milhares de Pessoas
        </p>

        <div className="relative w-full max-w-2xl mx-auto">
          <video 
            src="https://cursospromocionaishoje.online/wp-content/uploads/2025/06/44566191a.webm"
            autoPlay
            muted
            loop
            playsInline
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>

        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center justify-center gap-3 text-foreground">
              <CheckCircle className="w-6 h-6 text-secondary" />
              <span className="text-lg font-medium">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6">
          <Button 
            variant="cta" 
            size="xl" 
            className="w-full max-w-md animate-bounce"
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