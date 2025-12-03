import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-garden.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <style>{`
        .hero-bg {
          background-image: linear-gradient(rgba(42, 55, 48, 0.4), rgba(42, 55, 48, 0.6)), url(${heroImage});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        @media (min-width: 769px) {
          .hero-bg {
            background-attachment: fixed;
          }
        }
      `}</style>
      <div className="absolute inset-0 z-0 hero-bg" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-in fade-in duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
            Transformando Jardines en Obras de Arte Vivas
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 drop-shadow-md font-light max-w-2xl mx-auto">
            Diseño paisajístico que fusiona naturaleza, color y emoción
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <a 
              href="https://calendar.app.google/9wpvxnju81sn7adC6" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Reserva una Consulta
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};
