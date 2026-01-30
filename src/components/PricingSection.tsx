import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const features = [
  "Unlimited entries",
  "CRM field inference",
  "Preview & edit before saving",
  "Multi-CRM support",
  "Priority support",
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-display-sm md:text-display text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            One plan, everything included
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
            {/* Header */}
            <div className="p-8 text-center border-b border-border">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-4">
                Early Access
              </div>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-4xl font-bold text-foreground">$20</span>
                <span className="text-muted-foreground">/ month per user</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Billed monthly, cancel anytime
              </p>
            </div>

            {/* Features */}
            <div className="p-8">
              <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/20 text-success flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="hero" size="xl" className="w-full">
                Add to waitlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
