const db = require('../db');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const $sql = require('../sql.js');

//新建连接
const conn = mysql.createConnection(db.model);
//连接
conn.connect();
//数据格式整理
var jsonWrite = (res, result) => {
	if (typeof(result) == 'undefined') {
		res.json({
			code: '0',
			msg: '操作失败'
		})
	} else {
		res.json({
			code: 1,
			msg: '成功',
			data: result
		});
	}
}

//新增
router.post('/add', (req, res) => {
	let sql = $sql.user.insert;
	let param = req.body;
	conn.query(sql, [param.name, Number(param.age)], (err, result) => {
		if (err) {
			console.log("添加失败" + err);
		}
		if (result) {
			jsonWrite(res, result);
		}
	})
})

//修改
router.post('/update', (req, res) => {
	let sql = $sql.user.update;
	let param = req.body;
	conn.query(sql, [param.name, Number(param.age), Number(param.id)], (err, result) => {
		if (err) {
			console.log("添加失败" + err);
		}
		if (result) {
			jsonWrite(res, result);
		}
	})
})

//删除
router.post('/delete', (req, res) => {
	let sql = $sql.user.delete;
	let param = req.body;
	conn.query(sql, [param.name], (err, result) => {
		if (err) {
			console.log("失败" + err);
		}
		if (result) {
			jsonWrite(res, result);
		}
	})
})

//查询
router.post('/query', (req, res) => {
	let sql = $sql.user.queryAll;
	let param = req.body;
	conn.query(sql, (err, result) => {
		if (err) {
			console.log("查询失败" + err);
		}
		if (result) {
			jsonWrite(res, result);
		}
	})
})

module.exports = router;
