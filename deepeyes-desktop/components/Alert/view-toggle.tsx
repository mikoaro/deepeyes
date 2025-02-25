import { Button } from "@/components/ui/button";
import { Grid, List, Table } from "lucide-react";

interface ViewToggleProps {
  view: "list" | "grid" | "table";
  onViewChange: (view: "list" | "grid" | "table") => void;
}

export function ViewToggle({ view, onViewChange }: ViewToggleProps) {
  return (
    <div className="flex space-x-2">
      <Button
        variant={view === "list" ? "default" : "outline"}
        size="icon"
        onClick={() => onViewChange("list")}
        aria-label="List view"
      >
        <List className="h-4 w-4" />
      </Button>
      <Button
        variant={view === "grid" ? "default" : "outline"}
        size="icon"
        onClick={() => onViewChange("grid")}
        aria-label="Grid view"
      >
        <Grid className="h-4 w-4" />
      </Button>
      <Button
        variant={view === "table" ? "default" : "outline"}
        size="icon"
        onClick={() => onViewChange("table")}
        aria-label="Table view"
      >
        <Table className="h-4 w-4" />
      </Button>
    </div>
  );
}
