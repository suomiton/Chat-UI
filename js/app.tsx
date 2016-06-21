import * as React from "react";
import * as ReactDOM from "react-dom";

import { ALL_CHATS, ACTIVE_CHAT, ENTER_KEY, ESCAPE_KEY, CHAT_DATA } from "./constants";
import { ChatModel } from "./chatModel";
import { ChatView } from "./chatView";

declare var Router;

class ChatUI extends React.Component<IAppProps, IAppState> {
  public state : IAppState;      

  constructor(props : IAppProps) {
    super(props);
    this.state = {
      nowShowing: ALL_CHATS,
      chatId: null,
      messages: 0      
    };        
  }

  public handleNewMessageKeyDown(event : __React.KeyboardEvent) {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    event.preventDefault();
    this.addMessage();    
  }  

  public getChatModel(name: string): IChatModel {    
    return this.props.chatCollection.filter((chat) => { return chat.name === name })[0];
  }

  public onStateChange(name: string): void {    
    if (name) {
      this.state.chatId = name;
      this.state.messages = this.getChatModel(name).messages.length;
    } else {
      this.state.chatId = null;
      this.state.messages = 0;
    }
    
    this.setState(this.state);    
  }  

  public addMessage() {
    const chat = this.getChatModel(this.state.chatId);
    const input = ReactDOM.findDOMNode<HTMLInputElement>(this.refs["newMessage"]);
    var val = input.value.trim();    

    if(val) {
      chat.addMessage(val, 'You');
      input.value = '';
      this.state.messages++;
      this.setState(this.state);
    }    
  }

  public render() {
    let header;
    let footer;    
    let main;    

    var chatView = (  
      <ChatView chatCollection={this.props.chatCollection} chatId={this.state.chatId} onStateChange={this.onStateChange.bind(this)} />
    );

    if(this.state.chatId) {
      header = (
        <header className="chat-header">
          <span className="back-button"><button type="button" class="btn" onClick={this.onStateChange.bind(this, null)}>Back</button></span>
          <span className="chat-title">{this.state.chatId}</span>
          <span className="participants">{this.getChatModel(this.state.chatId).participants.length}</span>          
        </header>
      );
    } else {
      header = (
        <header>
          <h1>Awesome Chat App</h1>
        </header>
      );  
    }      

    if(this.state.chatId) {
      footer = (
        <div className="input-message">
          <div className="control">
            <input type="text" 
              ref="newMessage" 
              autoFocus={true} 
              className="control-input" 
              onKeyDown={ e => this.handleNewMessageKeyDown(e) } />
          </div>
          <div className="control-button"> 
            <button type="button" 
              className="btn" 
              onClick={this.addMessage.bind(this)}>
              Submit
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="container-fluid main">
        {header}
        {chatView}
        {footer}
      </div>
    );
  }
}
 
var model = CHAT_DATA;

ReactDOM.render(
  <ChatUI chatCollection={model}/>,
  document.getElementById('chat-ui')
);
