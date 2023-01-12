const {Client} = require('pg')

const client = new Client({
	host:'192.168.31.3',
	user: 'wenned',
	port: 5432,
	password:'12345',
	database:'sabor'
    })

module.exports = client