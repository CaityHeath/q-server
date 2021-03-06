'use strict';

const Q = require('./lib/server.js');
Q.start();

const db = new Q('database');

db.monitorEvent('create');
db.monitorEvent('read');
db.monitorEvent('update');
db.monitorEvent('delete');
