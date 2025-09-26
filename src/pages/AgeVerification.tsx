import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AgeVerification = () => {
  const navigate = useNavigate();
  const [showNotice, setShowNotice] = useState(false);

  const handleEnter = () => {
    sessionStorage.setItem("ageVerified", "true");
    navigate("/curso");
  };

  const handleExit = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Este é um site adulto
        </h1>
        
        <Button
          variant="outline"
          onClick={() => setShowNotice(!showNotice)}
          className="border-orange-500 text-orange-400 hover:bg-orange-500/10 mb-6"
        >
          Aviso aos Usuários
        </Button>

        {showNotice && (
          <div className="bg-black/50 p-6 rounded-lg border border-purple-500/30 mb-6">
            <p className="text-gray-200 text-sm leading-relaxed">
              Este site contém conteúdo educacional sobre técnicas tântricas e práticas de intimidade 
              para adultos. Ao prosseguir, você confirma que tem pelo menos 18 anos de idade ou a 
              maioridade na jurisdição de onde está acessando este site e que consente em visualizar 
              conteúdo educacional sobre sexualidade e práticas tântricas.
            </p>
          </div>
        )}

        <div className="text-gray-300 text-lg leading-relaxed space-y-4 mb-8">
          <p>
            Este site contém material educacional sobre técnicas tântricas, incluindo 
            práticas de massagem e intimidade para adultos. Ao se registrar, você afirma que tem 
            pelo menos 18 anos de idade ou a maioridade na jurisdição de onde está 
            acessando este site e que consente em visualizar conteúdo educacional sobre tantra.
          </p>
          <p>
            Nosso conteúdo é voltado para o desenvolvimento pessoal e aprimoramento da intimidade 
            através de práticas tântricas milenares.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleEnter}
            className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold"
            size="lg"
          >
            Tenho 18 anos ou mais - Entrar
          </Button>
          
          <Button
            onClick={handleExit}
            variant="outline"
            className="border-red-500 text-red-400 hover:bg-red-500/10 px-8 py-4 text-lg font-semibold"
            size="lg"
          >
            Tenho menos de 18 anos - Sair
          </Button>
        </div>

        <div className="text-gray-400 text-sm mt-8">
          <p>
            Para mais informações sobre controle parental, consulte as{" "}
            <span className="text-orange-400">configurações do seu navegador</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;