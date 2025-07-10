const express = require("express");
const cors = require("cors");
const mongoClient = require("mongodb").MongoClient;

const app = express();



app.get("/get-categories",(req,res)=>{
    
    mongoClient.connect("mongodb://127.0.0.1:27017")
    .then(clientObj =>{
        var database = clientObj.db("react-video-library");
        database.collection("tblcategories").find({}).toArray().then(documents=>{
            res.send(documents);
            res.end();
        });
    });

});

app.listen(5050);
console.log(`API Started http://127.0.0.1:5050`);
