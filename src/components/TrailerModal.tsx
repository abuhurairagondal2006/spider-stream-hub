import { X } from "lucide-react";
import { useEffect } from "react";

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  trailerUrl: string;
}

const TrailerModal = ({ isOpen, onClose, title, trailerUrl }: TrailerModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center animate-fade-in">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 w-[95vw] max-w-4xl animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 rounded-full bg-secondary/80 hover:bg-secondary text-foreground transition-colors"
          title="Close trailer"
        >
          <X size={20} />
        </button>

        {/* Video container */}
        <div className="relative rounded-xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20">
          <div className="aspect-video bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${trailerUrl}?autoplay=1&rel=0`}
              title={`${title} - Trailer`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Title overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pointer-events-none">
            <h3 className="font-display text-xl sm:text-2xl tracking-wide text-foreground">{title}</h3>
            <p className="text-xs text-muted-foreground">Official Trailer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailerModal;
