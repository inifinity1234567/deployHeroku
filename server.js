const express = require('express') 
const Post = require('./Post')
const app = express();
app.use(express.json())


require('./db')





app.get("/post",(req,res) =>{

    Post.find({},(err,data) =>{
        if(err){
            return res.status(400).json({
                err
            })
        }
        return res.status(200).json({
            data
        })
    })
    
})
app.get("/data",(req,res) =>{

    return res.status(200).json({
        message:"success"
    })
})


app.listen(process.env.PORT,() =>{
    console.log(`Server started 8000`)
})