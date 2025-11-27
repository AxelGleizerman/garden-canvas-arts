export const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            About the Artist
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-12 rounded-full" />
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-xl leading-relaxed text-center">
              As a landscape designer specializing in artistic garden transformations, I see each outdoor space 
              as a canvas waiting to express its unique story through color, texture, and natural form.
            </p>
            
            <p className="text-lg leading-relaxed">
              With over <span className="text-primary font-semibold">20 years of experience</span>, I've developed 
              a distinctive approach that treats gardens as living paintings—carefully composing plant palettes, 
              seasonal rhythms, and spatial arrangements to create outdoor environments that evolve like 
              impressionist masterpieces throughout the year.
            </p>
            
            <p className="text-lg leading-relaxed">
              My work is rooted in sensitivity to natural forms, an artist's eye for color harmony, and deep 
              understanding of how plants grow and interact. I don't just design gardens—I choreograph living 
              compositions that transform ordinary spaces into deeply personal, emotionally resonant outdoor sanctuaries.
            </p>
            
            <p className="text-lg leading-relaxed italic text-center pt-6 text-foreground">
              "Every garden has the potential to become a work of art. My role is to reveal and nurture that potential."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
