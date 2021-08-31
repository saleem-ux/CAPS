// 'use strict';

// const events = require('../events');

// events.on('pickup', pickUp)

// function pickUp(payload) {

//   setTimeout(() => {
//     console.log(`DRIVER: picked up ${payload.orderId}`);
//     events.emit('in-transit', payload);
//   }, 1000)


//   setTimeout(() => {
//     console.log(`DRIVER: delivered ${payload.orderId}`);
//     events.emit('delivered', payload);
//   }, 3000)

// }

// module.exports = { pickUp }

//================================================================================
//================================================================================
//====================Lab: Socket.io =============================================
//================================================================================
//================================================================================

'use strict';

require('dotenv').config();

const port = process.env.PORT || 3000;
const io = require('socket.io-client');
const host = `http://localhost:${port}` || 'http://localhost:3000';
const socket = io.connect(`${host}/caps`);
const storeName = process.env.STORE_NAME || '1-206-flowers';

socket.emit('join', storeName);
socket.on('pickup', pickup);

function pickup(payload) {
  setTimeout(() => {
    console.log(`DRIVER: Picked up ${payload.orderId}`);
    socket.emit('in-transit', payload);
  }, 1500);

  setTimeout(() => {
    console.log(`DRIVER: delivered ${payload.orderId}`);
    socket.emit('delivered', payload);
  }, 3000);
};

module.exports = { pickup };