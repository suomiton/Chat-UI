"use strict";
var MessageModel = (function () {
    function MessageModel(text, author) {
        this.author = author;
        this.message = text;
    }
    return MessageModel;
}());
exports.MessageModel = MessageModel;
