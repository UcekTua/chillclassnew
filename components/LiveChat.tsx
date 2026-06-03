"use client"

import { useEffect, useState, useRef } from "react"
import { getSocket } from "@/lib/socket"

type Message = {
  id: string
  senderId: string
  senderName: string
  text: string
  timestamp: string
}

export default function LiveChat({ materialId, userId, userName }: { materialId: string, userId: string, userName: string }) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const socket = getSocket()
    socket.connect()

    const handleReceiveMessage = (msg: Message) => {
      setMessages((prev) => [...prev, msg])
    }

    socket.on("receive-message", handleReceiveMessage)

    return () => {
      socket.off("receive-message", handleReceiveMessage)
    }
  }, [materialId])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const newMsg: Message = {
      id: Math.random().toString(36).substring(7),
      senderId: userId,
      senderName: userName,
      text: input,
      timestamp: new Date().toISOString(),
    }

    const socket = getSocket()
    socket.emit("send-message", newMsg)
    setInput("")
  }

  return (
    <div className="flex flex-col h-[400px] border border-border rounded-xl bg-card overflow-hidden">
      <div className="p-4 border-b border-border bg-muted/50 font-bold flex justify-between items-center">
        <span>Live Chat (Ephemeral)</span>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center text-muted-foreground mt-10 text-sm">
            Belum ada pesan. Jadilah yang pertama menyapa!
          </div>
        ) : (
          messages.map((msg) => {
            const isMe = msg.senderId === userId
            return (
              <div key={msg.id} className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}>
                <span className="text-[10px] text-muted-foreground mb-1">{isMe ? "Anda" : msg.senderName}</span>
                <div className={`px-3 py-2 rounded-lg max-w-[85%] text-sm ${isMe ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                  {msg.text}
                </div>
              </div>
            )
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={sendMessage} className="p-3 border-t border-border bg-muted/20 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ketik pesan..."
          className="flex-1 px-3 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button 
          type="submit" 
          disabled={!input.trim()}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium disabled:opacity-50"
        >
          Kirim
        </button>
      </form>
    </div>
  )
}
