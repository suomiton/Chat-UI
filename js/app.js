"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDOM = require("react-dom");
var constants_1 = require("./constants");
var chatView_1 = require("./chatView");
var chatFactory_1 = require("./chatFactory");
var ChatUI = (function (_super) {
    __extends(ChatUI, _super);
    function ChatUI(props) {
        _super.call(this, props);
        this.state = {
            chatId: null,
            messages: 0
        };
    }
    ChatUI.prototype.handleNewMessageKeyDown = function (event) {
        if (event.keyCode !== constants_1.ENTER_KEY) {
            return;
        }
        event.preventDefault();
        this.addMessage();
    };
    ChatUI.prototype.getChatModel = function (name) {
        return this.props.chatCollection.filter(function (chat) { return chat.name === name; })[0];
    };
    ChatUI.prototype.onStateChange = function (name) {
        if (name) {
            this.state.chatId = name;
            this.state.messages = this.getChatModel(name).messages.length;
            this.setState(this.state);
            setTimeout(function () {
                window.scrollTo(0, document.body.scrollHeight);
                emojify.run();
            });
        }
        else {
            this.state.chatId = null;
            this.state.messages = 0;
            this.setState(this.state);
        }
    };
    ChatUI.prototype.addMessage = function () {
        var chat = this.getChatModel(this.state.chatId);
        var input = ReactDOM.findDOMNode(this.refs["newMessage"]);
        var val = input.value.trim();
        if (val) {
            chat.addMessage(val, 'You');
            input.value = '';
            this.state.messages++;
            this.setState(this.state);
            setTimeout(function () {
                window.scrollTo(0, document.body.scrollHeight);
                emojify.run();
            });
        }
    };
    ChatUI.prototype.render = function () {
        var _this = this;
        var header;
        var footer;
        var main;
        var chatView = (React.createElement(chatView_1.ChatView, {chatCollection: this.props.chatCollection, chatId: this.state.chatId, onStateChange: this.onStateChange.bind(this)}));
        if (this.state.chatId) {
            var chat = this.getChatModel(this.state.chatId);
            header = (React.createElement("header", {className: "chat-header"}, React.createElement("span", {className: "back-button"}, React.createElement("button", {type: "button", className: "btn btn-primary", onClick: this.onStateChange.bind(this, null)}, "Back")), React.createElement("span", {className: "chat-title"}, this.state.chatId), React.createElement("span", {className: "participants", title: chat.participants.join(', ')}, chat.participants.length, " ", React.createElement("i", {className: "glyphicon glyphicon-user"}))));
        }
        else {
            header = (React.createElement("header", null, React.createElement("h1", null, "Awesome Chat App")));
        }
        if (this.state.chatId) {
            footer = (React.createElement("footer", null, React.createElement("div", {className: "input-message row"}, React.createElement("div", {className: "control col-xs-8"}, React.createElement("input", {type: "text", ref: "newMessage", autoFocus: true, className: "form-control", onKeyDown: function (e) { return _this.handleNewMessageKeyDown(e); }})), React.createElement("div", {className: "control-button col-xs-4"}, React.createElement("button", {type: "button", className: "btn btn-primary", onClick: this.addMessage.bind(this)}, "Submit")))));
        }
        return (React.createElement("div", {className: "main"}, header, chatView, footer));
    };
    return ChatUI;
}(React.Component));
var model = chatFactory_1.ChatFactory.createModel();
ReactDOM.render(React.createElement(ChatUI, {chatCollection: model}), document.getElementById('chat-ui'));
