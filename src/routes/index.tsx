import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/my-creations/herosection.jpeg";
import { creations, globalStats } from "@/lib/creations";
import { SiteFooter } from "@/components/site-footer";
import { useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mikael Ange — Vidéaste pro & créateur de contenu · Dakar" },
      { name: "description", content: "Portfolio de Mikael Ange, vidéaste pro et créateur de contenu basé à Dakar. Films d'entreprise, présentation, produits, events & influence." },
      { property: "og:title", content: "Mikael Ange — Vidéaste · Dakar" },
      { property: "og:description", content: "Films cinématiques pour entreprises, marques et créateurs." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
});

/* ------------------------------------------------------------------ */
/*  Video card for homepage                                            */
/* ------------------------------------------------------------------ */
function HomeVideoCard({
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
        ? "md:col-span-5 md:mt-32"
        : index % 4 === 2
          ? "md:col-span-5"
          : "md:col-span-7 md:mt-16";

  return (
    <div className={`creation-card group block ${layout}`}>
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
          muted // démarre muet pour respecter les règles navigateur
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
              <p className="font-mono-label text-white/60 text-[0.6rem]">Vues</p>
              <p className="text-white font-display text-xl not-italic">{creation.stats.views}</p>
            </div>
            <div>
              <p className="font-mono-label text-white/60 text-[0.6rem]">Likes</p>
              <p className="text-white font-display text-xl not-italic">{creation.stats.likes}</p>
            </div>
            <div>
              <p className="font-mono-label text-white/60 text-[0.6rem]">Followers</p>
              <p className="text-white font-display text-xl not-italic">+{creation.stats.newFollowers}</p>
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
          <h3 className="font-display text-2xl md:text-3xl">{creation.title}</h3>
          <p className="font-mono-label text-muted-foreground mt-2">
            {creation.client} · {creation.category}
          </p>
        </div>
        <span className="font-mono-label text-muted-foreground">{creation.date}</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Cinematic video section avec bouton unmute                         */
/* ------------------------------------------------------------------ */
function CinemaVideo() {
  const [muted, setMuted] = useState(true);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <video
        src="https://res.cloudinary.com/dlna2kuo1/video/upload/v1769532846/IMG_0111_ybl39i.mov"
        autoPlay
        loop
        muted={muted}
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <p className="font-display not-italic uppercase tracking-[0.18em] text-white text-xl md:text-4xl animate-[cinema-title_3.2s_ease-out_forwards]">
          directed by MikaelAnge
        </p>
      </div>
      {/* Bouton unmute */}
      <button
        onClick={() => setMuted((m) => !m)}
        className="absolute bottom-6 right-6 z-10 bg-black/50 backdrop-blur-sm border border-white/30 text-white px-4 py-2 font-mono-label text-xs hover:bg-black/70 transition-colors"
      >
        {muted ? "🔇 Activer le son" : "🔊 Couper le son"}
      </button>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Main page                                                          */
/* ------------------------------------------------------------------ */
function Index() {
  const heroShowcase = creations.slice(0, 5);
  const featuredCreations = creations.slice(0, 6);

  return (
    <main>
      {/* HERO - VISUAL FIRST */}
      <section className="relative min-h-screen w-full overflow-hidden bg-black">
        <img
          src={heroImg}
          alt="Mikael Ange, vidéaste à Dakar, derrière sa caméra cinéma"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-[#1d120b]/55 to-background/70" />

        <div className="relative z-10 min-h-screen mx-auto max-w-[1600px] px-6 md:px-10 py-24 flex items-end">
          <div className="w-full reveal">
            <p className="font-mono-label text-foreground/70 mb-5">Mikael Ange · Portfolio vidéo</p>
            <h1 className="font-display text-[16vw] md:text-[9vw] leading-[0.83] tracking-tight">
              FEEL.
              <br />
              <span className="not-italic">FRAME.</span>
              <br />
              IMPACT.
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                to="/work"
                className="font-mono-label border border-foreground/60 px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
              >
                Watch the work
              </Link>
              <Link
                to="/contact"
                className="font-mono-label border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
              >
                Book now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vidéo cinématique avec bouton son */}
      <CinemaVideo />

      {/* VIDEO WALL */}
      <section className="bg-white text-black border-y border-black/10">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-24">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="font-mono-label text-black/60 mb-3">Selected reels</p>
            </div>
            <Link
              to="/work"
              className="hidden md:block font-mono-label border-b border-black pb-1 hover:opacity-70 transition-opacity"
            >
              Voir tout le portfolio →
            </Link>
          </div>

          <div className="grid md:grid-cols-12 gap-4 md:gap-6">
            {heroShowcase.map((video, i) => (
              <article
                key={video.id}
                className={`${i === 0 ? "md:col-span-4" : i === 1 ? "md:col-span-3 md:mt-10" : i === 2 ? "md:col-span-2" : i === 3 ? "md:col-span-3 md:-mt-6" : "md:col-span-12"} border border-black/10 bg-transparent p-2 md:p-3`}
              >
                {/* Ces vidéos sont en autoplay → restent muted, pas de bouton son pour ne pas surcharger le video wall */}
                <video
                  src={video.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full aspect-[9/16] object-cover"
                />
                <div className="mt-4 text-center">
                  <p className="font-mono-label text-black/60">{video.category}</p>
                  <h3 className="font-display text-xl md:text-2xl mt-2 not-italic uppercase tracking-[0.08em] text-[#2b170d]">
                    {video.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-24 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-14">
          {globalStats.map((stat) => (
            <div key={stat.label} className="border border-border p-8 md:p-10 group hover:border-foreground/30 transition-all duration-500">
              <p className="font-mono-label text-muted-foreground mb-3">{stat.label}</p>
              <p className="font-display text-4xl md:text-5xl not-italic tracking-tight">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-12 gap-x-6 gap-y-12">
          {featuredCreations.map((creation, i) => (
            <HomeVideoCard key={creation.id} creation={creation} index={i} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 pb-24 md:pb-32">
        <div className="flex items-end justify-between mb-8">
          <p className="font-mono-label text-muted-foreground">Performances réseaux</p>
          <span className="font-mono-label text-muted-foreground">TikTok Studio</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <img
            src="https://res.cloudinary.com/dlna2kuo1/image/upload/v1776446440/WhatsApp_Image_2026-04-17_at_14.20.36_1_iriylf.jpg"
            alt="Performance réseau TikTok 1"
            loading="lazy"
            className="w-full h-full object-cover border border-border"
          />
          <img
            src="https://res.cloudinary.com/dlna2kuo1/image/upload/v1776446440/WhatsApp_Image_2026-04-17_at_14.20.35_wel8gd.jpg"
            alt="Performance réseau TikTok 2"
            loading="lazy"
            className="w-full h-full object-cover border border-border"
          />
          <img
            src="https://res.cloudinary.com/dlna2kuo1/image/upload/v1776446440/WhatsApp_Image_2026-04-17_at_14.20.36_2_utaisp.jpg"
            alt="Performance réseau TikTok 3"
            loading="lazy"
            className="w-full h-full object-cover border border-border"
          />
          <img
            src="https://res.cloudinary.com/dlna2kuo1/image/upload/v1776446440/WhatsApp_Image_2026-04-17_at_14.20.36_glzwkc.jpg"
            alt="Performance réseau TikTok 4"
            loading="lazy"
            className="w-full h-full object-cover border border-border"
          />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}