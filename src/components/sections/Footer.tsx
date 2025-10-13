import { Zap } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-gray-900/50">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gradient">EduKa Solutions</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Automations Agency
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-sm">
              Transformando processos com automações inteligentes e IA. 
              Automatize. Responda. Lucre.
            </p>
            <p className="text-sm text-muted-foreground">
              #EduKaFala
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("features")}
                  className="text-muted-foreground hover:text-blue-light transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("processo")}
                  className="text-muted-foreground hover:text-blue-light transition-colors"
                >
                  Como Funciona
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("cases")}
                  className="text-muted-foreground hover:text-blue-light transition-colors"
                >
                  Cases
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contato")}
                  className="text-muted-foreground hover:text-blue-light transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="mailto:contato@edukasolutions.com" className="hover:text-blue-light transition-colors">
                  contato@edukasolutions.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/5511999999999" className="hover:text-blue-light transition-colors">
                  WhatsApp: (11) 99999-9999
                </a>
              </li>
              <li className="text-sm">
                São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} EduKa Solutions. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-blue-light transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-blue-light transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
