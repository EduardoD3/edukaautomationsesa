import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

const cases = [
  {
    vertical: "Varejo",
    problem: "Atendimento WhatsApp com 4h de delay e alta taxa de abandono",
    solution: "Bot inteligente com IA + triagem automática + integração ao estoque",
    result: "-63% no tempo de resposta",
    metric: "63%",
  },
  {
    vertical: "Saúde",
    problem: "Confirmação de consultas manual e retrabalho da equipe",
    solution: "Automação de confirmação via WhatsApp + SMS + integração ao sistema",
    result: "-82% no trabalho manual",
    metric: "82%",
  },
  {
    vertical: "Energia",
    problem: "Processos de cotação lentos e pouco rastreáveis",
    solution: "Pipeline automatizado com CRM + qualificação por IA + dashboards",
    result: "+28% em MQLs qualificados",
    metric: "28%",
  },
  {
    vertical: "Educação",
    problem: "Leads não qualificados chegando ao time comercial",
    solution: "Chatbot RAG treinado na base de conhecimento + lead scoring",
    result: "+45% taxa de conversão",
    metric: "45%",
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
                  <span className="text-2xl font-bold">{item.metric}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Problema:</p>
                  <p className="text-foreground font-medium">{item.problem}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Solução:</p>
                  <p className="text-foreground font-medium">{item.solution}</p>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-1">Resultado:</p>
                  <p className="text-lg font-bold text-gradient">{item.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
