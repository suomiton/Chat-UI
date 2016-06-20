import * as React from "react";
import * as ReactDOM from "react-dom";

class MessageView extends React.Component<IMessage, {}> {
	constructor(props: IMessage) {
		super(props);		
	}	

	public render(){
		return (
			<div className="message">
				<span>{this.props.message}</span>									
			</div>
		);
	}		
}

export { MessageView };