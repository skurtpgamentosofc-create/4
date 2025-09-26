"use client";

import courseMockup from "@/assets/course-mockup.jpg";
import teoricasPraticas from "@/assets/imgs2/teoricas-praticas.png";

export const MembersArea = () => {
  return (
    <section className="py-16 px-4 bg-card">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-primary">
          Linda Área de Membros
        </h2>
        
        <p className="text-xl text-card-foreground">
          Assista às aulas no site, ou no seu computador, tablet ou celular.
        </p>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
              <h3 className="text-xl font-bold text-primary mb-3">
                Teóricas e Práticas
              </h3>
              <p className="text-card-foreground">
                Vídeos completos com teoria e demonstrações práticas
              </p>
            </div>
            
            <div className="bg-accent/10 p-6 rounded-xl border border-accent/20">
              <h3 className="text-xl font-bold text-accent mb-3">
                Acesso Multi-Dispositivos
              </h3>
              <p className="text-card-foreground">
                Disponível em todos os seus dispositivos
              </p>
            </div>
          </div>

          <div className="relative">
            <img 
              src={teoricasPraticas} 
              alt="Mockups do curso em diferentes dispositivos"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};