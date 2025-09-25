import { MessageCircle, Star } from "lucide-react";
import alianca1 from "@/assets/alianca-1.jpg";
import alianca2 from "@/assets/alianca-2.jpg";
import alianca3 from "@/assets/alianca-3.jpg";
import alianca4 from "@/assets/alianca-4.jpg";
import alianca5 from "@/assets/alianca-5.jpg";
import alianca6 from "@/assets/alianca-6.jpg";
import alianca7 from "@/assets/alianca-7.jpg";
import alianca8 from "@/assets/alianca-8.jpg";
import aliancaDiamante1 from "@/assets/alianca-diamante-1.png";
import aliancaDiamante2 from "@/assets/alianca-diamante-2.png";
import colombia1 from "@/assets/colombia-1.svg";
import colombia2 from "@/assets/colombia-2.svg";
import logoEscura from "@/assets/logo-escura.svg";
const ProductSection = () => {
  const whatsappLink = "https://wa.me/+5527997361529?text=Olá,gostaria+de+saber+da+mega+promoção";
  const products = [{
    id: 1,
    name: "Aliança Clássica Polida",
    image: alianca1,
    originalPrice: "R$ 1.890,00",
    promoPrice: "R$ 890,00",
    discount: "53%"
  }, {
    id: 2,
    name: "Par de Alianças com Diamantes",
    image: aliancaDiamante1,
    hoverImage: aliancaDiamante2,
    originalPrice: "R$ 3.200,00",
    promoPrice: "R$ 1.590,00",
    discount: "50%"
  }, {
    id: 3,
    name: "Alianças Texturizadas Luxo",
    image: alianca3,
    originalPrice: "R$ 2.490,00",
    promoPrice: "R$ 1.190,00",
    discount: "52%"
  }, {
    id: 4,
    name: "Colômbia Ouro 18k",
    image: colombia1,
    hoverImage: colombia2,
    originalPrice: "R$ 2.890,00",
    promoPrice: "R$ 1.390,00",
    discount: "52%"
  }, {
    id: 5,
    name: "Alianças com Gravação Personalizada",
    image: alianca5,
    originalPrice: "R$ 2.690,00",
    promoPrice: "R$ 1.290,00",
    discount: "52%"
  }, {
    id: 6,
    name: "Alianças Delicadas Femininas",
    image: alianca6,
    originalPrice: "R$ 1.690,00",
    promoPrice: "R$ 790,00",
    discount: "53%"
  }, {
    id: 7,
    name: "Alianças Tradicionais Grossas",
    image: alianca7,
    originalPrice: "R$ 2.290,00",
    promoPrice: "R$ 1.090,00",
    discount: "52%"
  }, {
    id: 8,
    name: "Alianças Entrelaçadas Modernas",
    image: alianca8,
    originalPrice: "R$ 3.490,00",
    promoPrice: "R$ 1.690,00",
    discount: "52%"
  }];
  return <section className="py-16 bg-background-alt">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 relative">
          {/* Logo no canto superior direito */}
          <img 
            src={logoEscura} 
            alt="Dallaty Joias" 
            className="absolute top-0 right-0 h-12 sm:h-16 w-auto opacity-80"
          />
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 px-4">
            <span className="luxury-text text-[#870b3d]">Modelos de Alianças de Ouro</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-2 px-4">
            Todas as nossas alianças de ouro estão em promoção!
          </p>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 px-4">Entre em contato conosco para conhecer todos os modelos e aproveitar a PROMOÇÃO.</p>
          
        </div>

        {/* Products Grid - First 4 */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-8">
          {products.slice(0, 4).map(product => <div key={product.id} className="product-card group">
              {/* Discount Badge */}
              <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded-full text-sm font-semibold z-10 shadow-lg">
                -{product.discount}
              </div>
              
              {/* Product Image - Square format */}
              <div className="relative overflow-hidden rounded-lg mb-4 shimmer aspect-square w-full">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110" />
                {product.hoverImage && <img src={product.hoverImage} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:scale-110 opacity-0 hover:opacity-100" />}
              </div>
              
              {/* Product Info */}
              <div className="space-y-3 text-center">
                <h3 className="font-semibold text-foreground leading-tight text-base">
                  {product.name}
                </h3>
                
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground line-through">
                    {product.originalPrice}
                  </p>
                  <p className="text-2xl font-bold luxury-text">
                    {product.promoPrice}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ou 12x sem juros no cartão
                  </p>
                </div>
              </div>
            </div>)}
        </div>

        {/* Ver Mais Modelos CTA */}
        <div className="text-center mb-8">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold">
            <MessageCircle size={20} />
            Ver Mais Modelos
          </a>
        </div>

        {/* Products Grid - Last 4 */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-12">
          {products.slice(4, 8).map(product => <div key={product.id} className="product-card group">
              {/* Discount Badge */}
              
              
              {/* Product Image - Square format */}
              <div className="relative overflow-hidden rounded-lg mb-4 shimmer aspect-square w-full">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110" />
                {product.hoverImage && <img src={product.hoverImage} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:scale-110 opacity-0 hover:opacity-100" />}
              </div>
              
              {/* Product Info */}
              <div className="space-y-3 text-center">
                <h3 className="font-semibold text-foreground leading-tight text-base">
                  {product.name}
                </h3>
                
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground line-through">
                    {product.originalPrice}
                  </p>
                  <p className="text-2xl font-bold luxury-text">
                    {product.promoPrice}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ou 12x sem juros no cartão
                  </p>
                </div>
              </div>
            </div>)}
        </div>

        {/* CTA Section Final */}
        <div className="text-center">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold">
            <MessageCircle size={20} />
            Ver Mais Modelos
          </a>
        </div>
      </div>
    </section>;
};
export default ProductSection;