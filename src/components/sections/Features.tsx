import { SectionHeader } from "@/components/ui/section-header";
import { MessageSquare, Brain, BarChart3, Code2, Plug, Users } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "EduKa Agents",
    description: "Agentes de IA personalizados para vendas, suporte e operações. Integração com WhatsApp, CRM, ERP e muito mais. Análise personalizada e orçamento sob demanda.",
  },
  {
    icon: Code2,
    title: "EduKa SaaS Studio",
    description: "Criação de SaaS e microSaaS completos. Desenvolvimento full stack, banco seguro, API própria e infraestrutura escalável. Projetos customizados para seu negócio.",
  },
  {
    icon: BarChart3,
    title: "EduKa Dash",
    description: "Painéis e landing pages de alta performance. Dashboards em tempo real, visualização de dados e páginas otimizadas para conversão.",
  },
  {
    icon: Plug,
    title: "EduKa Connect",
    description: "Integração e APIs personalizadas. Conecte sistemas legados, CRMs, ERPs e softwares de terceiros com segurança total.",
  },
  {
    icon: MessageSquare,
    title: "White Label & Parcerias",
    description: "Desenvolvimento para agências que desejam revender sob sua marca. Parcerias estratégicas com empresas de tecnologia.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container relative z-10 px-4">
        <SectionHeader
          kicker="Nossos Núcleos de Soluções"
          title="Do código à automação — soluções completas"
          subtitle="Núcleos integrados para transformar seu negócio com tecnologia de ponta"
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
