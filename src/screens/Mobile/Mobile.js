import React, { Component } from 'react';
import './style.css';
import { withRouter,Link} from "react-router-dom";
import { connect } from 'react-redux';
import Slideshow from './Slideshow'
import brandList from './mock/brands.json';
import romList from './mock/rom.json';
import { MultiSelect } from '../../components';

export class Mobile extends Component {
          constructor(props) {
                    super(props);
                    this.state = {
                      user: {
                        brand: '',
                        rom:'',
                        condition:'',
                        accessory:'',
                        interests:'',
                      }
                    }
                  }
                  onChangeBrand = (event) => {
                    const user = this.state.user;
                    user['brand'] = event.target.value;
                    this.setState({ user });
                  }
                  onChangeRom = (event) => {
                    const user = this.state.user;
                    user['rom'] = event.target.value;
                    this.setState({ user });
                  }
                  onChangeCondition = (event) => {
                    const user = this.state.user;
                    user['condition'] = event.target.value;
                    this.setState({ user });
                  }
                  onChangeAccessory = (event) => {
                    const user = this.state.user;
                    user['accessory'] = event.target.value;
                    this.setState({ user });
                  }
                  onSelectedInterest = (value) => {
                    const user = this.state.user;
                    const errors = this.state.errors;
                    user['interests'] = value;
                //     errors.user.interests = value.length < 1 ? 'Enter your Interests' : '';
                    this.setState({ user, errors });
                  }
  render() {
      const { brand, rom, condition, accessory,interests } = this.state.user;
      const listBrand = brandList.listBrands.map((item, key) =>
      <option key={key} value={item.name}>{item.name}</option>
      );
      const listRom = romList.listRoms.map((item, key) =>
      <option key={key} value={item.name}>{item.name}</option>
      );
    return (
      
      <div>
          <div className='mt-4'>
                              <Slideshow/>
          </div>                   

          
          <div>
          <div className="row">
                              <select className='inputbox mt-5' value={brand} name="brand" id="inlineFormCustomSelect" onChange={this.onChangeBrand}>
                              {listBrand}
                              </select>
          </div> 
          <div className="row">
                              <select className='inputbox mt-3' value={rom} name="rom" id="inlineFormCustomSelect" onChange={this.onChangeRom}>
                              {listRom}
                              </select>
          </div> 
          <div className="row">
                              <select className='inputbox mt-3' value={condition} name="condition" id="inlineFormCustomSelect" onChange={this.onChangeCondition}>
                              <option value="100">100 %</option>
                              <option value="95">95 %</option>
                              <option value="90">90 %</option>
                              <option value="85">85 %</option>
                              <option value="80">80 %</option>
                              <option value="75">75 %</option>
                              <option value="70">70 %</option>
                              <option value="70-">ต่ำกว่า 70 %</option>
                              </select>
          </div>
          <div className="row">
                              <MultiSelect className="inputbox mt-3" searchPlaceholder="อุปกรณ์เสริม" selected={interests} onSelect={this.onSelectedInterest} />
          </div>
          <div className="col-sm-4">
          </div>
          <div className="row">
          <Link to = "/uploadphoto"><button type="button" className="button-1 mt-4" >Next</button></Link>
          </div>
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
        
export default connect(mapStateToProps)(withRouter(Mobile));

