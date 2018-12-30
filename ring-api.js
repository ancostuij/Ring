
const utils = require('./function-utils');
const RingAPI = require('doorbot');

module.exports.ring_client = RingAPI({
    email: process.env['RingUserName'],
    password: process.env['RingPassword'],
    retries: 10, //authentication retries, optional, defaults to 0
});
