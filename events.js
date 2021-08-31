'use strict';

// Global event pool
// This is a singleton for the events class
const Events = require('events');

const events = new Events(); // Only one instance created

module.exports = events;