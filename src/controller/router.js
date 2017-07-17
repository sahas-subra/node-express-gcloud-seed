'use strict';

exports.init=function(app,router){
    router.get('/v1/healthcheck',(request,response)=>{
      sendResponse(200,'ok',response);
    });
    
  var sendResponse= function(status,message,response){
  response.status(status).send({
      data:message
    });
  };
};