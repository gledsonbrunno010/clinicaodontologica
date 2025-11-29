import { Award, GraduationCap, Users } from "lucide-react";
import doctorImage from "@/assets/dentist-portrait.jpg";

const Doctor = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-soft -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-3xl opacity-20 -z-10" />
            <img 
              src={doctorImage} 
              alt="Dra. Ana Beatriz Silveira - Dentista especialista em estética"
              className="rounded-3xl shadow-strong w-full h-auto"
            />
          </div>
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider">Especialista Principal</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                Dra. Ana Beatriz Silveira
              </h2>
              <p className="text-xl text-primary font-medium">
                Especialista em Prótese e Estética Dental
              </p>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Com mais de 15 anos dedicados à odontologia estética, a Dra. Ana Beatriz é referência em transformações de sorrisos através de técnicas minimamente invasivas. Sua abordagem combina excelência técnica com um olhar sensível para a naturalidade e harmonia facial.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Acredita que cada sorriso conta uma história única, e por isso desenvolve tratamentos personalizados que respeitam a individualidade de cada paciente, sempre buscando resultados que vão além da estética — resultados que transformam vidas.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Formação Premium</h4>
                  <p className="text-sm text-muted-foreground">Especialização em Estética Dental pela NYU College of Dentistry (USA) • Mestrado em Prótese Dentária pela USP • Certificação Internacional em Design de Sorriso Digital</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Reconhecimento</h4>
                  <p className="text-sm text-muted-foreground">Membro da Academia Americana de Odontologia Estética • Palestrante internacional • Top Dentist Award 2023</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Experiência</h4>
                  <p className="text-sm text-muted-foreground">Mais de 2.000 sorrisos transformados • Especialista em casos complexos de reabilitação estética</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctor;
