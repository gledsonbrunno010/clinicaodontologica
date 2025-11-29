import { Star, Quote, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const SocialProof = () => {
    const testimonials = [
        {
            name: "Ana Paula S.",
            role: "Empresária",
            content: "A transformação do meu sorriso mudou completamente minha autoestima. O atendimento foi impecável do início ao fim.",
            rating: 5
        },
        {
            name: "Ricardo M.",
            role: "Advogado",
            content: "Profissionalismo e tecnologia de ponta. O resultado das minhas lentes de contato ficou incrivelmente natural.",
            rating: 5
        },
        {
            name: "Juliana C.",
            role: "Arquiteta",
            content: "Ambiente sofisticado e equipe muito atenciosa. Me senti segura em todo o processo de harmonização facial.",
            rating: 5
        }
    ];

    return (
        <section id="depoimentos" className="py-24 bg-secondary relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4 scroll-reveal">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 w-fit mx-auto">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">Histórias Reais</span>
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                        O impacto de um <br />
                        <span className="text-primary">novo sorriso</span>
                    </h2>
                </div>

                {/* Testimonials Carousel */}
                <div className="max-w-5xl mx-auto mb-20 relative">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                    <div className="h-full">
                                        <Card className="h-full glass-card border-none shadow-soft hover:shadow-medium transition-all duration-300">
                                            <CardContent className="p-8 flex flex-col h-full">
                                                <Quote className="w-8 h-8 text-accent/40 mb-4" />
                                                <div className="flex gap-1 mb-4">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                                                    ))}
                                                </div>
                                                <p className="text-muted-foreground mb-6 flex-grow italic">
                                                    "{testimonial.content}"
                                                </p>
                                                <div className="mt-auto">
                                                    <p className="font-serif font-bold text-lg text-foreground">{testimonial.name}</p>
                                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex -left-12 bg-white hover:bg-primary hover:text-white border-none shadow-medium transition-colors" />
                        <CarouselNext className="hidden md:flex -right-12 bg-white hover:bg-primary hover:text-white border-none shadow-medium transition-colors" />
                    </Carousel>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border/50 pt-12">
                    {[
                        { number: "2.000+", label: "Sorrisos Transformados" },
                        { number: "15+", label: "Anos de Experiência" },
                        { number: "100%", label: "Satisfação Garantida" },
                        { number: "Premium", label: "Materiais Importados" }
                    ].map((stat, index) => (
                        <div key={index} className="text-center space-y-2 group cursor-default">
                            <p className="font-serif text-3xl md:text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                                {stat.number}
                            </p>
                            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
