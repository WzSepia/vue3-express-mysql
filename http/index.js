const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const userApi = require('./api/user.js')
const app = express();

app.use(bodyParser.urlencoded({
	extended:true
}));

app.use(bodyParser.json());

app.use('/api',userApi);

app.get('/',(req,res)=>{
	res.send('Hello world!')
})

app.listen(3000,()=>{
	console.log('成功监听:3000!');
})