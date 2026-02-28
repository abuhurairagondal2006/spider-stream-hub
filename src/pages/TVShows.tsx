import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import Layout from "@/components/Layout";
import { series } from "@/data/mockData";

const TVShows = () => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return series.filter(s => s.title.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-display text-5xl tracking-wide text-foreground mb-6">TV Shows</h1>

        <div className="relative max-w-md mb-8">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search TV shows..."
            className="w-full bg-secondary/50 border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {filtered.map((show, i) => (
            <Link
              key={show.id}
              to={`/tvshows/${show.id}`}
              className="group animate-fade-in"
              style={{ animationDelay: `${i * 0.05}s`, opacity: 0 }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-[2/3] border-2 border-transparent transition-all duration-300 group-hover:border-primary/50 group-hover:glow-red-blue">
                <img src={show.poster} alt={show.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs text-muted-foreground">{show.seasons} Season{show.seasons > 1 ? "s" : ""} · {show.genre}</p>
                </div>
              </div>
              <h3 className="mt-2 text-sm font-medium text-foreground truncate">{show.title}</h3>
              <p className="text-xs text-muted-foreground">⭐ {show.rating} · {show.seasons} Season{show.seasons > 1 ? "s" : ""}</p>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-16">No shows found.</p>
        )}
      </div>
    </Layout>
  );
};

export default TVShows;
