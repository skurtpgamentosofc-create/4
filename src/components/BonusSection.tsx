"use client";

import { useState } from "react";
import { Gift, Music, BookOpen, Image, Trophy, FileText, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import bonusMusicasImage from "@/assets/bonus-musicas-tantra.jpg";
import bonusEbookImage from "@/assets/bonus-ebook-libido.png";
import bonusPosicoesImage from "@/assets/bonus-posicoes-sexuais.png";
import bonusDesafiosImage from "@/assets/bonus-desafios-sexuais.png";
import bonus50TonsImage from "@/assets/bonus-50-tons-cinza.png";
import bonusCertificadoImage from "@/assets/bonus-certificado.png";

export const BonusSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const bonuses = [
    {
      id: 1,
      icon: <Music className="w-8 h-8" />,
      title: "Bônus 1",
      description: "Você terá acesso exclusivo a músicas para terapias tântra",
      value: "R$ 27",
      color: "from-blue-500 to-cyan-500",
      image: bonusMusicasImage
    },
    {
      id: 2, 
      icon: <BookOpen className="w-8 h-8" />,
      title: "Bônus 2",
      description: "Você terá acesso exclusivo a um protocolo de alimentos para libido",
      value: "R$ 27",
      color: "from-purple-500 to-pink-500",
      image: bonusEbookImage
    },
    {
      id: 3,
      icon: <Image className="w-8 h-8" />,
      title: "Bônus 3", 
      description: "Tenha todas as posições sexuais na sua mão detalhadas em mais de 500 imagens, se torne um professor ou professora de posições na cama.",
      value: "R$ 27",
      color: "from-orange-500 to-red-500",
      image: bonusPosicoesImage
    },
    {
      id: 4,
      icon: <Trophy className="w-8 h-8" />,
      title: "Bônus 4",
      description: "Ebook com desafios sexuais para se divertir na hora H",
      value: "R$ 27", 
      color: "from-green-500 to-emerald-500",
      image: bonusDesafiosImage
    },
    {
      id: 5,
      icon: <FileText className="w-8 h-8" />,
      title: "Bônus 5",
      description: "A Famosa Trilogia Completa 50 tons de cinza em formato digital para despertar ainda mais sua imaginação e inspirar suas práticas íntimas",
      value: "R$ 27",
      color: "from-gray-600 to-gray-800",
      image: bonus50TonsImage
    },
    {
      id: 6,
      icon: <Award className="w-8 h-8" />,
      title: "Bônus 6", 
      description: "Se você pretende ser um profissional na massagem orgástica, preparamos um certificado válido como premiação para você!",
      value: "R$ 27",
      color: "from-yellow-500 to-orange-500",
      image: bonusCertificadoImage
    }
  ];

  const totalValue = bonuses.length * 27;
  const bonusesPerSlide = 2;
  const totalSlides = Math.ceil(bonuses.length / bonusesPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentBonuses = () => {
    const start = currentSlide * bonusesPerSlide;
    const end = start + bonusesPerSlide;
    return bonuses.slice(start, end);
  };

  return (
    <section className="py-12 sm:py-16 px-4 bg-card">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        <div className="text-center space-y-4 sm:space-y-6">
          <div className="inline-block bg-secondary text-secondary-foreground px-4 sm:px-6 py-2 rounded-full font-bold text-base sm:text-lg animate-pulse">
            Não é só isso!
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-card-foreground px-2">
            Ainda Tem Esses Bônus Com Uma Condição Especial
          </h2>
          
          <div className="w-16 sm:w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* Carrossel */}
        <div className="relative">
          <div className="grid gap-8 md:grid-cols-2">
            {getCurrentBonuses().map((bonus) => (
              <div 
                key={bonus.id}
                className="bg-background/80 p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl smooth-transition group"
              >
                {bonus.image && (
                  <div className="mb-4 w-full h-32 rounded-xl overflow-hidden">
                    <img 
                      src={bonus.image} 
                      alt={bonus.title}
                      className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                    />
                  </div>
                )}
                
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${bonus.color} text-white group-hover:scale-110 smooth-transition`}>
                    {bonus.icon}
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-2">
                      <Gift className="w-5 h-5 text-primary" />
                      <span className="text-lg font-bold text-primary">
                        {bonus.title}
                      </span>
                    </div>
                    
                    <p className="text-card-foreground leading-relaxed text-sm">
                      {bonus.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        VALOR:
                      </span>
                      <span className="text-lg font-bold text-secondary line-through">
                        {bonus.value}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controles do carrossel */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            {/* Indicadores de slide */}
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide 
                      ? "bg-primary scale-125" 
                      : "bg-border hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="text-center space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-8 rounded-2xl border-2 border-primary/50 glow-effect">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-primary">
                🎁 Valor Total dos Bônus
              </h3>
              
              <div className="text-center">
                <span className="text-6xl font-bold text-primary">
                  R$ {totalValue.toLocaleString('pt-BR')}
                </span>
                <p className="text-lg text-card-foreground mt-2">
                  em bônus exclusivos inclusos no curso!
                </p>
              </div>

              <div className="bg-background/50 p-4 rounded-lg">
                <p className="text-card-foreground font-semibold">
                  🔥 Mas você não paga nada a mais por isso!
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  Todos os bônus são liberados automaticamente após a compra
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-background/50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary">110+</div>
              <div className="text-sm text-muted-foreground">Vídeo Aulas</div>
            </div>
            <div className="bg-background/50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-secondary">6</div>
              <div className="text-sm text-muted-foreground">Bônus Exclusivos</div>
            </div>
            <div className="bg-background/50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-accent">∞</div>
              <div className="text-sm text-muted-foreground">Acesso Vitalício</div>
            </div>
            <div className="bg-background/50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary">7</div>
              <div className="text-sm text-muted-foreground">Dias Garantia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};