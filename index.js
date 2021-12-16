const express = require('express')
const path = require('path')

const app = express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, '/public/index.html'))
    // record a generic message and send it to Rollbar
    // rollbar.info("html file served successfully");

})
const port = process.env.PORT || 4545
app.listen(port,()=>console.log(`Take us to warp ${port}`))