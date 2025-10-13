import { SectionHeader } from "@/components/ui/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo leva para implementar uma automação?",
    answer: "Dependendo da complexidade, podemos ter uma automação básica rodando em 48h. Projetos mais robustos levam de 1 a 2 semanas. Trabalhamos com entregas incrementais para você ver valor rapidamente.",
  },
  {
    question: "Preciso ter conhecimento técnico para usar?",
    answer: "Não! Desenvolvemos interfaces e dashboards intuitivos para que qualquer pessoa da sua equipe consiga operar. Além disso, oferecemos treinamento completo e documentação clara.",
  },
  {
    question: "Quais sistemas e aplicações vocês integram?",
    answer: "Trabalhamos com mais de 400 aplicações: WhatsApp, CRMs (HubSpot, Pipedrive, RD Station), Google Workspace, planilhas, ERPs, APIs customizadas e muito mais. Se tem API, conectamos.",
  },
  {
    question: "Como funciona o suporte técnico?",
    answer: "Oferecemos suporte via WhatsApp, email e chamadas. Tempo médio de resposta de 2 horas úteis. Para clientes enterprise, temos SLA dedicado e canal prioritário.",
  },
  {
    question: "Quanto custa uma automação?",
    answer: "Cada projeto é único. Fazemos uma análise gratuita e apresentamos uma proposta personalizada com investimento e ROI esperado. Não trabalhamos com mensalidades fixas, apenas projetos sob medida.",
  },
  {
    question: "E se eu precisar de ajustes depois?",
    answer: "Todos os projetos incluem 30 dias de ajustes sem custo adicional. Depois disso, oferecemos pacotes de suporte e evolução mensal para manter tudo rodando perfeitamente.",
  },
  {
    question: "A automação funciona com meu sistema legado?",
    answer: "Sim! Trabalhamos com APIs REST, webhooks, integrações via banco de dados e até automações de interface (RPA) quando necessário. Se seu sistema não tem API, criamos soluções alternativas.",
  },
  {
    question: "Vocês trabalham com IA generativa?",
    answer: "Sim! Utilizamos OpenAI, Claude, Gemini e outros modelos para criar assistentes inteligentes, análise de texto, classificação automática, RAG (busca em documentos) e muito mais.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="relative py-24 md:py-32 bg-gray-900/30">
      <div className="container relative z-10 px-4">
        <SectionHeader
          kicker="Perguntas Frequentes"
          title="Tire suas dúvidas"
          subtitle="Tudo que você precisa saber sobre automações inteligentes"
        />

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass rounded-xl border border-border hover:border-purple-accent/40 transition-all duration-300 px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-gradient py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
