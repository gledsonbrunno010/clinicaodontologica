import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-premium flex items-center justify-center">
            <span className="text-white font-serif font-bold text-xl">E</span>
          </div>
          <div>
            <h1 className="font-serif text-xl font-semibold text-foreground">Essence Dental</h1>
            <p className="text-xs text-muted-foreground">Estética & Implantes</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#especialidades" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Especialidades
          </a>
          <a href="#sobre" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#depoimentos" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Depoimentos
          </a>
        </nav>
        
        <Button className="bg-gradient-premium hover:opacity-90 transition-all">
          <Phone className="w-4 h-4 mr-2" />
          Agendar Avaliação
        </Button>
      </div>
    </header>
  );
};

export default Header;
