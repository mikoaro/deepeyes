"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Doughnut, Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js"
import type { MonitoringData } from "@/types/monitoring"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement)

const mockData: MonitoringData = {
  memory: {
    load: 30,
    available: 70,
    total: 100,
  },
  cpu: {
    loading: [0, 10, 20, 15, 30, 25, 40, 35],
    timestamps: Array.from({ length: 8 }, (_, i) => `${i * 5}m`),
  },
  upgrade: {
    downloadSize: "0 / 0 MB",
    currentSpeed: "0 KBps",
    estimatedTime: "00:00",
    status: "unknown",
    updatedAt: "0000-00-00 00:00:00",
  },
}

export function MonitoringDashboard() {
  const [isMonitoring, setIsMonitoring] = useState(false)
  const [data] = useState<MonitoringData>(mockData)

  const memoryChartData = {
    labels: ["Load", "Available"],
    datasets: [
      {
        data: [data.memory.load, data.memory.available],
        backgroundColor: ["rgb(244, 63, 94)", "rgb(229, 231, 235)"],
        borderWidth: 0,
      },
    ],
  }

  const cpuChartData = {
    labels: data.cpu.timestamps,
    datasets: [
      {
        label: "CPU Loading %",
        data: data.cpu.loading,
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  }

  const cpuChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
    },
  }

  const memoryChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
    },
    cutout: "75%",
  }

  const handleReboot = () => {
    if (window.confirm("Are you sure you want to reboot the device?")) {
      console.log("Rebooting device...")
    }
  }

  const handleSoftwareUpgrade = () => {
    console.log("Starting software upgrade...")
  }

  const handleToggleMonitor = () => {
    setIsMonitoring(!isMonitoring)
    console.log(isMonitoring ? "Disabling monitoring..." : "Enabling monitoring...")
  }

  return (
    <div className="grid grid-cols-4 gap-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Maintenance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button
            variant="secondary"
            className="w-full bg-gray-700 text-white hover:bg-gray-600"
            onClick={handleReboot}
          >
            Reboot Device
          </Button>
          <Button
            variant="secondary"
            className="w-full bg-gray-700 text-white hover:bg-gray-600"
            onClick={handleSoftwareUpgrade}
          >
            Software Upgrade
          </Button>
          <Button
            variant="secondary"
            className="w-full bg-gray-700 text-white hover:bg-gray-600"
            onClick={handleToggleMonitor}
          >
            {isMonitoring ? "Disable Monitor" : "Enable Monitor"}
          </Button>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Monitor - Memory</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] flex items-center justify-center">
            <Doughnut data={memoryChartData} options={memoryChartOptions} />
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Monitor - CPU</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <Line data={cpuChartData} options={cpuChartOptions} />
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Monitor - Upgrade</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p>
              <span className="text-muted-foreground">Download Size:</span> {data.upgrade.downloadSize}
            </p>
            <p>
              <span className="text-muted-foreground">Current Speed:</span> {data.upgrade.currentSpeed}
            </p>
            <p>
              <span className="text-muted-foreground">Estimated Time:</span> {data.upgrade.estimatedTime}
            </p>
            <p>
              <span className="text-muted-foreground">Status:</span> {data.upgrade.status}
            </p>
            <p>
              <span className="text-muted-foreground">Updated At:</span> {data.upgrade.updatedAt}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

