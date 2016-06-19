"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDOM = require("react-dom");
var constants_1 = require("./constants");
var chatModel_1 = require("./chatModel");
var ChatUI = (function (_super) {
    __extends(ChatUI, _super);
    function ChatUI(props) {
        _super.call(this, props);
        this.state = {
            nowShowing: constants_1.ALL_CHATS
        };
    }
    ChatUI.prototype.componentDidMount = function () {
        var setState = this.setState;
        var router = Router({
            '/': setState.bind(this, { nowShowing: constants_1.ALL_CHATS }),
            '/active': setState.bind(this, { nowShowing: constants_1.ACTIVE_CHAT }),
        });
        router.init('/');
    };
    ChatUI.prototype.handleNewTodoKeyDown = function (event) {
        if (event.keyCode !== constants_1.ENTER_KEY) {
            return;
        }
        event.preventDefault();
        var val = ReactDOM.findDOMNode(this.refs["newField"]).value.trim();
        if (val) {
            this.props.model.addMessage(val);
            ReactDOM.findDOMNode(this.refs["newField"]).value = '';
        }
    };
    ChatUI.prototype.render = function () {
        var _this = this;
        var footer;
        var main;
        var messages = this.props.model.messages;
        var shownMessages = messages.filter(function (message) {
            switch (_this.state.nowShowing) {
                case constants_1.ACTIVE_CHAT:
                    return true;
                default:
                    return true;
            }
        });
        return (React.createElement("div", null, React.createElement("header", {className: "header"}, React.createElement("h1", null, "Chat"), React.createElement("input", {ref: "newField", className: "new-message", placeholder: "Message!?", onKeyDown: function (e) { return _this.handleNewTodoKeyDown(e); }, autoFocus: true})), main, footer));
    };
    return ChatUI;
}(React.Component));
var model = new chatModel_1.ChatModel('react-todos');
ReactDOM.render(React.createElement(ChatUI, {model: model}), document.getElementsByClassName('todoapp')[0]);
