import { Clock, Users, Award, Sparkles, Heart, Shield } from "lucide-react";

const WhyChoose = () => {
  const reasons = [
    {
      icon: Award,
      title: "Excelência Reconhecida",
      description: "Certificações internacionais e formação contínua nas técnicas mais avançadas"
    },
    {
      icon: Heart,
      title: "Atendimento Exclusivo",
      description: "Consultas sem pressa, ambiente privativo e atenção total às suas necessidades"
    },
    {
      icon: Sparkles,
      title: "Tecnologia de Ponta",
      description: "Escaneamento 3D, planejamento digital e materiais premium importados"
    },
    {
      icon: Clock,
      title: "Resultados Acelerados",
      description: "Protocolos otimizados que reduzem tempo de tratamento sem comprometer qualidade"
    },
    {
      icon: Users,
      title: "Naturalidade Garantida",
      description: "Sorrisos harmoniosos que respeitam sua identidade e expressão facial"
    },
    {
      icon: Shield,
      title: "Conforto Absoluto",
      description: "Sedação consciente disponível e ambiente projetado para seu relaxamento"
    }
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Por que nos escolher</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            O padrão de excelência que você{" "}
            <span className="text-primary">merece</span>
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 space-y-4 shadow-soft hover:shadow-medium transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center">
                <reason.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
