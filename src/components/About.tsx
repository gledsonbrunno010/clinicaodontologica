import { Award, Heart, Microscope, Shield, CheckCircle2 } from "lucide-react";
import dentistPortrait from "@/assets/dentist-portrait.jpg";

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
    <section id="sobre" className="py-24 bg-secondary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-soft opacity-50 -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image - Doctor Portrait for Authority */}
          <div className="relative group animate-slide-in-left">
            <div className="absolute inset-0 bg-accent/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
            <img
              src={dentistPortrait}
              alt="Dra. Especialista - Essence Dental"
              className="relative rounded-3xl shadow-strong w-full h-auto object-cover aspect-[4/5] group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-strong hover-lift border border-border/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-foreground">15+</p>
                  <p className="text-sm text-muted-foreground font-medium">Anos de Excelência</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 scroll-reveal">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 w-fit">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Sobre a Essence Dental</span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Referência em <br />
                <span className="text-primary relative">
                  estética dental premium
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Somos especialistas em transformar sorrisos com excelência técnica e um olhar profundamente humano. Nossa missão é oferecer tratamentos estéticos de altíssimo padrão, aliando tecnologia de ponta ao cuidado personalizado.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  "Equipe multidisciplinar altamente qualificada",
                  "Infraestrutura moderna e acolhedora",
                  "Protocolos exclusivos de atendimento"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="group p-4 rounded-xl hover:bg-white hover:shadow-soft transition-all duration-300 border border-transparent hover:border-border/50">
                  <div className="w-12 h-12 rounded-xl bg-gradient-premium flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
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
