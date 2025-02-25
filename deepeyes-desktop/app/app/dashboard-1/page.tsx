import { LockStatus } from "@/components/Dashboard/lock-status"
import { CameraFeed } from "@/components/Dashboard/camera-feed"
import { SensorGrid } from "@/components/Dashboard/sensor-grid"
import { Occupancy } from "@/components/Dashboard/occupancy"
import { WeatherWidget } from "@/components/Dashboard/weather-widget"
import { lockStatus, sensors, occupants, weatherData } from "@/lib/dashboardData"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DashboardPage() {
  return (
    <div className="flex py-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[100vw] px-20">
        <div className="space-y-6">
          <LockStatus status={lockStatus} />
          <div className="space-y-4">
            <Select defaultValue="rainbow">
              <SelectTrigger>
                <SelectValue placeholder="Choose pattern" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rainbow">Rainbow</SelectItem>
                <SelectItem value="solid">Solid</SelectItem>
                <SelectItem value="wave">Wave</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="party">
              <SelectTrigger>
                <SelectValue placeholder="Choose palette" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="party">Party</SelectItem>
                <SelectItem value="calm">Calm</SelectItem>
                <SelectItem value="forest">Forest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-6">
          <CameraFeed />
          <WeatherWidget weather={weatherData} />
        </div>

        <div className="space-y-6">
          <SensorGrid sensors={sensors} />
          <Occupancy occupants={occupants} />
        </div>
      </div>
    </div>
  )
}

