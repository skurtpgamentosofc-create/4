"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, Play, Users, Award } from "lucide-react";

export const WhyBuyCourse = () => {
  const techniques = [
    {
      icon: "🔥",
      title: "Massagem Tântrica",
      description: "uma arte ancestral para desbloquear energia, ampliar o prazer e despertar uma nova consciência do corpo e da sexualidade"
    },
    {
      icon: "💧", 
      title: "Massagem Nuru",
      description: "uma explosão de contato corporal com deslizamentos envolventes"
    },
    {
      icon: "🔥",
      title: "Massagem Orgástica", 
      description: "para levar o prazer a níveis nunca antes experimentados"
    },
    {
      icon: "✨",
      title: "Massagem Sensitiva e Erótica",
      description: "para despertar cada centímetro do corpo com suavidade e intensidade"
    },
    {
      icon: "💫",
      title: "Massagem Lingam",
      description: "(voltada ao público feminino aplicando no parceiro) – para quem deseja ir além na conexão íntima"
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        <div className="text-center space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary px-2">
            PORQUE EU DEVERIA COMPRAR ESTE CURSO?
          </h2>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <div className="bg-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-border">
            <p className="text-base sm:text-lg text-card-foreground leading-relaxed mb-4 sm:mb-6">
              O que você está prestes a descobrir não é só mais uma técnica genérica de massagem.
            </p>
            
            <p className="text-lg text-card-foreground leading-relaxed mb-6">
              É uma jornada profunda e transformadora, com técnicas exclusivas que despertam zonas do corpo que estavam adormecidas — fazendo o prazer explodir de dentro pra fora, de forma intensa, consciente e libertadora.
            </p>

            <p className="text-lg text-card-foreground leading-relaxed mb-6">
              Enquanto a maioria dos cursos por aí cobra até R$497,00 (ou mais!) por conteúdos rasos, com demonstrações em modelos de borracha sem alma nem contexto...
            </p>

            <p className="text-lg text-card-foreground leading-relaxed mb-8">
              <strong>Mas, não iremos cobrar nem perto disso.</strong>
            </p>

            <div className="bg-primary/10 p-6 rounded-xl border border-primary/30 mb-8">
              <p className="text-lg text-card-foreground leading-relaxed">
                No nosso curso, você vai aprender tudo com <span className="text-primary font-bold">modelos reais</span>, em vídeos práticos e envolventes, onde cada movimento é mostrado com clareza, respeito e presença.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-primary mb-6">
              Você vai dominar:
            </h3>

            <div className="space-y-6">
              {techniques.map((technique, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-background/50 rounded-xl border border-border">
                  <span className="text-2xl flex-shrink-0">{technique.icon}</span>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">
                      {technique.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {technique.description}
                    </p>
                  </div>
                </div>
              ))}
              
              <div className="text-center py-4">
                <p className="text-xl font-bold text-primary">...e muito mais.</p>
              </div>
            </div>

            <div className="bg-accent/10 p-4 sm:p-6 rounded-xl border border-accent/30 mt-6 sm:mt-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                <span className="text-base sm:text-lg font-bold text-accent">Mais de 110 vídeo aulas completas</span>
              </div>
              
              <p className="text-sm sm:text-base md:text-lg text-card-foreground leading-relaxed mb-4 sm:mb-6">
                São mais de 110 vídeo aulas completas, com conteúdo teórico e prático, pensadas para te tornar uma especialista no despertar do prazer, da energia e da conexão.
              </p>

              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-3 sm:p-4 rounded-lg">
                <p className="text-sm sm:text-base text-card-foreground font-semibold">
                  Tudo isso em um ambiente seguro, didático e conduzido por instrutores experientes, que vão te guiar passo a passo nessa experiência única.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center px-4">
          <Button 
            variant="cta" 
            size="xl" 
            className="w-full max-w-md animate-pulse"
            onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
          >
            QUERO COMPRAR AGORA!
          </Button>
        </div>
      </div>
    </section>
  );
};