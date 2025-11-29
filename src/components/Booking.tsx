import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export const Booking = () => {
  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Creemos Algo Hermoso Juntos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8 rounded-full" />
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Agenda una consulta gratuita de 15 minutos para discutir el potencial de tu jardín. 
            Exploraremos tu visión, evaluaremos tu espacio y descubriremos cómo podemos transformar tu 
            entorno exterior en una obra de arte viviente.
          </p>

          <div className="bg-card rounded-2xl p-8 shadow-xl border border-border mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Calendar className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Consulta Gratuita de 15 Minutos</h3>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Reserva tu consulta usando el calendario a continuación, o contáctame directamente para encontrar un horario que te funcione.
            </p>

            {/* Placeholder for booking widget - user can integrate Calendly, Acuity, etc. */}
            <div className="bg-muted/50 rounded-xl p-12 border-2 border-dashed border-border mb-6">
              <p className="text-muted-foreground italic">
                [El widget del calendario de reservas se integrará aquí]
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Integra tu sistema de reservas preferido: Calendly, Acuity Scheduling, o similar
              </p>
            </div>

            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Agenda Tu Consulta
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="p-4">
              <h4 className="font-semibold text-foreground mb-2">Sin Compromiso</h4>
              <p className="text-sm text-muted-foreground">
                Una conversación amigable para explorar posibilidades
              </p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-foreground mb-2">Perspectiva Experta</h4>
              <p className="text-sm text-muted-foreground">
                Más de 20 años de experiencia en diseño artístico de jardines
              </p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-foreground mb-2">Visión Personalizada</h4>
              <p className="text-sm text-muted-foreground">
                Enfoque adaptado a tu espacio único
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
