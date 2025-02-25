import type { Alert } from "@/types/alert"

export const mockAlerts: Alert[] = [
  {
    id: "1",
    type: "Motion",
    cameraName: "Front Door",
    timestamp: "2023-05-15T10:30:00Z",
    imageUrl: "/hero.webp",
    description: "Motion detected near front door",
    isAcknowledged: false,
  },
  {
    id: "2",
    type: "Person",
    cameraName: "Backyard",
    timestamp: "@023-05-15T11:45:00Z",
    imageUrl: "/hero.webp",
    description: "Person detected in backyard",
    isAcknowledged: true,
  },
  {
    id: "3",
    type: "Vehicle",
    cameraName: "Driveway",
    timestamp: "2023-05-15T13:15:00Z",
    imageUrl: "/hero.webp",
    description: "Vehicle detected in driveway",
    isAcknowledged: false,
  },
  {
    id: "4",
    type: "Sound",
    cameraName: "Living Room",
    timestamp: "2023-05-15T14:30:00Z",
    imageUrl: "/hero.webp",
    description: "Unusual sound detected in living room",
    isAcknowledged: false,
  },
  {
    id: "5",
    type: "Animal",
    cameraName: "Garden",
    timestamp: "2023-05-15T16:00:00Z",
    imageUrl: "/hero.webp",
    description: "Animal detected in garden",
    isAcknowledged: true,
  },
]

