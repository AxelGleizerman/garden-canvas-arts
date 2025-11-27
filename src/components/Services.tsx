import { Palette, Sprout, Calendar, Sparkles } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Garden Transformation",
      description: "Complete reimagining of your outdoor space, from concept to installation, creating a cohesive artistic vision."
    },
    {
      icon: Palette,
      title: "Artistic Garden Planning",
      description: "Custom design plans that treat your garden as a canvas, focusing on color harmony, texture, and visual flow."
    },
    {
      icon: Sprout,
      title: "Plant Selection & Composition",
      description: "Expertly curated plant palettes that work together like brushstrokes, creating depth, contrast, and seasonal interest."
    },
    {
      icon: Calendar,
      title: "Seasonal Redesigns",
      description: "Evolving garden compositions that transform throughout the year, ensuring your outdoor space remains vibrant and inspiring."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
          Services
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-12 rounded-full" />
        
        <p className="text-center text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
          Comprehensive landscape design services that blend artistic vision with horticultural expertise
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
