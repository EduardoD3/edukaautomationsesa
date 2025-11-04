import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

const cases = [
  {
    vertical: "EduKa Agents",
    title: "Agente de IA para E-commerce",
    problem: "Loja virtual com alto volume de perguntas repetitivas no WhatsApp, equipe sobrecarregada.",
    solution: "Chatbot inteligente com IA generativa integrado ao WhatsApp e CRM, treinado com dados da empresa.",
    result: "Atendimento 24/7, redução de 75% no tempo de resposta e aumento de 32% nas conversões.",
    metrics: { improvement: "+32%", label: "conversões" },
  },
  {
    vertical: "EduKa SaaS Studio",
    title: "Plataforma de Gestão para Clínicas",
    problem: "Clínica precisava de sistema próprio para agendamentos, prontuários e gestão financeira.",
    solution: "Desenvolvimento full stack de SaaS completo com painel admin, banco seguro e integração com WhatsApp.",
    result: "Sistema proprietário escalável, redução de 60% em custos de software e controle total dos dados.",
    metrics: { improvement: "-60%", label: "custos de software" },
  },
  {
    vertical: "EduKa Dash",
    title: "Dashboard Financeiro para Energia Solar",
    problem: "Empresa sem visibilidade em tempo real de vendas, pipeline e performance financeira.",
    solution: "Dashboard personalizado com integração a CRM, ERP e Google Sheets, com KPIs em tempo real.",
    result: "Decisões baseadas em dados, identificação rápida de gargalos e aumento de 40% na produtividade.",
    metrics: { improvement: "+40%", label: "produtividade" },
  },
  {
    vertical: "EduKa Connect",
    title: "Integração de Sistemas Legados",
    problem: "Empresa com ERP antigo, CRM moderno e planilhas desconectadas, dados duplicados.",
    solution: "API middleware personalizada para sincronizar todos os sistemas, fluxo de dados unificado.",
    result: "Eliminação de retrabalho, dados centralizados e economia de 20h/semana da equipe.",
    metrics: { improvement: "-20h", label: "por semana" },
  },
];

export const Cases = () => {
  return (
    <section id="cases" className="relative py-24 md:py-32 bg-gray-900/30">
      <div className="container relative z-10 px-4">
        <SectionHeader
          kicker="Cases Reais"
          title="Resultados que falam por si"
          subtitle="Empresas de diferentes verticais transformando processos e escalando com automação"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {cases.map((item, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 border border-border hover:border-purple-accent/40 transition-all duration-300 hover:glow hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-6">
                <Badge variant="outline" className="bg-purple-accent/10 text-purple-accent border-purple-accent/30">
                  {item.vertical}
                </Badge>
                <div className="flex items-center gap-2 text-green-neon">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-xl font-bold">{item.metrics.improvement}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-gradient">{item.title}</h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Problema:</p>
                  <p className="text-foreground">{item.problem}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Solução:</p>
                  <p className="text-foreground">{item.solution}</p>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-1">Resultado:</p>
                  <p className="text-lg font-semibold text-green-neon">{item.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
