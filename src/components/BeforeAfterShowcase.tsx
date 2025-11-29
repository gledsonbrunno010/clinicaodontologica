import { useState, useEffect, useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import heroSmile from "@/assets/hero-smile.jpg";
import veneersDetail from "@/assets/veneers-detail.jpg";
import dentistPortrait from "@/assets/dentist-portrait.jpg";

// Placeholder data - In a real scenario, these would be distinct before/after pairs
const transformations = [
    { id: 1, before: dentistPortrait, after: heroSmile, title: "Lentes de Contato", desc: "Correção de diastema e clareamento" },
    { id: 2, before: veneersDetail, after: heroSmile, title: "Reabilitação Oral", desc: "Implantes e coroas em porcelana" },
    { id: 3, before: dentistPortrait, after: heroSmile, title: "Facetas em Resina", desc: "Harmonização do sorriso" },
    { id: 4, before: veneersDetail, after: heroSmile, title: "Invisalign", desc: "Alinhamento e contorno gengival" },
    { id: 5, before: dentistPortrait, after: heroSmile, title: "Clareamento Premium", desc: "Protocolo combinado laser + caseiro" },
    { id: 6, before: veneersDetail, after: heroSmile, title: "Gengivoplastia", desc: "Correção do sorriso gengival" },
    { id: 7, before: dentistPortrait, after: heroSmile, title: "Lentes Ultra-finas", desc: "Transformação sem desgaste" },
];

const ComparisonSlider = ({ before, after, isHovering }: { before: string, after: string, isHovering: boolean }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
        if (!containerRef.current) return;
        const { left, width } = containerRef.current.getBoundingClientRect();
        const clientX = 'touches' in event ? event.touches[0].clientX : (event as React.MouseEvent).clientX;
        const position = ((clientX - left) / width) * 100;
        setSliderPosition(Math.min(Math.max(position, 0), 100));
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full h-64 md:h-80 overflow-hidden rounded-2xl cursor-col-resize select-none"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
        >
            <img src={after} alt="Depois" className="absolute top-0 left-0 w-full h-full object-cover" />
            <div
                className="absolute top-0 left-0 h-full w-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
            >
                <img src={before} alt="Antes" className="absolute top-0 left-0 w-full h-full object-cover max-w-none" style={{ width: containerRef.current?.offsetWidth }} />
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize shadow-strong flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center -ml-3.5">
                    <div className="flex gap-0.5">
                        <ChevronLeft className="w-3 h-3 text-primary" />
                        <ChevronRight className="w-3 h-3 text-primary" />
                    </div>
                </div>
            </div>

            {/* Labels */}
            <div className={`absolute top-4 left-4 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded transition-opacity duration-300 ${isHovering ? 'opacity-0' : 'opacity-100'}`}>ANTES</div>
            <div className={`absolute top-4 right-4 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded transition-opacity duration-300 ${isHovering ? 'opacity-0' : 'opacity-100'}`}>DEPOIS</div>
        </div>
    );
};

const BeforeAfterShowcase = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section className="py-24 bg-gradient-soft relative overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16 space-y-4 scroll-reveal">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 w-fit mx-auto">
                        <span className="text-xs font-semibold text-accent uppercase tracking-wider">Resultados Comprovados</span>
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
                        Transformações Reais Que Comprovam <br />
                        <span className="text-primary">Nossa Excelência Odontológica</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Resultados naturais, precisos e personalizados — sorrisos reconstruídos com tecnologia premium e abordagem humanizada.
                    </p>
                </div>

                {/* Slider */}
                <div className="relative max-w-7xl mx-auto" onMouseEnter={() => emblaApi?.plugins().autoplay.stop()} onMouseLeave={() => emblaApi?.plugins().autoplay.play()}>
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-4">
                            {transformations.map((item) => (
                                <div key={item.id} className="pl-4 min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <div
                                                className="group relative bg-white rounded-3xl p-4 shadow-soft hover:shadow-glow transition-all duration-500 border border-transparent hover:border-accent/30 cursor-pointer"
                                                onMouseEnter={() => setHoveredId(item.id)}
                                                onMouseLeave={() => setHoveredId(null)}
                                            >
                                                <ComparisonSlider before={item.before} after={item.after} isHovering={hoveredId === item.id} />

                                                <div className="mt-6 space-y-2 text-center">
                                                    <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                                </div>

                                                {/* Hover Overlay Icon */}
                                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                                    <div className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-strong">
                                                        <Maximize2 className="w-5 h-5 text-primary" />
                                                    </div>
                                                </div>
                                            </div>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-5xl bg-transparent border-none shadow-none p-0">
                                            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl p-2">
                                                {/* Close button handled by Dialog primitive usually, but we can add custom if needed */}
                                                <div className="grid md:grid-cols-2 gap-1">
                                                    <div className="relative h-96 md:h-[600px]">
                                                        <img src={item.before} alt="Antes" className="w-full h-full object-cover rounded-l-2xl" />
                                                        <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-bold">ANTES</div>
                                                    </div>
                                                    <div className="relative h-96 md:h-[600px]">
                                                        <img src={item.after} alt="Depois" className="w-full h-full object-cover rounded-r-2xl" />
                                                        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">DEPOIS</div>
                                                    </div>
                                                </div>
                                                <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-6 text-center">
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
