"use client"

import { useState } from "react"
import { SidebarNav } from "@/components/Dashboard/sidebar-nav"
import { RoomCard } from "@/components/Dashboard/room-card"
import { WeatherCard } from "@/components/Dashboard/weather-card"
import { EnergyCard } from "@/components/Dashboard/energy-card"
import { ScenesCard } from "@/components/Dashboard/scenes-card"
import { rooms, weatherInfo, energyData, scenes as initialScenes } from "@/lib/dashboard2Data"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"

export default function Dashboard2Page() {
  const [scenes, setScenes] = useState(initialScenes)

  const handleSceneActivate = (id: string) => {
    setScenes((prev) =>
      prev.map((scene) => ({
        ...scene,
        active: scene.id === id,
      })),
    )
  }

  return (
    <SidebarInset className="mt-20">
    <header className="flex h-14 mt-2 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="ml-1" />  
      </div>
    </header>
    <div className="flex min-h-screen">
      {/* <aside className="hidden lg:flex w-64 border-r bg-background">
        <SidebarNav className="w-full" />
      </aside> */}
      <main className="flex-1 p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <WeatherCard weather={weatherInfo} />
          <EnergyCard data={energyData} />
          <ScenesCard scenes={scenes} onActivate={handleSceneActivate} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </main>
    </div>
    </SidebarInset>
  )
}

