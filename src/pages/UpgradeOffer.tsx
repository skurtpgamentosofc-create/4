import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Star, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UpgradeOffer = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Alert */}
        <div className="bg-primary text-primary-foreground p-4 rounded-lg text-center mb-8 animate-pulse">
          <h2 className="text-xl sm:text-2xl font-bold">⚠️ ESPERE! Oferta Exclusiva Antes de Continuar</h2>
        </div>

        {/* Main Content */}
        <div className="bg-card border-2 border-primary rounded-2xl p-6 sm:p-8 space-y-6 glow-effect">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <TrendingUp className="w-16 h-16 text-primary animate-bounce" />
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Upgrade para o Curso COMPLETO
            </h1>
            
            <p className="text-base sm:text-lg text-muted-foreground">
              Você estava prestes a comprar o Curso Básico por R$ 10,90...
              <br />
              Mas temos uma oferta especial EXCLUSIVA para você!
            </p>
          </div>

          {/* Comparison */}
          <div className="grid sm:grid-cols-2 gap-6 my-8">
            {/* What you were getting */}
            <div className="bg-background/50 border border-border rounded-xl p-4 space-y-3">
              <h3 className="font-bold text-lg text-foreground">Curso Básico - R$ 10,90</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>10 vídeo aulas básicas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Conteúdo limitado</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-destructive">✗</span>
                  <span>Sem certificado</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-destructive">✗</span>
                  <span>Sem suporte</span>
                </li>
              </ul>
            </div>

            {/* Upgrade offer */}
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary rounded-xl p-4 space-y-3 relative">
              <div className="absolute -top-3 -right-3">
                <Star className="w-8 h-8 text-primary animate-spin-slow" />
              </div>
              <h3 className="font-bold text-lg text-foreground">Curso COMPLETO - R$ 14,90</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="font-semibold">TODO o conteúdo do curso</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Acesso vitalício</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="font-semibold">Certificado de conclusão</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="font-semibold">Suporte especializado</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Garantia de 7 dias</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Price Highlight */}
          <div className="bg-primary/10 border-2 border-primary rounded-xl p-6 text-center space-y-4">
            <p className="text-lg font-semibold text-foreground">
              Pague apenas mais R$ 4,00 e tenha acesso a TUDO!
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className="text-2xl text-muted-foreground line-through">R$ 17,90</span>
              <span className="text-5xl font-bold text-primary">R$ 14,90</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Economia de R$ 3,00 + Acesso a todo conteúdo!
            </p>
          </div>

          {/* Urgency */}
          <div className="bg-destructive/20 p-4 rounded-lg border border-destructive/50">
            <div className="flex items-center justify-center gap-2 text-destructive font-bold text-sm">
              <Clock className="w-5 h-5" />
              <span>Esta oferta especial expira em 10 minutos!</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4 pt-4">
            <Button
              variant="hero"
              size="xl"
              className="w-full"
              onClick={() => window.open('https://checkout.hojetemofertas.shop/VCCL1O8SCD80', '_blank')}
            >
              🔥 SIM! QUERO O UPGRADE POR R$ 14,90
            </Button>
            
            <Button
              variant="outline"
              className="w-full"
              onClick={() => window.open('https://checkout.economizareagua.shop/VCCL1O8SC9U3?utm_source=FBjLj691375a281391c320843c81e&utm_campaign=CampanhaTesteUtms%7C00000000000000001&utm_medium=adsetTesteUtms%7C00000000000000002&utm_content=ContentTesteUtms%7C00000000000000003&utm_term=PlacementTesteUtms', '_blank')}
            >
              Não, quero continuar com o básico por R$ 10,90
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground">
            Pagamento 100% seguro via cartão ou PIX
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpgradeOffer;
