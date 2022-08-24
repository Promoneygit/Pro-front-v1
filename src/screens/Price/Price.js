import React, { Component, useState } from 'react';
import './style.css';
import shopshop from './image/shopshop.png'
import Slideshow from './Slideshow'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

// import ReactJsAlert from 'reactjs-alert';

export class Price extends Component {
          // opensweetalert()
          // {
          //   Swal.fire({
          //     title: 'Therichpost',
          //     text: "Hello",
          //     type: 'success',
              
          //   })
          // }
          //Button Click Function
          opensweetalertdanger()
          {
            Swal.fire({
              title: 'Comming Soon ...',
              text: "OOPS",
              type: 'warning',
              
              
            })
          }

  render() {
          return (
                    <div>
                              <div >
                              <img className='shop' src={shopshop} alt="shopshop" />
                              </div>
                              <label>You can pick anything want you want.</label>
                              <Slideshow/>
                              <div>
                              <label>Categories</label>
                              </div>
                              
                              <div className='row mb-1 '>
                                        <Link to="/gold"><button className='button-13 ml-4' >GOLD</button></Link><Link to="/mobile"><button className='ml-1 button-13'>MOBILE</button></Link>
                              </div>
                              <div className='row'>
                                        <button onClick={this.opensweetalertdanger} className='button-13  ml-4'> LAPTOP</button><button onClick={this.opensweetalertdanger} className='ml-1 button-13'>NOTEBOOK</button>
                              </div>
                              <div className='row'>
                                        <button onClick={this.opensweetalertdanger} className='mt-1 button-13  ml-4' >CAMERA AND LANS</button>
                              </div>
                              {/* <button onClick={this.opensweetalert}>Open Success Sweetalert Popup</button> */}
                              {/* <button onClick={this.opensweetalertdanger}>Open Danger Sweetalert Popup</button> */}
                              
                    </div>
                  )
                }
  }



export default Price;
