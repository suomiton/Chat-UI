interface IMessage {  
  message: string,
  timestamp: Date
}

/*interface ITodoItemProps {
  key : string,
  todo : ITodo;
  editing? : boolean;
  onSave: (val: any) => void;
  onDestroy: () => void;
  onEdit: ()  => void;
  onCancel: (event : any) => void;
  onToggle: () => void;
}*/

interface ITodoItemState {
  editText : string
}

interface ITodoFooterProps {
  completedCount : number;
  onClearCompleted : any;
  nowShowing : string;
  count : number;
}


interface IChatModel {  
  messages: Array<IMessage>
  addMessage(text: string): void
}

interface IAppProps {
  model : IChatModel;
}

interface IAppState { 
  nowShowing? : string
}
