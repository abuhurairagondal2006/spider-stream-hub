import { useState } from "react";
import { Play, Info } from "lucide-react";
import Layout from "@/components/Layout";
import ContentRow from "@/components/ContentRow";
import TrailerModal from "@/components/TrailerModal";
import { homeSections, series, animeMovies } from "@/data/mockData";
import heroBanner from "@/assets/hero-banner.jpg";

const Home = () => {
  const [trailerOpen, setTrailerOpen] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] sm:h-[80vh] flex items-end overflow-hidden">
        <img src={heroBanner} alt="Featured content" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <div className="max-w-xl animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <h1 className="font-display text-5xl sm:text-7xl tracking-wide text-foreground leading-tight">
              Unlimited Movies & Dramas
            </h1>
            <p className="text-lg text-foreground/70 mt-3 mb-6">
              Stream anytime, anywhere. Dive into the multiverse of entertainment.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setTrailerOpen(true)}
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-all glow-red hover:shadow-lg hover:shadow-primary/30"
                title="Watch the featured trailer"
              >
                <Play size={18} fill="currentColor" />
                Play Now
              </button>
              <button className="flex items-center gap-2 bg-secondary/80 hover:bg-secondary text-secondary-foreground font-semibold px-8 py-3 rounded-lg transition-all backdrop-blur-sm" title="View more details about this title">
                <Info size={18} />
                More Info
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Rows */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {homeSections.map(section => (
          <ContentRow
            key={section.title}
            title={section.title}
            items={section.items}
            linkPrefix="/movies"
          />
        ))}
        <ContentRow
          title="Top TV Shows"
          items={series.map(s => ({ ...s, subtitle: `${s.seasons} Season${s.seasons > 1 ? "s" : ""}` }))}
          linkPrefix="/tvshows"
        />
        <ContentRow
          title="🔥 Anime Picks"
          items={animeMovies}
          linkPrefix="/movies"
        />
      </div>

      <TrailerModal
        isOpen={trailerOpen}
        onClose={() => setTrailerOpen(false)}
        title="SpiderVerse Stream Featured"
        trailerUrl="cqGjhVJWtEg"
      />
    </Layout>
  );
};

export default Home;
