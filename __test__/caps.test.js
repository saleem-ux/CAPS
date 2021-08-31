// 'use strict';

// const events = require('../events');

// let order = {
//     store: '1-206-flowers',
//     orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
//     customer: 'Jamal Braun',
//     address: 'Schmittfort, LA'
// };



// describe('testing event handlers', () => {
//     let consoleSpy;

//     beforeAll(() => {
//         consoleSpy = jest.spyOn(console, 'log').mockImplementation();
//     });

//     it('pickup event Work', async () => {
//         events.emit('pickup', order);
//         await consoleSpy();
//         expect(consoleSpy).toHaveBeenCalled();
//     });

//     it('in-transit event Work ', async () => {
//         events.emit('in-transit', order);
//         await consoleSpy();
//         expect(consoleSpy).toHaveBeenCalled();
//     });

//     it('delivered event Work  ', async () => {
//         events.emit('delivered', order);
//         await consoleSpy();
//         expect(consoleSpy).toHaveBeenCalled();
//     });


//     afterAll(() => {
//         consoleSpy.mockRestore();
//     });

// });


//================================================================================
//================================================================================
//====================Lab: Socket.io =============================================
//================================================================================
//================================================================================


'use strict';

const caps = require('../caps.js');
const storeId = process.env.STORE_ID || 'D2021'



let order = {
    storeName: '1-206-flowers',
    storeId: storeId,
    orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
    customer: 'Jamal Braun',
    address: 'Schmittfort, LA'
};

describe('testing event handlers', () => {
    let consoleSpy;

    beforeAll(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    it('pickup Work', async () => {
        caps.emit('pickup', order);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });

    it('in-transit  Work ', async () => {
        caps.emit('in-transit', order);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });

    it('delivered  Work  ', async () => {
        caps.emit('delivered', order);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });



    afterAll(async () => {
        consoleSpy.mockRestore();

    });

});