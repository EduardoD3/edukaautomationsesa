import { Button } from "@/components/ui/button";
import { CircuitBackground } from "@/components/graphics/CircuitBackground";
import { MetricBadge } from "@/components/ui/metric-badge";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex  items-center justify-center overflow-hidden">
      <CircuitBackground intensity="medium" animated />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <div className="container relative z-10 px-4 py-24 md:py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge de prova social */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-accent/20">
            <Sparkles className="w-4 h-4 text-purple-accent" />
            <span className="text-sm font-medium">
              Mais de <span className="text-gradient font-bold">500+ automações</span> implementadas
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Automações Inteligentes{" "}
            <span className="text-gradient">com IA</span>
            <br />
            que Transformam Negócios
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Integre WhatsApp, CRM, planilhas e sistemas com inteligência artificial. 
            Reduza custos, acelere processos e escale seu negócio com automação de verdade.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection("contato")}
              className="group"
            >
              Falar com Especialista
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("cases")}
            >
              Ver Cases Reais
            </Button>
          </div>

          {/* Métricas de impacto */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <MetricBadge value="-63%" label="tempo de resposta" variant="success" />
            <MetricBadge value="+28%" label="MQLs qualificados" variant="primary" />
            <MetricBadge value="48h" label="para go-live" variant="accent" />
          </div>

          {/* Visual de fluxo */}
          <div className="relative pt-12 max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-8 border border-purple-accent/20 hover:border-purple-accent/40 transition-all duration-300 hover:glow">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Entrada</p>
                    <p className="font-semibold">WhatsApp/CRM</p>
                  </div>
                </div>

                <div className="hidden md:block text-purple-accent">→</div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white animate-pulse-glow" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Processamento</p>
                    <p className="font-semibold">IA + Automação</p>
                  </div>
                </div>

                <div className="hidden md:block text-purple-accent">→</div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Saída</p>
                    <p className="font-semibold">Ação Automática</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
