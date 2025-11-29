import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const WhatsAppBanner = () => {
  const whatsappNumber = "5511999999999"; // Ajuste o número conforme necessário
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar uma consulta de avaliação especializada.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative py-8 bg-gradient-to-r from-primary to-primary-hover overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm animate-fade-in">
            <Phone className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Atendimento Especializado</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight animate-fade-in">
            Agende sua Avaliação Completa com Especialistas
          </h2>

          <p className="text-lg text-white/90 max-w-2xl mx-auto animate-fade-in">
            Transforme seu sorriso com planejamento digital 3D e tecnologia de ponta.
            Nossa equipe está pronta para criar o tratamento perfeito para você.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-scale-in">
            <Button
              size="lg"
              variant="champagne"
              className="group shadow-strong hover:shadow-glow w-full sm:w-auto"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Agendar pelo WhatsApp
            </Button>

            <div className="flex items-center gap-3 text-white/90">
              <div className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
              <span className="text-sm font-medium">Resposta em até 1 hora</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
    </section>
  );
};

export default WhatsAppBanner;
