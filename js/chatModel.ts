import { Message } from "./message";

class ChatModel implements IChatModel {
	messages: Array<IMessage>

	constructor(className: string) {
		this.messages = new Array<IMessage>();
	}	
  	
  	addMessage(text: string): void {
  		this.messages.push(new Message(text));
  	}
}

export { ChatModel };
