/* eslint-disable */
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const app = express();

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


const PORT = process.env.port || 5000;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})



