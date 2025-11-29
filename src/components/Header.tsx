import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-soft border-b border-border/50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-premium flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
              <span className="text-white font-serif font-bold text-xl">E</span>
            </div>
            <div>
              <h1 className="font-serif font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                Essence Dental
              </h1>
              <p className="text-xs text-muted-foreground font-medium tracking-wide">Estética Avançada</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
            >
              <span>Sobre</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </button>
            <button 
              onClick={() => scrollToSection('especialidades')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
            >
              <span>Especialidades</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
            >
              <span>Depoimentos</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </button>
            <Button variant="premium" size="lg" className="group shadow-medium">
              <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Agendar Consulta
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
