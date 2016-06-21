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
			const listItems = selectedChat[0].messages.map((item, index) => {
				return (
					<MessageView key={index} author={item.author} message={item.message} timestamp={item.timestamp} />
				)
			});  

			component = (
				<div className="clearfix">					
					{listItems}
				</div>
			);			
		} else {
			const listItems = (
				this.props.chatCollection.map((chat, index) => {
					return (
						<ChatListing key={index} 
							name={chat.name} 
							participants={chat.participants.length}
							onSelect={this.onChatSelect.bind(this, chat, chat.name)} />					
					);
				})
			);

			component = ( 
				<ul className="chat-collection">
					{listItems}
				</ul>
			);
		}
		return (
			<div>
				{component}
			</div>			  
		);
	}		
}

export { ChatView };