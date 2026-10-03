import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

export type ArtPiece = { src: string; title: string; width: number; height: number };

export default function ArtGallery({ pieces }: { pieces: ArtPiece[] }) {
  const [active, setActive] = useState<ArtPiece | null>(null);

  return (
    <>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {pieces.map((p) => (
          <li key={p.src}>
            <button
              type="button"
              onClick={() => setActive(p)}
              className="pixel-box pixel-box-hover block w-full cursor-pointer overflow-hidden p-0 focus-visible:outline-4 focus-visible:outline-ring"
              aria-label={`View ${p.title}`}
            >
              <img
                src={p.src}
                alt={p.title}
                width={p.width}
                height={p.height}
                loading="lazy"
                className="pixel-img aspect-square w-full object-cover"
              />
            </button>
          </li>
        ))}
      </ul>
      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-3xl border-4 border-foreground p-4 sm:max-w-3xl">
          {active && (
            <>
              <DialogTitle className="font-heading text-sm">{active.title}</DialogTitle>
              <DialogDescription className="sr-only">Full size view of {active.title}</DialogDescription>
              <img
                src={active.src}
                alt={active.title}
                className="pixel-img max-h-[70vh] w-full object-contain"
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
