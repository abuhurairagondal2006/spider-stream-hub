import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import Layout from "@/components/Layout";
import { movies, genres } from "@/data/mockData";

const Movies = () => {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  const filtered = useMemo(() => {
    return movies.filter(m => {
      const matchSearch = m.title.toLowerCase().includes(search.toLowerCase());
      const matchGenre = genre === "All" || m.genre === genre;
      return matchSearch && matchGenre;
    });
  }, [search, genre]);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-display text-5xl tracking-wide text-foreground mb-6">Movies</h1>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search movies..."
              className="w-full bg-secondary/50 border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          <select
            value={genre}
            onChange={e => setGenre(e.target.value)}
            className="bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/50"
          >
            {genres.map(g => (
              <option key={g} value={g} className="bg-background text-foreground">{g}</option>
            ))}
          </select>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {filtered.map((movie, i) => (
            <Link
              key={movie.id}
              to={`/movies/${movie.id}`}
              className="group animate-fade-in"
              style={{ animationDelay: `${i * 0.05}s`, opacity: 0 }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-[2/3] border-2 border-transparent transition-all duration-300 group-hover:border-primary/50 group-hover:glow-red-blue">
                <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs text-muted-foreground mb-1">{movie.year} · {movie.genre}</p>
                  <p className="text-xs text-foreground/80 line-clamp-2">{movie.description}</p>
                </div>
              </div>
              <h3 className="mt-2 text-sm font-medium text-foreground truncate">{movie.title}</h3>
              <p className="text-xs text-muted-foreground">⭐ {movie.rating}</p>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-16">No movies found.</p>
        )}
      </div>
    </Layout>
  );
};

export default Movies;
