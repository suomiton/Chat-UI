"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ChatListing = (function (_super) {
    __extends(ChatListing, _super);
    function ChatListing(props) {
        _super.call(this, props);
    }
    ChatListing.prototype.handleClick = function (event) {
        this.props.onSelect(this.props.name);
    };
    ChatListing.prototype.render = function () {
        return (React.createElement("li", {onClick: this.props.onSelect}, React.createElement("span", null, this.props.name), React.createElement("span", null, this.props.participants, " ", React.createElement("i", {className: "glyphicon glyphicon-user"}))));
    };
    return ChatListing;
}(React.Component));
exports.ChatListing = ChatListing;
