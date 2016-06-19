"use strict";
var message_1 = require("./message");
var ChatModel = (function () {
    function ChatModel(className) {
        this.messages = new Array();
    }
    ChatModel.prototype.addMessage = function (text) {
        this.messages.push(new message_1.Message(text));
    };
    return ChatModel;
}());
exports.ChatModel = ChatModel;
