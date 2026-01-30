import { Users, Settings, TrendingUp, Building2 } from "lucide-react";

const audiences = [
  {
    icon: Users,
    title: "Sales reps",
    description: "Prospect faster without leaving LinkedIn or your inbox.",
  },
  {
    icon: Settings,
    title: "Operations teams",
    description: "Ensure clean, consistent data across all your systems.",
  },
  {
    icon: TrendingUp,
    title: "RevOps",
    description: "Standardize CRM workflows and reduce manual errors.",
  },
  {
    icon: Building2,
    title: "Agencies",
    description: "Manage multiple CRMs for different clients, seamlessly.",
  },
];

const WhoItsFor = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-display-sm md:text-display text-foreground mb-4">
            Who it's for
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for teams that live in their CRM
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="text-center p-6 rounded-xl bg-secondary/30 border border-transparent hover:border-border hover:bg-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <audience.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {audience.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
