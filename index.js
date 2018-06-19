const express = require('express');
const app = express();
const isAvailable = require('./killshot');


app.get('/',function(req,res){
   isAvailable.then(data => res.send(JSON.stringify({killShotsAreAvailable:data}))); 
});

app.listen(3000, ()=> console.log('app starting!'));