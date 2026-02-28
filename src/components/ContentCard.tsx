import { Link } from "react-router-dom";

interface ContentCardProps {
  id: string;
  title: string;
  poster: string;
  year: number;
  genre: string;
  linkPrefix: string;
  subtitle?: string;
}

const ContentCard = ({ id, title, poster, year, genre, linkPrefix, subtitle }: ContentCardProps) => {
  return (
    <Link
      to={`${linkPrefix}/${id}`}
      className="group flex-shrink-0 w-[160px] sm:w-[200px] transition-transform duration-300 hover:scale-105"
      title={`View details for ${title}`}
    >
      <div className="relative overflow-hidden rounded-lg aspect-[2/3] border-2 border-transparent transition-all duration-300 group-hover:border-primary/50 group-hover:glow-red-blue">
        <img
          src={poster}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-xs text-muted-foreground">{year} · {genre}</p>
        </div>
      </div>
      <h3 className="mt-2 text-sm font-medium text-foreground truncate">{title}</h3>
      {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
    </Link>
  );
};

export default ContentCard;
