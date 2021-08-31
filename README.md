# Lab: Class 12 ,Socket.io

# Author: 

   ## Saleem Diab


## description
### Project: CAPS (Code Academy Parcel Service)
#### A real-time service that allows for vendors, such as flower shops or restaurants, to alert a system of a package needing to be delivered, for drivers to instantly see what’s in their pickup queue, and then to alert the vendors as to the state of the deliveries (in transit, and then delivered).




## UML UML / Application Wiring Diagram :
  * ### Lab 11 UML - events

  ![img](./images/lab11uml.jpg)

  * ### Lab 12 UML - Socket.io
  ![img](./images/lab12.jpg)

## Links :

   ### Pull Request:

  * ### [Pull Request events to main](https://github.com/saleem-ux/CAPS/pull/1)
  * ### [Pull Request Socket.io to Main](https://github.com/saleem-ux/CAPS/pull/2)

   ### Actions

  * ### https://github.com/saleem-ux/CAPS/actions

## SetUp :

  * ### Make caps.js  and directories for caps vendor driver .

  * ### npm i dotenv faker jest npm i socket.io socket.io-client

  * ### Add STORE_NAME PORT STORE_ID in .env file

  * ### Start the server using node caps.js , node vendor/vendor.js , node driver/driver.js by splitting the terminal window to three parts or open 3 terminal windows and run each common on a different part to see the connection between the servers
  
## console output  :
  * ### Lab 11 - events
  ![img](./images/lab11.png)

  * ### Lab 12 - Socket.io

 ![img](./images/lab12a.png)
 ![img](./images/lab12b.png)
 ![img](./images/lab12c.png)
 

## Tests :

### npm run test

  * ### Lab 11 - events

  ![img](./images/test11.png)

  * ### Lab 12 - Socket.io
  ![img](./images/test12.png)





























# CAPS
# Event Driven Applications

## Author: 
   ### Saleem Diab


## description

   ### build out a system that emulates a real world supply chain. CAPS will simulate a delivery service where vendors (such a food shops) will ship products using our delivery service and when our drivers deliver them, be notified that their customers received what they purchased.

   ### Tactically, this will be an event driven application that “distributes” the responsibility for logging to separate modules, using only events to trigger logging based on activity.

   ### Phase 1
   ### setup a system of events and handlers, with the intent being to change out the eventing system as we go, and keeping the handlers themselves largely the same.

   ### CAPS system :
   * ### events.js - Global Event Pool caps.js - Main Hub Application Manages the state of every package Logs every event to the console with a timestamp and the event payload

   * ### vendor.js - Vendor Module Every 5 seconds, simulate a new customer order

   * ### Monitor the system for events … Whenever the ‘delivered’ event occurs “thank you” logged to the console

   * ### driver.js - Drivers Module Monitor the system for events … On the ‘pickup’ event … Wait 1 second Log “DRIVER: picked up [ORDER_ID]” to the console. Emit an ‘in-transit’ event with the payload you received Wait 3 seconds Log “delivered” to the console Emit a ‘delivered’ event with the same payload 

## UML :

![img](./images/lab11uml.jpg)

## Links :

  * ### Pull Request:
[PR](https://github.com/saleem-ux/CAPS/pull/1)

  * ### Actions
[Actions](https://github.com/saleem-ux/CAPS/actions)


## SetUp :
  * ### clone the repo
  * ### .env : STORE_NAME = '1-206-flowers'
  * ### npm i
  * ### running the app : on node caps.js (nodemon)

## console output :
![img](./images/lab11.png)

## Tests :

  * ### npm run test
  ![img](./images/test11.png)