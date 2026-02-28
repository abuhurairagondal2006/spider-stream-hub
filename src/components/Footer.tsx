import { useState } from "react";

const Footer = () => {
  const [spiderClicked, setSpiderClicked] = useState(false);

  return (
    <footer className="relative border-t border-border/50 bg-background py-8 mt-12 overflow-hidden">
      {/* Crawling spider easter egg */}
      <div className="absolute bottom-2 left-0 animate-spider-crawl text-lg opacity-30 hover:opacity-100 transition-opacity cursor-pointer">
        🕷
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl tracking-wider text-primary">SpiderVerse Stream</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 SpiderVerse Stream. All rights reserved.
          </p>
          {/* Hidden spider easter egg */}
          <button
            onClick={() => setSpiderClicked(!spiderClicked)}
            className="text-muted-foreground/20 hover:text-primary transition-colors text-xs cursor-pointer"
            title="🕸"
          >
            🕷
          </button>
        </div>
        {spiderClicked && (
          <div className="mt-4 text-center animate-fade-in">
            <p className="text-primary text-sm font-medium text-glow-red">
              🕸 With great power comes great streaming! 🕸
            </p>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
