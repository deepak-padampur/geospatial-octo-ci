/* eslint-disable */
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const middlewares = require('./middlewares')
const app = express();

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(con => {
  console.log('DB connected succfully')
}).catch(err => {
  console.log('Error :', err)
})

app.use(morgan('common'));
app.use(helmet())
app.use(cors({
  origin: 'http://localhost:3000'
}))

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Express Server"
  })
})

//NOT FOUND PAGE

app.use(middlewares.notFound)

app.use(middlewares.errorHandler)




const PORT = process.env.port || 5000;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})



