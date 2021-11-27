const express = require('express')
const cors = require('cors')
const db = require('./db')

const userRouter = require('./routes/user-router')

const app = express()
const apiPort = 3000

app.use(cors())
app.use(express.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', userRouter)


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
