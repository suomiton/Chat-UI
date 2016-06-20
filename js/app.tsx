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
      chatId: null      
    };        
  }

  public handleNewTodoKeyDown(event : __React.KeyboardEvent) {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    event.preventDefault();

    var val = ReactDOM.findDOMNode<HTMLInputElement>(this.refs["newField"]).value.trim();

    if (val) {
      //this.props.model.addMessage(val, 'You');
      ReactDOM.findDOMNode<HTMLInputElement>(this.refs["newField"]).value = '';
    }
  }  

  public onStateChange(state: IAppState) {    
    this.setState(state);    
  }

  public render() {
    let header;
    let footer;    
    let main;    

    var chatView = (  
      <ChatView key={1} chatCollection={this.props.chatCollection} state={this.state} onStateChange={this.onStateChange.bind(this)} />
    );

    if(this.state.chatId) {
      header = (
        <header className="chat-header">
          <span className="back-button"><button type="button" class="btn" onClick={this.handleBackButton.bind(this)}>Back</button></span>
          <span className="chat-title">{this.state.chatId}</span>
          <span>TODO participants</span>          
        </header>
      );
    } else {
      header = (
        <header>
          <h1>Awesome Chat UI</h1>
        </header>
      );  
    }
      

    if(this.state.chatId) {
      footer = (
        <div className="input-message">
          <div className="control">
            <input type="text" className="control-input" />
          </div>
          <div className="control-button"> 
            <button type="button" className="btn">Submit</button>
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
