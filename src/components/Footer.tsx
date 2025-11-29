import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 font-display">Contacto</h3>
            <div className="space-y-3">
              <a href="mailto:hello@gardenart.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@gardenart.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(123) 456-7890</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Tu Ciudad, Estado</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 font-display">Enlaces Rápidos</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-sm hover:text-accent transition-colors">Sobre Mí</a>
              <a href="#portfolio" className="block text-sm hover:text-accent transition-colors">Portafolio</a>
              <a href="#services" className="block text-sm hover:text-accent transition-colors">Servicios</a>
              <a href="#booking" className="block text-sm hover:text-accent transition-colors">Reservar Consulta</a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4 font-display">Sígueme</h3>
            <p className="text-sm mb-4 opacity-90">
              Descubre inspiración para jardines y transformaciones estacionales
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; {currentYear} Arte en Jardines & Diseño Paisajístico. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
