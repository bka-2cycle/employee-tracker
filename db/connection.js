const mysql = require('mysql2')

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'QAZ1290plm$',
        database: 'company_db'
    },
    console.log('Connected to the company_db database!')
);

module.exports = connection;