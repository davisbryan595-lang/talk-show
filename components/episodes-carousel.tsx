'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const episodes = [
  { id: 1, title: "The Future of Work", guest: "Sarah Chen", date: "Dec 14, 2024", image: "/talk-show-episode.jpg" },
  { id: 2, title: "Mental Health Matters", guest: "Dr. James Wilson", date: "Dec 7, 2024", image: "/talk-show-episode.jpg" },
  { id: 3, title: "Climate Action Now", guest: "Emma Rodriguez", date: "Nov 30, 2024", image: "/talk-show-episode.jpg" },
  { id: 4, title: "Tech Innovation", guest: "Marcus Liu", date: "Nov 23, 2024", image: "/talk-show-episode.jpg" },
]

export default function EpisodesCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoScroll, setAutoScroll] = useState(true)

  useEffect(() => {
    if (!autoScroll) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % episodes.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoScroll])

  return (
    <section id="episodes" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Past Episodes
        </h2>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 overflow-x-auto pb-4">
            {episodes.map((episode, index) => (
              <div
                key={episode.id}
                className={`card-hover rounded-xl overflow-hidden border-2 transition-all duration-500 cursor-pointer ${
                  index === current
                    ? 'border-secondary scale-105 md:scale-100 md:col-span-2 md:row-span-2'
                    : 'border-primary/20'
                }`}
                onMouseEnter={() => setAutoScroll(false)}
                onMouseLeave={() => setAutoScroll(true)}
              >
                <div className="relative aspect-square overflow-hidden bg-primary/10">
                  <img
                    src={episode.image || "/placeholder.svg"}
                    alt={episode.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-lg md:text-xl font-bold text-secondary mb-1">{episode.title}</h3>
                    <p className="text-sm text-primary-foreground">{episode.guest}</p>
                    <p className="text-xs text-primary-foreground/70">{episode.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setCurrent((prev) => (prev - 1 + episodes.length) % episodes.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-12 btn-orange p-3 rounded-full hover:scale-110 z-10"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => setCurrent((prev) => (prev + 1) % episodes.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-12 btn-orange p-3 rounded-full hover:scale-110 z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {episodes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current ? 'bg-secondary w-8' : 'bg-primary/40 hover:bg-primary/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
