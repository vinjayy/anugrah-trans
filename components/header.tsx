"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "./whatsapp-icon"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-fade-in">
      
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-6 flex h-20 items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Anugrah Trans"
            width={160}
            height={48}
            priority
            className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["Tentang", "Layanan", "Rute", "Armada"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            asChild
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white hidden md:flex"
          >
            <a
              href="https://api.whatsapp.com/send/?phone=6285691945275&text=Halo+Anugrah+Trans%2C+saya+ingin+bertanya+tentang+layanan+travel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {["Tentang", "Layanan", "Rute", "Armada"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium py-2"
              >
                {item}
              </Link>
            ))}

            <Button asChild className="bg-[#25D366] text-white w-full">
              <a
                href="https://api.whatsapp.com/send/?phone=6285691945275"
                target="_blank"
              >
                <WhatsAppIcon className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
