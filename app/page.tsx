'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar'
import Preloader from '@/components/preloader'
import Hero from '@/components/hero'
import LatestEpisode from '@/components/latest-episode'
import GuestForm from '@/components/guest-form'
import EpisodesCarousel from '@/components/episodes-carousel'
import AirTimes from '@/components/air-times'
import Footer from '@/components/footer'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Preloader />
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <LatestEpisode />
      <EpisodesCarousel />
      <GuestForm />
      <AirTimes />
      <Footer />
    </main>
  )
}
