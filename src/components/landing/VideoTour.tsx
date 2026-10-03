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
              className="group absolute inset-0 flex items-center justify-center bg-gradient-to-t from-ink/75 via-ink/30 to-ink/25 text-white"
            >
              {/* Play: anel de vidro + círculo branco */}
              <span className="play-btn relative flex size-20 items-center justify-center rounded-full border border-white/40 bg-white/15 backdrop-blur-md transition-transform duration-500 ease-out group-hover:scale-110 sm:size-24 md:size-32">
                <span className="play-btn-ring absolute inset-0 rounded-full border border-white/50" aria-hidden="true" />
                <span className="flex size-14 items-center justify-center rounded-full bg-white text-brand-deep shadow-[0_12px_30px_-8px_rgb(0_0_0/0.45)] transition-colors duration-300 group-hover:bg-brand group-hover:text-white sm:size-16 md:size-20">
                  <svg viewBox="0 0 24 24" className="ml-1 size-6 sm:size-7 md:size-8" fill="currentColor" aria-hidden="true">
                    <path d="M7 4.6v14.8a1.2 1.2 0 0 0 1.82 1.03l12.1-7.4a1.2 1.2 0 0 0 0-2.06L8.82 3.57A1.2 1.2 0 0 0 7 4.6Z" />
                  </svg>
                </span>
              </span>

              {/* Etiqueta com título e duração */}
              <span className="absolute bottom-4 left-4 hidden items-center gap-3 rounded-full bg-white/95 py-2 pr-4 pl-2 text-ink shadow-lg sm:flex md:bottom-6 md:left-6">
                <span className="flex size-8 items-center justify-center rounded-full bg-brand-deep text-white">
                  <svg viewBox="0 0 24 24" className="ml-0.5 size-3.5" fill="currentColor" aria-hidden="true">
                    <path d="M7 4.6v14.8a1.2 1.2 0 0 0 1.82 1.03l12.1-7.4a1.2 1.2 0 0 0 0-2.06L8.82 3.57A1.2 1.2 0 0 0 7 4.6Z" />
                  </svg>
                </span>
                <span className="text-left text-sm leading-tight md:text-base">
                  <strong className="block font-bold">Tour pela unidade Miramar</strong>
                  <span className="text-ink-soft">0:56 · com som</span>
                </span>
              </span>

              {/* No celular, só a duração */}
              <span className="absolute top-3 right-3 rounded-full bg-ink/60 px-3 py-1 text-sm font-bold backdrop-blur sm:hidden">
                0:56
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
