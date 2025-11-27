import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export const Booking = () => {
  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's Create Something Beautiful
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8 rounded-full" />
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Schedule a complimentary 15-minute consultation to discuss your garden's potential. 
            We'll explore your vision, assess your space, and discover how we can transform your 
            outdoor environment into a living work of art.
          </p>

          <div className="bg-card rounded-2xl p-8 shadow-xl border border-border mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Calendar className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Free 15-Minute Consultation</h3>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Book your consultation using the calendar widget below, or contact me directly to find a time that works for you.
            </p>

            {/* Placeholder for booking widget - user can integrate Calendly, Acuity, etc. */}
            <div className="bg-muted/50 rounded-xl p-12 border-2 border-dashed border-border mb-6">
              <p className="text-muted-foreground italic">
                [Booking calendar widget will be integrated here]
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Integrate your preferred booking system: Calendly, Acuity Scheduling, or similar
              </p>
            </div>

            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Schedule Your Consultation
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="p-4">
              <h4 className="font-semibold text-foreground mb-2">No Obligation</h4>
              <p className="text-sm text-muted-foreground">
                A friendly conversation to explore possibilities
              </p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-foreground mb-2">Expert Insight</h4>
              <p className="text-sm text-muted-foreground">
                20+ years of artistic garden design experience
              </p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-foreground mb-2">Personalized Vision</h4>
              <p className="text-sm text-muted-foreground">
                Tailored approach for your unique space
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
