import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, User, LogOut, Menu, X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { movies, series } from "@/data/mockData";

const navLinks = [
  { to: "/home", label: "Home", tooltip: "Go to the homepage" },
  { to: "/movies", label: "Movies", tooltip: "Browse all movies" },
  { to: "/tvshows", label: "TV Shows", tooltip: "Browse all TV shows" },
  { to: "/about", label: "About", tooltip: "Learn more about SpiderVerse Stream" },
];

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const searchResults = searchQuery.trim().length > 0
    ? [
        ...movies.filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase())).map(m => ({ ...m, type: "movie" as const })),
        ...series.filter(s => s.title.toLowerCase().includes(searchQuery.toLowerCase())).map(s => ({ ...s, type: "series" as const })),
      ].slice(0, 6)
    : [];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-2 group">
            <span className="text-2xl animate-spider-logo">🕷</span>
            <span className="font-display text-2xl tracking-wider text-primary text-glow-red">
              SpiderVerse Stream
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                title={link.tooltip}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Elements */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => { setSearchOpen(!searchOpen); setSearchQuery(""); }}
                className="p-2 rounded-full hover:bg-secondary transition-colors text-foreground/70 hover:text-foreground"
                title="Search movies & TV shows"
              >
                <Search size={18} />
              </button>
              {searchOpen && (
                <div className="absolute right-0 top-12 w-72 sm:w-96 glass rounded-lg overflow-hidden animate-scale-in">
                  <input
                    autoFocus
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search movies & shows..."
                    className="w-full bg-transparent px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground border-b border-border/50"
                  />
                  {searchResults.length > 0 && (
                    <div className="max-h-64 overflow-y-auto">
                      {searchResults.map(item => (
                        <Link
                          key={`${item.type}-${item.id}`}
                          to={item.type === "movie" ? `/movies/${item.id}` : `/tvshows/${item.id}`}
                          onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                          className="flex items-center gap-3 px-4 py-2 hover:bg-secondary/50 transition-colors"
                        >
                          <img src={item.poster} alt={item.title} className="w-8 h-12 object-cover rounded" />
                          <div>
                            <p className="text-sm font-medium text-foreground">{item.title}</p>
                            <p className="text-xs text-muted-foreground">{item.type === "movie" ? "Movie" : "TV Show"} · {item.year}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <Link to="/profile" className="hidden sm:block p-2 rounded-full hover:bg-secondary transition-colors text-foreground/70 hover:text-foreground" title="View and edit your profile">
              <User size={18} />
            </Link>

            <button
              onClick={handleLogout}
              className="hidden sm:block p-2 rounded-full hover:bg-primary/20 transition-colors text-foreground/70 hover:text-primary"
              title="Sign out of your account"
            >
              <LogOut size={18} />
            </button>

            {/* Mobile menu toggle */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-foreground/70" title={mobileOpen ? "Close menu" : "Open menu"}>
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-border/50 animate-fade-in">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                title={link.tooltip}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to ? "bg-primary/20 text-primary" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
