import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "./whatsapp-icon"
import { Users, Clock } from "lucide-react"

const fleet = [
  { name: "Avanza", seats: 6, image: "/toyota-avanza-silver.jpg" },
  { name: "Ertiga", seats: 6, image: "/suzuki-ertiga-white.jpg" },
  { name: "Innova Reborn", seats: 6, image: "/toyota-innova-reborn-silver.jpg" },
  { name: "Innova Zenix", seats: 6, image: "/toyota-innova-zenix-black.jpg" },
  { name: "Xpander", seats: 6, image: "/mitsubishi-xpander-grey.jpg" },
  { name: "Fortuner", seats: 7, image: "/toyota-fortuner-black.jpg" },
  { name: "Pajero Sport", seats: 7, image: "/mitsubishi-pajero-sport-white.jpg" },
  { name: "Alphard", seats: 8, image: "/toyota-alphard-black-luxury.jpg" },
  { name: "Hiace Premio", seats: 12, image: "/toyota-hiace-premio-luxury-white.jpg" },
  { name: "Hiace Commuter", seats: 12, image: "/toyota-hiace-commuter-white.jpg" },
  { name: "Elf Long", seats: 19, image: "/isuzu-elf-long-white.jpg" },
  { name: "Medium Bus", seats: 22, image: "/medium-bus-tourist-white.jpg" },
  { name: "Bus Sleeper", seats: 34, image: "/bus-sleeper-luxury-interior.jpg" },
  { name: "Big Bus", seats: 50, image: "/big-tourist-bus-white.jpg" },
]

export function FleetSection() {
  return (
    <section id="armada" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">Armada Kami</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pilihan armada lengkap dan modern yang terawat dengan baik untuk kenyamanan perjalanan Anda
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fleet.map((vehicle, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border-2 hover:border-primary/30"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={vehicle.image || "/placeholder.svg"}
                  alt={vehicle.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-4">{vehicle.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2 text-accent" />
                    {vehicle.seats} Seat
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-accent" />
                    24 Jam
                  </div>
                </div>
                <Button
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a
                    href={`https://api.whatsapp.com/send/?phone=6281413215200&text=Halo+Alfa+Trans+Java%2C+saya+ingin+memesan+${vehicle.name}`}
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
      </div>
    </section>
  )
}
