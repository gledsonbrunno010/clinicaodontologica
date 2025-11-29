import { Sparkles, Gem, Smile, Zap, ArrowRight } from "lucide-react";
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
    <section id="especialidades" className="pt-8 pb-24 bg-gradient-soft relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-champagne rounded-full blur-3xl opacity-20 -z-10" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 scroll-reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 w-fit mx-auto">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">Especialidades de Alta Performance</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Reabilitação estética{" "}
            <span className="bg-gradient-to-r from-primary to-graphite bg-clip-text text-transparent">integrada</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Protocolos clínicos avançados com tecnologia CAD/CAM e resultados cientificamente validados
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {specialties.map((specialty, index) => (
            <Card
              key={index}
              className="glass-card border-2 border-accent/30 shadow-glow group cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 space-y-6 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-champagne rounded-full blur-2xl opacity-30" />
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-premium flex items-center justify-center flex-shrink-0 shadow-glow">
                    <specialty.icon className="w-7 h-7 text-white scale-110" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-semibold text-primary mb-3">
                      {specialty.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {specialty.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {specialty.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent scale-150" />
                          <span className="text-sm text-foreground font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 opacity-100 transform translate-x-0">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured image */}
        <div className="relative rounded-3xl overflow-hidden shadow-strong max-w-4xl mx-auto group cursor-pointer hover-lift">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={veneerImage}
              alt="Procedimento de facetas e lentes de contato dental"
              className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 via-graphite/40 to-transparent flex items-end p-8 group-hover:from-graphite/95 transition-colors">
            <div className="space-y-2">
              <p className="text-accent font-medium tracking-wide text-sm">TECNOLOGIA DE PONTA</p>
              <p className="text-white text-2xl font-serif font-semibold tracking-wide max-w-xl">
                Precisão cirúrgica aliada à estética facial avançada para resultados que transformam vidas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
