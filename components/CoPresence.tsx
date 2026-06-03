"use client"

import { useEffect, useState } from "react"
import { getSocket } from "@/lib/socket"

export default function CoPresence({ materialId, userId }: { materialId: string, userId: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const socket = getSocket()
    socket.connect()

    socket.emit("join-room", { materialId, userId })

    socket.on("presence-update", (userCount: number) => {
      setCount(userCount)
    })

    return () => {
      socket.emit("leave-room")
      socket.off("presence-update")
      socket.disconnect()
    }
  }, [materialId, userId])

  return (
    <div className="flex items-center gap-2 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-3 py-1.5 rounded-full text-sm font-medium border border-green-200 dark:border-green-800">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      {count} {count > 1 ? "Orang Online" : "Orang Online"}
    </div>
  )
}
