import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import heroImage from "@/assets/hero-smile.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-soft -z-10" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-sm font-medium text-foreground">Mais de 2.000 sorrisos transformados</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground leading-tight text-balance">
              Transforme seu sorriso com{" "}
              <span className="text-primary">elegância e precisão</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Especialistas em estética dental premium. Lentes de contato, facetas e implantes com tecnologia avançada e atendimento humanizado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-premium hover:opacity-90 transition-all shadow-medium text-base">
                <Phone className="w-5 h-5 mr-2" />
                Agendar Avaliação Gratuita
              </Button>
              <Button size="lg" variant="outline" className="text-base border-2">
                Conhecer Especialidades
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {[
                { icon: Check, text: "Atendimento premium" },
                { icon: Check, text: "Tecnologia 3D" },
                { icon: Check, text: "Resultados naturais" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-slide-up">
            <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-3xl opacity-30 -z-10" />
            <img 
              src={heroImage} 
              alt="Sorriso perfeito - Estética dental premium"
              className="rounded-3xl shadow-strong w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-medium">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-premium flex items-center justify-center">
                  <Star className="w-6 h-6 text-white fill-white" />
                </div>
                <div>
                  <p className="font-bold text-2xl text-foreground">98%</p>
                  <p className="text-sm text-muted-foreground">Satisfação</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
