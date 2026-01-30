const ProductDemo = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-display-sm md:text-display text-foreground mb-4">
            See it in action
          </h2>
          <p className="text-lg text-muted-foreground">
            From page to CRM in under 10 seconds
          </p>
        </div>

        {/* Demo video placeholder */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl shadow-product border border-border overflow-hidden aspect-video">
            {/* Video placeholder with animated demo representation */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-secondary flex items-center justify-center">
              <div className="text-center">
                {/* Play button */}
                <button className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 shadow-lg hover:bg-primary/90 transition-colors">
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <p className="text-muted-foreground text-sm">
                  Watch the 30-second demo
                </p>
              </div>
            </div>

            {/* Animated step indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
              <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md border border-border">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs text-foreground font-medium">Select</span>
              </div>
              <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md border border-border">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs text-foreground font-medium">Map</span>
              </div>
              <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md border border-border">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span className="text-xs text-foreground font-medium">Save</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;
