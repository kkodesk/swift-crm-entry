import { MousePointerClick, Sparkles, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    title: "Select data anywhere",
    description: "Websites, LinkedIn, emails — highlight any text on any page.",
  },
  {
    icon: Sparkles,
    title: "Fields auto-inferred",
    description: "Our AI maps your selection to the right CRM fields instantly.",
  },
  {
    icon: CheckCircle2,
    title: "Review and save",
    description: "Preview the entry, make edits if needed, and save in one click.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-display-sm md:text-display text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to go from any webpage to your CRM
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-px bg-border" />
              )}
              
              <div className="relative bg-card rounded-2xl p-8 shadow-md border border-border/50 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 mx-auto">
                  <step.icon className="w-7 h-7" />
                </div>
                <div className="absolute top-6 left-6 w-6 h-6 rounded-full bg-secondary text-xs font-semibold text-foreground flex items-center justify-center">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-center text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
