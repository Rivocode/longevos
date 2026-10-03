import { useRef, useState } from 'react'

export function VideoTour() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  function play() {
    setPlaying(true)
    void videoRef.current?.play()
  }

  return (
    <section className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p
          data-reveal
          className="mb-4 text-sm font-bold tracking-[0.18em] text-brand-deep uppercase"
        >
          Longevos por dentro
        </p>
        <h2
          data-reveal
          className="max-w-3xl text-3xl leading-tight font-extrabold text-balance md:text-5xl"
        >
          Veja como é um dia de treino na Longevos
        </h2>

        <div
          data-reveal
          className="relative mt-12 aspect-video overflow-hidden rounded-[2rem] bg-ink shadow-[0_40px_80px_-40px_rgb(32_35_40/0.5)]"
        >
          <video
            ref={videoRef}
            src="/videos/longevos-tour.mp4"
            poster="/images/real/fachada-letreiro.jpg"
            preload="none"
            playsInline
            controls={playing}
            onEnded={() => setPlaying(false)}
            className="size-full object-cover"
          />

          {!playing && (
            <button
              type="button"
              onClick={play}
              aria-label="Assistir ao vídeo da Longevos, 56 segundos"
              className="group absolute inset-0 flex items-center justify-center bg-ink/30 transition-colors duration-300 hover:bg-ink/20"
            >
              <span className="flex size-20 items-center justify-center rounded-full bg-white text-brand-deep shadow-[0_16px_40px_-12px_rgb(0_0_0/0.5)] transition-transform duration-300 group-hover:scale-105 md:size-24">
                {/* Triângulo com o centroide no centro do viewBox, para ficar visualmente centralizado */}
                <svg viewBox="0 0 24 24" className="size-10 md:size-12" fill="currentColor" aria-hidden="true">
                  <path d="M9 6.5v11l9-5.5z" strokeLinejoin="round" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
