import type { EnergyData } from "@/types/dashboard2"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap } from "lucide-react"

interface EnergyCardProps {
  data: EnergyData
}

export function EnergyCard({ data }: EnergyCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-4 w-4" />
          Energy Usage
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm">Current Usage</span>
            <span className="text-2xl font-bold">
              {data.current} {data.units}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Daily Usage</span>
            <span>
              {data.daily} {data.units}h
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Peak Today</span>
            <span>
              {data.peak} {data.units}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

