require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const app = express()

const requireAuth = require('./middleware/requireAuth');
const authRoutes = require('./routes/auth');
const hashtagRoutes = require('./routes/hashtag');

app.use(cors());
app.use(cookieParser());
app.use(express.json())


app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`))

app.use('/api', authRoutes);
app.use('/api/hashtags', requireAuth, hashtagRoutes)
