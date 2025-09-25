import { MessageCircle, Shield, Award, Truck, CreditCard, Clock, CheckCircle } from "lucide-react";
import logoClara from "@/assets/logo-clara.svg";
const CredibilitySection = () => {
  const whatsappLink = "https://wa.me/+5527997361529?text=Olá,gostaria+de+saber+da+mega+promoção";
  const guarantees = [{
    icon: <Shield className="w-8 h-8 text-gold" />,
    title: "Certificado de Autenticidade",
    description: "Todas as peças acompanham certificado de autenticidade do ouro 18K"
  }, {
    icon: <Award className="w-8 h-8 text-gold" />,
    title: "Garantia Vitalícia",
    description: "Garantia vitalícia contra defeitos de fabricação em todas as alianças"
  }, {
    icon: <Truck className="w-8 h-8 text-gold" />,
    title: "Frete Grátis",
    description: "Entrega gratuita para todo o Brasil com seguro total da mercadoria"
  }, {
    icon: <CreditCard className="w-8 h-8 text-gold" />,
    title: "Pagamento Seguro",
    description: "Parcelamento em até 12x sem juros no cartão ou à vista com desconto"
  }, {
    icon: <Clock className="w-8 h-8 text-gold" />,
    title: "Entrega Rápida",
    description: "Prazo de entrega de 3 a 7 dias úteis com código de rastreamento"
  }, {
    icon: <CheckCircle className="w-8 h-8 text-gold" />,
    title: "7 Dias para Troca",
    description: "Não ficou satisfeito? Troque ou devolva em até 7 dias sem custo"
  }];
  return <section className="py-20" style={{
    background: 'linear-gradient(to bottom right, #870b3d, #c39b97)'
  }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 relative">
          {/* Logo no canto superior esquerdo */}
          <img 
            src={logoClara} 
            alt="Dallaty Joias" 
            className="absolute top-0 left-0 h-12 sm:h-16 w-auto opacity-80"
          />
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-luxury-text mb-6 px-4">
            Conheça a <span className="luxury-text">DallatyJoias</span>
          </h2>
          <div className="max-w-4xl mx-auto text-luxury-text/90 text-base sm:text-lg leading-relaxed space-y-4 px-4">
            <p>
              <strong>Há mais de 25 anos</strong> criando momentos especiais e eternizando o amor através de joias únicas e exclusivas.
            </p>
            <p>
              A <strong>DallatyJoias</strong> nasceu do sonho de uma família apaixonada pela ourivesaria, que decidiu criar uma fábrica dedicada a produzir alianças de excepcional qualidade com preços justos, eliminando intermediários e oferecendo valor direto ao cliente.
            </p>
            <p>
              Nossa missão é <strong>transformar momentos especiais em memórias eternas</strong>, fornecendo joias que representam o verdadeiro significado do amor e do compromisso.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold luxury-text mb-2">25+</div>
            <div className="text-luxury-text/80">Anos de Tradição</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold luxury-text mb-2">15k+</div>
            <div className="text-luxury-text/80">Casais Atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold luxury-text mb-2">98%</div>
            <div className="text-luxury-text/80">Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold luxury-text mb-2">100%</div>
            <div className="text-luxury-text/80">Ouro Certificado</div>
          </div>
        </div>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {guarantees.map((guarantee, index) => <div key={index} className="bg-card/10 backdrop-blur-sm rounded-2xl p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-gold/20 hover:shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                {guarantee.icon}
                <h3 className="text-xl font-semibold text-[#f4c3be]">
                  {guarantee.title}
                </h3>
              </div>
              <p className="leading-relaxed text-white">
                {guarantee.description}
              </p>
            </div>)}
        </div>

        {/* Certificates Section */}
        <div className="bg-card/5 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 mb-12">
          <h3 className="font-bold text-luxury-text mb-6 text-center text-3xl">Certificações e Qualidade Garantida</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-gold text-4xl">🥇</div>
              <h4 className="font-semibold text-base text-zinc-50">Ouro 18K Puro</h4>
              <p className="text-sm text-zinc-50">Certificado pelo INMETRO</p>
            </div>
            <div className="space-y-2">
              <div className="text-gold text-4xl">🔒</div>
              <h4 className="font-semibold text-zinc-50">Transação Segura</h4>
              <p className="text-sm text-zinc-50">SSL 256 bits</p>
            </div>
            <div className="space-y-2">
              <div className="text-gold text-4xl">🚚</div>
              <h4 className="font-semibold text-zinc-50">Entrega Garantida</h4>
              <p className="text-sm text-zinc-50">Correios com seguro</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-gold/20 to-gold-light/20 rounded-2xl p-8 border border-gold/30">
          <h3 className="text-3xl font-bold text-luxury-text mb-4">
            Pronto para realizar o seu <span className="luxury-text">sonho</span>?
          </h3>
          <p className="text-lg mb-6 text-zinc-50">
            Fale conosco agora e garante sua aliança com preço de fábrica
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4 animate-glow">
              <MessageCircle size={24} />
              Garantir Minha Aliança Agora
            </a>
            <div className="text-luxury-text/70 text-sm">
              <p className="text-zinc-50">⚡ Atendimento em menos de 2 minutos</p>
              <p className="text-zinc-50">💎 Especialistas em alianças e joias</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CredibilitySection;