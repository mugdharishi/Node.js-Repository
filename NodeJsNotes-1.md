//From file app12.js you can check browser code with server data

//From app13.js you can see html static pages on browser

## from 3:24

## Remove Extension

## _ is used bcz we dont want req parameter
## For index page 
--> app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})

## For other pages

-->app.get('/other',(_,resp)=>{
    resp.sendFile(`${publicPath}/other.html`)
})

//localhost:7777/other -->no need to write .html extension.

## For any non matching url
## Create nopage.html saying 404 not found
app.get('*',(_,resp)=>{
    resp.sendFile(`${publicPath}/nopage.html`)
})

//Dynamic Pages
## What is template engine?
--To make dynamic pages.
--need to install npm package for that

## install ejs template package
--npm install ejs 

## tell node js that we are using ejs
//index.js
app.set('view engine','ejs');
view enjine : name of template engine
ejs : packge we are using

--Make folder of name views (compulsory name ->views as per config)
    -->profile.ejs
    write html file under it
        with heading profile page 
        <h1>Welcome <%= user.name%></h1>
        <h3>Email:<%= user.email%></h3>
        <h3>City:<%= user.city %></h3>

    -->inside index.js
    app.get('/profile',(_,resp)=>{
        const user={
            name:"Mugdha",
            email:"abc@gmail.com",
            city:"Banglore",
            skills:['php','js','java','node']
        }
        resp.render('profile',{user});
    })

//localhost:7777/profile

## Loop in ejs
<ul>
    <%= user.skills.forEach((item)=>{%>
        <li><%= item %></li>
    <%= })%>
</ul>

## Header File
//index.js
app.get('/login',(_,resp)=>{
    resp.render('login');
})

//login.ejs
A normal html page
To load .html use <%- %> not <%= %>
<%- include('common/header'); %>

--You can add  <%- include('common/header'); %> on profile page as well.

 //Make a folder name common under views
    --header.ejs
    <nav>
    <h3>Header file</h3>
    </nav>
    
## Show common header file

