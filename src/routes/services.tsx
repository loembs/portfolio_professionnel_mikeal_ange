import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Mikael Ange · Vidéaste à Dakar" },
      { name: "description", content: "Vidéos d'entreprise, films de présentation, contenu produit, events & influence. Production audiovisuelle clé en main à Dakar." },
      { property: "og:title", content: "Services — Mikael Ange" },
      { property: "og:description", content: "Vidéos pro pour entreprises, marques et créateurs." },
    ],
  }),
});

const services = [
  {
    n: "01",
    title: "Vidéos d'entreprise",
    desc: "Films corporate, portraits de marque et capsules institutionnelles. Une image soignée pour raconter qui vous êtes.",
    items: ["Films corporate", "Portraits de fondateurs", "Recrutement & culture", "Rapports annuels"],
  },
  {
    n: "02",
    title: "Présentation",
    desc: "Films de présentation pensés pour vos réseaux et présentations commerciales. Un format court, percutant, mémorable.",
    items: ["Showreel marque", "Pitchs vidéo", "Capsules réseaux", "Teasers & trailers"],
  },
  {
    n: "03",
    title: "Produits",
    desc: "Mise en valeur de produits et services par l'image. De la nature morte cinématique à la démo dynamique.",
    items: ["Lookbooks animés", "Démos produit", "Packshot vidéo", "Campagnes e-commerce"],
  },
  {
    n: "04",
    title: "Events & Influence",
    desc: "Couverture événementielle et collaborations avec créateurs. Capter l'instant, en faire un récit qui dure.",
    items: ["Aftermovies", "Couverture live", "Contenu UGC pro", "Collaborations influence"],
  },
];

function ServicesPage() {
  return (
    <main>
      <section className="pt-40 md:pt-56 pb-20 mx-auto max-w-[1600px] px-6 md:px-10">
        <p className="font-mono-label text-muted-foreground mb-6">Services · Pour vos entreprises</p>
        <h1 className="font-display text-[12vw] md:text-[8vw] leading-[0.85] max-w-5xl">
          Quatre façons de <em>raconter</em> votre marque.
        </h1>
        <p className="mt-10 max-w-2xl text-lg text-foreground/80 leading-relaxed">
          Chaque projet commence par une conversation. Chaque livrable, par une intention.
          Voici les terrains sur lesquels j'interviens — seul ou avec une équipe légère.
        </p>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 pb-32">
        <div className="border-t border-border">
          {services.map((s) => (
            <article
              key={s.n}
              className="grid md:grid-cols-12 gap-6 md:gap-10 py-12 md:py-16 border-b border-border group"
            >
              <p className="md:col-span-1 font-mono-label text-muted-foreground">{s.n}</p>
              <div className="md:col-span-4">
                <h2 className="font-display text-4xl md:text-5xl leading-[0.95] group-hover:italic transition-all duration-500">
                  {s.title}
                </h2>
              </div>
              <p className="md:col-span-4 text-base md:text-lg text-foreground/80 leading-relaxed">
                {s.desc}
              </p>
              <ul className="md:col-span-3 space-y-2 font-mono-label text-muted-foreground">
                {s.items.map((it) => (
                  <li key={it}>— {it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            to="/contact"
            className="inline-block font-mono-label border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-colors"
          >
            Démarrer un projet →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
