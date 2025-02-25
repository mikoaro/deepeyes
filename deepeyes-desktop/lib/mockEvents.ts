import type { IoTEvent } from "@/types/event"

export const mockEvents: IoTEvent[] = [
  {
    id: "1",
    deviceId: "CAM001",
    timestamp: "2025-02-13T10:30:00Z",
    data: {
      frame: "/placeholder.svg?height=100&width=100",
      detections: ["person"],
    },
    location: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
    event: "Alert",
  },
  {
    id: "2",
    deviceId: "CAM002",
    timestamp: "2025-02-13T10:35:00Z",
    data: {
      sensorReading: 24.5,
    },
    event: "SensorReading",
  },
  {
    id: "3",
    deviceId: "CAM001",
    timestamp: "2025-02-13T10:40:00Z",
    data: {
      frame: "/placeholder.svg?height=100&width=100",
      detections: ["vehicle"],
    },
    location: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
    event: "Alert",
  },
  {
    id: "4",
    deviceId: "CAM003",
    timestamp: "2025-02-13T10:45:00Z",
    data: {},
    event: "StatusChange",
  },
  {
    id: "5",
    deviceId: "CAM002",
    timestamp: "2025-02-13T10:50:00Z",
    data: {
      sensorReading: 25.1,
    },
    event: "SensorReading",
  },
]




// {

//     "deviceId": "Sensor_A123",
  
//     "timestamp": "2023-10-26T10:30:00Z",
  
//     "data": {
  
//       "temperature": 22.5,
  
//       "humidity": 55,
  
//       "pressure": 1012,
  
//       "batteryLevel": 85
  
//     },
  
//     "location": {
  
//       "latitude": 37.7833,
  
//       "longitude": -122.4167
  
//     },
  
//     "event": "SensorReading"
  
//   }
  