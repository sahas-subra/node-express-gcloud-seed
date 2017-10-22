'use strict';
var crypto = require('crypto');

var sharedSecret = "Chennai";
var query = "MAS";
var signature = crypto.createHmac("sha256", sharedSecret).update(query).digest("hex");

console.log(signature);