import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ContentCard from "./ContentCard";

interface ContentRowProps {
  title: string;
  items: Array<{
    id: string;
    title: string;
    poster: string;
    year: number;
    genre: string;
    subtitle?: string;
  }>;
  linkPrefix: string;
}

const ContentRow = ({ title, items, linkPrefix }: ContentRowProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = dir === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-6">
      <h2 className="font-display text-3xl tracking-wide text-foreground mb-4 px-4 sm:px-0">
        {title}
      </h2>
      <div className="relative group/row">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-0 bottom-8 z-10 w-10 flex items-center justify-center bg-gradient-to-r from-background to-transparent opacity-0 group-hover/row:opacity-100 transition-opacity"
        >
          <ChevronLeft className="text-foreground" size={24} />
        </button>
        <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-0 pb-2">
          {items.map(item => (
            <ContentCard key={item.id} linkPrefix={linkPrefix} {...item} />
          ))}
        </div>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-0 bottom-8 z-10 w-10 flex items-center justify-center bg-gradient-to-l from-background to-transparent opacity-0 group-hover/row:opacity-100 transition-opacity"
        >
          <ChevronRight className="text-foreground" size={24} />
        </button>
      </div>
    </section>
  );
};

export default ContentRow;
