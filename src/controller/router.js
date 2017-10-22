'use strict';
import SecretStore from '../utils/secrets';
import crypto from 'crypto';

exports.init = function (app, router) {
  router.get('/v1/health', (request, response) => {
    sendResponse(200, 'ok', response);
  });
  router.get('/v1/city', (request, response) => {
    let _secrets = new SecretStore();
    let actualSign = request.header('x-signature'); //retrieve signature from the request header
    let _key = request.header('x-key'); //retrieve the key
    let _mysecret = _secrets.getMySecret(_key); //get the shared secret for the given key
    let expectedSign = crypto.createHmac("sha256", _mysecret).update(request.query.code).digest("hex"); //recalc the signature
    if (actualSign === expectedSign) {
      sendResponse(200,_mysecret,response);
    } else {
      sendResponse(403,'Bad signature',response);
    }
  });

  var sendResponse = function (status, message, response) {
    response.status(status).send({
      data: message
    });
  };

};