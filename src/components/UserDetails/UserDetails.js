import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export class UserDetails extends Component {
  render() {
    const { firstName, lastName, email, interests, state, telephone } = this.props.user
    return (
      <div className="text">
        <div>คุณ <span >{firstName} {lastName}</span></div>
        <div>อีเมล : <span>{email}</span></div>
        <div>Promont/ LINE Customer</div>
      </div>
    )
  }
}

UserDetails.propTypes = {
  user: PropTypes.object
}

export default UserDetails;
