interface IMessage { 
  key?: number;   
  author: string;
  message: string,
  timestamp: Date
}

interface IChatState {
  editText: string;
}

interface IChatFooterProps {
  completedCount : number;
  onClearCompleted : any;
  nowShowing : string;
  count : number;
}

interface IChatModel {    
  name: string;
  messages: Array<IMessage>;
  addMessage: (text: string, author: string) => void;
}

interface IAppProps {
  chatCollection: Array<IChatModel>;
  state?: IAppState;
  onStateChange?: (state: IAppState) => void;
}

interface IChatListing {
  key: number;
  name: string;  
  onSelect: (name: string) => void;  
}

interface IAppState { 
  nowShowing?: string;
  chatId?: string;
}

interface IMessageView {  
  key: number;
  message: IMessage
}