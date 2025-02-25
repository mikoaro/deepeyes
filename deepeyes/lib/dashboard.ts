export interface LockStatus {
    frontdoor: boolean
    battery: number
    alarm: "armed" | "disarmed"
    doorbell: "open" | "closed"
  }
  
  export interface SensorStatus {
    id: string
    name: string
    location: string
    active: boolean
  }
  
  export interface Occupant {
    id: string
    name: string
    room: string
    avatar: string
  }
  
  export interface WeatherForecast {
    day: string
    condition: "sunny" | "cloudy" | "rainy" | "snowy"
    tempHigh: number
    tempLow: number
  }
  
  export interface WeatherData {
    current: {
      condition: string
      temperature: number
      precipitation: number
    }
    forecast: WeatherForecast[]
  }
  
  