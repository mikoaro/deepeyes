"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export function Banner() {
  const [currentTime, setCurrentTime] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
      }
      setCurrentTime(now.toLocaleString("en-US", options))
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 bg-slate-600 h-12 flex items-center justify-between px-4 text-white z-50">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center">
          <Image src="/deepeyes_logo.png" alt="logo" width="180" height="40" />
        </Link>
      </div>
      <div className="text-lg font-medium">DeepEyes Edge Device Management Demo</div>
      <div className="flex flex-col items-end text-sm">
        <div>DeepEyes Edge Demo</div>
        <div>{currentTime}</div>
      </div>
    </div>
  )
}

