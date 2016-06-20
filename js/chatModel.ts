import { Message } from "./message";

class ChatModel implements IChatModel {	
	name: string;
	messages: Array<IMessage>

	constructor(name: string) {		
		this.name = name;		
		this.messages = new Array<IMessage>();	
		this.messages.push(new Message('Lorem ipsum dolor', 'Toni'));
		this.messages.push(new Message('Lorem ipsum dolor 2', 'Muusa'));	
	}	
  	
  	addMessage(text: string, author: string): void {
  		this.messages.push(new Message(text, author));
  	}
}

export { ChatModel };
