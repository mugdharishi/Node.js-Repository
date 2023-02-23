//synchronous Programming
let a=10;
let b =0;

setTimeout(()=>{
    b=20;
},2000);

console.log("a+b : "+ (a+b)); //10

//Async 
let m=10;
let n=0;

let waitingData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30);
    },2000);
});

waitingData.then((data)=>{
    n=data;
    console.log("m+n : "+(m+n));
});