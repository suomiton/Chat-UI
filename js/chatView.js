"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var chatListing_1 = require("./chatListing");
var messageView_1 = require("./messageView");
var ChatView = (function (_super) {
    __extends(ChatView, _super);
    function ChatView(props) {
        _super.call(this, props);
    }
    ChatView.prototype.onChatSelect = function (chatToSelect, name) {
        this.props.onStateChange(name);
    };
    ChatView.prototype.render = function () {
        var _this = this;
        var component = null;
        var chatId = this.props.chatId;
        if (chatId) {
            var selectedChat = this.props.chatCollection.filter(function (chat) { return chat.name === chatId; });
            component = selectedChat[0].messages.map(function (item, index) {
                return (React.createElement("div", {className: "message-container"}, React.createElement(messageView_1.MessageView, {key: index, author: item.author, message: item.message, timestamp: item.timestamp})));
            });
        }
        else {
            component = this.props.chatCollection.map(function (chat, index) {
                return (React.createElement("ul", {className: "chat-collection"}, React.createElement(chatListing_1.ChatListing, {key: index, name: chat.name, onSelect: _this.onChatSelect.bind(_this, chat, chat.name)})));
            });
        }
        return (React.createElement("div", null, component));
    };
    return ChatView;
}(React.Component));
exports.ChatView = ChatView;
