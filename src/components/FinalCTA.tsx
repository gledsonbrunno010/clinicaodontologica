import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-premium -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white">
            Pronto para transformar seu sorriso?
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Agende sua avaliação gratuita e descubra como podemos criar o sorriso que você sempre desejou — com tecnologia, cuidado e resultados naturais.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-strong text-base">
              <Phone className="w-5 h-5 mr-2" />
              Agendar Avaliação Gratuita
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-base">
              Falar no WhatsApp
            </Button>
          </div>
          
          <div className="pt-8 border-t border-white/20">
            <p className="text-sm text-white/70 mb-6">
              Atendemos com agendamento prévio para garantir sua privacidade e conforto
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 text-white">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="text-sm">(11) 3456-7890</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="text-sm">Seg-Sex: 8h-19h</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="text-sm">Jardins, São Paulo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
