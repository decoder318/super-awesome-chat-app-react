import React from 'react';
import ChatWindowHeader from './ChatWindowHeader';
import ChatWindowUserPane from './ChatWindowUserPane';
import PropTypes from 'prop-types';
import UserPropType from './UserPropType';
import MessagePropType from './MessagePropType';

const ChatWindow = ({headerText, user, messages, messagePostedCallback}) => {  
  	return (
    	<div className="chat-window">
        	<ChatWindowHeader headerText={headerText} />
            <ChatWindowUserPane user={user} messages={messages} messagePostedCallback={messagePostedCallback} />
        </div>
	);
};

ChatWindow.propTypes = {
  	headerText: PropTypes.string,
  	user: UserPropType.isRequired,
  	messages: PropTypes.arrayOf(MessagePropType),
	messagePostedCallback: PropTypes.func.isRequired
}

export default ChatWindow;