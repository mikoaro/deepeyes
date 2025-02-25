"use client"

import { useState } from "react"
import { SidebarNav } from "@/components/Dashboard/sidebar-nav"
import { RoomCard } from "@/components/Dashboard/room-card"
import { WeatherCard } from "@/components/Dashboard/weather-card"
import { EnergyCard } from "@/components/Dashboard/energy-card"
import { ScenesCard } from "@/components/Dashboard/scenes-card"
import { rooms, weatherInfo, energyData, scenes as initialScenes } from "@/lib/dashboard2Data"

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
    <div className="flex min-h-screen py-24">
      <aside className="hidden lg:flex w-64 border-r bg-background">
        <SidebarNav className="w-full" />
      </aside>
      <main className="flex-1 p-8 space-y-6 w-[90.5vw]">
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
  )
}

