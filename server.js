const express = require('express') 
const mongoose = require('mongoose')

const app = express();
app.use(express.json())

const posts = [
    {id:1,name:"react",description:"javascript library"},
    {id:2,name:"node js",description:"javascript runtime environment"}
]


app.get("/post",(req,res) =>{

    return res.status(200).json({
        posts
    })
})


app.listen(8000,() =>{
    console.log(`Server started 8000`)
})