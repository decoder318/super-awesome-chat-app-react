import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UserPropType from './UserPropType';

class NewMessageForm extends Component {
	state = {
    	message: ''      	
    }	
  
	handleMessageChange = (e) => {
    	this.setState({
        	message: e.target.value
        });
    };

	handleSubmit = (e) => {
    	e.preventDefault();
      	
      	const {messagePostedCallback, user} = this.props;
      	const {message} = this.state;
      
      	messagePostedCallback(user, message);
      	this.setState({
        	message: ''
        });
    };

  	render() {
    	return (
        	<div>
            	<form className="input-group">
                    <input type="text" className="form-control"  placeholder="Enter your message..." value={this.state.message} onChange={this.handleMessageChange} />
                    <div className="input-group-append">
                      <button type="submit" className="btn submit-button" disabled={!this.state.message} onClick={this.handleSubmit}>
                        SEND
                      </button>
                    </div>
                </form>
        	</div>
        );
    }
}

NewMessageForm.propTypes = {
	messagePostedCallback: PropTypes.func.isRequired,
  	user: UserPropType.isRequired
}

export default NewMessageForm;