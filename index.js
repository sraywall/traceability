const express = require('express')
const path = require('path')
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'a3af9b3ebf92489498bb800ea34a0d74',
  captureUncaught: true,
  captureUnhandledRejections: true,
})
const app = express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, '/public/index.html'))
    // record a generic message and send it to Rollbar
    rollbar.info("html file served successfully");

})
app.get("/error",(req,res)=>{
    doesntExist()
})

app.get('/css', (req,res)=>{
    res.sendFile(path.join(__dirname,'styles.css'))
})

const port = process.env.PORT || 4545
app.use(rollbar.errorHandler())
rollbar.critical("Whoa man!")
rollbar.warning("This is a warning!")
app.listen(port,()=>console.log(`Take us to warp ${port}`))