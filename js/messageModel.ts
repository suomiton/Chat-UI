class MessageModel implements IMessageModel {	
	author: string;
	message: string;

  	constructor(text: string, author: string) {		
		this.author = author;
  		this.message = text;  		
  	}
}

export { MessageModel };