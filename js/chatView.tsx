import * as React from "react";
import * as ReactDOM from "react-dom";

import { ALL_CHATS, ACTIVE_CHAT } from "./constants";
import { ChatListing } from "./chatListing";
import { MessageView } from "./messageView";

class ChatView extends React.Component<IAppProps, IAppState> {		
	constructor(props: IAppProps) {
		super(props);		
		this.state = props.state;
	}	

	public onChatSelect(chatToSelect: IChatModel, name: string): void {        
	    this.state = { nowShowing: ACTIVE_CHAT, chatId: name };
		this.props.onStateChange(this.state);
	}

	public render() {
		let component = null;

		if(this.state.chatId){
			const selectedChat = this.props.chatCollection.filter((chat) => { return chat.name === this.state.chatId });      
			component = selectedChat[0].messages.map((item, index) => {
				return (
					<div className="message-container">					
						<MessageView key={index} author={item.author} message={item.message} timestamp={item.timestamp} />
					</div>
				);
			});     
		} else {
			component = this.props.chatCollection.map((chat, index) => {
				return (
					<ul className="chat-collection">
						<ChatListing key={index} name={chat.name} onSelect={this.onChatSelect.bind(this, chat, chat.name)} />
					</ul>
				);
			});
		}
		return (
			<div>
				{component}
			</div>			  
		);
	}		
}

export { ChatView };