import OTPInput, { ResendOTP } from "otp-input-react";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function Otp() {
          const [OTP, setOTP] = useState("");
          const renderButton = (buttonProps) => {
                    return (
                              <button className="Button" {...buttonProps}>
                                        {buttonProps.remainingTime !== 0 ? `ไม่ได้รับ OTP ขอรหัสใหม่ใน ${buttonProps.remainingTime} วินาที` : "ขอรหัส OTP อีกครั้ง"}
                              </button>
                    );
          };
          const renderTime = () => React.Fragment;
          return (
                              <div className="otp">
                                        <div className="otp-text">กรอกรหัส OTP</div> 
                                        <ul />
                                        <div className="otp-text1">
                                                  รหัส OTP ถูกส่งไปที่
                                        </div>
                                        <div className="otp-text3">
                                                  081-234-**** 
                                                  {/* เบอร์โทรศัพท์ต้องมาร์ค 4 ตัวหลัง */}
                                        </div>
                                        <div className="otp-text2">
                                                  Ref : (GGCL)
                                        </div>
                                        
                                        <ul />
                                        <OTPInput className="mt-2 mb-5" value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} />
                                        <ul />
                                        <ResendOTP renderButton={renderButton} renderTime={renderTime} className = "Button"/>
                                        
                                        <Link to='/register'><button class="button-next" >ดำเนินการต่อ</button></Link>
                                        
                              </div>




          );
}

export default Otp

