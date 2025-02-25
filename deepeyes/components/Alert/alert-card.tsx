import type { Alert } from "@/types/alert";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle } from "lucide-react";
import Image from "next/image";

interface AlertCardProps {
  alert: Alert;
  onAcknowledge: (id: string) => void;
  view: "list" | "grid";
}

export function AlertCard({ alert, onAcknowledge, view }: AlertCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <Card
      className={`${alert.isAcknowledged ? "bg-muted" : ""} ${
        view === "grid" ? "h-full" : ""
      }`}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {alert.cameraName}
        </CardTitle>
        <Badge variant={alert.isAcknowledged ? "secondary" : "destructive"}>
          {alert.type}
        </Badge>
      </CardHeader>
      <CardContent>
        <div
          className={`flex ${
            view === "grid" ? "flex-col space-y-4" : "space-x-4"
          }`}
        >
          <Image
            src={alert.imageUrl || "/placeholder.svg"}
            alt={`Alert from ${alert.cameraName}`}
            width={100}
            height={100}
            className={`rounded-md ${view === "grid" ? "w-full h-auto" : ""}`}
          />
          <div
            className={`flex flex-col ${
              view === "list" ? "justify-between" : "space-y-2"
            }`}
          >
            <p className="text-sm">{alert.description}</p>
            <p className="text-xs text-muted-foreground">
              {formatDate(alert.timestamp)}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        {alert.isAcknowledged ? (
          <div className="flex items-center text-sm text-muted-foreground">
            <CheckCircle className="mr-2 h-4 w-4" />
            Acknowledged
          </div>
        ) : (
          <Button
            onClick={() => onAcknowledge(alert.id)}
            variant="outline"
            className="w-full"
          >
            <AlertCircle className="mr-2 h-4 w-4" />
            Acknowledge
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
