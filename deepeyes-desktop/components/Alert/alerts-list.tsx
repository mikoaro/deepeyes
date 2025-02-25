"use client";

import { useState, useCallback, useEffect } from "react";
import type { Alert } from "@/types/alert";
import { AlertCard } from "@/components/Alert/alert-card";
import { AlertsTable } from "@/components/Alert/alerts-table";
import { ViewToggle } from "@/components/Alert/view-toggle";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight, RefreshCw } from "lucide-react";
interface AlertsListProps {
  initialAlerts: Alert[];
  onRefresh: () => Promise<Alert[]>;
}

export function AlertsList({ initialAlerts, onRefresh }: AlertsListProps) {
  const [alerts, setAlerts] = useState<Alert[]>(initialAlerts);
  const [view, setView] = useState<"list" | "grid" | "table">("table");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshRate, setRefreshRate] = useState<number | null>(null);

  const handleAcknowledge = (id: string) => {
    setAlerts((prevAlerts) =>
      prevAlerts.map((alert) =>
        alert.id === id ? { ...alert, isAcknowledged: true } : alert
      )
    );
  };

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    try {
      const refreshedAlerts = await onRefresh();
      setAlerts(refreshedAlerts);
      setCurrentPage(1);
    } catch (error) {
      console.error("Failed to refresh alerts:", error);
    } finally {
      setIsRefreshing(false);
    }
  }, [onRefresh]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    if (refreshRate) {
      intervalId = setInterval(handleRefresh, refreshRate * 60 * 1000);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [refreshRate, handleRefresh]);

  const totalPages = Math.ceil(alerts.length / itemsPerPage);
  const paginatedAlerts = alerts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col space-y-4 border py-5 rounded-lg shadow-lg w-full">
      <div className="flex justify-between items-center px-2">
        <h2 className="text-2xl font-bold">Recent Alerts</h2>
        <div className="flex space-x-4 items-center">
          <Select
            value={refreshRate ? refreshRate.toString() : "manual"}
            onValueChange={(value) =>
              setRefreshRate(value === "manual" ? null : Number(value))
            }
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
          <Button
            variant="outline"
            size="icon"
            onClick={handleRefresh}
            disabled={isRefreshing}
            aria-label="Refresh alerts"
          >
            <RefreshCw
              className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`}
            />
          </Button>
          <Select
            value={itemsPerPage.toString()}
            onValueChange={(value) => {
              setItemsPerPage(Number(value));
              setCurrentPage(1);
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select items per page" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">Show 5 alerts</SelectItem>
              <SelectItem value="10">Show 10 alerts</SelectItem>
              <SelectItem value="20">Show 20 alerts</SelectItem>
              <SelectItem value="50">Show 50 alerts</SelectItem>
            </SelectContent>
          </Select>
          <ViewToggle view={view} onViewChange={setView} />
        </div>
      </div>
      {view === "table" ? (
        <div className="overflow-x-auto">
          <AlertsTable
            alerts={paginatedAlerts}
            onAcknowledge={handleAcknowledge}
          />
        </div>
      ) : (
        <div
          className={
            view === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              : "space-y-4"
          }
        >
          {paginatedAlerts.map((alert) => (
            <AlertCard
              key={alert.id}
              alert={alert}
              onAcknowledge={handleAcknowledge}
              view={view}
            />
          ))}
        </div>
      )}
      <div className="flex justify-between items-center px-2">
        <div className="text-sm text-muted-foreground">
          Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
          {Math.min(currentPage * itemsPerPage, alerts.length)} of{" "}
          {alerts.length} alerts
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
