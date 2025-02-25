"use client"

import { useState, useCallback, useEffect } from "react"
import { EventsTable } from "@/components/Event/events-table"
import { EventCard } from "@/components/Event/event-card"
import { mockEvents } from "@/lib/mockEvents"
import type { IoTEvent } from "@/types/event"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Grid, List, Table, RefreshCw } from "lucide-react"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"

export default function EventsPage() {
  const [events, setEvents] = useState<IoTEvent[]>(mockEvents)
  const [view, setView] = useState<"table" | "grid" | "list">("table")
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [refreshRate, setRefreshRate] = useState<number | null>(null)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const refreshEvents = useCallback(async () => {
    setIsRefreshing(true)
    try {
      // In a real application, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const updatedEvents = mockEvents.map((event) => ({
        ...event,
        timestamp: new Date().toISOString(),
      }))
      setEvents(updatedEvents)
      setCurrentPage(1)
    } catch (error) {
      console.error("Failed to refresh events:", error)
    } finally {
      setIsRefreshing(false)
    }
  }, [])

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null
    if (refreshRate) {
      intervalId = setInterval(refreshEvents, refreshRate * 60 * 1000)
    }
    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [refreshRate, refreshEvents])

  const paginatedEvents = events.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const totalPages = Math.ceil(events.length / itemsPerPage)

  return (
    <SidebarInset className="mt-20">
    <header className="flex h-14 mt-2 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="ml-1" />  
      </div>
    </header>
    <div className="flex flex-col w-full px-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">IoT Camera Events</h1>
        <div className="flex space-x-4 items-center">
          <Select
            value={refreshRate ? refreshRate.toString() : "manual"}
            onValueChange={(value) => setRefreshRate(value === "manual" ? null : Number(value))}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select refresh rate" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="manual">Manual refresh</SelectItem>
              <SelectItem value="1">Every 1 minute</SelectItem>
              <SelectItem value="2">Every 2 minutes</SelectItem>
              <SelectItem value="5">Every 5 minutes</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" onClick={refreshEvents} disabled={isRefreshing}>
            <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
          </Button>
          <Select
            value={itemsPerPage.toString()}
            onValueChange={(value) => {
              setItemsPerPage(Number(value))
              setCurrentPage(1)
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Show items" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2">Show 2 events</SelectItem>
              <SelectItem value="5">Show 5 events</SelectItem>
              <SelectItem value="10">Show 10 events</SelectItem>
              <SelectItem value="20">Show 20 events</SelectItem>
              <SelectItem value="50">Show 50 events</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex space-x-1">
            <Button variant={view === "list" ? "default" : "outline"} size="icon" onClick={() => setView("list")}>
              <List className="h-4 w-4" />
            </Button>
            <Button variant={view === "grid" ? "default" : "outline"} size="icon" onClick={() => setView("grid")}>
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant={view === "table" ? "default" : "outline"} size="icon" onClick={() => setView("table")}>
              <Table className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-background rounded-lg border">
        {view === "table" ? (
          <EventsTable events={paginatedEvents} />
        ) : view === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {paginatedEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="space-y-4 p-4">
            {paginatedEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, events.length)} of{" "}
          {events.length} events
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
    </SidebarInset>
  )
}

