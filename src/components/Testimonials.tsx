import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
          Testimonios de Clientes
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-12 rounded-full" />
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-muted/30 border-dashed border-2 border-border p-12 text-center">
            <CardContent className="p-0">
              <Quote className="w-12 h-12 text-accent mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground italic mb-4">
                Los testimonios de clientes se mostrarán aquí
              </p>
              <p className="text-sm text-muted-foreground">
                Comparte comentarios de tus clientes satisfechos para generar confianza y mostrar el impacto de tu trabajo
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
