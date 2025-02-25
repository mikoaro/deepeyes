"use client"

import { useState } from "react"
import type { Gateway } from "@/types/gateway"
import { gateways } from "@/lib/data"
import { GatewayTable } from "@/components/gateway-table"
import { GatewayConfiguration } from "@/components/gateway-configuration"
import { MonitoringDashboard } from "@/components/monitoring-dashboard"
import { Footer } from "@/components/footer"
import { Banner } from "@/components/admin-banner"
import { AddGatewayForm } from "@/components/add-gateway-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CirclePlus, RefreshCw } from "lucide-react"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [entriesPerPage, setEntriesPerPage] = useState("10")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedGateway, setSelectedGateway] = useState<Gateway | null>(null)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [gatewayList, setGatewayList] = useState<Gateway[]>(gateways)

  const filteredGateways = gatewayList.filter((gateway) =>
    Object.values(gateway).some(
      (value) => typeof value === "string" && value.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  )

  const paginatedGateways = filteredGateways.slice(
    (currentPage - 1) * Number.parseInt(entriesPerPage),
    currentPage * Number.parseInt(entriesPerPage),
  )

  const totalPages = Math.ceil(filteredGateways.length / Number.parseInt(entriesPerPage))

  const handleRefresh = () => {
    // In a real application, this would fetch fresh data from the server
    console.log("Refreshing data...")
  }

  const handleAddGateway = () => {
    setIsAddModalOpen(true)
  }

  const handleAddGatewaySubmit = (newGateway: Omit<Gateway, "id"> & { imageFile?: File }) => {
    const gatewayWithId: Gateway = {
      ...newGateway,
      id: (Math.max(...gatewayList.map((g) => Number.parseInt(g.id))) + 1).toString(),
      imageUrl: newGateway.imageFile
        ? URL.createObjectURL(newGateway.imageFile)
        : "/placeholder.svg?height=40&width=40",
    }
    setGatewayList((prev) => [...prev, gatewayWithId])
    setIsAddModalOpen(false)
  }

  const handleRowClick = (gateway: Gateway) => {
    setSelectedGateway(selectedGateway?.id === gateway.id ? null : gateway)
  }

  return (
    <div className="min-h-[90vh]">
      <Banner />
      <div className="py-20">
        <div className="max-w-[1600px] mx-auto py-6 space-y-6 px-4">
          <div>
            <Card className="shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle>Moxa IIoT Gateway List</CardTitle>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={handleAddGateway}
                    size="sm"
                    className="bg-blue-500 text-white rounded-lg hover:bg-blue-400 hover:text-white"
                  >
                    <CirclePlus className="h-4 w-4" />
                    Add
                  </Button>
                  <Button onClick={handleRefresh} variant="outline" size="sm">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">Show</span>
                    <Select value={entriesPerPage} onValueChange={setEntriesPerPage}>
                      <SelectTrigger className="w-[70px]">
                        <SelectValue placeholder="10" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="20">20</SelectItem>
                        <SelectItem value="50">50</SelectItem>
                      </SelectContent>
                    </Select>
                    <span className="text-sm">entries</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">Search:</span>
                    <Input
                      type="search"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="max-w-sm"
                    />
                  </div>
                </div>

                <GatewayTable
                  gateways={paginatedGateways}
                  onRowClick={handleRowClick}
                  selectedGatewayId={selectedGateway?.id}
                />

                <div className="flex items-center justify-between mt-4">
                  <div className="text-sm text-muted-foreground">
                    Showing {(currentPage - 1) * Number.parseInt(entriesPerPage) + 1} to{" "}
                    {Math.min(currentPage * Number.parseInt(entriesPerPage), filteredGateways.length)} of{" "}
                    {filteredGateways.length} entries
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Button>
                    <span className="text-sm">
                      Page {currentPage} of {totalPages}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {selectedGateway?.configuration && (
            <>
              <div>
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>Configure Gateway: {selectedGateway.gatewayName}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <GatewayConfiguration configuration={selectedGateway.configuration} />
                  </CardContent>
                </Card>
              </div>

              <div>
                <MonitoringDashboard />
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />

      <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Gateway</DialogTitle>
          </DialogHeader>
          <AddGatewayForm onSubmit={handleAddGatewaySubmit} onCancel={() => setIsAddModalOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

