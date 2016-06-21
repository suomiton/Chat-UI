"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var MessageView = (function (_super) {
    __extends(MessageView, _super);
    function MessageView(props) {
        _super.call(this, props);
    }
    MessageView.prototype.renderMsg = function (message) {
        if (message.indexOf('http') === 0) {
            return (React.createElement("img", {src: message, alt: ""}));
        }
        return message;
    };
    MessageView.prototype.render = function () {
        var cssClass = ['message-container', 'sender'];
        if (this.props.author === 'You') {
            cssClass.push('sender--you');
        }
        return (React.createElement("div", {className: cssClass.join(' ')}, React.createElement("div", {className: "author"}, this.props.author), React.createElement("div", {className: "text"}, this.renderMsg(this.props.message))));
    };
    return MessageView;
}(React.Component));
exports.MessageView = MessageView;
