import * as React from "react";
import * as ReactDOM from "react-dom";

import { ALL_CHATS, ACTIVE_CHAT, ENTER_KEY, ESCAPE_KEY, CHAT_DATA } from "./constants";
import { ChatModel } from "./chatModel";
import { ChatListing } from "./chatListing";

declare var Router;

class ChatUI extends React.Component<IAppProps, IAppState> {
  public state : IAppState;  

  constructor(props : IAppProps) {
    super(props);
    this.state = {
      nowShowing: ALL_CHATS      
    };
  }

  /*public componentDidMount() {
    var setState = this.setState;
    var router = Router({
      '/': setState.bind(this, {nowShowing: ALL_CHATS}),
      '/active': setState.bind(this, {nowShowing: ACTIVE_CHAT}),      
    });
    router.init('/');
  }*/

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

  public onChatSelect(chatToSelect: IChatModel, name: string): void {    
    this.setState({ nowShowing: name });
  }

  public render() {
    let header;
    let footer;    
    let main;    

    const chatItems = this.props.chatCollection.map((chat, index) => {
      return (
        <ChatListing
          key={index}
          name={chat.name}
          messages={chat.messages}
          onSelect={this.onChatSelect.bind(this, chat.name)}
          />
      );
    });

    header = (
        <header>
          <h1>Awesome Chat UI</h1>
        </header>
      );

    main = (
        <div>
          <ul className="chat-collection">
            {chatItems}
          </ul>
          <input ref="newField" className="new-message" placeholder="Message!?" onKeyDown={ e => this.handleNewTodoKeyDown(e) } autoFocus={true} />
        </div>
      );    



    return (
      <div className="main">
        {header}
        {main}
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
