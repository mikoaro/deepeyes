import type { Occupant } from "@/types/dashboard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface OccupancyProps {
  occupants: Occupant[]
}

export function Occupancy({ occupants }: OccupancyProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Occupancy</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {occupants.map((occupant) => (
            <div key={occupant.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src={occupant.avatar} />
                  <AvatarFallback>{occupant.name[0]}</AvatarFallback>
                </Avatar>
                <span>{occupant.name}</span>
              </div>
              <span className="text-muted-foreground">{occupant.room}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

