import { createServer } from "http"
import { Server } from "socket.io"

const httpServer = createServer()
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})

const roomUsers = new Map<string, Set<string>>()

io.on("connection", (socket) => {
  let currentRoom = ""
  let currentUserId = ""

  socket.on("join-room", ({ materialId, userId }) => {
    currentRoom = materialId
    currentUserId = userId
    socket.join(materialId)

    if (!roomUsers.has(materialId)) {
      roomUsers.set(materialId, new Set())
    }
    const usersInRoom = roomUsers.get(materialId)!
    usersInRoom.add(userId)

    io.to(materialId).emit("presence-update", usersInRoom.size)
  })

  socket.on("send-message", (msg) => {
    io.to(currentRoom).emit("receive-message", msg)
  })

  socket.on("leave-room", () => {
    if (currentRoom && currentUserId) {
      socket.leave(currentRoom)
      const usersInRoom = roomUsers.get(currentRoom)
      if (usersInRoom) {
        usersInRoom.delete(currentUserId)
        io.to(currentRoom).emit("presence-update", usersInRoom.size)
        if (usersInRoom.size === 0) {
          roomUsers.delete(currentRoom)
        }
      }
    }
  })

  socket.on("disconnect", () => {
    if (currentRoom && currentUserId) {
      const usersInRoom = roomUsers.get(currentRoom)
      if (usersInRoom) {
        usersInRoom.delete(currentUserId)
        io.to(currentRoom).emit("presence-update", usersInRoom.size)
        if (usersInRoom.size === 0) {
          roomUsers.delete(currentRoom)
        }
      }
    }
  })
})

const PORT = process.env.SOCKET_PORT || 3001
httpServer.listen(PORT, () => {
  console.log(`Socket.io server running on port ${PORT}`)
})
