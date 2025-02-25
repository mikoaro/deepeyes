"use client";

import { Search, Download, Grid, LayoutGrid } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EnhancedSearchProps {
  totalImages: number;
  onSearch: (query: string) => void;
  onViewChange: (view: "grid" | "compact") => void;
  onAspectRatioChange: (ratio: string) => void;
  currentView: "grid" | "compact";
}

export function EnhancedSearch({
  totalImages,
  onSearch,
  onViewChange,
  onAspectRatioChange,
  currentView,
}: EnhancedSearchProps) {
  return (
    <div className="flex flex-col gap-4 p-4 border-b bg-background">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            className="pl-9"
            placeholder="Search images..."
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <Button variant="outline" size="icon">
          <Download className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Tabs defaultValue="data">
            <TabsList>
              <TabsTrigger value="data">Data</TabsTrigger>
              <TabsTrigger value="labels">Labels</TabsTrigger>
              <TabsTrigger value="predictions">Predictions</TabsTrigger>
            </TabsList>
          </Tabs>
          <Select onValueChange={onAspectRatioChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Aspect Ratio" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Ratios</SelectItem>
              <SelectItem value="1">1:1</SelectItem>
              <SelectItem value="0.75">3:4</SelectItem>
              <SelectItem value="0.5">1:2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            {totalImages.toLocaleString()} Images
          </span>
          <div className="flex gap-1">
            <Button
              variant={currentView === "grid" ? "secondary" : "ghost"}
              size="icon"
              onClick={() => onViewChange("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={currentView === "compact" ? "secondary" : "ghost"}
              size="icon"
              onClick={() => onViewChange("compact")}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
