import { Shield, Eye, Lock, Users } from "lucide-react";

const trustPoints = [
  {
    icon: Shield,
    text: "No automatic writes",
    description: "We never push data to your CRM without your explicit action.",
  },
  {
    icon: Eye,
    text: "You always review before saving",
    description: "Full preview of every entry before it touches your CRM.",
  },
  {
    icon: Lock,
    text: "Minimal permissions",
    description: "We only request the access we need. Nothing more.",
  },
  {
    icon: Users,
    text: "Designed for professional teams",
    description: "Enterprise-ready security and compliance built in.",
  },
];

const TrustSection = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-display-sm md:text-display text-foreground mb-4">
            Your data, your control
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with security and trust at the core
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {trustPoints.map((point) => (
            <div
              key={point.text}
              className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary text-foreground flex items-center justify-center">
                <point.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">
                  {point.text}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
