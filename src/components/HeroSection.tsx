import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import logoBrancaLetras from "@/assets/logo-branca-letras-claras.svg";
const HeroSection = () => {
  const whatsappLink = "https://wa.me/+5527997361529?text=Olá,gostaria+de+saber+da+mega+promoção";
  return <section className="hero-section">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundPosition: 'center 20%'
    }} />
      <div className="hero-overlay" />
      
      {/* Headline Principal - Movida bem para o topo */}
      <div className="absolute top-4 sm:top-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4 sm:px-6 z-20">
        <div className="text-center">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white leading-tight lg:text-7xl">
            A <span className="luxury-text">MAIOR PROMOÇÃO</span><br />
            de <span className="luxury-text">OURO</span> já vista!
          </h1>
        </div>
      </div>

      {/* Texto logo abaixo da headline */}
      <div className="absolute top-32 sm:top-40 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4 sm:px-6 z-10">
        <div className="text-center">
          <p className="text-sm sm:text-lg md:text-xl text-gold-light font-semibold py-4 sm:py-[25px]">
            Preço de fábrica e condições especiais para transformar seu sonho em realidade hoje.
          </p>
        </div>
      </div>

      {/* Content - Espaço vazio no meio */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          {/* Espaço vazio para separar headline da subheadline */}
        </div>
      </div>

      {/* CTA Principal - Fixed position lower */}
      <div className="absolute bottom-20 sm:bottom-32 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4 sm:px-6">
        <div className="text-center relative">
          {/* Logo no canto inferior esquerdo alinhada com a CTA - 2x maior */}
          <img 
            src={logoBrancaLetras} 
            alt="Dallaty Joias" 
            className="absolute bottom-0 left-0 h-16 sm:h-24 w-auto opacity-80"
          />
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp inline-flex text-lg sm:text-xl max-w-xs sm:max-w-sm mx-auto">
            <MessageCircle size={20} className="sm:w-6 sm:h-6" />
            Ver Preços de Fábrica
          </a>
        </div>
      </div>

      {/* Texto abaixo do CTA */}
      <div className="absolute bottom-12 sm:bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium">
            Alianças de Namoro, Noivado e Casamento
          </p>
        </div>
      </div>

      {/* Bottom info text */}
      <div className="absolute bottom-4 sm:bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4 sm:px-6">
        <p className="text-white/80 text-xs sm:text-sm text-center">Atendimento imediato • Entregamos em todo o Brasil • Orçamento sem compromisso • Frete à combinar</p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        
      </div>
    </section>;
};
export default HeroSection;