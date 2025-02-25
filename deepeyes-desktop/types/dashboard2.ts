export interface Room {
    id: string
    name: string
    devices: Device[]
    temperature?: number
    humidity?: number
  }
  
  export interface Device {
    id: string
    name: string
    type: "light" | "switch" | "sensor" | "climate" | "media" | "camera"
    state: "on" | "off" | string
    batteryLevel?: number
    lastUpdated: string
  }
  
  export interface WeatherInfo {
    temperature: number
    humidity: number
    condition: string
    forecast: {
      day: string
      condition: string
      high: number
      low: number
    }[]
  }
  
  export interface EnergyData {
    current: number
    daily: number
    peak: number
    units: string
  }
  
  export interface Scene {
    id: string
    name: string
    icon: string
    active: boolean
  }
  
  