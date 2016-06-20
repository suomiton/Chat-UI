import { ChatModel } from './chatModel';

const ALL_CHATS = 'all';
const ACTIVE_CHAT = 'active';
const ENTER_KEY = 13;
const ESCAPE_KEY = 27;
const CHAT_DATA: Array<IChatModel> = [new ChatModel('Lorem ipsum'), new ChatModel('Lorem ipsum 2')];
/*{		
		name: ,
		messages: [{ author: 'Tim', message: 'Lorem Lorem Lorem', timestamp: new Date() }, { author: 'John', message: 'Ipsum Ipsum Ipsum', timestamp: new Date() }]
},
{
	name: 'Lorem ipsum 2',
	messages: [{ author: 'Batman', message: 'Robin?', timestamp: new Date() }, { author: 'Robin', message: 'Yea!?', timestamp: new Date() }]
},
];*/

export { ALL_CHATS, ACTIVE_CHAT, ENTER_KEY, ESCAPE_KEY, CHAT_DATA };
