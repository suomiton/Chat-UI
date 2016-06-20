"use strict";
var Message = (function () {
    function Message(text, author) {
        this.author = author;
        this.message = text;
        this.timestamp = new Date();
    }
    return Message;
}());
exports.Message = Message;
