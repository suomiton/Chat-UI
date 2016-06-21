import { ChatModel } from "./chatModel";

class ChatFactory {
	public static createModel(): Array<IChatModel> {
		let chats = new Array<IChatModel>();

		let chat = new ChatModel("Best memes!");
		chat.participants = ['Toni Suominen', 'Batman', 'Zombie'];
		chat.addMessage("Rage guy", chat.participants[1]);
		chat.addMessage("Bad luck brian", chat.participants[2]);
		chats.push(chat);

		let chat2 = new ChatModel("Friends");
		chat2.participants = ['Toni Suominen', 'Batman', 'Zombie', 'Saul Goodman'];
		chat2.addMessage("Hey guys!", chat2.participants[1]);
		chat2.addMessage("What now!?!1", chat2.participants[3]);
		chat2.addMessage("hhhnnnngggg!", chat2.participants[2]);
		chats.push(chat2);

		let chat3 = new ChatModel("Wife");
		chat3.participants = ['Toni Suominen', 'Muse'];
		chat3.addMessage("Going to get some beer!", 'You');
		chat3.addMessage("Have fun!", chat3.participants[1]);		
		chats.push(chat3);

		return chats;
	}
}

export { ChatFactory };