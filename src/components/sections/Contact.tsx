import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast.error("Por favor, aceite a política de privacidade");
      return;
    }

    setLoading(true);

    try {
      // Placeholder para webhook n8n
      const webhookUrl = import.meta.env.VITE_WEBHOOK_URL || "";
      
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }

      toast.success("Mensagem enviada com sucesso! Retornaremos em breve.");
      
      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
        consent: false,
      });
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="relative py-24 md:py-32">
      <div className="container relative z-10 px-4">
        <SectionHeader
          kicker="Fale com a EduKa"
          title="Pronto para transformar seu negócio?"
          subtitle="Entre em contato e descubra como nossas soluções podem impulsionar seus resultados"
        />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <div className="glass rounded-2xl p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Empresa *</label>
                  <Input
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Telefone *</label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mensagem *</label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Conte sobre seu desafio e o que você gostaria de automatizar..."
                  rows={5}
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  checked={formData.consent}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, consent: checked as boolean })
                  }
                />
                <label className="text-sm text-muted-foreground leading-relaxed">
                  Concordo com a <a href="#" className="text-blue-light hover:underline">política de privacidade</a> e 
                  autorizo o contato da EduKa Solutions para apresentação de soluções.
                </label>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </div>

          {/* Informações de contato */}
          <div className="space-y-8">
            <div className="glass rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Outras formas de contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:contato@edukasolutions.com.br" className="text-blue-light hover:underline">
                     contato@edukasolutions.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Website</p>
                    <a href="https://www.edukasolutions.com.br" className="text-blue-light hover:underline">
                      www.edukasolutions.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Redes Sociais</p>
                    <a href="https://instagram.com/edukasolutions" className="text-blue-light hover:underline">
                      @edukasolutions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 border border-green-neon/30 bg-green-neon/5">
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-green-neon">✓</span>
                Garantia de Resposta
              </h4>
              <p className="text-muted-foreground">
                Comprometemo-nos a responder todas as solicitações em até <strong className="text-foreground">2 horas úteis</strong>. 
                Sua transformação digital começa aqui.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
