"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDOM = require("react-dom");
var constants_1 = require("./constants");
var chatListing_1 = require("./chatListing");
var ChatUI = (function (_super) {
    __extends(ChatUI, _super);
    function ChatUI(props) {
        _super.call(this, props);
        this.state = {
            nowShowing: constants_1.ALL_CHATS
        };
    }
    ChatUI.prototype.handleNewTodoKeyDown = function (event) {
        if (event.keyCode !== constants_1.ENTER_KEY) {
            return;
        }
        event.preventDefault();
        var val = ReactDOM.findDOMNode(this.refs["newField"]).value.trim();
        if (val) {
            ReactDOM.findDOMNode(this.refs["newField"]).value = '';
        }
    };
    ChatUI.prototype.onChatSelect = function (chatToSelect, name) {
        this.setState({ nowShowing: name });
    };
    ChatUI.prototype.render = function () {
        var _this = this;
        var header;
        var footer;
        var main;
        var chatItems = this.props.chatCollection.map(function (chat, index) {
            return (React.createElement(chatListing_1.ChatListing, {key: index, name: chat.name, messages: chat.messages, onSelect: _this.onChatSelect.bind(_this, chat.name)}));
        });
        header = (React.createElement("header", null, React.createElement("h1", null, "Awesome Chat UI")));
        main = (React.createElement("div", null, React.createElement("ul", {className: "chat-collection"}, chatItems), React.createElement("input", {ref: "newField", className: "new-message", placeholder: "Message!?", onKeyDown: function (e) { return _this.handleNewTodoKeyDown(e); }, autoFocus: true})));
        return (React.createElement("div", {className: "main"}, header, main, footer));
    };
    return ChatUI;
}(React.Component));
var model = constants_1.CHAT_DATA;
ReactDOM.render(React.createElement(ChatUI, {chatCollection: model}), document.getElementById('chat-ui'));