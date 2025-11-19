'use client'

export default function Preloader() {
  return (
    <div className="fixed inset-0 bg-primary/95 flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-32 h-32">
          <div className="spotlight-sweep absolute inset-0 rounded-full border-4 border-secondary"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-secondary rounded-full mic-glow flex items-center justify-center">
              <div className="text-3xl">🎙️</div>
            </div>
          </div>
        </div>
        <p className="text-secondary text-xl font-bold animate-pulse">The mic is hot...</p>
      </div>
    </div>
  )
}
