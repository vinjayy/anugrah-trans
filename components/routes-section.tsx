import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "./whatsapp-icon"
import { ArrowLeftRight, Clock } from "lucide-react"

const routes = [
  { from: "Jakarta", to: "Semarang" },
  { from: "Jakarta", to: "Temanggung" },
  { from: "Jakarta", to: "Jogja" },
  { from: "Jakarta", to: "Solo" },
  { from: "Jakarta", to: "Klaten" },
  { from: "Jakarta", to: "Salatiga" },
  { from: "Jakarta", to: "Purworejo" },
  { from: "Bandung", to: "Semarang" },
  { from: "Bandung", to: "Klaten" },
  { from: "Bandung", to: "Surabaya" },
  { from: "Jakarta", to: "Surabaya" },
  { from: "Jakarta", to: "Malang" },
  { from: "Jogja", to: "Surabaya" },
  { from: "Magelang", to: "Surabaya" },
  { from: "Solo", to: "Surabaya" },
  { from: "Semarang", to: "Surabaya" },
]

export function RoutesSection() {
  return (
    <section id="rute" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">Rute Perjalanan Populer</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tersedia berbagai rute perjalanan dengan layanan 24 jam pulang pergi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {routes.map((route, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-primary animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">{route.from}</h3>
                  <ArrowLeftRight className="h-5 w-5 text-accent" />
                  <h3 className="font-bold text-lg">{route.to}</h3>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <ArrowLeftRight className="h-4 w-4 mr-2" />
                    Pulang Pergi
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    24 Jam
                  </div>
                </div>
                <Button
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a
                    href={`https://api.whatsapp.com/send/?phone=6285691945275&text=Halo+Alfa+Trans+Java%2C+saya+ingin+pesan+travel+${route.from}+ke+${route.to}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="mr-2 h-4 w-4" />
                    Pesan
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-3xl mx-auto bg-primary text-primary-foreground animate-fade-in animate-delay-500">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Rute Tujuan Anda Tidak Ada di Daftar?</h3>
            <p className="mb-6 text-primary-foreground/90">
              Hubungi admin kami untuk informasi lengkap rute perjalanan yang tersedia
            </p>
            <Button size="lg" variant="secondary" asChild className="transition-all duration-300 hover:scale-105">
              <a
                href="https://api.whatsapp.com/send/?phone=6285691945275&text=Halo+Alfa+Trans+Java%2C+saya+ingin+bertanya+tentang+rute+perjalanan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="mr-2 h-5 w-5" />
                Hubungi Kami
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
