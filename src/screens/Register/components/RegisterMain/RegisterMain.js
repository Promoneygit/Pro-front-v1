import card1 from './image/card1.png';
import {Link} from 'react-router-dom';
import React from 'react'
import './style.css'

function RegisterMain() {
  return (
       <div className='registerMain'>
        <div>
          <div>
                    เลือกวิธีการสมัคร
          </div>
          <ul/>
          <Link to='/otp'>
          <button className="button-1">
          <img src={card1} alt="card1" />สมัครบริการโดยการกรอกข้อมูล
          </button>
          </Link>

          
        </div>
      </div>

     
  )
}

export default RegisterMain