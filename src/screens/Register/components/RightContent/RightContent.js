import React, { Component, useState  } from 'react';
import { withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import { ActionCreators } from '../../../../actions/profile';
import { InputRange, MultiSelect ,ProfileImage} from '../../../../components';
import stateList from '../../../../mock/state.json';
import { formatPhoneNumber, isValidEmail, formatIdCard, formatIdBackCard } from '../../../../utils';
import './style.css';
import { FiAlertCircle, FiYoutube } from "react-icons/fi";
import Nextimg from '../../components/RightContent/component/image/next.png'

export class RightContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: '',
        lastName: '',
        telephone: '',
        Date:'',
        idCard:'',
        BackCard:'',
//         age: 20,
        email: '',
        state: '',
        country: '',
        address: 'บ้าน',
        address1: '',
        address2: '',
//         interests: [],
        subscribenewsletter: true
      },
      errors: {
        user: {
          firstName: 'Enter First Name',
          lastName: 'Enter Last Name',
          Date: 'Enter Date',
          idCard:'กรุณากรอกรหัสบัตรประชาชน',
          BackCard: 'กรุณากรอกหมายเลขหลังรหัสบัตรประชาชน',
          telephone: 'Enter Telephone',
          email: 'Email is not valid!',
          address1: 'Enter address1',
          // interests: 'Enter your Interests'
        }
      },
      validForm: false,
      submitted: false
    }
  }

  componentDidMount() {
    if(this.props.profile) {
      this.setState({ user: this.props.profile });
      if (this.props.profile.email) {
        this.resetErrorMsg();
      }
    }
  }

  validationErrorMessage = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'firstName': 
        errors.user.firstName = value.length < 1 ? 'Enter First Name' : '';
        break;
      case 'lastName':
        errors.user.lastName = value.length < 1 ? 'Enter Last Name' : '';
        break;
      case 'Date':
        errors.user.Date = value.length < 1 ? 'Enter Date' : '';
        break;
      case 'email': 
        errors.user.email = isValidEmail(value) ? '' : 'Email is not valid!';
        break;
      case 'idCard': 
        errors.user.idCard = value.length < 1 && value.length > 13 ? 'Enter valid ID Card number' : '';
        break;
       case 'BackCard': 
        errors.user.BackCard = value.length < 1 && value.length > 12 ? 'Enter valid Back ID Card number' : '';
        break;
      case 'telephone': 
        errors.user.telephone = value.length < 1 && value.length > 10 ? 'Enter valid telephone number' : '';
        break;
      case 'address1': 
        errors.user.address1 = value.length < 1 ? `กรุณากรอกที่อยู่ของ ${this.state.user.address}` : '';
        break;
       case 'subscribenewsletter': 
        errors.user.subscribenewsletter = false ? `กรุณายืนยัน` : '';
        break;
      default:
        break;
    }

    this.setState({ errors });
  }
 inputChangeBackCard = (event) => {
    let BackCard = ''
    const { name, value } = event.target;
    const user = this.state.user;
    if (name === 'BackCard') {
          BackCard = formatIdBackCard(value);
      user[name] = BackCard;
    } else {
      user[name] = value;
    }
    this.setState({ user });
    this.validationErrorMessage(event);
  }

  inputChangeIDcard = (event) => {
    let idCard = ''
    const { name, value } = event.target;
    const user = this.state.user;
    if (name === 'idCard') {
      idCard = formatIdCard(value);
      user[name] = idCard;
    } else {
      user[name] = value;
    }
    this.setState({ user });
    this.validationErrorMessage(event);
  }

  inputChange = (event) => {
    let telphone = ''
    const { name, value } = event.target;
    const user = this.state.user;
    if (name === 'telephone') {
      telphone = formatPhoneNumber(value);
      user[name] = telphone;
    } else {
      user[name] = value;
    }
    this.setState({ user });
    this.validationErrorMessage(event);
  }

  checkboxChange = (event) => {
    const { name, checked } = event.target;
    const user = this.state.user;
    user[name] = checked;
    this.setState({ user });
  }

  onChangeAddress = (event) => {
    const user = this.state.user;
    user['address'] = event.target.value;
    this.setState({ user });
  }
//   onChangeInputRange = (value) => {
//     const user = this.state.user;
//     user['age'] = value;
//     this.setState({ user })
//   }

  onSelectedInterest = (value) => {
    const user = this.state.user;
    const errors = this.state.errors;
//     user['interests'] = value;
//     errors.user.interests = value.length < 1 ? 'Enter your Interests' : '';
    this.setState({ user, errors });
  }

  validateForm = (errors) => {
    let valid = true;
    Object.entries(errors.user).forEach(item => {
      console.log(item)
      item && item[1].length > 0 && (valid = false)
    })
    return valid;
  }

  submitForm = async (event) => {
    this.setState({ submitted: true });
    this.props.dispatch(ActionCreators.formSubmittionStatus(true));
    const user = this.state.user;
    if (user && this.props.profile) {
      user.profileImage = this.props.profile.profileImage;
    }
    event.preventDefault();
    if (this.validateForm(this.state.errors) && this.props.profile 
    && this.props.profile.profileImage
    ) {
      console.info('Valid Form')
      this.props.dispatch(ActionCreators.addProfile(user));
      this.props.history.push('/confirm')
    } else {
      console.log('Invalid Form')
    }
  }

  resetErrorMsg = () => {
    let errors = this.state.errors;
    errors.user.firstName = ''
    errors.user.telephone = ''
    errors.user.Date = ''
    errors.user.idCard = ''
    errors.user.BackCard = ''
    errors.user.email = ''
    errors.user.address1 = ''
//     errors.user.interests = ''
    this.setState({ errors });
  }

  render() {
    const { firstName, lastName, idCard, BackCard, Date, email, telephone, state, country, address, address1,  subscribenewsletter } = this.state.user;
    const { submitted } = this.state;
    const listState = stateList.listStates.map((item, key) =>
      <option key={key} value={item.name}>{item.name}</option>
    );
    return (
      <div className="rightPanel">
        <div className="row">
        <input  className="input-line mb-4" type="text"   value={firstName} name="firstName" onChange={(e) => { this.inputChange(e)} }  placeholder="ชื่อ(ภาษาไทย)" />
            { submitted && this.state.errors.user.firstName.length > 0 &&  <span className='error'>{this.state.errors.user.firstName}</span>}
        </div>
        <div className="row">
        <input type="text" className="input-line mb-4" value={lastName} name="lastName" onChange={(e) => { this.inputChange(e)} }  placeholder="นามสกุล(ภาษาไทย)" />
            { submitted && this.state.errors.user.lastName.length > 0 &&  <span className='error'>{this.state.errors.user.lastName}</span>}
        </div>

        <div className="row">
        <input type="date" className="input-line mb-4" value={Date} onChange={(e) => { this.inputChange(e)} }  id="start" name="Date" />
                    { submitted && this.state.errors.user.Date.length > 0 &&  <span className='error'>{this.state.errors.user.Date}</span>}
        </div>

        <div className="row">
        <input type="text" className="input-line mb-4" pattern="[0-9]" maxLength="18" value={idCard} name="idCard" onChange={(e) => { this.inputChangeIDcard(e)} }  id="idCard" placeholder="เลขที่บัตรประชาชน" />
            { submitted && this.state.errors.user.idCard.length > 0 &&  <span className='error'>{this.state.errors.user.idCard}</span>}
        </div>

        <div className="row">
          <div>
           <input type="text" pattern="[A-Z][0-9]" className="input-line mb-4" maxLength="14" value={BackCard} name="BackCard" onChange={(e) => { this.inputChangeBackCard(e)} }  id="BackCard" placeholder="เลข Laser หลังประชาชน" />
            { submitted && this.state.errors.user.BackCard.length > 0 &&  <span className='error'>{this.state.errors.user.BackCard}</span>}         
          </div>
          <FiAlertCircle style={{color: 'white', fontSize: '21px', }}/>
        </div>
          
        <div className="row">
        <input type="text" className="input-line mb-4" pattern="[0-9]" maxLength="14" value={telephone} name="telephone" onChange={(e) => { this.inputChange(e)} }  id="telephone" placeholder="เบอร์โทรศัพท์" />
            { submitted && this.state.errors.user.telephone.length > 0 &&  <span className='error'>{this.state.errors.user.telephone}</span>}
        </div>

        
        <div className="row">
          <select className="input-line mb-4" value={state} name="state" id="inlineFormCustomSelect" onChange={this.inputChange}>
              {listState}
            </select>
        </div>
        <div className="row">
        <select className="input-line mb-4" value={country} name="country" id="inlineFormCustomSelect" onChange={this.inputChange}>
              <option value="TH">ประเทศไทย</option>
              <option value="PDR">ประเทศลาว</option>
            </select>

        </div>
        <div className="row">
            <select className="input-line mb-4" value={address} id="inlineFormCustomSelect" onChange={this.onChangeAddress}>
              <option value="บ้าน">บ้าน</option>
              <option value="ห้องเช่า">ห้องเช่า</option>
            </select>
            <textarea className="input-line mb-4" name="address1" rows="3" placeholder="กรุณากรอกที่อยู่" value={address1} onChange={this.inputChange}></textarea>
                { submitted && this.state.errors.user.address1.length > 0 &&  <span className='error'>{this.state.errors.user.address1}</span>}

          <div className="col-sm-4">
          </div>
        </div>
        {/* <div className="row">
          <label htmlFor="staticEmail1" className="col-sm-2 col-form-label">Interests</label>
          <div className="col-sm-6 mb-2">
            <MultiSelect className="form-control" searchPlaceholder="Interests" selected={interests} onSelect={this.onSelectedInterest} />
            { submitted && this.state.errors.user.interests.length > 0 &&  <span className='error'>{this.state.errors.user.interests}</span>}
          </div>
          <div className="col-sm-4">
          </div>
        </div> */}
        <div className="row">
        <input type="email" className="input-line mb-4" value={email} name="email" onChange={(e) => { this.inputChange(e)} }  id="email" placeholder="กรุณากรอกอีเมล" />
            { submitted && this.state.errors.user.email.length > 0 &&  <span className='error'>{this.state.errors.user.email}</span>}
        
        </div>
        
        {/* <div className="row">
          
          <div className="col-sm-6 mb-2">
            <label htmlFor="subscribenewsletter"><input type="checkbox" checked={subscribenewsletter} name="subscribenewsletter" onChange={this.checkboxChange} id="subscribenewsletter" style={{margin: '10px'}} />Subscribe to the news letter</label>
          </div>
          <div className="col-sm-4">
          </div>
        </div> */}
        <label>กรุณากรอกรหัสอัพโหลดรูปบัตรประชาชน เพื่อยืนยันตัวต</label>
          <div>
          <label htmlFor="staticEmail1" className="col-sm-2 col-form-label"></label>
          <img src={Nextimg} alt="Nextimg" />
          <ProfileImage/>
          </div>
          <div>
          <label htmlFor="subscribenewsletter">
          <input type="checkbox" checked={subscribenewsletter} name="subscribenewsletter" onChange={this.checkboxChange} id="subscribenewsletter" style={{margin: '10px'}} />agree to our Terms and Conditions</label>
          { submitted && this.state.errors.user.subscribenewsletter === false &&  <span className='error'>{this.state.errors.user.subscribenewsletter}</span>}
          </div>
          

      
          <button type="button" className="button-next" onClick={this.submitForm}>Submit</button>
      

       
          
      </div>
      

    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile
  }
}

export default connect(mapStateToProps)(withRouter(RightContent));

