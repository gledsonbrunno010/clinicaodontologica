import { FileSearch, Lightbulb, Wrench, HeartHandshake } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: FileSearch,
      title: "Avaliação Especializada",
      description: "Análise completa do seu sorriso com escaneamento 3D, fotografias profissionais e estudo detalhado das suas expectativas."
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Planejamento Digital",
      description: "Desenvolvemos o design do seu novo sorriso através de tecnologia CAD/CAM. Você visualiza o resultado antes de iniciar."
    },
    {
      number: "03",
      icon: Wrench,
      title: "Tratamento Personalizado",
      description: "Execução meticulosa com materiais premium e técnicas minimamente invasivas para máximo conforto e precisão."
    },
    {
      number: "04",
      icon: HeartHandshake,
      title: "Acompanhamento Premium",
      description: "Suporte contínuo pós-tratamento com retornos programados e atendimento prioritário sempre que precisar."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-soft -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Nosso Processo</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Jornada completa até o seu{" "}
            <span className="text-primary">sorriso ideal</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada etapa pensada para oferecer segurança, conforto e resultados excepcionais
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-border to-transparent z-0" />
              )}
              
              <div className="relative z-10 space-y-6">
                <div className="relative">
                  <span className="absolute -top-4 -left-4 font-serif text-8xl font-bold text-accent/5">
                    {step.number}
                  </span>
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-premium flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
