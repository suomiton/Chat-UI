class Message implements IMessage {
	message: string;
  	timestamp: Date;

  	constructor(text: string) {
  		this.message = text;
  		this.timestamp = new Date();
  	}
}

export { Message };