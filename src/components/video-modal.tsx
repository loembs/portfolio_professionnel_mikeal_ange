import { useEffect, useRef } from "react";
import { type Creation } from "@/lib/creations";

interface VideoModalProps {
  video: Creation;
  onClose: () => void;
}

export function VideoModal({ video, onClose }: VideoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) onClose();
  };

  return (
    <div
      ref={modalRef}
      className="video-modal-overlay"
      onClick={handleBackdropClick}
    >
      <div className="video-modal-content">
        <button className="video-modal-close" onClick={onClose}>
          <span>Fermer</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <video
          src={video.videoSrc}
          autoPlay
          controls
          playsInline
          className="w-full"
        />

        <div className="mt-8 text-center text-white">
          <h2 className="font-display text-4xl mb-2 italic">
            {video.title}
          </h2>
          <p className="font-mono-label opacity-60">
            {video.client} · {video.category}
          </p>
        </div>
      </div>
    </div>
  );
}
