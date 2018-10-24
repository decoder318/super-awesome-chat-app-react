import React from 'react';
import UserHeader from './UserHeader';
import ConversationThread from './ConversationThread';
import NewMessageForm from './NewMessageForm';
import PropTypes from 'prop-types';
import UserPropType from './UserPropType';
import MessagePropType from './MessagePropType';

const ChatWindowUserPane = ({user, messages, messagePostedCallback}) => {
	return (
    	<div>
      		<UserHeader user={user} />                
    		<ConversationThread user={user} messages={messages} />
    		<NewMessageForm user={user} messagePostedCallback={messagePostedCallback} />
    	</div>
    );
}

ChatWindowUserPane.propTypes = {
  	user: UserPropType.isRequired,
  	messages: PropTypes.arrayOf(MessagePropType),
	messagePostedCallback: PropTypes.func.isRequired
}

export default ChatWindowUserPane;