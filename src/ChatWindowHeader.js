import React from 'react';
import PropTypes from 'prop-types';

const ChatWindowHeader = ({headerText}) => {
	return (
    	<h2>{headerText}</h2>
    );
}

ChatWindowHeader.propTypes = {
	headerText: PropTypes.string
}

export default ChatWindowHeader;