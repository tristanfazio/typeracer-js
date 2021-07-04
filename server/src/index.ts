import express from "express";
import { Server, Socket } from "socket.io";

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This is the server!')
})

app.listen(port, () => {
  console.log(`Server starting on http://localhost:${port}`)
})