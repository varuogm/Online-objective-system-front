const mongoose=require('mongoose');
require ("dotenv").config();
var url = process.env.ATLAS;
//var url="mongodb://localhost:27017/KAPS";


mongoose.connect(url, {useNewUrlParser:true,useUnifiedTopology:true},
    err=>{

        if(!err)
console.log("Mongodb connection succeded");
else
console.log('Error while connecting MongoDB :'+JSON.stringify(err,undefined,2))

    });

