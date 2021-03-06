const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Dharani',
  password: 'filmy12345',
  database: 'fe_videos'
});

module.exports = connection