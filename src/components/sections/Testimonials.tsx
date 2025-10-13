import { SectionHeader } from "@/components/ui/section-header";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "CTO",
    company: "TechFlow Solutions",
    content: "A EduKa entregou em 48h o que tentamos fazer internamente por 3 meses. A qualidade técnica e o suporte são excepcionais.",
    rating: 5,
  },
  {
    name: "Marina Santos",
    role: "Head de Operações",
    company: "VarejoMax",
    content: "Reduzimos 63% no tempo de resposta do WhatsApp e aumentamos a satisfação dos clientes. ROI positivo no primeiro mês.",
    rating: 5,
  },
  {
    name: "Roberto Lima",
    role: "Diretor Comercial",
    company: "Energia Solar Pro",
    content: "Automações inteligentes que realmente entendem nosso negócio. Nosso pipeline nunca esteve tão organizado e produtivo.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="relative py-24 md:py-32">
      <div className="container relative z-10 px-4">
        <SectionHeader
          kicker="Depoimentos"
          title="O que nossos clientes dizem"
          subtitle="Empresas que confiam na EduKa para transformar seus processos"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 border border-border hover:border-purple-accent/40 transition-all duration-300 hover:glow hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-energy text-orange-energy" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
