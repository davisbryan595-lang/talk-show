'use client'

import { useState } from 'react'
import { Mail, Phone, Send } from 'lucide-react'

export default function GuestForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    topic: '',
    photo: null as File | null,
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, photo: e.target.files![0] }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', topic: '', photo: null })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="form" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Got Something to Say?
          </h2>
          <p className="text-xl text-secondary font-semibold">
            The Stage is Yours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card-hover bg-card rounded-2xl border-2 border-primary/20 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-input border-2 border-primary/20 rounded-lg focus:border-secondary focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-input border-2 border-primary/20 rounded-lg focus:border-secondary focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-bold text-foreground mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-input border-2 border-primary/20 rounded-lg focus:border-secondary focus:outline-none transition-colors"
              placeholder="(555) 123-4567"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="topic" className="block text-sm font-bold text-foreground mb-2">
              Topic / Story Summary
            </label>
            <textarea
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-input border-2 border-primary/20 rounded-lg focus:border-secondary focus:outline-none transition-colors resize-none"
              placeholder="Tell us about your story or what you'd like to discuss on the show..."
            />
          </div>

          <div className="mb-8">
            <label htmlFor="photo" className="block text-sm font-bold text-foreground mb-2">
              Photo Upload (Optional)
            </label>
            <input
              type="file"
              id="photo"
              onChange={handleFileChange}
              accept="image/*"
              className="w-full px-4 py-3 bg-input border-2 border-dashed border-primary/20 rounded-lg focus:border-secondary focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-secondary file:text-secondary-foreground file:font-bold hover:file:bg-orange-600"
            />
          </div>

          <button
            type="submit"
            className="w-full btn-orange py-4 text-lg font-bold rounded-lg flex items-center justify-center gap-2"
          >
            <Send size={24} />
            {submitted ? 'Applause! 🎉' : 'Submit Your Story'}
          </button>

          {submitted && (
            <div className="mt-4 p-4 bg-secondary/20 border-l-4 border-secondary rounded animate-bounce">
              <p className="text-secondary font-bold">Thank you! Our team will be in touch soon.</p>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
