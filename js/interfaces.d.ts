interface IMessage { 
  key?: number;   
  author: string;
  message: string,
  timestamp: Date
}

interface IChatModel {    
  name: string;
  participants: Array<string>;
  messages: Array<IMessage>;
  addMessage: (text: string, author: string) => void;
}

interface IAppProps {
  chatCollection: Array<IChatModel>;  
}

interface IChatView {
  chatCollection: Array<IChatModel>;
  chatId?: string;
  onStateChange?: (chatId: string) => void; 
}

interface IChatListing {
  key: number;
  name: string;  
  onSelect: (name: string) => void;  
}

interface IAppState { 
  nowShowing?: string;
  chatId?: string;
  messages?: number;
}

interface IMessageView {  
  key: number;
  message: IMessage
}