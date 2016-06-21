import { MessageModel } from "./messageModel";

class ChatModel implements IChatModel {	
	name: string;
	participants: Array<string>;
	messages: Array<IMessageModel>;

	constructor(name: string) {		
		this.name = name;		
		this.messages = new Array<IMessageModel>();	
		this.participants = new Array<string>();		
	}	
  	
  	addMessage(text: string, author: string): void {
  		this.messages.push(new MessageModel(text, author));		
  	}
}

export { ChatModel };
