import { SectionHeader } from "@/components/ui/section-header";
import { Search, FileCode, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Descoberta",
    description: "Mapeamos seus processos, identificamos gargalos e definimos oportunidades de automação com alto impacto.",
  },
  {
    icon: FileCode,
    number: "02",
    title: "Blueprint",
    description: "Criamos o projeto técnico da automação: fluxos, integrações, lógicas de IA e painéis de controle.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Go-Live",
    description: "Implementação rápida, testes reais e acompanhamento ativo. Seu time operando em dias, não meses.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="processo" className="relative py-24 md:py-32 bg-gray-900/30">
      <div className="container relative z-10 px-4">
        <SectionHeader
          kicker="Nosso Processo"
          title="Como fazemos acontecer"
          subtitle="Metodologia ágil focada em entregas rápidas e resultados mensuráveis"
        />

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Linha conectora */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-deep via-purple-accent to-purple-deep opacity-30 -translate-y-1/2" />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="glass rounded-2xl p-8 border border-border hover:border-purple-accent/40 transition-all duration-300 hover:glow hover:-translate-y-2 h-full">
                    {/* Número do passo */}
                    <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>

                    {/* Ícone */}
                    <div className="w-16 h-16 rounded-xl bg-purple-accent/10 flex items-center justify-center mb-6 mt-6 group-hover:bg-purple-accent/20 transition-colors">
                      <step.icon className="w-8 h-8 text-purple-accent" />
                    </div>

                    {/* Conteúdo */}
                    <h3 className="text-2xl font-bold mb-4 text-gradient">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Seta conectora (apenas no desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 text-purple-accent text-2xl -translate-y-1/2 z-10">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
