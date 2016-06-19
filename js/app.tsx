import * as React from "react";
import * as ReactDOM from "react-dom";

import { ALL_CHATS, ACTIVE_CHAT, ENTER_KEY, ESCAPE_KEY } from "./constants";
import { ChatModel } from "./chatModel";

declare var Router;

class ChatUI extends React.Component<IAppProps, IAppState> {
  public state : IAppState;

  constructor(props : IAppProps) {
    super(props);
    this.state = {
      nowShowing: ALL_CHATS      
    };
  }

  public componentDidMount() {
    var setState = this.setState;
    var router = Router({
      '/': setState.bind(this, {nowShowing: ALL_CHATS}),
      '/active': setState.bind(this, {nowShowing: ACTIVE_CHAT}),      
    });
    router.init('/');
  }

  public handleNewTodoKeyDown(event : __React.KeyboardEvent) {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    event.preventDefault();

    var val = ReactDOM.findDOMNode<HTMLInputElement>(this.refs["newField"]).value.trim();

    if (val) {
      this.props.model.addMessage(val);
      ReactDOM.findDOMNode<HTMLInputElement>(this.refs["newField"]).value = '';
    }
  }


  public render() {
    var footer;
    var main;

    const messages = this.props.model.messages;

    var shownMessages = messages.filter((message) => {
      switch (this.state.nowShowing) {
        case ACTIVE_CHAT:
          return true; //!message.completed;      
        default:
          return true;
      }
    });    

    return (
      <div>
        <header className="header">
          <h1>Chat</h1>
          <input
            ref="newField"
            className="new-message"
            placeholder="Message!?"
            onKeyDown={ e => this.handleNewTodoKeyDown(e) }
            autoFocus={true}
          />
        </header>
        {main}
        {footer}
      </div>
    );
  }
}
 
var model = new ChatModel('react-todos');

ReactDOM.render(
  <ChatUI model={model}/>,
  document.getElementsByClassName('todoapp')[0]
);
