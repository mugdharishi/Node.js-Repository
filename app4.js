//Function as a parameter in node

//create base]ic sserver
//1. import http module
const http =require('http');
const { default: test } = require('node:test');

//2.create server
//http.createServer().listen(4500);

http.createServer((req,resp)=>{
resp.write("<h1>HEllo......Raj!!<h1>")
resp.end();
}).listen(4500);

//You can write independent function
// and pass it as a parameter to create server function 
function dataControl(req,resp){
    resp.write("Hey..!!");
    resp.end();
}
//http.createServer(dataControl).listen(4500);

//Arrow function for same
const dataControl1=(req,resp)=>{
    resp.write("Hey..!! from arrow function");
    resp.end();
}
//http.createServer(dataControl1).listen(4500);
