"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "./whatsapp-icon"

export function HeroSection() {
  const [heroImage, setHeroImage] = useState("/modern-luxury-travel-bus-on-highway.jpg")

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setHeroImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
      </div>

      <div className="relative z-10 container text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance animate-fade-in animate-delay-100">
          Perjalanan Aman dan Nyaman Bersama Anugrah Trans Mandiri
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-pretty animate-fade-in animate-delay-300">
          Layanan travel & tour antarkota dan antarprovinsi dengan armada lengkap dan modern. Door to door service
          tersedia 24 jam.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-500">
          <Button
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
          >
            <a
              href="https://api.whatsapp.com/send/?phone=6285691945275&text=Halo+Alfa+Trans+Java%2C+saya+ingin+memesan+travel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <WhatsAppIcon className="mr-2 h-6 w-6" />
              Pesan Sekarang
            </a>
          </Button>
        </div>
      </div>

      {/* Hidden image upload input */}
      <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="hero-image-upload" />
    </section>
  )
}
