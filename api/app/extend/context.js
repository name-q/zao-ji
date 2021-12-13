'use strict';

module.exports = {

    errbody(msg, code = 0) {
        this.body = { code, msg }
    },

    successbody(data, code = 1) {
        this.body = { code, data }
    },

};