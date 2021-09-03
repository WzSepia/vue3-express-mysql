const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const db = require('../db.js');
const $sql = require('../sql.js');

const conn = mysql.createConnection(db.model);

conn.connect();

let jsonWrite = (res,data)=>{
	if(typeof(data) == 'undefined'){
		res.json({
			code:0,
			msg:'err'
		})
	}else{
		res.json({
			code:1,
			msg:'success',
			data:data
		})
	}
}
//add
router.post('/add',(req,res)=>{
	let sql = $sql.sql.insert;
	let param = req.body;
	conn.query(sql,[param.name,param.age],(err,data)=>{
		if(err){
			console.log('err',err)
		}
		if(data){
			jsonWrite(res,data);
		}
	})
})
//query
router.post('/query',(req,res)=>{
	let sql = $sql.sql.queryAll;
	let param = req.body;
	conn.query(sql,(err,data)=>{
		if(err){
			console.log('err',err);
		}
		if(data){
			jsonWrite(res,data)
		}
	})
})
//del
router.post('delete',(req,res)=>{
	let sql = $sql.sql.delete;
	let param = req.body;
	conn.query(sql,[param.name,param.age],(err,data)=>{
		if(err){
			console.log('err',err);
		}
		if(data){
			jsonWrite(res,data);
		}
	})
})

//update
router.post('/update',(req,res)=>{
	let sql = $sql.sql.update;
	let param = req.body;
	conn.query(sql,[param.name,param.age,param.id],(err,data)=>{
		if(err){
			console.log('err',err)
		}
		if(data){
			jsonWrite(res,data);
		}
	})
})

module.exports = router;