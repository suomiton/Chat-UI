import * as React from "react";
import * as ReactDOM from "react-dom";

import { ALL_CHATS, ACTIVE_CHAT } from "./constants";
import { ChatListing } from "./chatListing";
import { MessageView } from "./messageView";

class ChatView extends React.Component<IChatView, {}> {		
	constructor(props: IChatView) {
		super(props);				
	}	

	public onChatSelect(chatToSelect: IChatModel, name: string): void {        	    
		this.props.onStateChange(name);
	}

	public render() {
		let component = null;
		const chatId = this.props.chatId;

		if(chatId){
			const selectedChat = this.props.chatCollection.filter((chat) => { return chat.name === chatId });      
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