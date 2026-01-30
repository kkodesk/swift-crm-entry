import { Zap, ClipboardX, Layers, Eye, Calendar } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Faster CRM entry",
    description: "Cut data entry time by 80%. No more switching tabs or manual typing.",
  },
  {
    icon: ClipboardX,
    title: "No manual copy-paste",
    description: "Select once, save once. The extension handles everything in between.",
  },
  {
    icon: Layers,
    title: "Works across multiple CRMs",
    description: "Salesforce, HubSpot, Pipedrive, and more. One tool for all your systems.",
  },
  {
    icon: Eye,
    title: "Full preview before saving",
    description: "Always see exactly what you're saving. Edit fields before committing.",
  },
  {
    icon: Calendar,
    title: "Built for daily workflows",
    description: "Designed for sales reps who prospect every day. Fast and frictionless.",
  },
];

const KeyBenefits = () => {
  return (
    <section id="benefits" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-display-sm md:text-display text-foreground mb-4">
            Why teams love it
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for the way sales teams actually work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group bg-card rounded-xl p-6 border border-border/50 hover:border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <benefit.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
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

export default KeyBenefits;
