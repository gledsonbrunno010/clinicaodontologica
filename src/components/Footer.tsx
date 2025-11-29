import { Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-premium flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xl">E</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold">Essence Dental</h3>
                <p className="text-xs text-white/60">Estética & Implantes</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Transformando sorrisos com excelência técnica e atendimento humanizado.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Especialidades</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Lentes de Contato</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facetas de Porcelana</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Implantes Premium</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Harmonização Facial</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Institucional</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Equipe</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Rua Oscar Freire, 1234</li>
              <li>Jardins - São Paulo, SP</li>
              <li className="pt-2">(11) 3456-7890</li>
              <li>contato@essencedental.com.br</li>
            </ul>
            
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-sm text-white/60">
          <p>&copy; 2024 Essence Dental. Todos os direitos reservados. | CRO-SP 12345</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
