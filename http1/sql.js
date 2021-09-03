module.exports = {
	sql: {
		insert: 'insert into students(name,age) values(?,?)',
		update: 'update students set name=?,age=? where id = ?',
		delete: 'delete from students where name=?',
		queryAll: 'select * from students',
		queryName: 'select * from students where name=?'
	}
}
