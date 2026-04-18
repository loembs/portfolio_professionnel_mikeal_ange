import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Mikael Ange · Vidéaste à Dakar" },
      { name: "description", content: "Discutons de votre prochain projet vidéo. Réponse sous 48h depuis Dakar." },
      { property: "og:title", content: "Contact — Mikael Ange" },
      { property: "og:description", content: "Discutons de votre prochain projet vidéo." },
    ],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main>
      <section className="pt-40 md:pt-56 pb-20 mx-auto max-w-[1600px] px-6 md:px-10">
        <p className="font-mono-label text-muted-foreground mb-6">Contact · Disponible 2026</p>
        <h1 className="font-display text-[12vw] md:text-[8vw] leading-[0.85] max-w-5xl">
          Parlez-moi de <em>votre projet</em>.
        </h1>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 grid md:grid-cols-12 gap-10 md:gap-16 pb-32">
        <div className="md:col-span-5 space-y-10">
          <div>
            <p className="font-mono-label text-muted-foreground mb-3">N&rsquo;hésitez pas à me contacter</p>
            <h2 className="font-display text-4xl md:text-5xl leading-[0.95] not-italic">
              LET&apos;S GET TO
              <br />
              WORK !
            </h2>
          </div>
          <div>
            <p className="font-mono-label text-muted-foreground mb-3">E-mail</p>
            <a href="mailto:thebusinessclass06@gmail.com" className="text-xl md:text-2xl hover:opacity-80 transition-opacity">
              thebusinessclass06@gmail.com
            </a>
          </div>
          <div>
            <p className="font-mono-label text-muted-foreground mb-3">TikTok</p>
            <p className="text-xl md:text-2xl">@angemikael</p>
          </div>
          <div>
            <p className="font-mono-label text-muted-foreground mb-3">Bookings</p>
            <a href="tel:+221787510295" className="text-xl md:text-2xl hover:opacity-80 transition-opacity">
              78-751-02-95
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="md:col-span-6 md:col-start-7 space-y-8"
        >
          <p className="font-mono-label text-muted-foreground">Ou envoyez un brief →</p>

          <Field label="Votre nom">
            <input required className="bg-transparent border-b border-border focus:border-foreground outline-none w-full py-3 text-lg transition-colors" />
          </Field>
          <Field label="Email">
            <input type="email" required className="bg-transparent border-b border-border focus:border-foreground outline-none w-full py-3 text-lg transition-colors" />
          </Field>
          <Field label="Type de projet">
            <input className="bg-transparent border-b border-border focus:border-foreground outline-none w-full py-3 text-lg transition-colors" placeholder="Vidéo entreprise, produit, event, influence…" />
          </Field>
          <Field label="Parlez-moi du projet">
            <textarea required rows={5} className="bg-transparent border-b border-border focus:border-foreground outline-none w-full py-3 text-lg transition-colors resize-none" />
          </Field>

          <button
            type="submit"
            disabled={sent}
            className="group relative overflow-hidden border border-foreground px-8 py-4 font-mono-label hover:bg-foreground hover:text-background transition-colors disabled:opacity-60"
          >
            {sent ? "Message envoyé ✓" : "Envoyer le brief →"}
          </button>
        </form>
      </section>

      <SiteFooter />
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="font-mono-label text-muted-foreground block mb-2">{label}</span>
      {children}
    </label>
  );
}
