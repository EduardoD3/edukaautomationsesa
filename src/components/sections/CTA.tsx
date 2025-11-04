import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { CircuitBackground } from "@/components/graphics/CircuitBackground";

const benefits = [
  "Desenvolvimento ágil e eficiente",
  "Suporte técnico especializado",
  "Código proprietário e documentado",
  "Arquitetura escalável em nuvem",
];

export const CTA = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <CircuitBackground intensity="medium" animated />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="glass rounded-3xl p-12 md:p-16 border border-purple-accent/30 hover:border-purple-accent/50 transition-all duration-300 glow text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Transforme seu negócio com <span className="text-gradient">tecnologia de ponta</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Do código à automação — soluções completas de IA, automação e desenvolvimento full stack para empresas que querem crescer.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto text-left">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-neon flex-shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToContact}
              className="group text-lg"
            >
              Fale com a gente agora
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-sm text-muted-foreground mt-6">
              Sem compromisso • Resposta em até 2 horas úteis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
