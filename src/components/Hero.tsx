import { Button } from "@/components/ui/button";
import { Check, Phone, Star, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-smile.jpg";
import heroBackground from "@/assets/clinic-interior.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBackground}
          alt="Clínica odontológica moderna"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-sm font-medium text-foreground">Excelência em Odontologia Estética</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground leading-tight text-balance text-center md:text-left">
              Seu sorriso renovado com{" "}
              <span className="bg-gradient-to-r from-primary to-graphite bg-clip-text text-transparent">sofisticação e precisão</span>
            </h1>

            {/* Mobile Image */}
            <div className="relative group md:hidden my-8">
              <div className="absolute inset-0 bg-gradient-champagne rounded-3xl blur-3xl opacity-40 -z-10" />
              <div className="overflow-hidden rounded-3xl shadow-strong relative z-10">
                <img
                  src={heroImage}
                  alt="Sorriso perfeito - Estética dental premium"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl text-center md:text-left mx-auto md:mx-0">
              Transforme sua autoestima com tratamentos odontológicos de alto padrão. Tecnologia avançada e atendimento personalizado para um resultado natural e duradouro.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center sm:justify-center md:justify-start">
              <Button size="lg" variant="premium" className="group shadow-strong hover:shadow-glow transition-all duration-300">
                <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Agendar Avaliação Premium
              </Button>
              <Button size="lg" variant="outline" className="group bg-white/50 backdrop-blur-sm border-primary/20 hover:bg-white/80">
                <span className="group-hover:tracking-wide transition-all">Conhecer Tratamentos</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border/50">
              {[
                { text: "Tecnologia Digital 3D" },
                { text: "Ambiente Exclusivo" },
                { text: "Especialistas Renomados" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-up group hidden md:block">
            <div className="absolute inset-0 bg-gradient-champagne rounded-3xl blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 -z-10" />
            <div className="overflow-hidden rounded-3xl shadow-strong hover:shadow-glow transition-all duration-500 relative z-10">
              <img
                src={heroImage}
                alt="Sorriso perfeito - Estética dental premium"
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-strong hover-lift animate-scale-in z-20 border border-white/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-premium flex items-center justify-center animate-glow">
                  <Star className="w-6 h-6 text-white fill-white" />
                </div>
                <div>
                  <p className="font-bold text-3xl text-foreground">5.0</p>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} className="w-3 h-3 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground font-medium mt-1">Avaliação dos Pacientes</p>
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
