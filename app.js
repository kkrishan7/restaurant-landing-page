const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.render("index.html");
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server Started");    
});