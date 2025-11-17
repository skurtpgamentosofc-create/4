"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Star, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const PricingSection = () => {
  const navigate = useNavigate();

  return (
    <section id="oferta" className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 bg-card">
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
          <div className="bg-background border-2 border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-4 sm:space-y-6 hover:border-primary/50 smooth-transition">
            <div className="space-y-1 sm:space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Curso Básico</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">10 Vídeo Aulas - Básicas Introdutórias</p>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3 text-card-foreground">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                <span className="text-xs sm:text-sm">Mapa Erógeno</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-card-foreground">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                <span className="text-xs sm:text-sm">Aulas Massagem Tântrica</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-card-foreground">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                <span className="text-xs sm:text-sm">Aulas Massagem Orgástica</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground">
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-destructive flex-shrink-0" />
                <span className="text-xs sm:text-sm">Sem certificado</span>
              </div>
            </div>

            <div className="space-y-1 sm:space-y-2 py-2 sm:py-4">
              <div className="text-3xl sm:text-4xl font-bold text-primary">R$ 10,90</div>
              <p className="text-xs sm:text-sm text-muted-foreground">Conteúdo limitado</p>
            </div>

            <Button 
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-xs sm:text-sm h-10 sm:h-11"
              onClick={() => navigate('/upgrade')}
            >
              COMPRAR CURSO BÁSICO
            </Button>
          </div>

          {/* Curso Completo - Destacado */}
          <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4 md:space-y-6 glow-effect">
            {/* Badge de Mais Popular */}
            <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                MAIS POPULAR
              </span>
            </div>

            <div className="space-y-1 sm:space-y-2 pt-3 sm:pt-4">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Curso Completo</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Acesso completo a todo conteúdo</p>
            </div>

            <div className="flex items-center justify-center gap-1 sm:gap-2">
              <Star className="w-4 h-4 sm:w-6 sm:h-6 text-primary animate-pulse" />
              <span className="text-xs sm:text-sm bg-primary text-primary-foreground px-2 sm:px-3 py-1 rounded-full font-bold">
                DESCONTO DE 92%
              </span>
              <Star className="w-4 h-4 sm:w-6 sm:h-6 text-primary animate-pulse" />
            </div>

              <div className="space-y-1 sm:space-y-2">
                <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
                  <span className="text-base sm:text-xl text-muted-foreground line-through">
                    R$ 497,00
                  </span>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
                    R$ 17,90
                  </span>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-card-foreground">
                  ou 12x de apenas R$ 1,66
                </p>
              </div>

            <div className="bg-destructive/20 p-2 sm:p-3 rounded-lg border border-destructive/50">
              <div className="flex items-center justify-center gap-1 sm:gap-2 text-destructive font-bold text-xs sm:text-sm">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="text-center">Oferta válida apenas por 24 horas!</span>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3 text-card-foreground">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                <span className="text-xs sm:text-sm">Acesso completo vitalício</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-card-foreground">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                <span className="text-xs sm:text-sm">Certificado de conclusão</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-card-foreground">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                <span className="text-xs sm:text-sm">Suporte especializado</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-card-foreground">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                <span className="text-xs sm:text-sm">Garantia de 7 dias</span>
              </div>
            </div>

            <Button 
              variant="hero" 
              size="lg" 
              className="w-full animate-pulse h-10 sm:h-11 text-xs sm:text-sm md:text-base"
              onClick={() => window.open('https://checkout.economizareagua.shop/VCCL1O8SC9U4?utm_source=FBjLj691375a281391c320843c81e&utm_campaign=CampanhaTesteUtms%7C00000000000000001&utm_medium=adsetTesteUtms%7C00000000000000002&utm_content=ContentTesteUtms%7C00000000000000003&utm_term=PlacementTesteUtms', '_blank')}
            >
              🔥 GARANTIR ACESSO COMPLETO!
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
    </section>
  );
};