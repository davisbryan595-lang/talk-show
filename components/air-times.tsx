'use client'

import { Calendar, Radio } from 'lucide-react'

export default function AirTimes() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/80">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2 transform hover:scale-105 transition-transform">
            <div className="text-4xl text-secondary">📺</div>
            <p className="text-primary-foreground/80">Channel XX</p>
            <p className="text-lg font-bold text-secondary">Cable & Streaming</p>
          </div>

          <div className="space-y-2 transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-center gap-2">
              <Calendar size={40} className="text-secondary" />
            </div>
            <p className="text-primary-foreground/80">Every Thursday</p>
            <p className="text-lg font-bold text-secondary">8:00 PM EST</p>
          </div>

          <div className="space-y-2 transform hover:scale-105 transition-transform">
            <div className="text-4xl">📱</div>
            <p className="text-primary-foreground/80">Stream Now</p>
            <p className="text-lg font-bold text-secondary">YouTube • Facebook • TikTok</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-primary-foreground/80 mb-4">Visit us online:</p>
          <p className="text-3xl font-bold text-secondary">voicesofmass.com</p>
        </div>
      </div>
    </section>
  )
}
