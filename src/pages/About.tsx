import { Check } from "lucide-react";
import Layout from "@/components/Layout";

const plans = [
  { name: "Basic", price: "$5", features: ["720p Streaming", "1 Device", "Limited Library"] },
  { name: "Standard", price: "$10", features: ["1080p Streaming", "2 Devices", "Full Library"], popular: true },
  { name: "Premium", price: "$15", features: ["4K Streaming", "4 Devices", "Full Library", "Offline Downloads"] },
];

const About = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About */}
        <section className="text-center mb-20 animate-fade-in">
          <h1 className="font-display text-5xl sm:text-6xl tracking-wide text-foreground mb-4">
            About <span className="text-primary text-glow-red">SpiderVerse Stream</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SpiderVerse Stream delivers high-quality entertainment with a superhero-inspired cinematic experience. Dive into a multiverse of movies, dramas, and exclusive content.
          </p>
        </section>

        {/* Subscription Plans */}
        <section className="mb-20">
          <h2 className="font-display text-4xl tracking-wide text-foreground text-center mb-10">
            Subscription Plans
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 border transition-all duration-300 hover:scale-105 animate-fade-in-up ${
                  plan.popular
                    ? "border-primary/50 glow-red bg-card"
                    : "border-border bg-card"
                }`}
                style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-3xl tracking-wide text-foreground mb-1">{plan.name}</h3>
                <p className="text-3xl font-bold text-foreground mb-1">
                  {plan.price}<span className="text-sm font-normal text-muted-foreground">/month</span>
                </p>
                <ul className="space-y-2 my-6">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check size={14} className="text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-2.5 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground glow-red"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                }`}>
                  Subscribe
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="text-center animate-fade-in">
          <h2 className="font-display text-3xl tracking-wide text-foreground mb-3">Contact</h2>
          <p className="text-muted-foreground">
            Questions? Reach us at{" "}
            <a href="mailto:support@spiderverse-stream.com" className="text-primary hover:underline">
              support@spiderverse-stream.com
            </a>
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default About;
