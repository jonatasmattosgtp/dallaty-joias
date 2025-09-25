import dallatyLogo from "@/assets/logo-dallaty-site-v2.svg";

const Footer = () => {
  return (
    <footer className="relative py-8 overflow-hidden">
      {/* Background with solid color */}
      <div className="absolute inset-0" style={{ backgroundColor: '#831440' }}></div>
      
      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={dallatyLogo} 
              alt="Dallaty Joias" 
              className="h-16 w-auto"
            />
          </div>
          
          {/* Company Info */}
          <div className="text-center text-white">
            <p className="text-lg font-medium mb-1">
              CNPJ 13.780.288/0001-06 - Dallaty Joias
            </p>
            <p className="text-sm text-white/80">
              © 2025 Dallaty Joias - Todos os direitos reservados
            </p>
          </div>
          
          {/* Spacer for alignment */}
          <div className="flex-shrink-0 w-16 md:block hidden"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;