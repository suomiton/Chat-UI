class Message implements IMessage {	
	author: string;
	message: string;
  	timestamp: Date;

  	constructor(text: string, author: string) {		
		this.author = author;
  		this.message = text;
  		this.timestamp = new Date();
  	}
}

export { Message };