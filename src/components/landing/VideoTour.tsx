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
              className="group absolute inset-0 flex flex-col items-center justify-center gap-5 bg-ink/35 text-white transition-colors hover:bg-ink/25"
            >
              <span className="relative flex size-24 items-center justify-center rounded-full bg-white text-brand-deep shadow-xl transition-transform duration-300 group-hover:scale-110 md:size-28">
                <span className="wa-fab-ring !bg-white/70" aria-hidden="true" />
                <svg viewBox="0 0 24 24" className="relative ml-1 size-10" fill="currentColor" aria-hidden="true">
                  <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l11.2-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z" />
                </svg>
              </span>
              <span className="text-lg font-bold drop-shadow md:text-xl">
                Assistir ao vídeo · 56 s
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
