const express = require('express')
const app = express()
// const { PORT, CLIENT_URL } = require('./constants')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const cors = require('cors')

//import passport middleware
require('./middlewares/passport-middleware')
 // este  es para el testing
const server = app.listen(8002, () => {
  console.log("Servidor iniciado en el puerto 8002");
});

const  PORT =  process.env.PORT || 8001

//initialize middlewares
app.use(express.json())
app.use(cookieParser())
app.use(passport.initialize())

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

//import routes
const authRoutes = require('./routes/auth')
const CRUDRoutes = require('./routes/crud.routes')

//initialize routes
app.use('/api', authRoutes)
app.use(CRUDRoutes)

//app start
const appStart = () => {
  try {
    app.listen(PORT, () => {
      console.log(`The app is running at http://localhost:${PORT}`)
    })
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
}

appStart()
module.exports = server;