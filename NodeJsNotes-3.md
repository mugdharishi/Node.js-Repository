## Routelevel middleware
--Middlewares : to filter request,response

--Middleware working on single/group of routes / all routes

## Access middleware from different route
--create a file say, middleware.js
    module.export= reqfilter=(req,resp)=>{...}

inside index.js
   const reqfilter=require('middleware'); 

## Middleware other than app level 
1.Remove app.use(reqfilter);

2.To apply on specific route
app.get('/users',reqfilter,(req,resp)=>{
    ...
})

3.To apply on group
    1.
    const route=express.Router(); //getting Router

    2.
    route.use(reqFilter); //connecting req filter with route

    3. Use route.get instead of app.get on which you want to appply middleware
        
        const route=express.Router();
        route.get('/users',reqfilter,(req,resp)=>{
        ...
        })
        
    4. Apply
    app.use('/',route);