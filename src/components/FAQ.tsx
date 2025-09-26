import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona o acesso ao curso?",
      answer: "Após a confirmação do pagamento, você receberá imediatamente um email com os dados de acesso à plataforma exclusiva do curso. O acesso é vitalício e pode ser feito de qualquer dispositivo conectado à internet."
    },
    {
      question: "O que são esses dois preços?",
      answer: "Oferecemos duas opções: o Curso Básico (R$ 10,90) com 10 aulas introdutórias, e o Curso Completo (R$ 37,00) com acesso total ao conteúdo, certificado e suporte especializado. O Curso Completo está com desconto especial de 92%."
    },
    {
      question: "É seguro fazer a compra?",
      answer: "Sim, totalmente seguro! Utilizamos a plataforma de pagamento mais confiável do Brasil, com criptografia SSL e proteção de dados. Seus dados pessoais e financeiros estão 100% protegidos."
    },
    {
      question: "Quais as formas de pagamento?",
      answer: "Aceitamos cartão de crédito (parcelado em até 12x), cartão de débito e PIX. O pagamento via PIX tem aprovação instantânea, enquanto cartões podem levar até 2 horas para confirmação."
    },
    {
      question: "Como funciona a garantia?",
      answer: "Oferecemos 7 dias de garantia incondicional. Se por qualquer motivo você não ficar satisfeito com o curso, devolvemos 100% do seu dinheiro, sem perguntas ou burocracia."
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas principais dúvidas sobre o curso
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 py-2"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-card-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <footer className="mt-16 pt-8 border-t border-border text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Despertar Tantra Orgástica. Todos os direitos reservados.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Reembolso</a>
            <a href="#" className="hover:text-primary transition-colors">Contato</a>
          </div>
        </footer>
      </div>
    </section>
  );
};