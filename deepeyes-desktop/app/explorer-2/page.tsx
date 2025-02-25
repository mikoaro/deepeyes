"use client"

import { useState, useCallback } from "react"
import { EnhancedSearch } from "@/components/Explorer/enhanced-search"
import { EnhancedImageGrid } from "@/components/Explorer/enhanced-image-grid"
import type { Recording2 } from "@/types/recording2"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"

// Mock data for demonstration
const mockRecordings: Recording2[] = Array.from({ length: 10 }, (_, i) => ({
  id: i.toString(),
  imageUrl: `https://v0.blob.com/${i % 2 ? "loTWB" : "A53by"}.png`,
  thumbnail: `https://v0.blob.com/${i % 2 ? "loTWB" : "A53by"}.png`,
  metadata: {
    aspectRatio: i % 2 ? 1 : 0.75,
    distance: 0.65 + Math.random() * 0.1,
    labels: ["test"],
    predictions: ["object"],
  },
  timestamp: new Date().toISOString(),
  cameraName: `Camera ${i + 1}`,
}))

export default function Explorer2Page() {
  const [view, setView] = useState<"grid" | "compact">("grid")
  const [recordings, setRecordings] = useState<Recording2[]>(mockRecordings)
  const [filteredRecordings, setFilteredRecordings] = useState<Recording2[]>(mockRecordings)

  const handleSearch = useCallback(
    (query: string) => {
      if (!query) {
        setFilteredRecordings(recordings)
        return
      }

      const filtered = recordings.filter((recording) =>
        recording.metadata.labels.some((label) => label.toLowerCase().includes(query.toLowerCase())),
      )
      setFilteredRecordings(filtered)
    },
    [recordings],
  )

  const handleAspectRatioChange = useCallback(
    (ratio: string) => {
      if (ratio === "all") {
        setFilteredRecordings(recordings)
        return
      }

      const filtered = recordings.filter((recording) => recording.metadata.aspectRatio === Number.parseFloat(ratio))
      setFilteredRecordings(filtered)
    },
    [recordings],
  )

  return (
    <SidebarInset className="mt-20">
    <header className="flex h-14 mt-2 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="ml-1" />  
      </div>
    </header>
    <div className="flex flex-col w-full">
      <EnhancedSearch
        totalImages={recordings.length}
        onSearch={handleSearch}
        onViewChange={setView}
        onAspectRatioChange={handleAspectRatioChange}
        currentView={view}
      />
      <EnhancedImageGrid recordings={filteredRecordings} view={view} />
    </div>
    </SidebarInset>
  )
}

