"use client"

import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Presentation from "@/components/Presentation"
import FeaturedWorks from "@/components/FeaturedWorks"
import AboutSection from "@/components/AboutSection"
import Testimonials from "@/components/Testimonials"
import Newsletter from "@/components/Newsletter"
import Footer from "@/components/Footer"

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Header />
        <main className="flex-1">
          <Presentation />
          <FeaturedWorks isMobile={isMobile} />
          <AboutSection />
          {/* <Testimonials />
          <Newsletter /> */}
        </main>
        <Footer />
      </div>
    </div>
  )
}