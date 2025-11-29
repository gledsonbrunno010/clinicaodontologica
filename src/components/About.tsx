import { Award, Heart, Microscope, Shield } from "lucide-react";
import clinicImage from "@/assets/clinic-interior.jpg";

const About = () => {
  const features = [
    {
      icon: Microscope,
      title: "Tecnologia de Ponta",
      description: "Escaneamento 3D e planejamento digital para resultados precisos"
    },
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Cuidado personalizado com foco no seu conforto e bem-estar"
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Protocolos rigorosos e ambiente esterilizado de última geração"
    },
    {
      icon: Award,
      title: "Excelência Comprovada",
      description: "Especialistas certificados com formação internacional"
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src={clinicImage} 
              alt="Clínica Essence Dental - Interior moderno e sofisticado"
              className="rounded-3xl shadow-strong w-full h-auto"
            />
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-medium">
              <p className="text-4xl font-serif font-bold text-primary">15+</p>
              <p className="text-sm text-muted-foreground">Anos de experiência</p>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider">Sobre a Essence Dental</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                Referência em{" "}
                <span className="text-primary">estética dental premium</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Somos especialistas em transformar sorrisos com excelência técnica e um olhar profundamente humano. Nossa missão é oferecer tratamentos estéticos de altíssimo padrão, aliando tecnologia de ponta ao cuidado personalizado.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cada sorriso é único, e por isso desenvolvemos planos de tratamento sob medida, respeitando a naturalidade e harmonia facial. Nossa equipe é formada por especialistas com formação internacional e atualização constante nas técnicas mais avançadas da odontologia estética.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-premium flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
