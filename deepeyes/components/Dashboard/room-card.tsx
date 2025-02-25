import type { Room } from "@/types/dashboard2"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Thermometer, Droplets, Lightbulb, Power } from "lucide-react"

interface RoomCardProps {
  room: Room
}

export function RoomCard({ room }: RoomCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{room.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {room.temperature && room.humidity && (
            <div className="flex justify-between text-sm">
              <div className="flex items-center">
                <Thermometer className="h-4 w-4 mr-2" />
                {room.temperature}°C
              </div>
              <div className="flex items-center">
                <Droplets className="h-4 w-4 mr-2" />
                {room.humidity}%
              </div>
            </div>
          )}
          <div className="grid grid-cols-2 gap-2">
            {room.devices.map((device) => (
              <Button
                key={device.id}
                variant={device.state === "on" ? "default" : "outline"}
                className="w-full justify-start"
              >
                {device.type === "light" ? <Lightbulb className="h-4 w-4 mr-2" /> : <Power className="h-4 w-4 mr-2" />}
                {device.name}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

