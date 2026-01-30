import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up">
            <h1 className="text-display-sm md:text-display lg:text-display-lg text-foreground mb-6 text-balance">
              Add CRM Entries From Any Website — Fast
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg text-balance">
              Select data on any webpage, auto-map fields, preview, and save to your CRM in seconds.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
              <Button variant="hero" size="xl">
                Add to waitlist
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              $20 / month — early access
            </p>
          </div>

          {/* Right mockup */}
          <div className="animate-fade-in-delay-2 relative">
            <div className="relative">
              {/* Browser window mockup */}
              <div className="bg-card rounded-2xl shadow-product border border-border overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/30">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-border" />
                    <div className="w-3 h-3 rounded-full bg-border" />
                    <div className="w-3 h-3 rounded-full bg-border" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-secondary rounded-md px-3 py-1.5 text-xs text-muted-foreground max-w-xs mx-auto text-center">
                      linkedin.com/in/john-doe
                    </div>
                  </div>
                </div>
                
                {/* Page content with CRM sidebar */}
                <div className="flex">
                  {/* LinkedIn-style content */}
                  <div className="flex-1 p-6 bg-secondary/20">
                    <div className="flex gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-secondary" />
                      <div>
                        <div className="h-4 w-32 bg-primary/20 rounded mb-2">
                          <span className="text-xs font-medium text-primary px-1">John Doe</span>
                        </div>
                        <div className="h-3 w-48 bg-accent/30 rounded mb-1">
                          <span className="text-[10px] text-accent px-1">VP of Sales at Acme Corp</span>
                        </div>
                        <div className="h-3 w-24 bg-border rounded" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 w-full bg-border rounded" />
                      <div className="h-3 w-4/5 bg-border rounded" />
                      <div className="h-3 w-3/4 bg-border rounded" />
                    </div>
                  </div>
                  
                  {/* CRM Sidebar */}
                  <div className="w-56 border-l border-border bg-card p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <span className="text-xs font-medium text-foreground">QuickCRM</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <label className="text-[10px] text-muted-foreground uppercase tracking-wide">Name</label>
                        <div className="mt-1 px-2 py-1.5 bg-secondary/50 rounded text-xs text-foreground border border-border">
                          John Doe
                        </div>
                      </div>
                      <div>
                        <label className="text-[10px] text-muted-foreground uppercase tracking-wide">Title</label>
                        <div className="mt-1 px-2 py-1.5 bg-secondary/50 rounded text-xs text-foreground border border-border">
                          VP of Sales
                        </div>
                      </div>
                      <div>
                        <label className="text-[10px] text-muted-foreground uppercase tracking-wide">Company</label>
                        <div className="mt-1 px-2 py-1.5 bg-secondary/50 rounded text-xs text-foreground border border-border">
                          Acme Corp
                        </div>
                      </div>
                      <Button variant="hero" size="sm" className="w-full mt-2 text-xs h-8">
                        Save to CRM
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 top-8 -right-4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
              <div className="absolute -z-10 -bottom-4 -left-4 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
