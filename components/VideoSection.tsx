import { Card } from "@/components/ui/card"

export function VideoSection() {
  return (
    <section id="layanan-video" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Dokumentasi Perjalanan</h2>
          <p className="text-muted-foreground">Lihat kenyamanan armada dan layanan kami secara langsung</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Video Landscape - Mengambil 2 kolom di layar besar */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden h-full border-none shadow-xl">
              <div className="relative aspect-video w-full bg-black flex items-center">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster="/videos/thumb-landscape.jpg" // Opsional: gambar sebelum play
                >
                  <source src="/video1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

              </div>
            </Card>
          </div>

          {/* Video Portrait - Mengambil 1 kolom */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden h-full border-none shadow-xl bg-black">
              <div className="relative aspect-[9/16] max-w-[300px] mx-auto lg:max-w-none lg:h-full">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster="/videos/thumb-portrait.jpg"
                >
                  <source src="/video2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  )
}