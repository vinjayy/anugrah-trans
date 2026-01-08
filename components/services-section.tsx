import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Calendar, Car, Package } from "lucide-react"

const services = [
  {
    icon: MapPin,
    title: "Travel Door to Door",
    description:
      "Layanan antar-jemput langsung dari alamat asal ke tujuan tanpa perlu ke terminal. Praktis dan nyaman.",
  },
  {
    icon: Calendar,
    title: "Travel Reguler",
    description: "Perjalanan terjadwal dengan rute tetap dan harga terjangkau. Cocok untuk kebutuhan rutin antarkota.",
  },
  {
    icon: Car,
    title: "Carter Eksekutif",
    description: "Sewa kendaraan pribadi dengan armada premium dan fleksibel sesuai permintaan.",
  },
  {
    icon: Package,
    title: "Pengiriman Paket Kilat",
    description: "Layanan ekspedisi cepat dan aman untuk kirim barang antarkota dalam waktu singkat.",
  },
]

export function ServicesSection() {
  return (
    <section id="layanan" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-accent font-semibold mb-2 uppercase tracking-wide">Layanan Kami</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">Anugrah Trans Mandiri</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-t-accent animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
