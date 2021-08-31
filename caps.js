// 'use strict';

// const events = require('./events');

// require('./modules/driver');
// require('./modules/vendor');

// events.on('pickup', pickup);
// events.on('in-transit', inTransit);
// events.on('delivered', delivered);

// function pickup(payload) {
//     let output = {
//         event: 'pickup',
//         time: new Date().toLocaleString(),
//         payload: payload
//     };
//     console.log('Event', output);
// };

// function inTransit(payload) {
//     let output = {
//         event: 'in-transit',
//         time: new Date().toLocaleString(),
//         payload: payload
//     };
//     console.log('Event', output);
// };

// function delivered(payload) {
//     let output = {
//         event: 'delivered',
//         time: new Date().toLocaleString(),
//         payload: payload
//     };
//     console.log('Event', output);
// };

// module.exports = {
//     pickup,
//     inTransit,
//     delivered
// };


//================================================================================
//================================================================================
//====================Lab: Socket.io =============================================
//================================================================================
//================================================================================

'use strict';

require('dotenv').config();
const port = process.env.PORT || 3000;
const io = require('socket.io')(port);

// Global Operations - Default name space
const caps = io.of('/caps');

io.on('connection', (socket) => {
    console.log('Caps: You are now connected to the CAPS system', socket.id);
});

caps.on('connection', (socket) => {
    console.log('CAPS: You are now connected to the CAPS system', socket.id);

    socket.on('join', room => {
        socket.join(room);
    });

    socket.on('pickup', payload => {
        let event = {
            event: 'pickup',
            time: new Date().toLocaleString(),
            payload: payload
        };
        console.log('Event', event);
        caps.emit('pickup', payload);
    });

    socket.on('in-transit', payload => {
        let event = {
            event: 'pickup',
            time: new Date().toLocaleString(),
            payload: payload
        };
        console.log('Event', event);
        caps.emit('in-transit', payload);
    });

    socket.on('delivered', payload => {
        let event = {
            event: 'pickup',
            time: new Date().toLocaleString(),
            payload: payload
        };
        console.log('Event', event);
        caps.emit('delivered', payload);
    });

});

module.exports = caps;
