## What are Middlewares?
--functions used with route
--access and modify req,resp
   to block sites in some countries
--make once use multiple times

## How to make a middleware
//index.js

## middle ware in same file

--next : function to proceed route

const reqFilter=(req,resp,next)=>{
    console.log('request filter');
    if(!req.query.age){
        //if age is not provided through url
        resp.send("Please provide age");
    }
    elseif(req.query.age<18>){
        //if age provided is <18>
        resp.send("You can not get the page");
    }
    else{
        //required otherwise gives error
    }
    next(); //cant run without next();
}

## Apply middleware on routes
app.use(reqFilter); 
//applied for all pages--> application level middleware applied on routes

app.get('/',(req,resp)=>{
resp.send('Welcome to home page');
})
app.get('/users',(req,resp)=>{
resp.send('Welcome to users page');
})


//localhost:7777?age=18 
//for user page: /user?age=18 



## Types of middleware
1.Application
2.route level
3.error handling
4. built-in
4.third-party