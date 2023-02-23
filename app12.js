const { response } = require('express');
const express= require('express');
const app=express(); //to execute

//For index page
app.get('',(req,resp)=>{
    //To get parameter send in url (localhost:7777?name=Mugdha)
    console.log("data send by browser : ",req.query.name);// , or + both can be used for CONSOLE concatenation
    resp.send(`<h1>Welcone Page!! ${req.query.name}</h1>
    <a href="./aboutUs">About Us</a>
    <a href="./contactUs">Contact Us</a>
    `);
    
});

//http://localhost:7777/aboutUs?name=Mugdha
app.get('/aboutUS',(req,resp)=>{
    //Sending HTML
    resp.send(`
    <h3>About us Page!!</h3>
    <input type="text" placeholder="Enter Name" name="txtName" value="${req.query.name}"/>
    <input type="button" value="Click Me"/>
    <a href="/">Home</a>
    <a href="./contactUs">Contact Us</a>
    `);
}); 

//Sending JSON Object 
//You can use backquotes `` or Single/Double quotes
app.get('/contactUs',(req,resp)=>{
   
    resp.send({ name:'Mugdha',
    Age:25});
    //You can send array of comma separated JSON objects as well

});

app.listen(7777);

//http:localhost:7777 -> for index page
//http://localhost:7777/aboutUs
//nodemon app12.js -> On console