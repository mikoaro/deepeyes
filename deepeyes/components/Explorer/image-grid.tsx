import Image from "next/image";
import type { Recording } from "@/types/recording";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ImageGridProps {
  recordings: Recording[];
}

export function ImageGrid({ recordings }: ImageGridProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {recordings.map((recording) => (
        <Card key={recording.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-video">
              <Image
                src={recording.thumbnail || "/placeholder.svg"}
                alt={`Recording from ${recording.cameraName}`}
                fill
                className="object-cover"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-2 p-4">
            <div className="text-sm font-medium">{recording.cameraName}</div>
            <div className="text-sm text-muted-foreground">
              {formatDate(recording.timestamp)}
            </div>
            <div className="flex flex-wrap gap-2">
              {recording.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
