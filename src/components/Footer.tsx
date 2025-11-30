import { Mail, MapPin, Instagram } from "lucide-react";

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
              <a href="mailto:mariamargaritacopello@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">mariamargaritacopello@gmail.com</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Don Torcuato - Tigre, Buenos Aires</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 font-display">Enlaces Rápidos</h3>
            <div className="space-y-2">
              <a 
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0vWdkTIqMkULAxHduoS2E4hVOU_qLs-_DfWOelFQq101APig_lEW8TK1NHtxkVlrHWrnGSKiS_" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm hover:text-accent transition-colors"
              >
                Reservar Consulta
              </a>
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
