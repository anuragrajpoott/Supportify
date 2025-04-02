const express = require("express")

require("dotenv").config()

const dbConnect = require("../server/src/configs/database")

const app = express()

app.listen(process.env.PORT,()=>{
    console.log(`server running at port ${process.env.PORT}`)
})

dbConnect()

app.get("/",(req,res)=>{
    res.send(`<h4>server running at PORT ${process.env.PORT}</h4>`)
})


