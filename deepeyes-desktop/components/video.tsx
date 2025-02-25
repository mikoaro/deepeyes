"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function VideoPage() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Alert: Fire detected at 06:35PM PST" },
    { role: "user", content: "Is there anything else that you would like to know?" },
    {
      role: "assistant",
      content: "The scene shows a group of firefighters standing on a road near a body of water...",
    },
    { role: "user", content: "Is there a firetruck?" },
    { role: "assistant", content: "Yes" },
    { role: "user", content: "Besides firefighters, are there any civilians in harm's way?" },
    { role: "assistant", content: "There are no civilians in immediate danger..." },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return
    setMessages([...messages, { role: "user", content: input }])
    setInput("")
  }

  return (
    <div className="flex flex-col md:flex-row">
      {/* Video Player Section */}
      <div
        className={cn("relative h-1/2 md:h-[80vh] transition-all", isCollapsed ? "w-[93vw]" : "w-full md:w-2/3 lg:w-3/4")}
      >
        <video
          src="/fire.mp4" // Replace with your actual video file
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          controls
        />
        <div className="absolute left-4 top-4 rounded-lg bg-destructive px-3 py-1 text-sm font-medium text-destructive-foreground">
          Alert: Fire detected at 06:35PM PST
        </div>
        <Button
          variant="secondary"
          size="icon"
          className="absolute right-4 top-4 s:hidden"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      {/* Chat Section */}
      <div
        className={cn(
          "flex flex-col bg-white shadow-lg",
          isCollapsed ? "hidden" : "h-1/2 md:h-[80vh] md:w-1/3 lg:w-1/4",
        )}
      >
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex max-w-[80%] rounded-lg px-3 py-2 text-sm",
                  message.role === "assistant" ? "ml-auto bg-primary text-primary-foreground" : "bg-muted",
                )}
              >
                {message.content}
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="border-t p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className="flex gap-2"
          >
            <Input placeholder="Type a message" value={input} onChange={(e) => setInput(e.target.value)} />
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

