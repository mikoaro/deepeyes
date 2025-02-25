export interface IoTEvent {
    id: string
    deviceId: string
    timestamp: string
    data: {
      sensorReading?: number
      frame?: string
      detections?: string[]
    }
    location?: {
      latitude: number
      longitude: number
    }
    event: "SensorReading" | "Alert" | "StatusChange"
  }
  
  