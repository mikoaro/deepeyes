import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CameraFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Entrance camera</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JoioQM4HcADmHewqJ6wVeWANJa4xKK.png"
            alt="Entrance camera feed"
            fill
            className="object-cover"
          />
        </div>
      </CardContent>
    </Card>
  )
}

