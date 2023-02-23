const express=require('express');
const app=express();
const path=require('path');
const publicPath=path.join(__dirname,'public');

//static() loads static pages
app.use(express.static(publicPath));

app.listen(7777);

//nodemon app13.js
//localhost:7777/about.html