import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Play, Plus, ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import TrailerModal from "@/components/TrailerModal";
import { movies, animeMovies } from "@/data/mockData";

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === id) || animeMovies.find(m => m.id === id);
  const [trailerOpen, setTrailerOpen] = useState(false);

  if (!movie) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-muted-foreground">Movie not found.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="relative min-h-[70vh]">
        <div className="absolute inset-0">
          <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/movies" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft size={16} />
            Back to Movies
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img src={movie.poster} alt={movie.title} className="w-64 rounded-xl shadow-2xl border-2 border-border/50 flex-shrink-0 animate-scale-in" />
            <div className="animate-fade-in-up" style={{ animationDelay: "0.15s", opacity: 0 }}>
              <h1 className="font-display text-5xl sm:text-6xl tracking-wide text-foreground mb-2">{movie.title}</h1>
              <div className="flex items-center gap-3 text-muted-foreground text-sm mb-4">
                <span>{movie.year}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span>{movie.genre}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span>⭐ {movie.rating}</span>
              </div>
              <p className="text-foreground/80 text-lg max-w-xl mb-8 leading-relaxed">{movie.description}</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setTrailerOpen(true)}
                  className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-all glow-red hover:shadow-lg hover:shadow-primary/30"
                  title="Watch the official trailer"
                >
                  <Play size={18} fill="currentColor" />
                  Play
                </button>
                <button className="flex items-center gap-2 bg-secondary/80 hover:bg-secondary text-secondary-foreground font-semibold px-6 py-3 rounded-lg transition-all" title="Save this movie to your watchlist">
                  <Plus size={18} />
                  Add to My List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TrailerModal
        isOpen={trailerOpen}
        onClose={() => setTrailerOpen(false)}
        title={movie.title}
        trailerUrl={movie.trailerUrl}
      />
    </Layout>
  );
};

export default MovieDetails;
