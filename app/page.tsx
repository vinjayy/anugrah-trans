import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { RoutesSection } from "@/components/routes-section"
import { FleetSection } from "@/components/fleet-section"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { VideoSection } from "@/components/VideoSection"


export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      {/* FULL WIDTH */}
      <Header />
      <HeroSection />

      {/* FULL WIDTH SECTIONS */}
      <AboutSection />
      <ServicesSection />
      <RoutesSection />
      <FleetSection />
      <VideoSection />

      {/* FULL WIDTH */}
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
