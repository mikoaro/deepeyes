export interface MonitoringData {
    memory: {
      load: number
      available: number
      total: number
    }
    cpu: {
      loading: number[]
      timestamps: string[]
    }
    upgrade: {
      downloadSize: string
      currentSpeed: string
      estimatedTime: string
      status: string
      updatedAt: string
    }
  }
  
  