import type { WeatherInfo } from "@/types/dashboard2"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sun, Cloud, CloudRain } from "lucide-react"

interface WeatherCardProps {
  weather: WeatherInfo
}

export function WeatherCard({ weather }: WeatherCardProps) {
  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case "sunny":
        return <Sun className="h-6 w-6" />
      case "cloudy":
        return <Cloud className="h-6 w-6" />
      case "rainy":
        return <CloudRain className="h-6 w-6" />
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
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {getWeatherIcon(weather.condition)}
            <div className="text-2xl font-bold">{weather.temperature}°C</div>
          </div>
          <div className="text-sm text-muted-foreground">Humidity: {weather.humidity}%</div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {weather.forecast.map((day) => (
            <div key={day.day} className="text-center">
              <div className="text-sm font-medium">{day.day}</div>
              {getWeatherIcon(day.condition)}
              <div className="text-sm">
                {day.high}° <span className="text-muted-foreground">{day.low}°</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

