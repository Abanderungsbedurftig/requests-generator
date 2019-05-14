const requester = require('./requester/index');

// requester.getReq();  //send number of num GET requests to server 
// requester.postReq();  //send POST requests with data from file 'data.js' to server
requester.postReqEncoded();  //send number of num POST requests with data from file 'data.js' to server