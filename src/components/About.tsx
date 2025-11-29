export const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Sobre la Artista
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-12 rounded-full" />
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-xl leading-relaxed text-center">
              Como diseñadora paisajística especializada en transformaciones artísticas de jardines, veo cada espacio 
              exterior como un lienzo esperando expresar su historia única a través del color, la textura y la forma natural.
            </p>
            
            <p className="text-lg leading-relaxed">
              Con más de <span className="text-primary font-semibold">20 años de experiencia</span>, he desarrollado 
              un enfoque distintivo que trata los jardines como pinturas vivientes—componiendo cuidadosamente paletas de plantas, 
              ritmos estacionales y arreglos espaciales para crear ambientes exteriores que evolucionan como 
              obras maestras impresionistas a lo largo del año.
            </p>
            
            <p className="text-lg leading-relaxed">
              Mi trabajo se basa en la sensibilidad hacia las formas naturales, el ojo artístico para la armonía del color y una profunda 
              comprensión de cómo crecen e interactúan las plantas. No solo diseño jardines—coreografío 
              composiciones vivientes que transforman espacios ordinarios en santuarios exteriores profundamente personales y emocionalmente resonantes.
            </p>
            
            <p className="text-lg leading-relaxed italic text-center pt-6 text-foreground">
              "Cada jardín tiene el potencial de convertirse en una obra de arte. Mi papel es revelar y nutrir ese potencial."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
