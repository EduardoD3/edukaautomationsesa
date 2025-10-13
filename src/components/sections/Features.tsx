import { SectionHeader } from "@/components/ui/section-header";
import { MessageSquare, Brain, BarChart3, DollarSign, Zap, Blocks } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Integrações Poderosas",
    description: "WhatsApp, CRMs, planilhas, ERPs e mais de 400 aplicações conectadas em um único fluxo inteligente.",
  },
  {
    icon: Brain,
    title: "IA & RAG Avançado",
    description: "Processamento de linguagem natural, análise de contexto e respostas inteligentes baseadas em seus dados.",
  },
  {
    icon: BarChart3,
    title: "Painéis Personalizados",
    description: "Dashboards em tempo real com métricas que importam para seu negócio. Decisões baseadas em dados.",
  },
  {
    icon: DollarSign,
    title: "Redução de Custos",
    description: "Até 70% de economia em processos manuais. ROI positivo em menos de 3 meses.",
  },
  {
    icon: Zap,
    title: "Implementação Rápida",
    description: "Do zero ao go-live em 48h. Sem fricção, sem burocracia, sem perda de tempo.",
  },
  {
    icon: Blocks,
    title: "Escalável & Flexível",
    description: "Cresce com seu negócio. Adicione novos fluxos e integrações quando precisar.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container relative z-10 px-4">
        <SectionHeader
          kicker="Por que EduKa?"
          title="Automação que entrega resultados reais"
          subtitle="Tecnologia de ponta que resolve problemas complexos de forma simples"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass rounded-2xl p-8 border border-border hover:border-purple-accent/40 transition-all duration-300 hover:glow hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gradient">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
