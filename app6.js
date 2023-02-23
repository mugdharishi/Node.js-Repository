const http=require('http');
const data1=require('./data');

http.createServer((req,resp)=>{
resp.writeHead(200,{'content-type':'application\json'});
resp.write(JSON.stringify({name:'Mugdha',Babi:'Raj'}));

resp.end();
}).listen(5500);
 