'use strict';

var config = require('../config'),
	promise = require('bluebird');

var options = {
	promiseLib: promise
};

var pgp = require('pg-promise')(options);

var dbconfig = {
	database: 'rdcyis',
	host: '203.170.246.170',
	user: 'ubuntu',
	password: 'v^[6o9^',
	port: '5432',
	//poolSize : 10, // max number of clients in the pool
	//poolIdleTimeout : 300000, // how long a client is allowed to remain idle before being closed: 5 mins
};

var db = pgp(dbconfig);
db.connect()
    .then(function (obj) {
        obj.done(); // success, release connection;
    })
    .catch(function (error) {
        console.log("ERROR:", error.message);
    });
module.exports = db;
