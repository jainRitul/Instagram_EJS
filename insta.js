const express = require('express');
const app = express();

const path = require('path');
app.use(express.static("public"))
app.set("views engine","ejs");
app.set("views", path.join(__dirname,'/views'));

app.get("/ig/:username",(req,res)=>{
    let { username } = req.params;
    const instaData = require("./data.json");
   
    const data = instaData[username];
    if(data){
    res.render("insta.ejs",{ data });
    }
    else{
      res.render("error.ejs");
    }
})
let port = 3000;
app.listen(port,(req,res)=>{
    console.log('req recivd on port 3000');
})