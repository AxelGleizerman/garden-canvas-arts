import { Card, CardContent } from "@/components/ui/card";
import heroGarden from "@/assets/hero-garden.jpg";
import peacefulGarden from "@/assets/garden-peaceful.jpg";

export const Portfolio = () => {
  const projects = [
    {
      image: heroGarden,
      title: "Sinfonía de Color Vibrante",
      description: "Una transformación que muestra capas de color estacional, desde follaje borgoña profundo hasta acentos coral brillante y dorados, creando un camino pictórico que evoluciona a través de las estaciones."
    },
    {
      image: peacefulGarden,
      title: "Santuario de Jardín Sereno",
      description: "Una composición elegante que equilibra elementos arquitectónicos con texturas naturales suaves, con plantas escultóricas y espacios verdes pacíficos para la contemplación y el descanso."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
          Transformaciones Destacadas
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-12 rounded-full" />
        
        <p className="text-center text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
          Cada proyecto es una colaboración única entre visión artística y belleza natural, 
          diseñada para crear espacios exteriores que inspiran y transforman.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] bg-card"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
