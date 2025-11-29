import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carolina Mendes",
      role: "Empresária",
      content: "O nível de planejamento e precisão técnica impressiona. A Dra. Ana domina completamente o protocolo de reabilitação estética. O resultado das minhas lentes ultrapassou minhas expectativas — sorriso harmonioso, natural e com durabilidade comprovada. Excelência do início ao fim.",
      rating: 5
    },
    {
      name: "Roberto Almeida",
      role: "Arquiteto",
      content: "Reabilitação completa com implantes zigomáticos e facetas em porcelana. A tecnologia de planejamento cirúrgico digital trouxe previsibilidade absoluta. Procedimento minimamente invasivo, recuperação rápida e resultado estético impecável. Clínica de padrão internacional.",
      rating: 5
    },
    {
      name: "Juliana Ferreira",
      role: "Médica",
      content: "Como médica, avalio criticamente todos os procedimentos. O protocolo de lentes de contato dental foi executado com maestria cirúrgica. Preparo minimamente invasivo, cimentação adesiva de última geração e acompanhamento rigoroso. Resultado: estética facial harmônica e funcionalidade perfeita.",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Depoimentos</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Histórias reais de{" "}
            <span className="text-primary">transformação</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A confiança dos nossos pacientes é nossa maior conquista
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-2 hover-lift hover:border-accent/30 transition-all duration-500 group bg-gradient-to-br from-white to-secondary/30"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent group-hover:scale-110 transition-transform" style={{ transitionDelay: `${i * 0.05}s` }} />
                  ))}
                </div>
                
                <Quote className="w-12 h-12 text-accent/20 group-hover:text-accent/40 transition-colors" />
                
                <p className="text-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="pt-4 border-t border-border/50">
                  <p className="font-semibold text-foreground text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground font-medium">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
