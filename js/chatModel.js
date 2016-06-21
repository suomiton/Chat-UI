"use strict";
var messageModel_1 = require("./messageModel");
var ChatModel = (function () {
    function ChatModel(name) {
        this.name = name;
        this.messages = new Array();
        this.participants = new Array();
    }
    ChatModel.prototype.addMessage = function (text, author) {
        this.messages.push(new messageModel_1.MessageModel(text, author));
    };
    return ChatModel;
}());
exports.ChatModel = ChatModel;
