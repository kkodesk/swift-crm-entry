import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-display-sm md:text-display mb-4">
            Join the Early Access Waitlist
          </h2>
          <p className="text-lg opacity-90 mb-8">
            We're onboarding a limited number of teams. Get early access and help shape the product.
          </p>
          
          <Button 
            variant="heroSecondary" 
            size="xl"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Add to waitlist
          </Button>

          <p className="mt-6 text-sm opacity-70">
            No credit card required. We'll reach out when your spot is ready.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
