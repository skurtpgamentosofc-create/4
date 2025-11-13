"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Star, X } from "lucide-react";

export const PricingSection = () => {
  return (
    <section id="oferta" className="py-12 sm:py-16 px-4 bg-card">
      <div className="max-w-6xl mx-auto text-center space-y-8 sm:space-y-12">
        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Escolha Seu Plano - Oferta Especial!
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-card-foreground">
            Comece hoje mesmo a transformar sua vida íntima
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Curso Básico */}
          <div className="bg-background border-2 border-border rounded-2xl p-6 space-y-6 hover:border-primary/50 smooth-transition">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Curso Básico</h3>
              <p className="text-sm text-muted-foreground">10 Vídeo Aulas - Básicas Introdutórias</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-card-foreground">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm">Mapa Erógeno</span>
              </div>
              <div className="flex items-center gap-3 text-card-foreground">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm">Aulas Massagem Tântrica</span>
              </div>
              <div className="flex items-center gap-3 text-card-foreground">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm">Aulas Massagem Orgástica</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <X className="w-5 h-5 text-destructive flex-shrink-0" />
                <span className="text-sm">Sem certificado</span>
              </div>
            </div>

            <div className="space-y-2 py-4">
              <div className="text-4xl font-bold text-primary">R$ 10,90</div>
              <p className="text-sm text-muted-foreground">Conteúdo limitado</p>
            </div>

            <Button 
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              onClick={() => window.open('https://checkout.passinhodeluz.shop/VCCL1O8SC9U3', '_blank')}
            >
              COMPRAR CURSO BÁSICO
            </Button>
          </div>

          {/* Curso Completo - Destacado */}
          <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary rounded-2xl p-6 space-y-6 glow-effect">
            {/* Badge de Mais Popular */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
                MAIS POPULAR
              </span>
            </div>

            <div className="space-y-2 pt-4">
              <h3 className="text-2xl font-bold text-foreground">Curso Completo</h3>
              <p className="text-sm text-muted-foreground">Acesso completo a todo conteúdo</p>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Star className="w-6 h-6 text-primary animate-pulse" />
              <span className="text-sm bg-primary text-primary-foreground px-3 py-1 rounded-full font-bold">
                DESCONTO DE 92%
              </span>
              <Star className="w-6 h-6 text-primary animate-pulse" />
            </div>

              <div className="space-y-2">
                <div className="flex items-center justify-center gap-4">
                  <span className="text-xl text-muted-foreground line-through">
                    R$ 497,00
                  </span>
                  <span className="text-5xl font-bold text-primary">
                    R$ 37
                  </span>
                </div>
                <p className="text-lg text-card-foreground">
                  ou 12x de apenas R$ 3,65
                </p>
              </div>

            <div className="bg-destructive/20 p-3 rounded-lg border border-destructive/50">
              <div className="flex items-center justify-center gap-2 text-destructive font-bold text-sm">
                <Clock className="w-4 h-4" />
                <span>Oferta válida apenas por 24 horas!</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-card-foreground">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm">Acesso completo vitalício</span>
              </div>
              <div className="flex items-center gap-3 text-card-foreground">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm">Certificado de conclusão</span>
              </div>
              <div className="flex items-center gap-3 text-card-foreground">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm">Suporte especializado</span>
              </div>
              <div className="flex items-center gap-3 text-card-foreground">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm">Garantia de 7 dias</span>
              </div>
            </div>

            <Button 
              variant="hero" 
              size="lg" 
              className="w-full animate-pulse"
              onClick={() => window.open('https://checkout.passinhodeluz.shop/VCCL1O8SC9U4', '_blank')}
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