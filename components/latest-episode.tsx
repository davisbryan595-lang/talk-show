'use client'

export default function LatestEpisode() {
  return (
    <section id="latest" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Latest Episode
        </h2>

        <div className="card-hover rounded-2xl overflow-hidden border-2 border-primary/20">
          <div className="relative bg-primary/5 aspect-video flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
            <div className="relative z-10 text-center">
              <div className="text-6xl mb-4">▶️</div>
              <p className="text-lg text-muted-foreground">YouTube/Vimeo Embed Placeholder</p>
            </div>
          </div>

          <div className="bg-card p-8 border-t-2 border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Episode 47: The Future of Work
            </h3>
            <p className="text-muted-foreground mb-4">Aired December 14, 2024</p>
            <p className="text-foreground leading-relaxed max-w-3xl">
              Join us as we discuss how remote work, AI, and changing workplace dynamics are reshaping the way we think about careers and employment in 2025.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
