"use client"

import { useState } from "react"
import { WhatsAppIcon } from "./whatsapp-icon"

export function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href="https://api.whatsapp.com/send/?phone=6281413215200&text=Halo+Alfa+Trans+Java%2C+saya+ingin+bertanya"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      }}
    >
      <div className="flex items-center gap-3 py-3 px-4">
        <WhatsAppIcon className="h-6 w-6" />
        {isHovered && <span className="font-semibold whitespace-nowrap animate-fade-in">Chat Kami</span>}
      </div>
    </a>
  )
}
