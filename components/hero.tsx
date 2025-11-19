'use client'

import { useRef, useEffect } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight * 0.7

    const particles: any[] = []

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 2
        this.speedY = (Math.random() - 0.5) * 2
        this.opacity = Math.random() * 0.5 + 0.3
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = `rgba(249, 115, 22, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < 50; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.update()
        p.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 0.7
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="pt-16 relative overflow-hidden bg-gradient-to-b from-primary/10 to-background">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-50"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col items-center text-center">
        <div className="animate-fade-in space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">
            VOICES OF
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-secondary to-orange-400 bg-clip-text text-transparent mb-6">
            MASS DISCUSSION
          </h1>

          <p className="text-xl md:text-2xl text-secondary font-semibold max-w-2xl mx-auto">
            Real People. Real Issues. Real Conversations.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Every week on cable
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="btn-orange px-8 py-4 text-lg font-bold rounded-lg">
              Be a Guest on the Show
            </button>
            <button className="btn-teal px-8 py-4 text-lg font-bold rounded-lg">
              Watch Latest Episode
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
