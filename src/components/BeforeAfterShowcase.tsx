import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Maximize2 } from "lucide-react";
import heroSmile from "@/assets/hero-smile.jpg";
import veneersDetail from "@/assets/veneers-detail.jpg";

// Placeholder data - using existing images to simulate the "Before/After" static image
// In a real scenario, 'image' would be the single AI-generated static comparison image
const transformations = [
    { id: 1, image: veneersDetail, title: "Lentes de Contato", desc: "Correção de diastema e clareamento" },
    { id: 2, image: heroSmile, title: "Reabilitação Oral", desc: "Implantes e coroas em porcelana" },
    { id: 3, image: veneersDetail, title: "Facetas em Resina", desc: "Harmonização do sorriso" },
    { id: 4, image: heroSmile, title: "Invisalign", desc: "Alinhamento e contorno gengival" },
    { id: 5, image: veneersDetail, title: "Clareamento Premium", desc: "Protocolo combinado laser + caseiro" },
    { id: 6, image: heroSmile, title: "Gengivoplastia", desc: "Correção do sorriso gengival" },
    { id: 7, image: veneersDetail, title: "Lentes Ultra-finas", desc: "Transformação sem desgaste" },
];

const StaticComparisonCard = ({ image, title, desc }: { image: string, title: string, desc: string }) => {
    return (
        <div className="relative group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-500 border border-transparent hover:border-accent/30 cursor-pointer h-full">
            {/* Static Split Image Simulation */}
            <div className="relative h-64 md:h-80 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />

                {/* Overlay Labels for "Static" feel */}
                <div className="absolute top-4 left-4 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Antes</div>
                <div className="absolute bottom-4 right-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Depois</div>

                {/* Hover Overlay Icon */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-strong transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <Maximize2 className="w-5 h-5 text-primary" />
                    </div>
                </div>
            </div>

            <div className="p-6 text-center space-y-2">
                <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
                <p className="text-xs text-muted-foreground/60 italic pt-2">Resultado obtido em 3 sessões</p>
            </div>
        </div>
    );
};

const BeforeAfterShowcase = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: false })]);

    return (
        <section id="trabalhos" className="pt-4 pb-24 bg-gradient-soft relative overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16 space-y-4 scroll-reveal">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 w-fit mx-auto">
                        <span className="text-xs font-semibold text-accent uppercase tracking-wider">Resultados Comprovados</span>
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
                        Antes e Depois dos Nossos Clientes
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Resultados reais em pouco tempo de tratamento
                    </p>
                </div>

                {/* Slider */}
                <div className="relative max-w-7xl mx-auto">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-4">
                            {transformations.map((item) => (
                                <div key={item.id} className="pl-4 min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <div>
                                                <StaticComparisonCard image={item.image} title={item.title} desc={item.desc} />
                                            </div>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-[90vw] h-[90vh] bg-transparent border-none shadow-none p-0 flex items-center justify-center outline-none focus:outline-none">
                                            <div className="relative w-full h-full max-w-6xl max-h-[800px] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col">
                                                <div className="relative flex-1 overflow-hidden bg-black">
                                                    <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                                                    <div className="absolute top-8 left-8 bg-black/60 text-white px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-widest">Antes</div>
                                                    <div className="absolute bottom-8 right-8 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-widest">Depois</div>
                                                </div>
                                                <div className="bg-white p-6 text-center border-t border-border/10">
                                                    <h3 className="font-serif text-2xl font-bold text-foreground">{item.title}</h3>
                                                    <p className="text-muted-foreground">{item.desc}</p>
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfterShowcase;
