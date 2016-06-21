import { Message } from "./message";

class ChatModel implements IChatModel {	
	name: string;
	participants: Array<string>;
	messages: Array<IMessage>;

	constructor(name: string) {		
		this.name = name;		
		this.messages = new Array<IMessage>();	
		this.participants = new Array<string>();		
	}	
  	
  	addMessage(text: string, author: string): void {
  		this.messages.push(new Message(text, author));
  	}
}

export { ChatModel };
