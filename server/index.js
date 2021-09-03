const userApi = require('./api/user');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api',userApi);

// 监听端口`
app.listen(3000,()=>{
	console.log('success listen at port:3000......');
});