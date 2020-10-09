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

//NOT FOUND PAGE

app.use((req, res, next) => {
  const error = new Error(`Not found ${req.originalUrl}`);
  res.status(404);
  next(error)
})

app.use((error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? `wrong happened` : error.stack
  })
})




const PORT = process.env.port || 5000;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})



