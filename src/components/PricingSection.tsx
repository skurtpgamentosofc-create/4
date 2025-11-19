"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Star, X, Gift, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export const PricingSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return <section id="oferta" className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 bg-card" ref={sectionRef}>
      <div className="max-w-6xl mx-auto text-center space-y-6 sm:space-y-8 md:space-y-12">
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary px-2">
            Escolha Seu Plano - Oferta Especial!
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-card-foreground px-2">
            Comece hoje mesmo a transformar sua vida íntima
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Curso Básico */}
          <div className={`bg-background border-2 border-secondary rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-4 sm:space-y-6 hover:border-secondary/70 smooth-transition transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="space-y-1 sm:space-y-2">
              <div className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-bold mb-2">
                🟢 CURSO BÁSICO
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground">Plano Basico        </h3>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start gap-2 sm:gap-3 text-card-foreground">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">Mapa Erógeno</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 text-card-foreground">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">Aulas de Massagem Tântrica</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 text-card-foreground">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">Aulas de Massagem Orgástica</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 text-card-foreground">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">Mini-guia PDF "3 Técnicas Para Começar"</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 text-card-foreground">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">Acesso por 30 dias</span>
              </div>
              
              <div className="pt-2 border-t border-border">
                <div className="flex items-start gap-2 sm:gap-3 text-muted-foreground">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">Sem certificado</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-muted-foreground">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">Sem bônus</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-muted-foreground">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">Sem atualizações</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-muted-foreground">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">Sem suporte</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-muted-foreground">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">Conteúdo limitado</span>
                </div>
              </div>
            </div>

            <div className="space-y-1 sm:space-y-2 py-2 sm:py-4">
              <div className="text-3xl sm:text-4xl font-bold text-primary">R$ 10,90</div>
              <p className="text-xs sm:text-sm text-muted-foreground">Conteúdo reduzido para iniciantes</p>
            </div>

            <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-xs sm:text-sm h-10 sm:h-11" onClick={() => navigate('/upgrade')}>
              🟩 COMPRAR CURSO BÁSICO
            </Button>
          </div>

          {/* Curso Completo - Destacado */}
          <div className={`relative bg-gradient-to-br from-destructive/10 to-primary/20 border-2 border-destructive rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4 glow-effect transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Badge de Mais Popular */}
            <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-destructive text-destructive-foreground px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                🔴 MAIS POPULAR
              </span>
            </div>

            <div className="space-y-1 sm:space-y-2 pt-3 sm:pt-4">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Curso Completo</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Acesso total • Vitalício • Com Certificado</p>
            </div>

            <div className="flex items-center justify-center gap-1 sm:gap-2">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-pulse" />
              <span className="text-xs sm:text-sm bg-primary text-primary-foreground px-2 sm:px-3 py-1 rounded-full font-bold">
                🎉 DESCONTO DE 92%
              </span>
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-pulse" />
            </div>

            <div className="space-y-1 sm:space-y-2">
              <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
                <span className="text-base sm:text-lg text-muted-foreground line-through">
                  de R$ 497,00 por
                </span>
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary text-center">
                R$ 17,90
              </div>
              <p className="text-sm sm:text-base text-card-foreground text-center">
                ou 12× de R$ 1,66
              </p>
            </div>

            <div className="bg-destructive/20 p-2 sm:p-3 rounded-lg border border-destructive/50">
              <div className="flex items-center justify-center gap-1 sm:gap-2 text-destructive font-bold text-xs sm:text-sm">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="text-center">⏳ Oferta válida por 24h</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-sm sm:text-base text-foreground flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                🔥 TUDO QUE VOCÊ RECEBE NO COMPLETO
              </h4>
              
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground">Módulos Principais</p>
                <div className="flex items-start gap-2 text-card-foreground">
                  <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">Acesso completo vitalício</span>
                </div>
                <div className="flex items-start gap-2 text-card-foreground">
                  <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">Todas as técnicas avançadas</span>
                </div>
                <div className="flex items-start gap-2 text-card-foreground">
                  <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">Módulo Secreto (conteúdos não listados)</span>
                </div>
                <div className="flex items-start gap-2 text-card-foreground">
                  <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">Atualizações futuras gratuitas</span>
                </div>
                <div className="flex items-start gap-2 text-card-foreground">
                  <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">Certificado de conclusão</span>
                </div>
                <div className="flex items-start gap-2 text-card-foreground">
                  <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">Videos com Modelos Reais    </span>
                </div>
                <div className="flex items-start gap-2 text-card-foreground">
                  <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">Garantia de 7 dias</span>
                </div>
              </div>

              <div className="pt-2">
                <h4 className="font-bold text-sm sm:text-base text-foreground flex items-center gap-2 mb-2">
                  <Gift className="w-4 h-4 text-primary" />
                  🎁 BÔNUS EXCLUSIVOS (limitados)
                </h4>
                <div className="space-y-1.5 text-xs sm:text-sm">
                  <div className="flex items-start gap-2 text-card-foreground">
                    <span className="text-primary">🔥</span>
                    <span>Bônus 1 - Guia Prático de Comunicação Íntima</span>
                  </div>
                  <div className="flex items-start gap-2 text-card-foreground">
                    <span className="text-primary">🔥</span>
                    <span>Bônus 2 - 10 Sequências de Massagem Prontas </span>
                  </div>
                  <div className="flex items-start gap-2 text-card-foreground">
                    <span className="text-primary">🔥</span>
                    <span>Bônus 3 - Playlist Exclusiva para Ambiente Perfeito</span>
                  </div>
                  <div className="flex items-start gap-2 text-card-foreground">
                    <span className="text-primary">🔥</span>
                    <span>Bônus 4 -Mini Curso: Clima, Iluminação e Preparação</span>
                  </div>
                  <div className="flex items-start gap-2 text-card-foreground">
                    <span className="text-primary">🔥</span>
                    <span>Bônus 5 - Checklist Completo + Planejamento</span>
                  </div>
                  <div className="flex items-start gap-2 text-card-foreground">
                    <span className="text-primary">🔥</span>
                    <span>Bônus 6 - Grupo VIP (Exclusivo)</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <h4 className="font-bold text-sm sm:text-base text-foreground mb-2">💥 EXPERIÊNCIA PREMIUM</h4>
                <div className="space-y-1.5">
                  <div className="flex items-start gap-2 text-card-foreground">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm">Acesso imediato</span>
                  </div>
                  <div className="flex items-start gap-2 text-card-foreground">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm">Comunidade privada no Telegram</span>
                  </div>
                  <div className="flex items-start gap-2 text-card-foreground">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm">Suporte básico por e-mail</span>
                  </div>
                  <div className="flex items-start gap-2 text-card-foreground">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm">Área do aluno organizada com progresso</span>
                  </div>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg" className="w-full animate-rocket h-auto py-3 text-xs sm:text-sm md:text-base" onClick={() => window.open('https://checkout.economizareagua.shop/VCCL1O8SC9U4?utm_source=FBjLj691375a281391c320843c81e&utm_campaign=CampanhaTesteUtms%7C00000000000000001&utm_medium=adsetTesteUtms%7C00000000000000002&utm_content=ContentTesteUtms%7C00000000000000003&utm_term=PlacementTesteUtms', '_blank')}>
              🟥 GARANTIR ACESSO COMPLETO AGORA
            </Button>
            
            <p className="text-xs text-muted-foreground text-center">
              Pagamento 100% seguro via cartão ou PIX
            </p>
          </div>
        </div>

        <div className="bg-background/50 p-6 rounded-xl border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            ⚠️ Atenção: Oferta Limitada
          </h3>
          <p className="text-card-foreground">
            Esta promoção especial é válida apenas para os primeiros 100 alunos. 
            Após isso, o valor volta para R$ 497,00. Não perca esta oportunidade única!
          </p>
        </div>
      </div>
    </section>;
};