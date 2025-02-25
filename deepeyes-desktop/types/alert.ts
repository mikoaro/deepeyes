export type AlertType = "Motion" | "Sound" | "Person" | "Vehicle" | "Animal"

export interface Alert {
  id: string
  type: AlertType
  cameraName: string
  timestamp: string
  imageUrl: string
  description: string
  isAcknowledged: boolean
}

