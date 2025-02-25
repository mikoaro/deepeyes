import Image from "next/image"
import type { Gateway } from "@/types/gateway"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Wifi, WifiOff } from "lucide-react"

interface GatewayTableProps {
  gateways: Gateway[]
  onRowClick: (gateway: Gateway) => void
  selectedGatewayId?: string
}

export function GatewayTable({ gateways, onRowClick, selectedGatewayId }: GatewayTableProps) {
  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">ID</TableHead>
            <TableHead className="w-[60px]">Image</TableHead>
            <TableHead>Gateway Name</TableHead>
            <TableHead>Host Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Model Name</TableHead>
            <TableHead>Firmware Version</TableHead>
            <TableHead>ThingsPro Version</TableHead>
            <TableHead>Uplink</TableHead>
            <TableHead>IP Address</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {gateways.map((gateway) => (
            <TableRow
              key={gateway.id}
              className={`cursor-pointer hover:bg-muted/50 ${selectedGatewayId === gateway.id ? "bg-muted" : ""}`}
              onClick={() => onRowClick(gateway)}
            >
              <TableCell>{gateway.id}</TableCell>
              <TableCell>
                <Image
                  src={gateway.imageUrl || "/placeholder.svg"}
                  alt={`${gateway.gatewayName} image`}
                  width={40}
                  height={40}
                  className="rounded-md object-cover"
                />
              </TableCell>
              <TableCell>{gateway.gatewayName}</TableCell>
              <TableCell>{gateway.hostName}</TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  {gateway.status === "connected" ? (
                    <>
                      <Wifi className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-green-500">Connected</span>
                    </>
                  ) : (
                    <>
                      <WifiOff className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Disconnected</span>
                    </>
                  )}
                </div>
              </TableCell>
              <TableCell>{gateway.modelName}</TableCell>
              <TableCell>{gateway.firmwareVersion}</TableCell>
              <TableCell>{gateway.thingsProVersion}</TableCell>
              <TableCell>{gateway.uplink}</TableCell>
              <TableCell>{gateway.ipAddress}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

