import { SectionHeader } from "@/components/ui/section-header";

const stacks = [
  { name: "n8n", category: "Orquestração" },
  { name: "OpenAI", category: "IA" },
  { name: "WhatsApp API", category: "Mensageria" },
  { name: "Supabase", category: "Backend" },
  { name: "Google Sheets", category: "Dados" },
  { name: "HubSpot", category: "CRM" },
  { name: "Pipedrive", category: "CRM" },
  { name: "RD Station", category: "Marketing" },
  { name: "Typebot", category: "Chatbots" },
  { name: "Make", category: "Automação" },
  { name: "Zapier", category: "Integrações" },
  { name: "PostgreSQL", category: "Database" },
];

export const Stacks = () => {
  return (
    <section id="stacks" className="relative py-24 md:py-32">
      <div className="container relative z-10 px-4">
        <SectionHeader
          kicker="Nossa Stack"
          title="Tecnologias que dominamos"
          subtitle="Trabalhamos com as melhores ferramentas do mercado para entregar soluções robustas"
        />

        <div className="max-w-6xl mx-auto">
          {/* Grid de logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {stacks.map((stack, index) => (
              <div
                key={index}
                className="group glass rounded-xl p-6 border border-border hover:border-purple-accent/40 transition-all duration-300 hover:glow hover:-translate-y-1 text-center"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-primary/10 flex items-center justify-center group-hover:bg-gradient-primary/20 transition-colors">
                  <span className="text-2xl font-bold text-gradient">
                    {stack.name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-semibold text-foreground mb-1">{stack.name}</h4>
                <p className="text-xs text-muted-foreground">{stack.category}</p>
              </div>
            ))}
          </div>

          {/* Mini-cards explicativos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-6 border border-border">
              <h4 className="font-bold text-lg mb-2 text-blue-light">Webhooks</h4>
              <p className="text-sm text-muted-foreground">
                Comunicação em tempo real entre sistemas via HTTP
              </p>
            </div>
            
            <div className="glass rounded-xl p-6 border border-border">
              <h4 className="font-bold text-lg mb-2 text-purple-accent">Filas</h4>
              <p className="text-sm text-muted-foreground">
                Processamento assíncrono e resiliente de grandes volumes
              </p>
            </div>
            
            <div className="glass rounded-xl p-6 border border-border">
              <h4 className="font-bold text-lg mb-2 text-green-neon">Orquestração</h4>
              <p className="text-sm text-muted-foreground">
                Coordenação inteligente de múltiplos serviços e APIs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
