var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu', 
  user            : 'cs340_macijona',
  password        : '9EDF2lmUxZzIoazK',
  database        : 'cs340_macijona'
});

module.exports.pool = pool;
