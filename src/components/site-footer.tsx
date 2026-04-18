import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
              Construisons<br />une <em>image</em> qui vous ressemble.
            </h2>
            <Link
              to="/contact"
              className="inline-block mt-8 font-mono-label border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
            >
              Démarrer un projet →
            </Link>
          </div>
          <div className="md:col-span-3 md:col-start-8">
            <p className="font-mono-label text-muted-foreground mb-4">Contact</p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              n&apos;hésitez pas a me contacter<br />
              thebusinessclass06@gmail.com<br />
              Bookings: 78-751-02-95
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="font-mono-label text-muted-foreground mb-4">Suivre</p>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:opacity-60 transition-opacity">Instagram</a></li>
              <li><a href="#" className="hover:opacity-60 transition-opacity">TikTok @angemikael</a></li>
              <li><a href="#" className="hover:opacity-60 transition-opacity">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 font-mono-label text-muted-foreground">
          <p>© {new Date().getFullYear()} Mikael Ange</p>
          <p>Vidéaste pro &amp; créateur de contenu — Dakar</p>
        </div>
      </div>
    </footer>
  );
}
