'use strict';

const Q = require('./lib/subscriber.js');

const db = new Q('database');

db.subscribe('read', (payload) => {
  console.log('read happened', payload);
});

db.subscribe('create', (payload) => {
  console.log('create happened', payload);
});

db.subscribe('update',(payload) => {
  console.log('update happened', payload);
});



db.subscribe('delete', (payload) => {
  console.log('delete happened', payload);
});


console.log('list of subscriptions', db.subscriptions());

