import { SectionHeader } from "@/components/ui/section-header";

const stacks = [
  { name: "Código Proprietário", category: "Modular", icon: "C" },
  { name: "Banco Seguro", category: "Escalável", icon: "B" },
  { name: "Full Stack", category: "Front & Back", icon: "F" },
  { name: "IA Generativa", category: "GPT, Claude, Gemini", icon: "I" },
  { name: "Cloud Native", category: "Alta Disponibilidade", icon: "C" },
  { name: "Segurança", category: "Governança de Dados", icon: "S" },
  { name: "Experiência", category: "Projetos Complexos", icon: "E" },
  { name: "Ágil", category: "Processos Eficientes", icon: "A" },
];

export const Stacks = () => {
  return (
    <section id="stacks" className="relative py-24 md:py-32">
      <div className="container relative z-10 px-4">
        <SectionHeader
          kicker="Diferenciais Técnicos"
          title="Qualidade técnica como pilar"
          subtitle="Experiência comprovada em projetos complexos e de alto impacto"
        />

        <div className="max-w-6xl mx-auto">
          {/* Grid de diferenciais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {stacks.map((stack, index) => (
              <div
                key={index}
                className="group glass rounded-xl p-6 border border-border hover:border-purple-accent/40 transition-all duration-300 hover:glow hover:-translate-y-1 text-center"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">
                    {stack.icon}
                  </span>
                </div>
                <h4 className="font-semibold text-foreground mb-1">{stack.name}</h4>
                <p className="text-xs text-muted-foreground">{stack.category}</p>
              </div>
            ))}
          </div>

          {/* Modelos de entrega */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass rounded-xl p-6 border border-border hover:border-blue-light/40 transition-all duration-300">
              <h4 className="font-bold text-lg mb-2 text-blue-light">Projetos Sob Demanda</h4>
              <p className="text-sm text-muted-foreground">
                Soluções completas com contrato e cronograma definido
              </p>
            </div>
            
            <div className="glass rounded-xl p-6 border border-border hover:border-purple-accent/40 transition-all duration-300">
              <h4 className="font-bold text-lg mb-2 text-purple-accent">Planos Mensais</h4>
              <p className="text-sm text-muted-foreground">
                Manutenção, ajustes, atualizações e suporte contínuo
              </p>
            </div>
            
            <div className="glass rounded-xl p-6 border border-border hover:border-green-neon/40 transition-all duration-300">
              <h4 className="font-bold text-lg mb-2 text-green-neon">White Label</h4>
              <p className="text-sm text-muted-foreground">
                Desenvolvimento para agências que desejam revender sob sua marca
              </p>
            </div>

            <div className="glass rounded-xl p-6 border border-border hover:border-orange-energy/40 transition-all duration-300">
              <h4 className="font-bold text-lg mb-2 text-orange-energy">Parcerias Estratégicas</h4>
              <p className="text-sm text-muted-foreground">
                Integração e colaboração com outras empresas de tecnologia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
