"use client"

import { useState, useCallback } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { SearchBar } from "@/components/Explorer/search-bar"
import { ImageGrid } from "@/components/Explorer/image-grid"
import { mockRecordings } from "@/lib/mockRecordings"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"

export default function ExplorerPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""
  const [filteredRecordings, setFilteredRecordings] = useState(() => {
    if (!initialQuery) return mockRecordings
    return mockRecordings.filter((recording) => {
      const searchTerms = initialQuery.toLowerCase().split(" ")
      return searchTerms.every(
        (term) =>
          recording.tags.some((tag: string) => tag.toLowerCase().includes(term)) ||
          recording.detectedObjects.some((obj: string) => obj.toLowerCase().includes(term)) ||
          recording.cameraName.toLowerCase().includes(term),
      )
    })
  })

  const handleSearch = useCallback(
    (query: string) => {
      // Update URL with search query
      const params = new URLSearchParams(searchParams)
      if (query) {
        params.set("q", query)
      } else {
        params.delete("q")
      }
      router.push(`/app/explorer?${params.toString()}`)

      // Filter recordings
      if (!query) {
        setFilteredRecordings(mockRecordings)
        return
      }

      const filtered = mockRecordings.filter((recording) => {
        const searchTerms = query.toLowerCase().split(" ")
        return searchTerms.every(
          (term) =>
            recording.tags.some((tag: string) => tag.toLowerCase().includes(term)) ||
            recording.detectedObjects.some((obj: string) => obj.toLowerCase().includes(term)) ||
            recording.cameraName.toLowerCase().includes(term),
        )
      })
      setFilteredRecordings(filtered)
    },
    [router, searchParams],
  )

  return (
    <SidebarInset className="mt-20">
      <header className="flex h-14 mt-2 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="ml-1" />  
        </div>
      </header>
    <div className="flex flex-col w-full px-7">
      <div className="space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-3xl font-bold">Recording Explorer</h1>
          <SearchBar onSearch={handleSearch} initialQuery={initialQuery} />
        </div>
        <div className="space-y-4 flex-grow w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              {filteredRecordings.length} {filteredRecordings.length === 1 ? "Result" : "Results"}
            </h2>
          </div>
          <ImageGrid recordings={filteredRecordings} />
        </div>
      </div>
    </div>
    </SidebarInset>
  )
}

