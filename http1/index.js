const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const userApi = require('./api/user.js');

app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json());

app.use('/api',userApi);

app.get('/',(req,res)=>{
	res.send('你好世界!')
});

app.listen(3000,()=>{
	console.log('监听3000');
})