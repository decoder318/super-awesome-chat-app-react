import React, { Component } from 'react';
import ChatWindow from './ChatWindow';

class SuperAwesomeChatApp extends Component {
  	state = {
    	users: [{ username: 'Amy' }, { username: 'John' }],
      	messages: [
        	{ username: 'Amy', text: 'Hi, Jon!' },
          	{ username: 'Amy', text: 'How are you?' },
          	{ username: 'John', text: 'Hi, Amy! Good, you?' },
      	]
	};
	
	postMessage = (sender, message) => {
    	this.setState(prevState => ({
    		messages: [...prevState.messages, {username: sender.username, text: message}]
    	}));
    }

	render() {
    	const {users, messages} = this.state;

    	return (
      		<div className="container">
            {
            	users.map(user => <ChatWindow key={user.username} headerText="Super Awesome Chat" user={user} messages={messages} messagePostedCallback={this.postMessage} />) 
            } 
            </div>
      	);
    };
}

export default SuperAwesomeChatApp;