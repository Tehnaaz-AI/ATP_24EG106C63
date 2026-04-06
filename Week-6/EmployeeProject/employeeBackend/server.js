import exp from 'express'
import { config } from 'dotenv'
import { connect } from 'mongoose'
import cookieParser from 'cookie-parser'

import { employeeApp } from './APIs/employeeAPI.js'
import cors from 'cors'

config()
const app = exp()

//add cors
app.use(cors({
  origin:["http://localhost:5173"]
}))

// middleware
app.use(cookieParser())
app.use(exp.json())

// routes
app.use("/employee-api", employeeApp)

// DB connect
const connectDB = async () => {
  try {
    await connect(process.env.DB_URL)
    console.log("DB Connected")

    const port = process.env.PORT || 4000
    app.listen(port, () => console.log(`Server running on ${port} `))

  } catch (err) {
    console.log("DB Error", err)
  }
}

connectDB()

// invalid path
app.use((req, res) => {
  res.status(404).json({ message: `Path ${req.url} is invalid` })
})

// error handler
app.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    return res.status(400).json({ error: err.message })
  }

  if (err.name === "CastError") {
    return res.status(400).json({ error: "Invalid ID" })
  }

  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0]
    return res.status(409).json({
      error: `${field} already exists`
    })
  }

  res.status(500).json({ error: "Server error" })
})