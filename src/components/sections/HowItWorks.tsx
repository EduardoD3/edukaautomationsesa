import { SectionHeader } from "@/components/ui/section-header";
import { Search, FileCode, Code, Shield, Rocket, Settings } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Análise & Conversação",
    description: "Reunião estratégica para entender seu negócio, processos e objetivos. Identificamos oportunidades de automação e necessidades específicas.",
  },
  {
    icon: FileCode,
    number: "02",
    title: "Proposta Personalizada",
    description: "Blueprint técnico detalhado com arquitetura, integrações e tecnologias. Orçamento customizado baseado no escopo do seu projeto.",
  },
  {
    icon: Code,
    number: "03",
    title: "Desenvolvimento",
    description: "Codificação full stack com as melhores práticas. Desenvolvimento ágil, modular e totalmente documentado.",
  },
  {
    icon: Shield,
    number: "04",
    title: "QA & Segurança",
    description: "Testes rigorosos, validação de segurança e conformidade. Garantia de qualidade em todos os níveis.",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Entrega",
    description: "Deploy em ambiente de produção, treinamento da equipe e go-live. Tudo funcionando perfeitamente.",
  },
  {
    icon: Settings,
    number: "06",
    title: "Manutenção",
    description: "Suporte contínuo, atualizações, ajustes e melhorias. Garantimos a evolução constante da sua solução.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="processo" className="relative py-24 md:py-32 bg-gray-900/30">
      <div className="container relative z-10 px-4">
        <SectionHeader
          kicker="Nossa Estrutura Operacional"
          title="Processos rápidos, eficientes e seguros"
          subtitle="Linha de produção técnica clara e bem definida, garantindo qualidade e controle total"
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="glass rounded-2xl p-8 border border-border hover:border-purple-accent/40 transition-all duration-300 hover:glow hover:-translate-y-1 h-full">
                  {/* Número do passo */}
                  <div className="absolute -top-4 -left-4 w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform text-white">
                    {step.number}
                  </div>

                  {/* Ícone */}
                  <div className="w-14 h-14 rounded-xl bg-purple-accent/10 flex items-center justify-center mb-6 mt-4 group-hover:bg-purple-accent/20 transition-colors">
                    <step.icon className="w-7 h-7 text-purple-accent" />
                  </div>

                  {/* Conteúdo */}
                  <h3 className="text-xl font-bold mb-3 text-gradient">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
