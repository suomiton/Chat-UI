"use strict";
var chatModel_1 = require("./chatModel");
var ChatFactory = (function () {
    function ChatFactory() {
    }
    ChatFactory.createModel = function () {
        var chats = new Array();
        var chat = new chatModel_1.ChatModel("Best memes!");
        chat.participants = ['Toni Suominen', 'Batman', 'Riddler'];
        chat.addMessage("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ9fZ--AauuACi07AI207igP9E9MevhVOPKvTF6dctBK8NEP5gXsDaRjw", chat.participants[1]);
        chat.addMessage("Bad luck brian", chat.participants[2]);
        chats.push(chat);
        var chat2 = new chatModel_1.ChatModel("Friends");
        chat2.participants = ['Toni Suominen', 'Batman', 'Robin', 'Joker'];
        chat2.addMessage("Hey guys!", chat2.participants[1]);
        chat2.addMessage("What now!?!1", chat2.participants[3]);
        chat2.addMessage("hhhnnnngggg!", chat2.participants[2]);
        chats.push(chat2);
        var chat3 = new chatModel_1.ChatModel("Girlfriend");
        chat3.participants = ['Toni Suominen', 'Muse'];
        chat3.addMessage("Going to get some beer!", 'You');
        chat3.addMessage("Have fun!", chat3.participants[1]);
        chats.push(chat3);
        return chats;
    };
    return ChatFactory;
}());
exports.ChatFactory = ChatFactory;
