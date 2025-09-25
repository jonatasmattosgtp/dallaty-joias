import { MessageCircle, MapPin, Clock, Instagram, Phone } from "lucide-react";
import logoEscuraLetras from "@/assets/logo-escura-letras-escuras.svg";
const ContactSection = () => {
  const whatsappLink = "https://wa.me/+5527997361529?text=Olá,gostaria+de+saber+da+mega+promoção";
  const instagramLink = "https://instagram.com/dallatyjoias";
  const mapsLink = "https://maps.app.goo.gl/bctgAkPZFpe3RWka8";
  return <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 relative">
          {/* Logo no canto superior direito */}
          <img src={logoEscuraLetras} alt="Dallaty Joias" className="absolute top-0 right-0 h-12 sm:h-16 w-auto opacity-80" />
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 px-4">
            Visite Nossa <span className="luxury-text">Loja</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Estamos localizados em Serra - ES, prontos para atender você com toda excelência que nossa marca oferece.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Mapa */}
          <div className="relative">
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
              <iframe src="https://maps.google.com/maps?q=Tv.+V.+Cinco,+119+-+Parque+Res.+Laranjeiras,+Serra+-+ES,+29165-130&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="400" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-96"></iframe>
            </div>
          </div>

          {/* Informações de Contato - Card Único */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 space-y-6">
            {/* Endereço */}
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Endereço</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tv. V. Cinco, 119, Parque Res. Laranjeiras - Serra - ES, 29165-130
                </p>
                <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mt-2 text-sm font-medium">
                  Ver no Google Maps
                </a>
              </div>
            </div>

            <div className="h-px bg-border/50"></div>

            {/* Horário de Funcionamento */}
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Horário de Funcionamento</h3>
                <p className="text-muted-foreground">
                  Segunda a Sexta: 08h às 18h
                </p>
              </div>
            </div>

            <div className="h-px bg-border/50"></div>

            {/* Contatos */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Contatos</h3>
              
              {/* WhatsApp */}
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors group">
                <MessageCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium text-green-800">WhatsApp</p>
                  <p className="text-green-600 text-sm">+55 27 99736-1529</p>
                </div>
              </a>

              {/* Instagram */}
              <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-pink-50 hover:bg-pink-100 transition-colors group">
                <Instagram className="w-5 h-5 text-pink-600" />
                <div>
                  <p className="font-medium text-pink-800">Instagram</p>
                  <p className="text-pink-600 text-sm">@dallatyjoias</p>
                </div>
              </a>
            </div>

            {/* CTA Principal */}
            
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;