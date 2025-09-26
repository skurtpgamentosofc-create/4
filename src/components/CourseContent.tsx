"use client";

import { CheckCircle, Play, Users, Clock, Award } from "lucide-react";

export const CourseContent = () => {
  const modules = [
    "Introdução ao Tântra",
    "Teórica Como Trabalhar com o Tântra", 
    "Teórica Sobre a massagem Érotica",
    "Teórica Sobre o tântra",
    "Prática com Modelos Reais - Massagem Relaxante",
    "Prática com Modelos Reais - Massagem Erótica",
    "Prática com Modelos Reais - Massagem Japonesa",
    "Prática com Modelos Reais - Massagem Tântrica",
    "Prática com Modelos Reais - Massagem Lingam",
    "Prática com Modelos Reais - Massagem Tântrica relaxante",
    "Prática com Modelos Reais - Massagem Yoni",
    "Prática com Modelos Reais - Massagem Tântrica Quicktantra",
    "Prática com Modelos Reais - Massagem Sensitiva",
    "Prática com Modelos Reais - Massagem Orgástica",
    "Prática com Modelos Reais - Massagem Tântrica Energética",
    "Prática com Modelos Reais - Pontos de prazer",
    "Prática com Modelos Reais - Sexo oral",
    "Prática com Modelos Reais - Esguicho Feminino",
    "Prática com Modelos Reais - Pompoarismo Feminino",
    "Prática com Modelos Reais - Pompoarismo Masculino",
    "Técnicas de posições",
    "Neuropatia para Libido Sexual",
    "Mapa Erógeno de pontos de prazer",
    "Músicas ambiente para tântra"
  ];

  const highlights = [
    {
      icon: <Play className="w-8 h-8" />,
      title: "+ de 100 Vídeos",
      subtitle: "com modelos reais"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Acesso Vitalício",
      subtitle: "para sempre"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Atualizações Mensais",
      subtitle: "conteúdo novo todo mês"
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Conteúdo Completo do Curso
          </h2>
          <p className="text-xl text-muted-foreground">
            Tudo que você precisa para dominar as técnicas
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Módulos do Curso
            </h3>
            <div className="space-y-3 max-h-96 overflow-y-auto pr-4">
              {modules.map((module, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-3 bg-card rounded-lg border border-border hover:border-primary/50 smooth-transition"
                >
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-card-foreground font-medium">
                    {module}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Técnicas Exclusivas
            </h3>
            
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="bg-primary/10 p-6 rounded-xl border border-primary/20 text-center hover:bg-primary/20 smooth-transition"
                >
                  <div className="text-primary mb-3 flex justify-center">
                    {highlight.icon}
                  </div>
                  <h4 className="text-lg font-bold text-primary">
                    {highlight.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {highlight.subtitle}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl border border-primary/30">
              <h4 className="text-xl font-bold text-primary mb-3">
                🔥 Garantia Total
              </h4>
              <p className="text-foreground text-sm">
                7 dias para testar o curso. Se não gostar, devolvemos 100% do seu dinheiro!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};