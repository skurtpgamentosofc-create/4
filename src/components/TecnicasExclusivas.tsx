"use client";

import { Button } from "@/components/ui/button";
import massagemNuru from "@/assets/imgs2/massagem-nuru.webp";
import massagemOrgastica from "@/assets/imgs2/massagem-orgastica.webp";
import massagemSensitiva from "@/assets/imgs2/massagem-sensitiva.webp";
import massagemTantrica from "@/assets/imgs2/massagem-tantrica.png";
import tecnicasFemininas from "@/assets/imgs2/tecnicas-femininas.png";
import sexoOral from "@/assets/imgs2/sexo-oral.jpg";
import massagemTailandesa from "@/assets/imgs2/massagem-tailandesa.jpg";
import pontosErogenos from "@/assets/imgs2/pontos-erogenos.jpg";

export const TecnicasExclusivas = () => {
  const scrollToPlans = () => {
    const element = document.getElementById('oferta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tecnicas = [
    {
      id: 1,
      title: "MASSAGEM NURU",
      subtitle: "Práticas com modelos reais",
      description: "Aprenda a arte da massagem nuru com demonstrações detalhadas e técnicas exclusivas.",
      image: massagemNuru,
      alt: "Técnicas de Massagem Nuru"
    },
    {
      id: 2,
      title: "MASSAGEM ORGÁSTICA",
      subtitle: "Prazer Extremo",
      description: "Descubra como proporcionar sensações únicas com técnicas de massagem orgástica avançadas.",
      image: massagemOrgastica,
      alt: "Técnicas de Massagem Orgástica"
    },
    {
      id: 3,
      title: "MASSAGEM SENSITIVA",
      subtitle: "Toques Poderosos",
      description: "Aprenda a despertar sensações intensas através de toques e técnicas sensitivas.",
      image: massagemSensitiva,
      alt: "Técnicas de Massagem Sensitiva"
    },
    {
      id: 4,
      title: "MASSAGEM TÂNTRICA",
      subtitle: "Técnicas que vão transformar sua vida",
      description: "Domine as técnicas e segredos da massagem tântrica para uma experiência transcendental.",
      image: massagemTantrica,
      alt: "Técnicas de Massagem Tântrica"
    },
    {
      id: 5,
      title: "TÉCNICAS DE ESGUICHO FEMININO",
      subtitle: "Liberando todo o prazer",
      description: "Aprenda as técnicas mais eficazes e específicas para proporcionar máximo prazer.",
      image: tecnicasFemininas,
      alt: "Técnicas de Esguicho Feminino"
    },
    {
      id: 6,
      title: "SEXO ORAL",
      subtitle: "Técnicas avançadas de prazer oral",
      description: "Domine as técnicas mais eficazes para proporcionar experiências inesquecíveis.",
      image: sexoOral,
      alt: "Técnicas de Sexo Oral"
    },
    {
      id: 7,
      title: "MASSAGEM TAILANDESA",
      subtitle: "Técnicas orientais de relaxamento",
      description: "Explore as técnicas tradicionais tailandesas combinadas com elementos de massagem corporal.",
      image: massagemTailandesa,
      alt: "Massagem Tailandesa"
    },
    {
      id: 8,
      title: "DESCOBRINDO PONTOS ERÓGENOS",
      subtitle: "Mapa completo do prazer",
      description: "Você descobrirá através do mapa dos pontos de prazer as zonas eróticas de cada região.",
      image: pontosErogenos,
      alt: "Pontos Erógenos"
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        <div className="text-center space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Técnicas Exclusivas
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Descubra as técnicas mais poderosas de massagem tântrica que transformarão sua vida íntima
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {tecnicas.map((tecnica) => (
            <div 
              key={tecnica.id}
              className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:border-primary/50 smooth-transition group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={tecnica.image} 
                  alt={tecnica.alt}
                  className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-1">
                    {tecnica.title}
                  </h3>
                  <p className="text-sm text-secondary font-semibold">
                    {tecnica.subtitle}
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-card-foreground leading-relaxed">
                  {tecnica.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-8 rounded-2xl border border-primary/30 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              🔥 Todas essas técnicas e muito mais!
            </h3>
            <p className="text-card-foreground text-lg mb-6">
              Mais de 100 vídeos com demonstrações reais e técnicas exclusivas que você não encontra em lugar nenhum.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-background/50 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>Vídeos em HD</span>
              </div>
              <div className="flex items-center gap-2 bg-background/50 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>Passo a passo detalhado</span>
              </div>
              <div className="flex items-center gap-2 bg-background/50 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>Modelos reais</span>
              </div>
            </div>
            <Button
              onClick={scrollToPlans}
              size="xl"
              className="mt-8 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white text-xl font-bold px-12 py-6 rounded-full shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300"
            >
              🔥 QUERO COMPRAR AGORA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
