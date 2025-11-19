'use client'

export default function Footer() {
  return (
    <footer className="bg-primary/95 text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-secondary mb-4">About</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Voices of Mass Discussion is a cable TV talk show dedicated to real people, real issues, and real conversations.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-secondary mb-4">Watch</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">YouTube</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Facebook</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">TikTok</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-secondary mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#form" className="text-primary-foreground/80 hover:text-secondary transition-colors">Be a Guest</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Press Kit</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-secondary mb-4">Follow</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Instagram</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Twitter</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="text-center">
            <p className="text-primary-foreground/80 mb-2">
              Real People. Real Issues. Real Conversations.
            </p>
            <p className="text-lg font-bold text-secondary mb-4">voicesofmass.com</p>
            <p className="text-xs text-primary-foreground/60">
              © 2025 Voices of Mass Discussion. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
