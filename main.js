//import packages
const express = require('express')
const morgan= require('morgan')

//configure port
//check if it is set in the environment varible, if not then we default to 3000
const port = process.env.PORT || 3000

//create an instance of express application

const app=express()

//log all request
app.use(morgan('common'))

//get
app.get('/',(req,resp)=>{

    // what is the mdeia type
    resp.type('text/html')
    //set the statu code
    resp.status(200)
    //send the response
    resp.send(`<h1>the current time is ${new Date()}</h1><img src="/static/tree.jpg">`)
})

//serve static resource
app.use("/static", express.static(__dirname + "/static"))

// start web application
app.listen(port,()=>{
    console.info(`starting application on port =${port} at ${new Date()}`)

})
