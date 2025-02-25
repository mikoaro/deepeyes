import type { Room, WeatherInfo, EnergyData, Scene } from "@/types/dashboard2"

export const rooms: Room[] = [
  {
    id: "living-room",
    name: "Living Room",
    temperature: 21,
    humidity: 45,
    devices: [
      {
        id: "light-1",
        name: "Main Light",
        type: "light",
        state: "on",
        lastUpdated: "2024-02-13T10:30:00Z",
      },
      {
        id: "tv-1",
        name: "Smart TV",
        type: "media",
        state: "off",
        lastUpdated: "2024-02-13T10:30:00Z",
      },
    ],
  },
  {
    id: "kitchen",
    name: "Kitchen",
    temperature: 22,
    humidity: 48,
    devices: [
      {
        id: "light-2",
        name: "Kitchen Light",
        type: "light",
        state: "off",
        lastUpdated: "2024-02-13T10:30:00Z",
      },
      {
        id: "sensor-1",
        name: "Motion Sensor",
        type: "sensor",
        state: "clear",
        batteryLevel: 89,
        lastUpdated: "2024-02-13T10:30:00Z",
      },
    ],
  },
]

export const weatherInfo: WeatherInfo = {
  temperature: 22,
  humidity: 65,
  condition: "sunny",
  forecast: [
    { day: "Today", condition: "sunny", high: 24, low: 18 },
    { day: "Tomorrow", condition: "cloudy", high: 22, low: 17 },
    { day: "Wednesday", condition: "rainy", high: 20, low: 16 },
  ],
}

export const energyData: EnergyData = {
  current: 2.4,
  daily: 18.6,
  peak: 3.8,
  units: "kW",
}

export const scenes: Scene[] = [
  { id: "1", name: "Good Morning", icon: "sun", active: false },
  { id: "2", name: "Movie Time", icon: "film", active: false },
  { id: "3", name: "Good Night", icon: "moon", active: true },
]

