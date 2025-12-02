import { Award, GraduationCap, Users } from "lucide-react";
import doctorImage from "@/assets/female-doctor.png";

const Doctor = () => {
  return (
    <section id="doutora" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-soft -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative group animate-slide-in-left">
            <div className="absolute inset-0 bg-gradient-champagne rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
            <div className="overflow-hidden rounded-3xl shadow-strong hover-lift">
              <img
                src={doctorImage}
                alt="Dra. Ana Beatriz Silveira - Dentista especialista em estética"
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider">Liderança Clínica</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                Dra. Ana Beatriz Silveira
              </h2>
              <p className="text-xl text-primary font-semibold">
                Especialista em Reabilitação Estética e Prótese Dental
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg">
              Expertise consolidada em transformações estéticas complexas através de protocolos minimamente invasivos. Formação internacional com foco em harmonia facial e biomimética dental.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Pioneira em técnicas de planejamento digital integrado (DSD) e cimentação adesiva de alta performance. Filosofia de tratamento centrada na longevidade funcional e naturalidade estética.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 group cursor-pointer hover-lift p-4 rounded-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-champagne flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all">
                  <GraduationCap className="w-6 h-6 text-graphite group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Formação de Elite</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Fellowship em Estética Dental pela NYU College of Dentistry (USA) • Mestrado em Reabilitação Oral pela USP • Certificação Internacional em Digital Smile Design</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer hover-lift p-4 rounded-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-champagne flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all">
                  <Award className="w-6 h-6 text-graphite group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Reconhecimento Internacional</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Membro ativo da AAED (American Academy of Esthetic Dentistry) • Palestrante em congressos científicos • Top Dentist Award 2023</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer hover-lift p-4 rounded-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-champagne flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all">
                  <Users className="w-6 h-6 text-graphite group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Experiência Clínica Avançada</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Mais de 2.000 casos de alta complexidade resolvidos • Especialização em reabilitação full-mouth e implantodontia estética</p>
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
