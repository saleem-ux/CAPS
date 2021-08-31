// 'use strict';

// require('dotenv').config();
// const events = require('../events.js');
// var faker = require('faker');

// const storeName = process.env.STORE_NAME || '1-206-flowers';
// events.on('delivered', thanking);


// function thanking(payload) {
//     console.log(`VENDOR: Thank you for delivering ${payload.orderId}`);
// }

// setInterval(() => {
//     let order = {
//         store: storeName,
//         orderId: faker.datatype.uuid(),
//         customer: faker.name.findName(),
//         address: faker.address.streetAddress()
//     }

//     events.emit('pickup', order);
// }, 5000);



// module.exports = { thanking }


//================================================================================
//================================================================================
//====================Lab: Socket.io =============================================
//================================================================================
//================================================================================

'use strict';

require('dotenv').config();

const port = process.env.PORT || 3000;
const faker = require('faker');
const io = require('socket.io-client');
const host = `http://localhost:${port}` || 'http://localhost:3000';
const socket = io.connect(`${host}/caps`);
const storeName = process.env.STORE_NAME || '1-206-flowers';
const storeId = process.env.STORE_ID || 'x1a1b4';

socket.emit('join', storeName);
socket.on('delivered', thanking);

function thanking(payload) {
    console.log(`VENDOR: Thank you for delivering${payload.orderId}`);
};

setInterval(() => {
    let order = {
        store: storeName,
        storeId: storeId,
        orderId: faker.datatype.uuid(),
        customer: faker.name.findName(),
        address: faker.address.streetAddress()
    };
    socket.emit('pickup', order);
}, 5000);

module.exports = { thanking };

