const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const db = require('../db.js');
const $sql = require('../sql.js');

//创建连接方法
const conn = mysql.createConnection(db.model);
//连接
conn.connect();
//数据处理
let jsonWrite = (res, data) => {
	if (typeof(data) == 'undefined') {
		res.json({
			code: '0',
			msg: '出错'
		})
	} else {
		res.json({
			code:1,
			msg:'成功',
			data:data
		});
	}
}

//新增
router.post('/add', (req, res) => {
	let sql = $sql.sql.insert;
	let param = req.body;
	console.log(param);
	conn.query(sql, [param.name, param.age], (err, data) => {
		if (err) {
			console.log('err', err);
		}
		if (data) {
			jsonWrite(res, data);
		}
	})
})

//查询
router.post('/query', (req, res) => {
	let sql = $sql.sql.queryAll;
	let param = req.body;
	console.log(param);
	conn.query(sql, (err, data) => {
		if (err) {
			console.log('err', err);
		}
		if (data) {
			jsonWrite(res, data);
		}
	})
})

//删除
router.post('/delete', (req, res) => {
	let sql = $sql.sql.delete;
	let param = req.body;
	console.log(param);
	conn.query(sql, [param.name], (err, data) => {
		if (err) {
			console.log('err', err);
		}
		if (data) {
			jsonWrite(res, data);
		}
	})
})

//修改
router.post('/update', (req, res) => {
	let sql = $sql.sql.update;
	let param = req.body;
	console.log(param);
	conn.query(sql, [param.name, param.age], (err, data) => {
		if (err) {
			console.log('err', err);
		}
		if (data) {
			jsonWrite(res, data);
		}
	})
})

module.exports = router;
