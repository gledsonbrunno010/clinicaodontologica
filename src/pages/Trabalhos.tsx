import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BeforeAfterShowcase from "@/components/BeforeAfterShowcase";
import { Sparkles, Gem, Smile, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Trabalhos = () => {
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
    <div className="min-h-screen">
      <SEO 
        title="Nossos Trabalhos - Essence Dental"
        description="Conheça as transformações e especialidades da Essence Dental. Lentes de contato dental, facetas de porcelana, harmonização orofacial e implantes premium."
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-soft relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-champagne rounded-full blur-3xl opacity-20 -z-10" />
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4 scroll-reveal">
              <h1 className="font-serif text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-graphite bg-clip-text text-transparent">
                Antes e Depois
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tratamento dos nossos clientes
              </p>
            </div>
          </div>
        </section>

        {/* Before After Showcase */}
        <BeforeAfterShowcase />

        {/* Specialties Section */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-champagne rounded-full blur-3xl opacity-20 -z-10" />
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4 scroll-reveal">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 w-fit mx-auto">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">Especialidades de Alta Performance</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">
                Nossos Serviços Premium
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trabalhos elaborados com excelência e qualidade
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {specialties.map((specialty, index) => (
                <Card
                  key={index}
                  className="glass-card border-2 border-accent/30 shadow-glow group cursor-pointer overflow-hidden hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 space-y-6 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-champagne rounded-full blur-2xl opacity-30" />
                    <div className="flex items-start gap-4 relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-premium flex items-center justify-center flex-shrink-0 shadow-glow group-hover:shadow-glow transition-all">
                        <specialty.icon className="w-7 h-7 text-white scale-110 group-hover:scale-125 transition-transform" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-2xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Trabalhos;
