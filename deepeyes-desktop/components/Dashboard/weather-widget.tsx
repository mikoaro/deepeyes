import type { WeatherData } from "@/types/dashboard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sun, Cloud, CloudRain, CloudSnow } from "lucide-react"

interface WeatherWidgetProps {
  weather: WeatherData
}

export function WeatherWidget({ weather }: WeatherWidgetProps) {
  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case "sunny":
        return <Sun className="h-6 w-6" />
      case "cloudy":
        return <Cloud className="h-6 w-6" />
      case "rainy":
        return <CloudRain className="h-6 w-6" />
      case "snowy":
        return <CloudSnow className="h-6 w-6" />
      default:
        return <Sun className="h-6 w-6" />
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weather</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            {getWeatherIcon(weather.current.condition.toLowerCase())}
            <span className="text-2xl font-bold">{weather.current.condition}</span>
          </div>
          <div>
            <span className="text-2xl font-bold">{weather.current.temperature}°C</span>
            <span className="text-sm text-muted-foreground ml-2">{weather.current.precipitation}mm</span>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {weather.forecast.map((day) => (
            <div key={day.day} className="text-center">
              <div className="text-sm font-medium">{day.day}</div>
              {getWeatherIcon(day.condition)}
              <div className="text-sm">
                {day.tempHigh}° <span className="text-muted-foreground">{day.tempLow}°</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

