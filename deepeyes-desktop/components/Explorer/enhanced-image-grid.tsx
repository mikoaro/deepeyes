import Image from "next/image"
import type { Recording2 } from "@/types/recording2"

interface EnhancedImageGridProps {
  recordings: Recording2[]
  view: "grid" | "compact"
}

export function EnhancedImageGrid({ recordings, view }: EnhancedImageGridProps) {
  return (
    <div
      className={`grid gap-4 p-4 ${
        view === "grid" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-5" : "grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
      }`}
    >
      {recordings.map((recording) => (
        <div key={recording.id} className="relative group bg-card rounded-lg overflow-hidden border">
          <div className="relative aspect-square">
            <Image
              src={recording.thumbnail || "/placeholder.svg"}
              alt={`Recording from ${recording.cameraName}`}
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/75 text-white text-xs space-y-1">
            <div className="flex justify-between">
              <span>Aspect Ratio: {recording.metadata.aspectRatio}</span>
              {recording.metadata.distance && (
                <span className="text-red-400">Distance: {recording.metadata.distance.toFixed(5)}</span>
              )}
            </div>
            <div className="flex gap-1">
              {recording.metadata.labels.map((label, index) => (
                <span key={index} className="bg-white/20 px-1.5 py-0.5 rounded text-[10px]">
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

