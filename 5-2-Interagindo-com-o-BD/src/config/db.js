const { Pool } = require('pg');

module.exports = new Pool({
	user: 'postgres',
	password: 'kali',
	host: 'localhost',
	port: 5432,
	database: 'my_teacher'
});