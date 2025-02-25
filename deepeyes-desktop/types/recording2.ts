export interface ImageMetadata {
    aspectRatio: number
    distance?: number
    labels: string[]
    predictions?: string[]
  }
  
  export interface Recording2 {
    id: string
    imageUrl: string
    thumbnail: string
    metadata: ImageMetadata
    timestamp: string
    cameraName: string
  }
  
  