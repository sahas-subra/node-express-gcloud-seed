'use strict';
var bunyan = require('bunyan');

export default class logger {
    constructor() {
        return bunyan.createLogger(
            {
                name: "typeahead-api",
                streams: [
                    {
                        stream: process.stdout
                    },
                    {
                        path: 'logs/typeahead-api.log'
                    }
                ],
                serializers: {
                    req: bunyan.stdSerializers.req
                },
            });
    }
}