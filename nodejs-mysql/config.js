/**
 * CONNECTION POOL
 * 
 */
var mysql = require('mysql');

config = {
    mysql_connect : mysql.createPool({  
        connectionLimit: 10,
        host: "localhost",  
        user: "root",  
        password: "",
        database: "test"   
    })
}; 

module.exports = config;