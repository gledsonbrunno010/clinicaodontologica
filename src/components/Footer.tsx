import { Instagram, Facebook, Linkedin, ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-premium flex items-center justify-center border border-white/10">
                <span className="text-white font-serif font-bold text-2xl">E</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold tracking-wide">Essence Dental</h3>
                <p className="text-xs text-accent uppercase tracking-widest">Estética & Implantes</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Transformando sorrisos com excelência técnica, tecnologia de ponta e atendimento humanizado. Sua autoestima é nossa prioridade.
            </p>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span className="text-xs font-medium text-white/80">CRO-SP 12345 - Responsável Técnico</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-white">Especialidades</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />Lentes de Contato</a></li>
              <li><a href="#" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />Facetas de Porcelana</a></li>
              <li><a href="#" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />Implantes Premium</a></li>
              <li><a href="#" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />Harmonização Facial</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-white">Institucional</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />Sobre Nós</a></li>
              <li><a href="#" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />Equipe</a></li>
              <li><a href="#" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />Depoimentos</a></li>
              <li><a href="#" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-white">Contato</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex flex-col">
                <span className="text-white font-medium mb-1">Endereço</span>
                Rua Oscar Freire, 1234<br />Jardins - São Paulo, SP
              </li>
              <li className="flex flex-col">
                <span className="text-white font-medium mb-1">Telefone</span>
                (11) 3456-7890
              </li>
              <li className="flex flex-col">
                <span className="text-white font-medium mb-1">Email</span>
                contato@essencedental.com.br
              </li>
            </ul>

            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent hover:text-foreground flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-accent">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent hover:text-foreground flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-accent">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent hover:text-foreground flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-accent">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>&copy; 2024 Essence Dental. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
