export interface Gateway {
  id: string
  imageUrl: string
  gatewayName: string
  hostName: string
  status: "connected" | "disconnected"
  modelName: string
  firmwareVersion: string
  thingsProVersion: string
  uplink: string
  ipAddress: string
  configuration?: GatewayConfiguration
  imageFile?: File
}

export interface GatewayConfiguration {
  deviceType: string;
  modelName: string;
  firmwareVersion: string;
  thingsProVersion: string;
  wanInterface: string;
  ipAddress: string;
  serialNo: string;
  latestUpdatedAt: string;
  timeZone: string;
  hostName: string;
  description: string;
  status: string;
  ntpEnable: boolean;
  ntpServer: string;
  ntpInterval: number;
}
