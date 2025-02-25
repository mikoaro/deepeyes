"use client"

import { useState, useCallback } from "react"
import { AlertsList } from "@/components/Alert/alerts-list"
import { mockAlerts } from "@/lib/mockData"
import type { Alert } from "@/types/alert"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Dot } from "lucide-react"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"

export default function ReviewPage() {
  const [alerts, setAlerts] = useState<Alert[]>(mockAlerts)
  const [activeTab, setActiveTab] = useState("Alerts")

  const refreshAlerts = useCallback(async (): Promise<Alert[]> => {
    // In a real application, this would be an API call to fetch the latest alerts
    // For this example, we'll simulate a delay and return the mock data
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Simulate new alerts by adding a timestamp to the description
    const updatedAlerts = mockAlerts.map((alert) => ({
      ...alert,
      description: `${alert.description} (Refreshed at ${new Date().toLocaleTimeString()})`,
    }))

    setAlerts(updatedAlerts)
    return updatedAlerts
  }, [])

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  return (
    <SidebarInset className="mt-20">
      <header className="flex h-14 mt-2 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="ml-1" />  
        </div>
      </header>
    <div className="min-h-screen flex flex-col w-full">
      <main className="flex w-full px-5 pt-5">
        <Tabs defaultValue="Alerts" className="w-full" onValueChange={handleTabChange}>
          <TabsList className="flex justify-start bg-white mb-10">
            <TabsTrigger
              value="Alerts"
              className={`text-xl ${activeTab === "Alerts" ? "border-b-2 border-red-800" : ""}`}
            >
              <Dot className="text-red-800 size-14"/> <h2>Alerts</h2> <Dot/> <h2 className="">59</h2>
            </TabsTrigger>
            <TabsTrigger
              value="Detections"
              className={`text-xl ${activeTab === "Detections" ? "border-b-2 border-orange-400" : ""}`}
            >
              <Dot className="text-orange-400 size-14"/> <h2>Detections</h2> <Dot/> <h2 className="">35</h2>

            </TabsTrigger>
            <TabsTrigger
              value="Motion"
              className={`text-xl ${activeTab === "Motion" ? "border-b-2 border-yellow-300" : ""}`}
            >
              <Dot className="text-yellow-300 size-14"/> <h2>Motion</h2> <Dot/> <h2 className="">59</h2>

            </TabsTrigger>
          </TabsList>
          <TabsContent value="Alerts">
            <AlertsList initialAlerts={alerts} onRefresh={refreshAlerts} />
          </TabsContent>
          <TabsContent value="Detections">Detections</TabsContent>
          <TabsContent value="Motion">Motion</TabsContent>
        </Tabs>
      </main>
    </div>
    </SidebarInset>
  )
}

