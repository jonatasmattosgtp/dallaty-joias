import { MessageCircle, Star, Quote } from "lucide-react";
import logoEscura from "@/assets/logo-escura.svg";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import feedback1 from "@/assets/feedback-1.svg";
import feedback2 from "@/assets/feedback-2.svg";
import feedback3 from "@/assets/feedback-3.svg";
import feedback4 from "@/assets/feedback-4.svg";
import feedback5 from "@/assets/feedback-5.svg";
import feedback6 from "@/assets/feedback-6.svg";
import feedback7 from "@/assets/feedback-7.svg";
import feedback8 from "@/assets/feedback-8.svg";
const TestimonialsSection = () => {
  const whatsappLink = "https://wa.me/+5527997361529?text=Olá,gostaria+de+saber+da+mega+promoção";
  const feedbackImages = [feedback1, feedback2, feedback3, feedback4, feedback5, feedback6, feedback7, feedback8];
  const testimonials = [{
    id: 1,
    name: "Marina Silva",
    location: "São Paulo, SP",
    text: "Comprei minha aliança de noivado na DallatyJoias e foi a melhor escolha! A qualidade é impecável, o ouro brilha muito e o atendimento foi excepcional. Recomendo de olhos fechados!",
    rating: 5,
    date: "Há 2 semanas"
  }, {
    id: 2,
    name: "Carlos Eduardo",
    location: "Rio de Janeiro, RJ",
    text: "Estava procurando alianças de casamento há meses e nenhuma me agradava. Na DallatyJoias encontrei exatamente o que queria! Preço justo, qualidade excepcional e entrega rápida.",
    rating: 5,
    date: "Há 1 mês"
  }, {
    id: 3,
    name: "Juliana Costa",
    location: "Belo Horizonte, MG",
    text: "A DallatyJoias superou todas as minhas expectativas! As alianças são lindíssimas, o ouro é de primeira qualidade e o certificado de autenticidade me deu total segurança na compra.",
    rating: 5,
    date: "Há 3 semanas"
  }];
  return <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 relative">
          {/* Logo no canto superior esquerdo */}
          <img 
            src={logoEscura} 
            alt="Dallaty Joias" 
            className="absolute top-0 left-0 h-12 sm:h-16 w-auto opacity-80"
          />
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 px-4">
            O que nossos <span className="luxury-text">clientes dizem</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 px-4">Mais de 10.000 casais realizaram o sonho com a DallatyJoias</p>
          
          {/* Feedback Images Carousel */}
          <div className="mb-12 group">
            <Carousel opts={{
            align: "start",
            loop: true,
            direction: "ltr"
          }} plugins={[Autoplay({
            delay: 2000,
            stopOnInteraction: true,
            stopOnMouseEnter: false,
            stopOnFocusIn: false
          })]} className="w-full max-w-5xl mx-auto relative">
              <CarouselContent className="-ml-2 md:-ml-4">
                {feedbackImages.map((image, index) => <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="relative">
                      <img src={image} alt={`Feedback do cliente ${index + 1}`} className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" />
                    </div>
                  </CarouselItem>)}
              </CarouselContent>
              <CarouselPrevious className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 -left-4 md:-left-12" />
              <CarouselNext className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 -right-4 md:-right-12" />
            </Carousel>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Grid content temporarily removed */}
        </div>

        {/* CTA Section */}
        
      </div>
    </section>;
};
export default TestimonialsSection;