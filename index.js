require('dotenv').config()

const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const cors = require('cors')

const authRoutes = require('./routes/auth')
const hashtagRoutes = require('./routes/hashtag')

app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`))

app.use('/api/auth', authRoutes)
app.use('/api/hashtags', hashtagRoutes)
