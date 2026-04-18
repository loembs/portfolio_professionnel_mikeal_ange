import { createFileRoute, Link } from "@tanstack/react-router";
import { creations, globalStats } from "@/lib/creations";
import { SiteFooter } from "@/components/site-footer";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/work")({
  component: WorkPage,
  head: () => ({
    meta: [
      { title: "Mes créations — Mikael Ange · Vidéaste à Dakar" },
      {
        name: "description",
        content:
          "Sélection de projets vidéo : entreprises, présentation de marques, produits, events et collaborations d'influence.",
      },
      { property: "og:title", content: "Mes créations — Mikael Ange" },
      {
        property: "og:description",
        content: "Sélection de projets vidéo récents.",
      },
    ],
  }),
});

/* ------------------------------------------------------------------ */
/*  Animated counter hook                                              */
/* ------------------------------------------------------------------ */
function useCountUp(target: string, duration = 2200) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cleaned = target.replace(/[^0-9.]/g, "");
    const numericTarget = parseFloat(cleaned) || 0;
    const suffix = target.replace(/[0-9.,\s]/g, "");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const step = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const current = numericTarget * eased;

          if (numericTarget >= 100) {
            setDisplay(Math.round(current).toLocaleString("fr-FR") + suffix);
          } else {
            setDisplay(
              current.toFixed(numericTarget % 1 !== 0 ? 1 : 0) + suffix
            );
          }

          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { display, ref };
}

/* ------------------------------------------------------------------ */
/*  Stat card component                                                */
/* ------------------------------------------------------------------ */
function StatCard({
  label,
  value,
  icon,
  delay,
}: {
  label: string;
  value: string;
  icon: string;
  delay: number;
}) {
  const { display, ref } = useCountUp(value);
  return (
    <div
      ref={ref}
      className="stat-card group relative overflow-hidden border border-border p-8 md:p-10 transition-all duration-500 hover:border-foreground/30"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute top-4 right-4 text-2xl opacity-20 group-hover:opacity-40 transition-opacity">
        {icon}
      </div>
      <p className="font-mono-label text-muted-foreground mb-3">{label}</p>
      <p className="font-display text-5xl md:text-6xl not-italic tracking-tight">
        {display}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Video card component                                               */
/* ------------------------------------------------------------------ */
function VideoCard({
  creation,
  index,
}: {
  creation: (typeof creations)[number];
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showStats, setShowStats] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation(); // empêche le clic de déclencher togglePlay
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const layout =
    index % 4 === 0
      ? "md:col-span-7"
      : index % 4 === 1
        ? "md:col-span-5 md:mt-24"
        : index % 4 === 2
          ? "md:col-span-5"
          : "md:col-span-7 md:mt-16";

  return (
    <div className={`creation-card group block ${layout} reveal-on-scroll`}>
      {/* Video container */}
      <div
        className="relative overflow-hidden bg-card cursor-pointer"
        onClick={togglePlay}
        onMouseEnter={() => setShowStats(true)}
        onMouseLeave={() => setShowStats(false)}
      >
        <video
          ref={videoRef}
          src={creation.videoSrc}
          loop
          muted // démarre muet, l'utilisateur active le son via le bouton
          playsInline
          preload="metadata"
          className={`w-full aspect-[9/16] md:aspect-[4/5] object-cover transition-all duration-700 ${
            isPlaying ? "" : "grayscale"
          }`}
        />

        {/* Play overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-500 ${
            isPlaying ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="w-20 h-20 rounded-full border-2 border-white/80 flex items-center justify-center backdrop-blur-sm bg-white/5 group-hover:scale-110 transition-transform duration-500">
            <svg
              className="w-8 h-8 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Bouton son — visible uniquement quand la vidéo joue */}
        {isPlaying && (
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 z-20 bg-black/50 backdrop-blur-sm border border-white/30 text-white px-3 py-2 font-mono-label text-xs hover:bg-black/70 transition-colors"
          >
            {isMuted ? "🔇 Son" : "🔊 Son"}
          </button>
        )}

        {/* Stats overlay on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 transition-opacity duration-500 ${
            showStats ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="font-mono-label text-white/60 text-[0.6rem]">
                Vues
              </p>
              <p className="text-white font-display text-xl not-italic">
                {creation.stats.views}
              </p>
            </div>
            <div>
              <p className="font-mono-label text-white/60 text-[0.6rem]">
                Likes
              </p>
              <p className="text-white font-display text-xl not-italic">
                {creation.stats.likes}
              </p>
            </div>
            <div>
              <p className="font-mono-label text-white/60 text-[0.6rem]">
                Followers
              </p>
              <p className="text-white font-display text-xl not-italic">
                +{creation.stats.newFollowers}
              </p>
            </div>
          </div>
        </div>

        {/* Number badge */}
        <div className="absolute top-4 left-4 font-mono-label text-white/70 bg-black/40 backdrop-blur-sm px-3 py-1">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Info */}
      <div className="mt-5 flex justify-between items-baseline">
        <div>
          <h3 className="font-display text-2xl md:text-3xl">
            {creation.title}
          </h3>
          <p className="font-mono-label text-muted-foreground mt-2">
            {creation.client} · {creation.category}
          </p>
        </div>
        <span className="font-mono-label text-muted-foreground">
          {creation.date}
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main page                                                          */
/* ------------------------------------------------------------------ */
function WorkPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <section className="pt-36 md:pt-44 pb-10 mx-auto max-w-[1600px] px-6 md:px-10">
        <h1 className="font-display text-[16vw] md:text-[9vw] leading-[0.82]">
          VIDEO
          <br />
          <span className="not-italic">PLAYGROUND</span>
        </h1>
      </section>

      <section className="bg-white text-black border-y border-black/10">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-10 md:py-14">
          <div className="grid md:grid-cols-12 gap-4 md:gap-6">
            {creations.map((creation, i) => (
              <article key={creation.id} className={`${i % 5 === 0 ? "md:col-span-4" : i % 3 === 0 ? "md:col-span-5" : "md:col-span-3"} border border-black/10 bg-[#f8f5f2] p-2`}>
                {/* Video wall en autoplay → reste muted (contrainte navigateur) */}
                <video
                  src={creation.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full aspect-[9/16] object-cover"
                />
                <h3 className="font-display text-xl md:text-2xl mt-3 not-italic">{creation.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STATS COUNTERS */}
      <section className="border-y border-border">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-20">
          <p className="font-mono-label text-muted-foreground mb-10">
            Résultats · Chiffres clés
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {globalStats.map((stat, i) => (
              <StatCard
                key={stat.label}
                label={stat.label}
                value={stat.value}
                icon={stat.icon}
                delay={i * 150}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border overflow-hidden">
        <div className="flex stats-marquee whitespace-nowrap gap-12 py-6 font-mono-label text-muted-foreground">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12 shrink-0">
              {creations.map((c) => (
                <span
                  key={`${k}-${c.id}`}
                  className="flex items-center gap-3"
                >
                  <span className="text-foreground">{c.title}</span>
                  <span>·</span>
                  <span>{c.stats.views} vues</span>
                  <span className="text-foreground/20 ml-4">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-24">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
              More <em>reels</em>.
            </h2>
          </div>
          <Link
            to="/contact"
            className="hidden md:block font-mono-label border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
          >
            Collaborer →
          </Link>
        </div>

        <div className="grid md:grid-cols-12 gap-x-8 gap-y-20">
          {creations.map((creation, i) => (
            <VideoCard key={creation.id} creation={creation} index={i} />
          ))}
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-10 text-center">
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