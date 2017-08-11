const express = require ("express")
const nunjucks = require("nunjucks")
var app = express()

const db = require('./db')

nunjucks.configure("views",{
    autoescape:true,
    express:app
})

/*
app.get("/",(req,res)=>{
    res.send("hello world")
})
*/

app.get("/",(req,res)=>{
    res.render('index.html', { posts : db})
})

app.get("/:id",(req,res)=>{
    var id = req.params.id

    var post = db.find((item)=>item.id == id)
    res.render('info.html', { post})
})

app.listen(3000,()=>{
    console.log("port 3000 is listening")
})