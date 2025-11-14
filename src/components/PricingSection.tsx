"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Star, X, PlayCircle, Music, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const PricingSection = () => {
  const navigate = useNavigate();

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
              onClick={() => navigate('/upgrade')}
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
                    R$ 17,90
                  </span>
                </div>
                <p className="text-lg text-card-foreground">
                  ou 12x de apenas R$ 1,66
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
              <div className="flex items-center gap-3 text-card-foreground">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm font-semibold">Técnicas Avançadas</span>
              </div>
              <div className="flex items-center gap-3 text-card-foreground">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm">Atualizações automáticas (novas aulas sem pagar nada)</span>
              </div>
              <div className="flex items-center gap-3 text-card-foreground">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm">🔥 Bônus 1 — Sequências guiadas em vídeo</span>
              </div>
              <div className="flex items-center gap-3 text-card-foreground">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm">🔥 Bônus 2 — Playlist de ambiente terapêutico</span>
              </div>
              <div className="flex items-center gap-3 text-card-foreground">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm">🔥 Bônus 3 — Guia rápido para quem nunca fez a massagem antes</span>
              </div>
            </div>

            <Button 
              variant="hero" 
              size="lg" 
              className="w-full animate-pulse"
              onClick={() => window.open('https://checkout.economizareagua.shop/VCCL1O8SC9U4?utm_source=FBjLj691375a281391c320843c81e&utm_campaign=CampanhaTesteUtms%7C00000000000000001&utm_medium=adsetTesteUtms%7C00000000000000002&utm_content=ContentTesteUtms%7C00000000000000003&utm_term=PlacementTesteUtms', '_blank')}
            >
              🔥 GARANTIR ACESSO COMPLETO!
            </Button>
            
            <p className="text-xs text-muted-foreground text-center">
              Pagamento 100% seguro via cartão ou PIX
            </p>
          </div>
        </div>

        {/* Seção de Bônus Visuais */}
        <div className="space-y-6 mt-12">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary">
              🎁 Bônus Exclusivos do Curso Completo
            </h3>
            <p className="text-muted-foreground">
              Materiais complementares para acelerar seu aprendizado
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Bônus 1 */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 rounded-xl p-6 space-y-4 hover:scale-105 smooth-transition glow-effect group">
              <div className="flex justify-center">
                <div className="bg-primary/20 p-4 rounded-full group-hover:scale-110 smooth-transition">
                  <PlayCircle className="w-10 h-10 text-primary" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-center text-foreground">
                Sequências Guiadas em Vídeo
              </h4>
              <p className="text-sm text-center text-muted-foreground">
                Vídeos passo a passo mostrando sequências completas de massagem, 
                perfeito para você praticar junto e dominar cada movimento com confiança.
              </p>
              <div className="flex justify-center">
                <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-xs font-bold">
                  VALOR: R$ 97,00
                </span>
              </div>
            </div>

            {/* Bônus 2 */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 rounded-xl p-6 space-y-4 hover:scale-105 smooth-transition glow-effect group">
              <div className="flex justify-center">
                <div className="bg-primary/20 p-4 rounded-full group-hover:scale-110 smooth-transition">
                  <Music className="w-10 h-10 text-primary" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-center text-foreground">
                Playlist Ambiente Terapêutico
              </h4>
              <p className="text-sm text-center text-muted-foreground">
                Trilha sonora profissional cuidadosamente selecionada para criar 
                o ambiente perfeito de relaxamento e conexão durante suas sessões.
              </p>
              <div className="flex justify-center">
                <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-xs font-bold">
                  VALOR: R$ 47,00
                </span>
              </div>
            </div>

            {/* Bônus 3 */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 rounded-xl p-6 space-y-4 hover:scale-105 smooth-transition glow-effect group sm:col-span-2 lg:col-span-1">
              <div className="flex justify-center">
                <div className="bg-primary/20 p-4 rounded-full group-hover:scale-110 smooth-transition">
                  <BookOpen className="w-10 h-10 text-primary" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-center text-foreground">
                Guia Rápido para Iniciantes
              </h4>
              <p className="text-sm text-center text-muted-foreground">
                E-book prático com checklist, dicas essenciais e protocolo passo a passo 
                para quem nunca fez massagem antes começar com segurança total.
              </p>
              <div className="flex justify-center">
                <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-xs font-bold">
                  VALOR: R$ 67,00
                </span>
              </div>
            </div>
          </div>

          <div className="text-center space-y-2 pt-4">
            <p className="text-lg font-bold text-primary">
              Total em Bônus: R$ 211,00
            </p>
            <p className="text-muted-foreground">
              Tudo isso GRÁTIS ao adquirir o Curso Completo!
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