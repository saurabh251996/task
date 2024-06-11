const express=require('express')
const cors=require('cors')
const path=require('path')
const cookiesParser=require("cookie-parser")
const app=express()
const db=require('./config/db')
const usersRouter=require('./routes/userRoutes')
const indexRouter=require('./routes/index')
const settingsRouter=require('./routes/setting')
app.use(express.json({}))
app.use(express.urlencoded({extended:true}))
// app.use('/user',userRoutes)
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/settings", settingsRouter);
// console.log("hii")

const corsOptions = {
    origin: [
      'http://localhost:3002',
     
      
    ],  
    credentials: true,
  
  }
app.use(cookiesParser())
app.use(cors())

let port=3002
app.listen(port, () => {
    console.log("Server running on", port);
  });

