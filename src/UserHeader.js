import React from 'react';

const UserHeader = ({user}) => {
	return (
    	<h2>{user.username}</h2>
    );
}

export default UserHeader;