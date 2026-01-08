import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function AboutSection() {
  // Data foto landscape
  const images = [
    { src: "/gallery1.png", alt: "Armada Hiace Premio Anugrah Trans Mandiri" },
    { src: "/gallery2.png", alt: "Interior Nyaman Bus Sleeper" },
    { src: "/gallery3.png", alt: "Layanan Door to Door Eksekutif" },
  ]

  return (
    <section id="tentang" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Tentang Anugrah Trans Mandiri
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Carousel Slide Foto Landscape */}
          <div className="mb-10 animate-fade-in animate-delay-150">
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-md">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="-left-12" />
                <CarouselNext className="-right-12" />
              </div>
            </Carousel>
          </div>

          {/* Deskripsi Teks */}
          <Card className="shadow-lg animate-fade-in animate-delay-300">
            <CardContent className="p-6 md:p-10">
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground text-center">
                <span className="font-semibold text-foreground">Anugrah Trans Mandiri</span> merupakan perusahaan yang bergerak
                di bidang jasa travel & tour antarkota dan antarprovinsi. Kami hadir sebagai solusi perjalanan aman dan
                nyaman dengan layanan <span className="font-semibold text-foreground">door to door</span> serta opsi{" "}
                <span className="font-semibold text-foreground">reguler maupun carter eksekutif</span>, sesuai kebutuhan
                pelanggan. Anda akan dilayani oleh pengemudi berpengalaman dengan pilihan armada lengkap dan modern,
                seperti Hiace Premio, Hiace Commuter, Elf Long, Medium Bus, Bus Sleeper, Big Bus, Innova Reborn, Avanza,
                Ertiga, Fortuner, Alphard, hingga Hyundai H-1.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}