import React from 'react';
import PropTypes from 'prop-types';
import UserPropType from './UserPropType';
import MessagePropType from './MessagePropType';

const ConversationThread = ({messages, user}) => {	
	return (
  		<ul className="message-list">
        {
      		messages.map((message, index) => (
            	<li key={index}
          			className={ message.username === user.username ? 'message sender' : 'message recipient' }>
        			<p>{`${message.username}: ${message.text}`}</p>
        	   	</li>
        	))
		}
        </ul>
    );
};

ConversationThread.propTypes = {
	messages: PropTypes.arrayOf(MessagePropType),
	user: UserPropType
};

export default ConversationThread;
