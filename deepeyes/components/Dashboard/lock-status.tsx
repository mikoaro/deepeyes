import type { LockStatus } from "@/types/dashboard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, Battery, Bell, Shield } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface LockStatusProps {
  status: LockStatus
}

export function LockStatus({ status }: LockStatusProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lock</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            <span>Frontdoor</span>
          </div>
          <Badge variant={status.frontdoor ? "default" : "destructive"}>
            {status.frontdoor ? "Locked" : "Unlocked"}
          </Badge>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Battery className="h-4 w-4" />
            <span>Battery</span>
          </div>
          <span>{status.battery}%</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>Alarm</span>
          </div>
          <Badge variant={status.alarm === "armed" ? "default" : "secondary"}>{status.alarm}</Badge>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span>Doorbell</span>
          </div>
          <Badge variant="outline">{status.doorbell}</Badge>
        </div>
      </CardContent>
    </Card>
  )
}

