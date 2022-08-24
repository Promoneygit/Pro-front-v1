import React, { Component } from 'react';
import { connect } from 'react-redux';
import Approval from './components/Approval';
import { Divider, ProfileImage } from '../../components';
import finish from './image/finish.png';
import './style.css'

export class Confirmation extends Component {
  render() {
    return (
      <div>
          <img src={finish} alt="finish" className='img'/>
        <div>
        <ProfileImage />
        <Approval user={this.props.profile} />
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile
  }
}

export default connect(mapStateToProps)(Confirmation);
