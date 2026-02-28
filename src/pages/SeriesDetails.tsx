import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Play, ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import TrailerModal from "@/components/TrailerModal";
import { series } from "@/data/mockData";

const SeriesDetails = () => {
  const { id } = useParams();
  const show = series.find(s => s.id === id);
  const [trailerOpen, setTrailerOpen] = useState(false);
  const [trailerTitle, setTrailerTitle] = useState("");

  if (!show) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-muted-foreground">Series not found.</p>
        </div>
      </Layout>
    );
  }

  const episodes = Array.from({ length: 8 }, (_, i) => ({
    num: i + 1,
    title: `Episode ${i + 1}`,
    duration: `${42 + Math.floor(Math.random() * 20)}min`,
  }));

  const openTrailer = (epTitle?: string) => {
    setTrailerTitle(epTitle ? `${show.title} - ${epTitle}` : show.title);
    setTrailerOpen(true);
  };

  return (
    <Layout>
      <div className="relative min-h-[50vh]">
        <div className="absolute inset-0">
          <img src={show.poster} alt={show.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/tvshows" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft size={16} />
            Back to TV Shows
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img src={show.poster} alt={show.title} className="w-64 rounded-xl shadow-2xl border-2 border-border/50 flex-shrink-0 animate-scale-in" />
            <div className="animate-fade-in-up" style={{ animationDelay: "0.15s", opacity: 0 }}>
              <h1 className="font-display text-5xl sm:text-6xl tracking-wide text-foreground mb-2">{show.title}</h1>
              <div className="flex items-center gap-3 text-muted-foreground text-sm mb-4">
                <span>{show.year}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span>{show.genre}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span>⭐ {show.rating}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span>{show.seasons} Season{show.seasons > 1 ? "s" : ""}</span>
              </div>
              <p className="text-foreground/80 text-lg max-w-xl mb-6 leading-relaxed">{show.description}</p>
              <button
                onClick={() => openTrailer()}
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-all glow-red hover:shadow-lg hover:shadow-primary/30"
                title="Watch the official trailer"
              >
                <Play size={18} fill="currentColor" />
                Play Trailer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Episodes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="font-display text-3xl tracking-wide text-foreground mb-4">Season 1 Episodes</h2>
        <div className="space-y-3">
          {episodes.map(ep => (
            <div key={ep.num} className="flex items-center gap-4 p-4 rounded-lg bg-card hover:bg-secondary/50 transition-colors group cursor-pointer" onClick={() => openTrailer(ep.title)}>
              <span className="text-2xl font-display text-muted-foreground w-8 text-center">{ep.num}</span>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{ep.title}</p>
                <p className="text-xs text-muted-foreground">{ep.duration}</p>
              </div>
              <button className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary/20 hover:bg-primary/30 text-primary p-2 rounded-full" title={`Play ${ep.title}`}>
                <Play size={16} fill="currentColor" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <TrailerModal
        isOpen={trailerOpen}
        onClose={() => setTrailerOpen(false)}
        title={trailerTitle}
        trailerUrl={show.trailerUrl}
      />
    </Layout>
  );
};

export default SeriesDetails;
