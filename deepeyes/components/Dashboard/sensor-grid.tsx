import type { SensorStatus } from "@/types/dashboard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MoveIcon as Motion } from "lucide-react"

interface SensorGridProps {
  sensors: SensorStatus[]
}

export function SensorGrid({ sensors }: SensorGridProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sensors</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          {sensors.map((sensor) => (
            <div
              key={sensor.id}
              className={`flex flex-col items-center p-4 rounded-lg border ${
                sensor.active ? "bg-secondary" : "bg-muted"
              }`}
            >
              <Motion className={`h-6 w-6 ${sensor.active ? "text-primary" : "text-muted-foreground"}`} />
              <span className="text-sm mt-2">{sensor.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

