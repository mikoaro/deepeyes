import type { Scene } from "@/types/dashboard2"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Film } from "lucide-react"

interface ScenesCardProps {
  scenes: Scene[]
  onActivate: (id: string) => void
}

export function ScenesCard({ scenes, onActivate }: ScenesCardProps) {
  const getSceneIcon = (icon: string) => {
    switch (icon) {
      case "sun":
        return <Sun className="h-4 w-4" />
      case "moon":
        return <Moon className="h-4 w-4" />
      case "film":
        return <Film className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Scenes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-2">
          {scenes.map((scene) => (
            <Button
              key={scene.id}
              variant={scene.active ? "default" : "outline"}
              className="w-full"
              onClick={() => onActivate(scene.id)}
            >
              {getSceneIcon(scene.icon)}
              <span className="ml-2">{scene.name}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

