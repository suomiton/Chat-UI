"use strict";
var message_1 = require("./message");
var ChatModel = (function () {
    function ChatModel(name) {
        this.name = name;
        this.messages = new Array();
        this.messages.push(new message_1.Message('Lorem ipsum dolor', 'Toni'));
        this.messages.push(new message_1.Message('Lorem ipsum dolor 2', 'Muusa'));
    }
    ChatModel.prototype.addMessage = function (text, author) {
        this.messages.push(new message_1.Message(text, author));
    };
    return ChatModel;
}());
exports.ChatModel = ChatModel;
