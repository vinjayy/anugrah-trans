"use client"

import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CENTERED CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="Anugrah Trans Mandiri"
              width={160}
              height={48}
              className="h-20 w-auto object-contain mb-4 rounded-lg"
            />
            <p className="text-primary-foreground/80">
              Solusi perjalanan aman dan nyaman dengan layanan door to door
              tersedia 24 jam.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Layanan</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Travel Door to Door</li>
              <li>Travel Reguler</li>
              <li>Carter Eksekutif</li>
              <li>Pengiriman Paket</li>
            </ul>
          </div>

          {/* Routes */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Rute Populer</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Jakarta – Semarang</li>
              <li>Jakarta – Solo</li>
              <li>Jakarta – Surabaya</li>
              <li>Bandung – Semarang</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontak</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +62 814-1321-5200
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                info@anugrahtrans.id
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Indonesia
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-sm text-primary-foreground/70">
          © 2025 Anugrah Trans Mandiri. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
