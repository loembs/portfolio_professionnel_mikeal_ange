import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/my-creations/herosection.jpeg";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "À propos — Mikael Ange · Vidéaste à Dakar" },
      { name: "description", content: "Mikael Ange, vidéaste pro et créateur de contenu basé à Dakar. Une approche artisanale de l'image au service des marques." },
      { property: "og:title", content: "À propos — Mikael Ange" },
      { property: "og:description", content: "Vidéaste pro & créateur de contenu basé à Dakar." },
      { property: "og:image", content: heroImg },
    ],
  }),
});

function AboutPage() {
  return (
    <main>
      <section className="pt-40 md:pt-56 pb-20 mx-auto max-w-[1600px] px-6 md:px-10">
        <p className="font-mono-label text-muted-foreground mb-6">À propos · Mikael Ange</p>
        <h1 className="font-display text-[12vw] md:text-[7vw] leading-[0.85] max-w-5xl">
          Une <em>obsession</em> de l&rsquo;image, depuis Dakar.
        </h1>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 grid md:grid-cols-12 gap-10 md:gap-16 pb-32">
        <div className="md:col-span-5">
          <img
            src={heroImg}
            alt="Portrait de Mikael Ange"
            loading="lazy"
            width={1280}
            height={1600}
            className="w-full aspect-[4/5] object-cover"
          />
          <p className="font-mono-label text-muted-foreground mt-4">Mikael Ange · Dakar, 2026</p>
        </div>

        <div className="md:col-span-6 md:col-start-7 space-y-10">
          <div>
            <p className="font-mono-label text-muted-foreground mb-4">Bio</p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              Je suis Mikael Ange, créateur de contenu.
            </p>
            <p className="text-base leading-relaxed text-foreground/85 mt-6">
              Depuis plusieurs années, je nourris une passion pour le montage vidéo et la photographie. À l’époque, je n’aurais jamais imaginé que cette passion pourrait un jour servir à accompagner d'autres personnes.
            </p>
            <p className="text-base leading-relaxed text-foreground/85 mt-6">
              Je créais simplement par plaisir. Aujourd’hui, je crée pour apporter quelque chose de plus — aux particuliers (entrepreneurs) comme aux entreprises.
            </p>
            <p className="text-base leading-relaxed text-foreground/85 mt-6">
              Ce déclic m’a poussé à m’investir pleinement dans ce domaine, pour partager ma vision et raconter des histoires à travers ma caméra (votre histoire).
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-10 border-t border-border">
            <div>
              <p className="font-display text-5xl">2<span className="text-muted-foreground"> ans</span></p>
              <p className="font-mono-label text-muted-foreground mt-2">Années d&rsquo;expérience</p>
            </div>
            <div>
              <p className="font-display text-5xl">30<span className="text-muted-foreground">+</span></p>
              <p className="font-mono-label text-muted-foreground mt-2">Projets livrés</p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
