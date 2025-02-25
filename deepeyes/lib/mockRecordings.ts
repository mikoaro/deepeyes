import type { Recording } from "@/types/recording";

export const mockRecordings: Recording[] = [
  {
    id: "1",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vI7RSm6fJygiekR6Y8drxdpz0REU8y.png",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vI7RSm6fJygiekR6Y8drxdpz0REU8y.png",
    timestamp: "2024-02-13T10:30:00Z",
    cameraName: "Front Gate Camera",
    tags: ["cyclist", "group", "bridge"],
    detectedObjects: ["person", "bicycle"],
  },
  {
    id: "2",
    imageUrl: "/hero.webp",
    thumbnail: "/hero.webp",
    timestamp: "2024-02-13T11:15:00Z",
    cameraName: "Side Entrance Camera",
    tags: ["person", "walking"],
    detectedObjects: ["person"],
  },
  {
    id: "3",
    imageUrl: "/hero.webp",
    thumbnail: "/hero.webp",
    timestamp: "2024-02-13T12:00:00Z",
    cameraName: "Parking Lot Camera",
    tags: ["vehicle", "parking"],
    detectedObjects: ["car", "person"],
  },
  {
    id: "4",
    imageUrl: "/hero.webp",
    thumbnail: "/hero.webp",
    timestamp: "2024-02-13T13:45:00Z",
    cameraName: "Garden Camera",
    tags: ["animal", "garden"],
    detectedObjects: ["animal"],
  },
  {
    id: "5",
    imageUrl: "/hero.webp",
    thumbnail: "/hero.webp",
    timestamp: "2024-02-13T14:30:00Z",
    cameraName: "Driveway Camera",
    tags: ["vehicle", "driveway"],
    detectedObjects: ["car"],
  },
];
