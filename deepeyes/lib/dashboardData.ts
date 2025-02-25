import type { LockStatus, SensorStatus, Occupant, WeatherData } from "@/types/dashboard"

export const lockStatus: LockStatus = {
  frontdoor: true,
  battery: 63,
  alarm: "disarmed",
  doorbell: "open",
}

export const sensors: SensorStatus[] = [
  { id: "1", name: "Laundry sensor", location: "Laundry", active: true },
  { id: "2", name: "Pantry sensor", location: "Kitchen", active: true },
  { id: "3", name: "Basement sensor", location: "Basement", active: true },
  { id: "4", name: "Star sensor", location: "Outside", active: true },
  { id: "5", name: "Bench sensor", location: "Garden", active: false },
  { id: "6", name: "Porch sensor", location: "Entrance", active: true },
  { id: "7", name: "Bathroom sensor", location: "Bathroom", active: true },
]

export const occupants: Occupant[] = [
  {
    id: "1",
    name: "Oskar",
    room: "Eve's room",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export const weatherData: WeatherData = {
  current: {
    condition: "Sunny",
    temperature: -5,
    precipitation: 1,
  },
  forecast: [
    { day: "Sat", condition: "sunny", tempHigh: -2, tempLow: -7 },
    { day: "Sun", condition: "sunny", tempHigh: -7, tempLow: -12 },
    { day: "Mon", condition: "sunny", tempHigh: -12, tempLow: -16 },
    { day: "Tue", condition: "snowy", tempHigh: -5, tempLow: -17 },
    { day: "Wed", condition: "cloudy", tempHigh: -5, tempLow: -7 },
  ],
}

