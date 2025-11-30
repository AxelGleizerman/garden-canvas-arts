import { Card, CardContent } from "@/components/ui/card";
import portfolioVideo from "@/assets/WhatsApp Video 2025-11-27 at 20.13.13 (1).mp4";
import portfolioImage from "@/assets/WhatsApp Image 2025-11-27 at 20.22.33.jpeg";

export const Portfolio = () => {
  const projects = [
    {
      video: portfolioVideo,
      title: "Transformación en Proceso",
      description: "Un vistazo al proceso creativo de transformación de jardines, mostrando cómo cada espacio evoluciona desde su estado inicial hasta convertirse en una obra de arte viviente."
    },
    {
      image: portfolioImage,
      title: "Obra de Arte Natural",
      description: "Una composición que captura la esencia del diseño paisajístico artístico, donde cada elemento se integra armoniosamente para crear un espacio único y expresivo."
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
              <div className="relative h-96 md:h-[500px] overflow-hidden">
                {project.video ? (
                  <video 
                    src={project.video} 
                    className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                    controls
                    muted
                    loop
                    autoPlay
                    playsInline
                  />
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent pointer-events-none" />
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
