module.exports = {
	user: {
		insert: 'INSERT INTO students(name, age) VALUES(?,?)',
		update: 'UPDATE students SET name=?, age=? WHERE id=?',
		delete: 'DELETE FROM students WHERE name=?',
		queryById: 'SELECT * FROM students WHERE id=?',
		queryAll: 'SELECT * FROM students'
	}
}
