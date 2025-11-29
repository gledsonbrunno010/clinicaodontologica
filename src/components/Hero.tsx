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
              Redefina seu sorriso com{" "}
              <span className="bg-gradient-to-r from-primary to-graphite bg-clip-text text-transparent">precisão cirúrgica</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Especialização avançada em estética facial integrada. Técnicas minimamente invasivas, planejamento digital 3D e protocolos internacionais de excelência.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="premium" className="group shadow-strong">
                <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Agendar Avaliação Especializada
              </Button>
              <Button size="lg" variant="outline" className="group">
                <span className="group-hover:tracking-wide transition-all">Explorar Especialidades</span>
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
          <div className="relative animate-slide-up group">
            <div className="absolute inset-0 bg-gradient-champagne rounded-3xl blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 -z-10" />
            <div className="overflow-hidden rounded-3xl shadow-strong hover:shadow-glow transition-all duration-500">
              <img 
                src={heroImage} 
                alt="Sorriso perfeito - Estética dental premium"
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-strong hover-lift animate-scale-in">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-premium flex items-center justify-center animate-glow">
                  <Star className="w-6 h-6 text-white fill-white" />
                </div>
                <div>
                  <p className="font-bold text-3xl text-foreground">98%</p>
                  <p className="text-sm text-muted-foreground font-medium">Índice de Excelência</p>
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
