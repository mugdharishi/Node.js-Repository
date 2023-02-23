const app=require('./app2');

console.log(app);
console.log(app.x);
console.log(app.y);
console.log(app.z());

const arr=[1,2,3,4,5,3,6,7,3];

//filter
//Iterating through filter 
arr.filter((item)=>{
    console.log(item);
});

//result will store return of Array.filter's output
//here arrow function is passed as a parameter which says
//return the item when value=3 and filter function will do 
//according to this arraow function which is passed as a parameter
let result =arr.filter((item)=>{
    return item==3;
});

console.warn(result);
