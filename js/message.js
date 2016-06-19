"use strict";
var Message = (function () {
    function Message(text) {
        this.message = text;
        this.timestamp = new Date();
    }
    return Message;
}());
exports.Message = Message;
