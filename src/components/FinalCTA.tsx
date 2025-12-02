import { Button } from "@/components/ui/button";
import { Phone, Mail, Star } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-32 bg-gradient-graphite relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-10" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 border border-accent/30 backdrop-blur-sm animate-scale-in">
            <Star className="w-5 h-5 text-accent fill-accent" />
            <span className="text-sm font-semibold text-accent tracking-wide">Atendimento Prioritário</span>
          </div>

          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight animate-fade-in">
            Inicie sua jornada de{" "}
            <span className="text-accent">transformação estética</span>
          </h2>

          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Avaliação clínica completa com escaneamento 3D, análise facial digital e plano de tratamento personalizado — sem compromisso.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
            <Button size="lg" className="text-base shadow-glow group animate-slide-up bg-yellow-400 hover:bg-yellow-500 text-blue-900 border-none">
              <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Agendar Análise Completa
            </Button>
            <Button size="lg" className="text-base shadow-glow group animate-slide-up bg-yellow-400 hover:bg-yellow-500 text-blue-900 border-none" style={{ animationDelay: '0.1s' }}>
              <Mail className="w-5 h-5 mr-2" />
              Contato Direto
            </Button>
          </div>

          <div className="pt-12 border-t border-white/10">
            <p className="text-sm text-white/60 mb-8 font-medium">
              Sistema de agendamento inteligente • Privacidade e discrição absoluta
            </p>

            <div className="grid sm:grid-cols-3 gap-8 text-white/90">
              <div className="space-y-2 group cursor-pointer">
                <Phone className="w-6 h-6 mx-auto group-hover:scale-110 transition-transform" />
                <p className="text-sm font-semibold">(11) 3456-7890</p>
                <p className="text-xs text-white/60">Atendimento especializado</p>
              </div>
              <div className="space-y-2 group cursor-pointer">
                <Mail className="w-6 h-6 mx-auto group-hover:scale-110 transition-transform" />
                <p className="text-sm font-semibold">contato@essencedental.com</p>
                <p className="text-xs text-white/60">Resposta em 24h</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-1">
                  <Star className="w-5 h-5 text-accent fill-accent" />
                  <Star className="w-5 h-5 text-accent fill-accent" />
                  <Star className="w-5 h-5 text-accent fill-accent" />
                  <Star className="w-5 h-5 text-accent fill-accent" />
                  <Star className="w-5 h-5 text-accent fill-accent" />
                </div>
                <p className="text-sm font-semibold">5.0 / 5.0</p>
                <p className="text-xs text-white/60">Avaliação média</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
