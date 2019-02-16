'use strict';

const Q = require('./lib/server.js');
Q.start();

const db = new Q('database');
db.monitorEvent('create');


const network = new Q('network');
network.monitorEvent('attack');
network.monitorEvent('no-service');



