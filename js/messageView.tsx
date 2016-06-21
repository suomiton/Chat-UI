import * as React from "react";
import * as ReactDOM from "react-dom";

class MessageView extends React.Component<IMessage, {}> {
	constructor(props: IMessage) {
		super(props);		
	}	

	public renderMsg(message: string): any {
		if(message.indexOf('http') === 0) {
			return (
				<img src={message} alt="" />
			);
		}
		return message;
	}

	public render() {
		let cssClass = ['message-container', 'sender'];

		if(this.props.author === 'You') {
			cssClass.push('sender--you');
		}				

		return (
			<div className={cssClass.join(' ')}>
				<div className="author">{this.props.author}</div>
				<div className="text">{this.renderMsg(this.props.message)}</div>									
			</div>
		);
	}		
}

export { MessageView };