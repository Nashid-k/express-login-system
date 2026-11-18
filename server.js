const express=require('express');
const path=require('path');
const nocache =require('nocache')
const session=require("express-session");
const cookieParser = require('cookie-parser')
const router=require('./router');

const app=express();

if (!process.env.SESSION_SECRET || !process.env.DEMO_LOGIN_EMAIL || !process.env.DEMO_LOGIN_PASSWORD) {
    throw new Error('SESSION_SECRET, DEMO_LOGIN_EMAIL and DEMO_LOGIN_PASSWORD must be configured.');
}


const port=process.env.PORT|| 3000;

app.use(cookieParser());
app.use(nocache())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave:false,
    cookie: { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production' },
    saveUninitialized:false
}));
app.use('/',router);

app.set('view engine','ejs');

//load static assets
app.use('/static',express.static(path.join(__dirname,'public')));
app.use('/assets',express.static(path.join(__dirname,'public/assets')))




app.listen(port,()=>{console.log("Listening to the server on http://localhost:3000")})