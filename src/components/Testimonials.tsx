import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carolina Mendes",
      role: "Empresária",
      content: "A experiência na Essence Dental superou todas as minhas expectativas. A Dra. Ana e sua equipe me fizeram sentir acolhida desde o primeiro momento. Meu sorriso ficou exatamente como eu sonhava — natural, luminoso e harmonioso. Hoje me sinto muito mais confiante!",
      rating: 5
    },
    {
      name: "Roberto Almeida",
      role: "Arquiteto",
      content: "Fiz implantes e facetas com a equipe da Essence. O nível de planejamento e tecnologia é impressionante. Todo o processo foi sem dor, e o resultado ficou perfeito. A atenção aos detalhes faz toda a diferença — recomendo de olhos fechados.",
      rating: 5
    },
    {
      name: "Juliana Ferreira",
      role: "Médica",
      content: "Como profissional da saúde, sou bastante exigente. A Essence Dental me conquistou pela técnica impecável e pelo cuidado humano. Meu tratamento de lentes de contato foi rápido, confortável e o resultado é simplesmente espetacular. Gratidão imensa!",
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
            <Card key={index} className="border-2 hover:shadow-medium transition-all duration-500">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                
                <Quote className="w-10 h-10 text-accent/20" />
                
                <p className="text-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
