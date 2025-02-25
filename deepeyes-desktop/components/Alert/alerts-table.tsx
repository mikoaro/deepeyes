import type { Alert } from "@/types/alert";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle } from "lucide-react";
import Image from "next/image";

interface AlertsTableProps {
  alerts: Alert[];
  onAcknowledge: (id: string) => void;
}

export function AlertsTable({ alerts, onAcknowledge }: AlertsTableProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Camera</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Timestamp</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {alerts.map((alert) => (
          <TableRow
            key={alert.id}
            className={alert.isAcknowledged ? "bg-muted" : ""}
          >
            <TableCell>{alert.cameraName}</TableCell>
            <TableCell>
              <Badge
                variant={alert.isAcknowledged ? "secondary" : "destructive"}
              >
                {alert.type}
              </Badge>
            </TableCell>
            <TableCell>
              <Image
                src={alert.imageUrl || "/placeholder.svg"}
                alt={`Alert from ${alert.cameraName}`}
                width={50}
                height={50}
                className="rounded-md"
              />
            </TableCell>
            <TableCell>{alert.description}</TableCell>
            <TableCell>{formatDate(alert.timestamp)}</TableCell>
            <TableCell>
              {alert.isAcknowledged ? (
                <span className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Acknowledged
                </span>
              ) : (
                <span className="flex items-center text-sm text-destructive">
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Unacknowledged
                </span>
              )}
            </TableCell>
            <TableCell>
              {!alert.isAcknowledged && (
                <Button
                  onClick={() => onAcknowledge(alert.id)}
                  variant="outline"
                  size="sm"
                >
                  Acknowledge
                </Button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
