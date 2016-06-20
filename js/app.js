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
    ChatUI.prototype.handleBackButton = function () {
        this.setState({ nowShowing: constants_1.ALL_CHATS });
    };
    ChatUI.prototype.onStateChange = function (state) {
        this.setState(state);
    };
    ChatUI.prototype.render = function () {
        var header;
        var footer;
        var main;
        var chatView = (React.createElement(chatView_1.ChatView, {key: 1, chatCollection: this.props.chatCollection, state: this.state, onStateChange: this.onStateChange.bind(this)}));
        if (this.state.chatId) {
            header = (React.createElement("header", {className: "chat-header"}, React.createElement("span", {className: "back-button"}, React.createElement("button", {type: "button", class: "btn", onClick: this.handleBackButton.bind(this)}, "Back")), React.createElement("span", {className: "chat-title"}, this.state.chatId), React.createElement("span", null, "TODO participants")));
        }
        else {
            header = (React.createElement("header", null, React.createElement("h1", null, "Awesome Chat UI")));
        }
        if (this.state.chatId) {
            footer = (React.createElement("div", {className: "input-message"}, React.createElement("div", {className: "control"}, React.createElement("input", {type: "text", className: "control-input"})), React.createElement("div", {className: "control-button"}, React.createElement("button", {type: "button", className: "btn"}, "Submit"))));
        }
        return (React.createElement("div", {className: "container-fluid main"}, header, chatView, footer));
    };
    return ChatUI;
}(React.Component));
var model = constants_1.CHAT_DATA;
ReactDOM.render(React.createElement(ChatUI, {chatCollection: model}), document.getElementById('chat-ui'));
