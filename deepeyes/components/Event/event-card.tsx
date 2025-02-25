"use client"
import type { IoTEvent } from "@/types/event"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { MapPin } from "lucide-react"

interface EventCardProps {
  event: IoTEvent
}

export function EventCard({ event }: EventCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString()
  }

  return (
    <Card className="h-full shadow-xl">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-sm font-medium">{event.deviceId}</CardTitle>
          <Badge
            variant={
              event.event === "Alert" ? "destructive" : event.event === "SensorReading" ? "secondary" : "outline"
            }
          >
            {event.event}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {event.data.frame && (
            <div className="relative aspect-video rounded-md overflow-hidden">
              <Image src={event.data.frame || "/placeholder.svg"} alt="Event capture" fill className="object-cover" />
            </div>
          )}
          <div className="text-sm">
            {event.data.sensorReading && <p>Reading: {event.data.sensorReading}°C</p>}
            {event.data.detections && <p>Detections: {event.data.detections.join(", ")}</p>}
          </div>
          {event.location && (
            <div className="flex items-center text-xs text-muted-foreground">
              <MapPin className="h-3 w-3 mr-1" />
              {event.location.latitude}, {event.location.longitude}
            </div>
          )}
          <div className="text-xs text-muted-foreground">{formatDate(event.timestamp)}</div>
        </div>
      </CardContent>
    </Card>
  )
}

