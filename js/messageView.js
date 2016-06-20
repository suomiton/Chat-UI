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
    MessageView.prototype.render = function () {
        return (React.createElement("div", {className: "message"}, React.createElement("span", null, this.props.message)));
    };
    return MessageView;
}(React.Component));
exports.MessageView = MessageView;
