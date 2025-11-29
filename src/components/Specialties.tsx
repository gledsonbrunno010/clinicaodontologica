import { Sparkles, Gem, Smile, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import veneerImage from "@/assets/veneers-detail.jpg";

const Specialties = () => {
  const specialties = [
    {
      icon: Gem,
      title: "Lentes de Contato Dental",
      description: "Lâminas ultrafinas de porcelana que transformam seu sorriso sem desgaste dentário. Resultado natural, duradouro e luminoso.",
      benefits: ["Sem dor", "Mínima preparação", "Resultado imediato", "Durabilidade superior"]
    },
    {
      icon: Sparkles,
      title: "Facetas de Porcelana",
      description: "Revestimentos estéticos premium para correção de forma, cor e alinhamento. Tecnologia CAD/CAM para precisão máxima.",
      benefits: ["Design digital", "Cor personalizada", "Resistência premium", "Sorriso harmonioso"]
    },
    {
      icon: Smile,
      title: "Harmonização Orofacial",
      description: "Procedimentos estéticos faciais integrados ao seu tratamento dental. Rejuvenescimento e equilíbrio facial com toxina botulínica e preenchimentos.",
      benefits: ["Resultado natural", "Técnicas avançadas", "Segurança total", "Efeito lifting"]
    },
    {
      icon: Zap,
      title: "Implantes Premium",
      description: "Substituição de dentes com implantes de titânio de última geração. Cirurgia guiada por computador e carga imediata quando indicado.",
      benefits: ["Tecnologia 3D", "Rápida recuperação", "Conforto absoluto", "Estética perfeita"]
    }
  ];

  return (
    <section id="especialidades" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-soft -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Nossas Especialidades</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Tratamentos premium para o seu{" "}
            <span className="text-primary">sorriso perfeito</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Técnicas avançadas e materiais de altíssima qualidade para resultados que superam expectativas
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {specialties.map((specialty, index) => (
            <Card key={index} className="border-2 hover:shadow-medium transition-all duration-500 hover:-translate-y-1">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-premium flex items-center justify-center flex-shrink-0">
                    <specialty.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                      {specialty.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {specialty.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {specialty.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="text-sm text-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Featured image */}
        <div className="relative rounded-3xl overflow-hidden shadow-strong max-w-4xl mx-auto">
          <img 
            src={veneerImage} 
            alt="Procedimento de facetas e lentes de contato dental"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent flex items-end p-8">
            <p className="text-white text-lg font-medium">
              Tecnologia de precisão para o sorriso dos seus sonhos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
