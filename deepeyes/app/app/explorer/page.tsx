"use client"

import { useState, useCallback } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { SearchBar } from "@/components/Explorer/search-bar"
import { ImageGrid } from "@/components/Explorer/image-grid"
import { mockRecordings } from "@/lib/mockRecordings"

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
    <div className="flex flex-col w-full py-24 px-10">
      <div className="py-8 space-y-6">
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
  )
}

