'use strict';

const events = require('./events');

require('./modules/driver');
require('./modules/vendor');

events.on('pickup', pickup);
events.on('in-transit', inTransit);
events.on('delivered', delivered);

function pickup(payload) {
    let output = {
        event: 'pickup',
        time: new Date().toLocaleString(),
        payload: payload
    };
    console.log('Event', output);
};

function inTransit(payload) {
    let output = {
        event: 'in-transit',
        time: new Date().toLocaleString(),
        payload: payload
    };
    console.log('Event', output);
};

function delivered(payload) {
    let output = {
        event: 'delivered',
        time: new Date().toLocaleString(),
        payload: payload
    };
    console.log('Event', output);
};

module.exports = {
    pickup,
    inTransit,
    delivered
};