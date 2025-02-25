import type { IoTEvent } from "@/types/event"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface EventsTableProps {
  events: IoTEvent[]
}

export function EventsTable({ events }: EventsTableProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString()
  }

  const renderEventData = (event: IoTEvent) => {
    switch (event.event) {
      case "Alert":
        return (
          <div className="flex items-center space-x-2">
            {event.data.frame && (
              <Image
                src={event.data.frame || "/placeholder.svg"}
                alt="Event frame"
                width={50}
                height={50}
                className="rounded-md"
              />
            )}
            <span>{event.data.detections?.join(", ")}</span>
          </div>
        )
      case "SensorReading":
        return <span>{event.data.sensorReading}°C</span>
      case "StatusChange":
        return <span>Status updated</span>
      default:
        return <span>-</span>
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Device ID</TableHead>
          <TableHead>Timestamp</TableHead>
          <TableHead>Event Type</TableHead>
          <TableHead>Data</TableHead>
          <TableHead>Location</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {events.map((event) => (
          <TableRow key={event.id}>
            <TableCell>{event.deviceId}</TableCell>
            <TableCell>{formatDate(event.timestamp)}</TableCell>
            <TableCell>
              <Badge
                variant={
                  event.event === "Alert" ? "destructive" : event.event === "SensorReading" ? "secondary" : "outline"
                }
              >
                {event.event}
              </Badge>
            </TableCell>
            <TableCell>{renderEventData(event)}</TableCell>
            <TableCell>{event.location ? `${event.location.latitude}, ${event.location.longitude}` : "-"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

